import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Activity dependency information.
 */
export interface ActivityDependencyArgs {
    /**
     * Activity name.
     */
    activity: pulumi.Input<string>;
    /**
     * Match-Condition for the dependency.
     */
    dependencyConditions: pulumi.Input<pulumi.Input<string | enums.DependencyCondition>[]>;
}

/**
 * Execution policy for an activity.
 */
export interface ActivityPolicyArgs {
    /**
     * Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    retry?: any;
    /**
     * Interval between each retry attempt (in seconds). The default is 30 sec.
     */
    retryIntervalInSeconds?: pulumi.Input<number>;
    /**
     * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
     */
    secureInput?: pulumi.Input<boolean>;
    /**
     * When set to true, Output from activity is considered as secure and will not be logged to monitoring.
     */
    secureOutput?: pulumi.Input<boolean>;
    /**
     * Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    timeout?: any;
}

/**
 * Amazon Marketplace Web Service linked service.
 */
export interface AmazonMWSLinkedServiceArgs {
    /**
     * The access key id used to access data.
     */
    accessKeyId: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    mwsAuthToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The secret key used to access data.
     */
    secretKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The Amazon seller ID.
     */
    sellerID: any;
    /**
     * Type of linked service.
     * Expected value is 'AmazonMWS'.
     */
    type: pulumi.Input<"AmazonMWS">;
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
    version?: pulumi.Input<string>;
}

/**
 * Amazon Marketplace Web Service dataset.
 */
export interface AmazonMWSObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AmazonMWSObject">;
}

/**
 * A copy activity Amazon Marketplace Web Service source.
 */
export interface AmazonMWSSourceArgs {
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
    type: pulumi.Input<"AmazonMWSSource">;
}

/**
 * AmazonRdsForOracle database. This linked service has supported version property. The Version 1.0 is scheduled for deprecation while your pipeline will continue to run after EOL but without any bug fix or new features.
 */
export interface AmazonRdsForOracleLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Authentication type for connecting to the AmazonRdsForOracle database. Only used for Version 2.0.
     */
    authenticationType?: pulumi.Input<string | enums.AmazonRdsForOracleAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * Specifies whether to use bulk copy or batch insert when loading data into the database, default value is true. Type: boolean. Only used for Version 2.0.
     */
    enableBulkLoad?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The location of AmazonRdsForOracle database you want to connect to, the supported forms include connector descriptor, Easy Connect (Plus) Naming and Oracle Net Services Name (Only self-hosted IR). Type: string. Only used for Version 2.0.
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
     * Expected value is 'AmazonRdsForOracle'.
     */
    type: pulumi.Input<"AmazonRdsForOracle">;
    /**
     * The AmazonRdsForOracle database username. Type: string. Only used for Version 2.0.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The settings that will be leveraged for AmazonRdsForOracle source partitioning.
 */
export interface AmazonRdsForOraclePartitionSettingsArgs {
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
    partitionNames?: pulumi.Input<any[]>;
    /**
     * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionUpperBound?: any;
}

/**
 * A copy activity AmazonRdsForOracle source.
 */
export interface AmazonRdsForOracleSourceArgs {
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
    partitionSettings?: pulumi.Input<AmazonRdsForOraclePartitionSettingsArgs>;
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
    type: pulumi.Input<"AmazonRdsForOracleSource">;
}

/**
 * The AmazonRdsForOracle database dataset.
 */
export interface AmazonRdsForOracleTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AmazonRdsForOracleTable">;
}

/**
 * Amazon RDS for SQL Server linked service.
 */
export interface AmazonRdsForSqlServerLinkedServiceArgs {
    /**
     * Sql always encrypted properties.
     */
    alwaysEncryptedSettings?: pulumi.Input<SqlAlwaysEncryptedPropertiesArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: pulumi.Input<string | enums.AmazonRdsForSqlAuthenticationType>;
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
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The on-premises Windows authentication password.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AmazonRdsForSqlServer">;
    /**
     * The on-premises Windows authentication user name. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Amazon RDS for SQL Server source.
 */
export interface AmazonRdsForSqlServerSourceArgs {
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
    partitionSettings?: pulumi.Input<SqlPartitionSettingsArgs>;
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
    type: pulumi.Input<"AmazonRdsForSqlServerSource">;
}

/**
 * The Amazon RDS for SQL Server dataset.
 */
export interface AmazonRdsForSqlServerTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AmazonRdsForSqlServerTable">;
}

/**
 * Linked service for Amazon Redshift.
 */
export interface AmazonRedshiftLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The database name of the Amazon Redshift source. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password of the Amazon Redshift source.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AmazonRedshift">;
    /**
     * The username of the Amazon Redshift source. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for Amazon Redshift Source.
 */
export interface AmazonRedshiftSourceArgs {
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
    redshiftUnloadSettings?: pulumi.Input<RedshiftUnloadSettingsArgs>;
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
    type: pulumi.Input<"AmazonRedshiftSource">;
}

/**
 * The Amazon Redshift table dataset.
 */
export interface AmazonRedshiftTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AmazonRedshiftTable">;
}

/**
 * Linked service for Amazon S3 Compatible.
 */
export interface AmazonS3CompatibleLinkedServiceArgs {
    /**
     * The access key identifier of the Amazon S3 Compatible Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
     */
    accessKeyId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * If true, use S3 path-style access instead of virtual hosted-style access. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    forcePathStyle?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The secret access key of the Amazon S3 Compatible Identity and Access Management (IAM) user.
     */
    secretAccessKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * This value specifies the endpoint to access with the Amazon S3 Compatible Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
     */
    serviceUrl?: any;
    /**
     * Type of linked service.
     * Expected value is 'AmazonS3Compatible'.
     */
    type: pulumi.Input<"AmazonS3Compatible">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of Amazon S3 Compatible dataset.
 */
export interface AmazonS3CompatibleLocationArgs {
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
    type: pulumi.Input<"AmazonS3CompatibleLocation">;
    /**
     * Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Amazon S3 Compatible read settings.
 */
export interface AmazonS3CompatibleReadSettingsArgs {
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
    type: pulumi.Input<"AmazonS3CompatibleReadSettings">;
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
export interface AmazonS3DatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The name of the Amazon S3 bucket. Type: string (or Expression with resultType string).
     */
    bucketName: any;
    /**
     * The data compression method used for the Amazon S3 object.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * The format of files.
     */
    format?: pulumi.Input<AvroFormatArgs | JsonFormatArgs | OrcFormatArgs | ParquetFormatArgs | TextFormatArgs>;
    /**
     * The key of the Amazon S3 object. Type: string (or Expression with resultType string).
     */
    key?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AmazonS3Object">;
    /**
     * The version for the S3 object. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Linked service for Amazon S3.
 */
export interface AmazonS3LinkedServiceArgs {
    /**
     * The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
     */
    accessKeyId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The secret access key of the Amazon S3 Identity and Access Management (IAM) user.
     */
    secretAccessKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
     */
    serviceUrl?: any;
    /**
     * The session token for the S3 temporary security credential.
     */
    sessionToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'AmazonS3'.
     */
    type: pulumi.Input<"AmazonS3">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of amazon S3 dataset.
 */
export interface AmazonS3LocationArgs {
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
    type: pulumi.Input<"AmazonS3Location">;
    /**
     * Specify the version of amazon S3. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Amazon S3 read settings.
 */
export interface AmazonS3ReadSettingsArgs {
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
    type: pulumi.Input<"AmazonS3ReadSettings">;
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
export interface AppFiguresLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The client key for the AppFigures source.
     */
    clientKey: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password of the AppFigures source.
     */
    password: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'AppFigures'.
     */
    type: pulumi.Input<"AppFigures">;
    /**
     * The username of the Appfigures source. Type: string (or Expression with resultType string).
     */
    userName: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Append value for a Variable of type Array.
 */
export interface AppendVariableActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'AppendVariable'.
     */
    type: pulumi.Input<"AppendVariable">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
    /**
     * Value to be appended. Type: could be a static value matching type of the variable item or Expression with resultType matching type of the variable item
     */
    value?: any;
    /**
     * Name of the variable whose value needs to be appended to.
     */
    variableName?: pulumi.Input<string>;
}

/**
 * Linked service for Asana.
 */
export interface AsanaLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The api token for the Asana source.
     */
    apiToken: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Asana'.
     */
    type: pulumi.Input<"Asana">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Avro dataset.
 */
export interface AvroDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data avroCompressionCodec. Type: string (or Expression with resultType string).
     */
    avroCompressionCodec?: any;
    avroCompressionLevel?: pulumi.Input<number>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the avro storage.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Avro">;
}

/**
 * The data stored in Avro format.
 */
export interface AvroFormatArgs {
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
    type: pulumi.Input<"AvroFormat">;
}

/**
 * A copy activity Avro sink.
 */
export interface AvroSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Avro format settings.
     */
    formatSettings?: pulumi.Input<AvroWriteSettingsArgs>;
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
    storeSettings?: pulumi.Input<AzureBlobFSWriteSettingsArgs | AzureBlobStorageWriteSettingsArgs | AzureDataLakeStoreWriteSettingsArgs | AzureFileStorageWriteSettingsArgs | FileServerWriteSettingsArgs | LakeHouseWriteSettingsArgs | SftpWriteSettingsArgs>;
    /**
     * Copy sink type.
     * Expected value is 'AvroSink'.
     */
    type: pulumi.Input<"AvroSink">;
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
export interface AvroSourceArgs {
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
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Copy source type.
     * Expected value is 'AvroSource'.
     */
    type: pulumi.Input<"AvroSource">;
}

/**
 * Avro write settings.
 */
export interface AvroWriteSettingsArgs {
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
    recordName?: pulumi.Input<string>;
    /**
     * Record namespace in the write result.
     */
    recordNamespace?: pulumi.Input<string>;
    /**
     * The write setting type.
     * Expected value is 'AvroWriteSettings'.
     */
    type: pulumi.Input<"AvroWriteSettings">;
}

/**
 * The express custom setup of installing Azure PowerShell.
 */
export interface AzPowerShellSetupArgs {
    /**
     * The type of custom setup.
     * Expected value is 'AzPowerShellSetup'.
     */
    type: pulumi.Input<"AzPowerShellSetup">;
    /**
     * The required version of Azure PowerShell to install.
     */
    version: pulumi.Input<string>;
}

/**
 * Azure Batch linked service.
 */
export interface AzureBatchLinkedServiceArgs {
    /**
     * The Azure Batch account access key.
     */
    accessKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The Azure Batch account name. Type: string (or Expression with resultType string).
     */
    accountName: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The Azure Batch URI. Type: string (or Expression with resultType string).
     */
    batchUri: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The Azure Storage linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure Batch pool name. Type: string (or Expression with resultType string).
     */
    poolName: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureBatch'.
     */
    type: pulumi.Input<"AzureBatch">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The Azure Blob storage.
 */
export interface AzureBlobDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used for the blob storage.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Azure Blob. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * The path of the Azure Blob storage. Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * The format of the Azure Blob storage.
     */
    format?: pulumi.Input<AvroFormatArgs | JsonFormatArgs | OrcFormatArgs | ParquetFormatArgs | TextFormatArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureBlob">;
}

/**
 * The Azure Data Lake Storage Gen2 storage.
 */
export interface AzureBlobFSDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used for the blob storage.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * The format of the Azure Data Lake Storage Gen2 storage.
     */
    format?: pulumi.Input<AvroFormatArgs | JsonFormatArgs | OrcFormatArgs | ParquetFormatArgs | TextFormatArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureBlobFSFile">;
}

/**
 * Azure Data Lake Storage Gen2 linked service.
 */
export interface AzureBlobFSLinkedServiceArgs {
    /**
     * Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
     */
    accountKey?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * SAS URI of the Azure Data Lake Storage Gen2 service. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    sasUri?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureBlobFS'.
     */
    type: pulumi.Input<"AzureBlobFS">;
    /**
     * Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string).
     */
    url?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of azure blobFS dataset.
 */
export interface AzureBlobFSLocationArgs {
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
    type: pulumi.Input<"AzureBlobFSLocation">;
}

/**
 * Azure blobFS read settings.
 */
export interface AzureBlobFSReadSettingsArgs {
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
    type: pulumi.Input<"AzureBlobFSReadSettings">;
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
export interface AzureBlobFSSinkArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
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
    type: pulumi.Input<"AzureBlobFSSink">;
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
export interface AzureBlobFSSourceArgs {
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
    type: pulumi.Input<"AzureBlobFSSource">;
}

/**
 * Azure blobFS write settings.
 */
export interface AzureBlobFSWriteSettingsArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
    /**
     * The write setting type.
     * Expected value is 'AzureBlobFSWriteSettings'.
     */
    type: pulumi.Input<"AzureBlobFSWriteSettings">;
}

/**
 * The azure blob storage linked service.
 */
export interface AzureBlobStorageLinkedServiceArgs {
    /**
     * The Azure key vault secret reference of accountKey in connection string.
     */
    accountKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string).
     */
    accountKind?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: pulumi.Input<string | enums.AzureStorageAuthenticationType>;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureBlobStorage'.
     */
    type: pulumi.Input<"AzureBlobStorage">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of azure blob dataset.
 */
export interface AzureBlobStorageLocationArgs {
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
    type: pulumi.Input<"AzureBlobStorageLocation">;
}

/**
 * Azure blob read settings.
 */
export interface AzureBlobStorageReadSettingsArgs {
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
    type: pulumi.Input<"AzureBlobStorageReadSettings">;
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
export interface AzureBlobStorageWriteSettingsArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
    /**
     * The write setting type.
     * Expected value is 'AzureBlobStorageWriteSettings'.
     */
    type: pulumi.Input<"AzureBlobStorageWriteSettings">;
}

/**
 * Azure Data Explorer command activity.
 */
export interface AzureDataExplorerCommandActivityArgs {
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
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'AzureDataExplorerCommand'.
     */
    type: pulumi.Input<"AzureDataExplorerCommand">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Azure Data Explorer (Kusto) linked service.
 */
export interface AzureDataExplorerLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Database name for connection. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string)
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Kusto.
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureDataExplorer'.
     */
    type: pulumi.Input<"AzureDataExplorer">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Azure Data Explorer sink.
 */
export interface AzureDataExplorerSinkArgs {
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
    type: pulumi.Input<"AzureDataExplorerSink">;
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
export interface AzureDataExplorerSourceArgs {
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
    type: pulumi.Input<"AzureDataExplorerSource">;
}

/**
 * The Azure Data Explorer (Kusto) dataset.
 */
export interface AzureDataExplorerTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureDataExplorerTable">;
}

/**
 * Azure Data Lake Analytics linked service.
 */
export interface AzureDataLakeAnalyticsLinkedServiceArgs {
    /**
     * The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string).
     */
    accountName: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Azure Data Lake Analytics URI Type: string (or Expression with resultType string).
     */
    dataLakeAnalyticsUri?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AzureDataLakeAnalytics">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Azure Data Lake Store dataset.
 */
export interface AzureDataLakeStoreDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used for the item(s) in the Azure Data Lake Store.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string).
     */
    fileName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * The format of the Data Lake Store.
     */
    format?: pulumi.Input<AvroFormatArgs | JsonFormatArgs | OrcFormatArgs | ParquetFormatArgs | TextFormatArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureDataLakeStoreFile">;
}

/**
 * Azure Data Lake Store linked service.
 */
export interface AzureDataLakeStoreLinkedServiceArgs {
    /**
     * Data Lake Store account name. Type: string (or Expression with resultType string).
     */
    accountName?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Data Lake Store service URI. Type: string (or Expression with resultType string).
     */
    dataLakeStoreUri: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AzureDataLakeStore">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of azure data lake store dataset.
 */
export interface AzureDataLakeStoreLocationArgs {
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
    type: pulumi.Input<"AzureDataLakeStoreLocation">;
}

/**
 * Azure data lake store read settings.
 */
export interface AzureDataLakeStoreReadSettingsArgs {
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
    type: pulumi.Input<"AzureDataLakeStoreReadSettings">;
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
export interface AzureDataLakeStoreSinkArgs {
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
    type: pulumi.Input<"AzureDataLakeStoreSink">;
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
export interface AzureDataLakeStoreSourceArgs {
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
    type: pulumi.Input<"AzureDataLakeStoreSource">;
}

/**
 * Azure data lake store write settings.
 */
export interface AzureDataLakeStoreWriteSettingsArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
    /**
     * The write setting type.
     * Expected value is 'AzureDataLakeStoreWriteSettings'.
     */
    type: pulumi.Input<"AzureDataLakeStoreWriteSettings">;
}

/**
 * Azure Databricks Delta Lake dataset.
 */
export interface AzureDatabricksDeltaLakeDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The database name of delta table. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureDatabricksDeltaLakeDataset">;
}

/**
 * Azure Databricks Delta Lake export command settings.
 */
export interface AzureDatabricksDeltaLakeExportCommandArgs {
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
    type: pulumi.Input<"AzureDatabricksDeltaLakeExportCommand">;
}

/**
 * Azure Databricks Delta Lake import command settings.
 */
export interface AzureDatabricksDeltaLakeImportCommandArgs {
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
    type: pulumi.Input<"AzureDatabricksDeltaLakeImportCommand">;
}

/**
 * Azure Databricks Delta Lake linked service.
 */
export interface AzureDatabricksDeltaLakeLinkedServiceArgs {
    /**
     * Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    accessToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string).
     */
    clusterId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
     */
    domain: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'AzureDatabricksDeltaLake'.
     */
    type: pulumi.Input<"AzureDatabricksDeltaLake">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
    /**
     * Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
     */
    workspaceResourceId?: any;
}

/**
 * A copy activity Azure Databricks Delta Lake sink.
 */
export interface AzureDatabricksDeltaLakeSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Azure Databricks Delta Lake import settings.
     */
    importSettings?: pulumi.Input<AzureDatabricksDeltaLakeImportCommandArgs>;
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
    type: pulumi.Input<"AzureDatabricksDeltaLakeSink">;
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
export interface AzureDatabricksDeltaLakeSourceArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Azure Databricks Delta Lake export settings.
     */
    exportSettings?: pulumi.Input<AzureDatabricksDeltaLakeExportCommandArgs>;
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
    type: pulumi.Input<"AzureDatabricksDeltaLakeSource">;
}

/**
 * Azure Databricks linked service.
 */
export interface AzureDatabricksLinkedServiceArgs {
    /**
     * Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string).
     */
    accessToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The data security mode for the Databricks Cluster. Type: string (or Expression with resultType string).
     */
    dataSecurityMode?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string).
     */
    domain: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    newClusterCustomTags?: pulumi.Input<{[key: string]: any}>;
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
    newClusterSparkConf?: pulumi.Input<{[key: string]: any}>;
    /**
     * A set of optional, user-specified Spark environment variables key-value pairs.
     */
    newClusterSparkEnvVars?: pulumi.Input<{[key: string]: any}>;
    /**
     * If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string).
     */
    newClusterVersion?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string).
     */
    policyId?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureDatabricks'.
     */
    type: pulumi.Input<"AzureDatabricks">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
    /**
     * Workspace resource id for databricks REST API. Type: string (or Expression with resultType string).
     */
    workspaceResourceId?: any;
}

/**
 * Azure File Storage linked service.
 */
export interface AzureFileStorageLinkedServiceArgs {
    /**
     * The Azure key vault secret reference of accountKey in connection string.
     */
    accountKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to logon the server.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    type: pulumi.Input<"AzureFileStorage">;
    /**
     * User ID to logon the server. Type: string (or Expression with resultType string).
     */
    userId?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of file server dataset.
 */
export interface AzureFileStorageLocationArgs {
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
    type: pulumi.Input<"AzureFileStorageLocation">;
}

/**
 * Azure File Storage read settings.
 */
export interface AzureFileStorageReadSettingsArgs {
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
    type: pulumi.Input<"AzureFileStorageReadSettings">;
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
export interface AzureFileStorageWriteSettingsArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
    /**
     * The write setting type.
     * Expected value is 'AzureFileStorageWriteSettings'.
     */
    type: pulumi.Input<"AzureFileStorageWriteSettings">;
}

/**
 * Azure Function activity.
 */
export interface AzureFunctionActivityArgs {
    /**
     * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
     */
    body?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string)
     */
    functionName: any;
    /**
     * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
     */
    headers?: pulumi.Input<{[key: string]: any}>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Rest API method for target endpoint.
     */
    method: pulumi.Input<string | enums.AzureFunctionActivityMethod>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'AzureFunctionActivity'.
     */
    type: pulumi.Input<"AzureFunctionActivity">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Azure Function linked service.
 */
export interface AzureFunctionLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Type of authentication (Required to specify MSI) used to connect to AzureFunction. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net. Type: string (or Expression with resultType string).
     */
    functionAppUrl: any;
    /**
     * Function or Host key for Azure Function App.
     */
    functionKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Allowed token audiences for azure function. Type: string (or Expression with resultType string).
     */
    resourceId?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureFunction'.
     */
    type: pulumi.Input<"AzureFunction">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Azure Key Vault linked service.
 */
export interface AzureKeyVaultLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string).
     */
    baseUrl: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'AzureKeyVault'.
     */
    type: pulumi.Input<"AzureKeyVault">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Azure Key Vault secret reference.
 */
export interface AzureKeyVaultSecretReferenceArgs {
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
    store: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Type of the secret.
     * Expected value is 'AzureKeyVaultSecret'.
     */
    type: pulumi.Input<"AzureKeyVaultSecret">;
}

/**
 * Azure ML Batch Execution activity.
 */
export interface AzureMLBatchExecutionActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request.
     */
    globalParameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'AzureMLBatchExecution'.
     */
    type: pulumi.Input<"AzureMLBatchExecution">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
    /**
     * Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request.
     */
    webServiceInputs?: pulumi.Input<{[key: string]: pulumi.Input<AzureMLWebServiceFileArgs>}>;
    /**
     * Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request.
     */
    webServiceOutputs?: pulumi.Input<{[key: string]: pulumi.Input<AzureMLWebServiceFileArgs>}>;
}

/**
 * Azure ML Execute Pipeline activity.
 */
export interface AzureMLExecutePipelineActivityArgs {
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
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string).
     */
    experimentName?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
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
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'AzureMLExecutePipeline'.
     */
    type: pulumi.Input<"AzureMLExecutePipeline">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
    /**
     * Version of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Azure ML Studio Web Service linked service.
 */
export interface AzureMLLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The API key for accessing the Azure ML model endpoint.
     */
    apiKey: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
     */
    mlEndpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service.
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureML'.
     */
    type: pulumi.Input<"AzureML">;
    /**
     * The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string).
     */
    updateResourceEndpoint?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Azure ML Service linked service.
 */
export interface AzureMLServiceLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Azure ML Service workspace name. Type: string (or Expression with resultType string).
     */
    mlWorkspaceName: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AzureMLService">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Azure ML Update Resource management activity.
 */
export interface AzureMLUpdateResourceActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string).
     */
    trainedModelFilePath: any;
    /**
     * Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation.
     */
    trainedModelLinkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string).
     */
    trainedModelName: any;
    /**
     * Type of activity.
     * Expected value is 'AzureMLUpdateResource'.
     */
    type: pulumi.Input<"AzureMLUpdateResource">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Azure ML WebService Input/Output file
 */
export interface AzureMLWebServiceFileArgs {
    /**
     * The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string).
     */
    filePath: any;
    /**
     * Reference to an Azure Storage LinkedService, where Azure ML WebService Input/Output file located.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
}

/**
 * Azure Database for MariaDB linked service.
 */
export interface AzureMariaDBLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Type of linked service.
     * Expected value is 'AzureMariaDB'.
     */
    type: pulumi.Input<"AzureMariaDB">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Azure MariaDB source.
 */
export interface AzureMariaDBSourceArgs {
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
    type: pulumi.Input<"AzureMariaDBSource">;
}

/**
 * Azure Database for MariaDB dataset.
 */
export interface AzureMariaDBTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureMariaDBTable">;
}

/**
 * Azure MySQL database linked service.
 */
export interface AzureMySqlLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Type of linked service.
     * Expected value is 'AzureMySql'.
     */
    type: pulumi.Input<"AzureMySql">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Azure MySql sink.
 */
export interface AzureMySqlSinkArgs {
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
    type: pulumi.Input<"AzureMySqlSink">;
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
export interface AzureMySqlSourceArgs {
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
    type: pulumi.Input<"AzureMySqlSource">;
}

/**
 * The Azure MySQL database dataset.
 */
export interface AzureMySqlTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureMySqlTable">;
}

/**
 * Azure PostgreSQL linked service.
 */
export interface AzurePostgreSqlLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
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
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Database name for connection. Type: string.
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the .NET encoding that will be used to encode/decode PostgreSQL string data. Type: string
     */
    encoding?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    servicePrincipalEmbeddedCert?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The ID of the service principal used to authenticate against Azure Database for PostgreSQL Flexible server. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Azure Database for PostgreSQL Flexible server.
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AzurePostgreSql">;
    /**
     * Username for authentication. Type: string.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Azure Database for PostgreSQL sink.
 */
export interface AzurePostgreSqlSinkArgs {
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
    type: pulumi.Input<"AzurePostgreSqlSink">;
    /**
     * Azure Database for PostgreSQL upsert option settings
     */
    upsertSettings?: pulumi.Input<AzurePostgreSqlSinkUpsertSettingsArgs>;
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
    writeMethod?: pulumi.Input<string | enums.AzurePostgreSqlWriteMethodEnum>;
}

/**
 * Azure Database for PostgreSQL upsert option settings
 */
export interface AzurePostgreSqlSinkUpsertSettingsArgs {
    /**
     * Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings).
     */
    keys?: any;
}

/**
 * A copy activity Azure Database for PostgreSQL source.
 */
export interface AzurePostgreSqlSourceArgs {
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
    type: pulumi.Input<"AzurePostgreSqlSource">;
}

/**
 * Azure PostgreSQL dataset.
 */
export interface AzurePostgreSqlTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzurePostgreSqlTable">;
}

/**
 * A copy activity Azure Queue sink.
 */
export interface AzureQueueSinkArgs {
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
    type: pulumi.Input<"AzureQueueSink">;
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
export interface AzureSearchIndexDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * The name of the Azure Search Index. Type: string (or Expression with resultType string).
     */
    indexName: any;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureSearchIndex">;
}

/**
 * A copy activity Azure Search Index sink.
 */
export interface AzureSearchIndexSinkArgs {
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
    type: pulumi.Input<"AzureSearchIndexSink">;
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
    writeBehavior?: pulumi.Input<string | enums.AzureSearchIndexWriteBehaviorType>;
}

/**
 * Linked service for Windows Azure Search Service.
 */
export interface AzureSearchLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Admin Key for Azure Search service
     */
    key?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'AzureSearch'.
     */
    type: pulumi.Input<"AzureSearch">;
    /**
     * URL for Azure Search service. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Azure SQL Data Warehouse linked service.
 */
export interface AzureSqlDWLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: pulumi.Input<string | enums.AzureSqlDWAuthenticationType>;
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
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AzureSqlDW">;
    /**
     * The user name to be used when connecting to server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The Azure SQL Data Warehouse dataset.
 */
export interface AzureSqlDWTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureSqlDWTable">;
}

/**
 * Microsoft Azure SQL Database linked service.
 */
export interface AzureSqlDatabaseLinkedServiceArgs {
    /**
     * Sql always encrypted properties.
     */
    alwaysEncryptedSettings?: pulumi.Input<SqlAlwaysEncryptedPropertiesArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: pulumi.Input<string | enums.AzureSqlDatabaseAuthenticationType>;
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
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AzureSqlDatabase">;
    /**
     * The user name to be used when connecting to server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Azure SQL Managed Instance linked service.
 */
export interface AzureSqlMILinkedServiceArgs {
    /**
     * Sql always encrypted properties.
     */
    alwaysEncryptedSettings?: pulumi.Input<SqlAlwaysEncryptedPropertiesArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: pulumi.Input<string | enums.AzureSqlMIAuthenticationType>;
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
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"AzureSqlMI">;
    /**
     * The user name to be used when connecting to server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The Azure SQL Managed Instance dataset.
 */
export interface AzureSqlMITableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureSqlMITable">;
}

/**
 * A copy activity Azure SQL sink.
 */
export interface AzureSqlSinkArgs {
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
    type: pulumi.Input<"AzureSqlSink">;
    /**
     * SQL upsert settings.
     */
    upsertSettings?: pulumi.Input<SqlUpsertSettingsArgs>;
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
export interface AzureSqlSourceArgs {
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
    partitionSettings?: pulumi.Input<SqlPartitionSettingsArgs>;
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
    type: pulumi.Input<"AzureSqlSource">;
}

/**
 * The Azure SQL Server database dataset.
 */
export interface AzureSqlTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureSqlTable">;
}

/**
 * The storage account linked service.
 */
export interface AzureStorageLinkedServiceArgs {
    /**
     * The Azure key vault secret reference of accountKey in connection string.
     */
    accountKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    sasUri?: any;
    /**
     * Type of linked service.
     * Expected value is 'AzureStorage'.
     */
    type: pulumi.Input<"AzureStorage">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Azure Synapse Analytics (Artifacts) linked service.
 */
export interface AzureSynapseArtifactsLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Required to specify MSI, if using system assigned managed identity as authentication method. Type: string (or Expression with resultType string).
     */
    authentication?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * https://<workspacename>.dev.azuresynapse.net, Azure Synapse Analytics workspace URL. Type: string (or Expression with resultType string).
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'AzureSynapseArtifacts'.
     */
    type: pulumi.Input<"AzureSynapseArtifacts">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
    /**
     * The resource ID of the Synapse workspace. The format should be: /subscriptions/{subscriptionID}/resourceGroups/{resourceGroup}/providers/Microsoft.Synapse/workspaces/{workspaceName}. Type: string (or Expression with resultType string).
     */
    workspaceResourceId?: any;
}

/**
 * The Azure Table storage dataset.
 */
export interface AzureTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"AzureTable">;
}

/**
 * A copy activity Azure Table sink.
 */
export interface AzureTableSinkArgs {
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
    type: pulumi.Input<"AzureTableSink">;
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
export interface AzureTableSourceArgs {
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
    type: pulumi.Input<"AzureTableSource">;
}

/**
 * The azure table storage linked service.
 */
export interface AzureTableStorageLinkedServiceArgs {
    /**
     * The Azure key vault secret reference of accountKey in connection string.
     */
    accountKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of sasToken in sas uri.
     */
    sasToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    type: pulumi.Input<"AzureTableStorage">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Big data pool reference type.
 */
export interface BigDataPoolParametrizationReferenceArgs {
    /**
     * Reference big data pool name. Type: string (or Expression with resultType string).
     */
    referenceName: any;
    /**
     * Big data pool reference type.
     */
    type: pulumi.Input<string | enums.BigDataPoolReferenceType>;
}

/**
 * Binary dataset.
 */
export interface BinaryDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used for the binary dataset.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the Binary storage.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Binary">;
}

/**
 * Binary read settings.
 */
export interface BinaryReadSettingsArgs {
    /**
     * Compression settings.
     */
    compressionProperties?: pulumi.Input<TarGZipReadSettingsArgs | TarReadSettingsArgs | ZipDeflateReadSettingsArgs>;
    /**
     * The read setting type.
     * Expected value is 'BinaryReadSettings'.
     */
    type: pulumi.Input<"BinaryReadSettings">;
}

/**
 * A copy activity Binary sink.
 */
export interface BinarySinkArgs {
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
    storeSettings?: pulumi.Input<AzureBlobFSWriteSettingsArgs | AzureBlobStorageWriteSettingsArgs | AzureDataLakeStoreWriteSettingsArgs | AzureFileStorageWriteSettingsArgs | FileServerWriteSettingsArgs | LakeHouseWriteSettingsArgs | SftpWriteSettingsArgs>;
    /**
     * Copy sink type.
     * Expected value is 'BinarySink'.
     */
    type: pulumi.Input<"BinarySink">;
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
export interface BinarySourceArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Binary format settings.
     */
    formatSettings?: pulumi.Input<BinaryReadSettingsArgs>;
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
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Copy source type.
     * Expected value is 'BinarySource'.
     */
    type: pulumi.Input<"BinarySource">;
}

/**
 * Trigger that runs every time a Blob event occurs.
 */
export interface BlobEventsTriggerArgs {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
     */
    blobPathBeginsWith?: pulumi.Input<string>;
    /**
     * The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
     */
    blobPathEndsWith?: pulumi.Input<string>;
    /**
     * Trigger description.
     */
    description?: pulumi.Input<string>;
    /**
     * The type of events that cause this trigger to fire.
     */
    events: pulumi.Input<pulumi.Input<string | enums.BlobEventTypes>[]>;
    /**
     * If set to true, blobs with zero bytes will be ignored.
     */
    ignoreEmptyBlobs?: pulumi.Input<boolean>;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: pulumi.Input<pulumi.Input<TriggerPipelineReferenceArgs>[]>;
    /**
     * The ARM resource ID of the Storage Account.
     */
    scope: pulumi.Input<string>;
    /**
     * Trigger type.
     * Expected value is 'BlobEventsTrigger'.
     */
    type: pulumi.Input<"BlobEventsTrigger">;
}

/**
 * A copy activity Azure Blob sink.
 */
export interface BlobSinkArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
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
    type: pulumi.Input<"BlobSink">;
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
export interface BlobSourceArgs {
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
    type: pulumi.Input<"BlobSource">;
}

/**
 * Trigger that runs every time the selected Blob container changes.
 */
export interface BlobTriggerArgs {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Trigger description.
     */
    description?: pulumi.Input<string>;
    /**
     * The path of the container/folder that will trigger the pipeline.
     */
    folderPath: pulumi.Input<string>;
    /**
     * The Azure Storage linked service reference.
     */
    linkedService: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The max number of parallel files to handle when it is triggered.
     */
    maxConcurrency: pulumi.Input<number>;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: pulumi.Input<pulumi.Input<TriggerPipelineReferenceArgs>[]>;
    /**
     * Trigger type.
     * Expected value is 'BlobTrigger'.
     */
    type: pulumi.Input<"BlobTrigger">;
}

/**
 * Managed Identity used for CMK.
 */
export interface CMKIdentityDefinitionArgs {
    /**
     * The resource id of the user assigned identity to authenticate to customer's key vault.
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * Linked service for Cassandra data source.
 */
export interface CassandraLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * AuthenticationType to be used for connection. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Host name for connection. Type: string (or Expression with resultType string).
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The port for the connection. Type: integer (or Expression with resultType integer).
     */
    port?: any;
    /**
     * Type of linked service.
     * Expected value is 'Cassandra'.
     */
    type: pulumi.Input<"Cassandra">;
    /**
     * Username for authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for a Cassandra database.
 */
export interface CassandraSourceArgs {
    /**
     * Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects).
     */
    additionalColumns?: any;
    /**
     * The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive.
     */
    consistencyLevel?: pulumi.Input<string | enums.CassandraSourceReadConsistencyLevels>;
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
    type: pulumi.Input<"CassandraSource">;
}

/**
 * The Cassandra database dataset.
 */
export interface CassandraTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * The keyspace of the Cassandra database. Type: string (or Expression with resultType string).
     */
    keyspace?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"CassandraTable">;
}

/**
 * Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs.
 */
export interface ChainingTriggerArgs {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Upstream Pipelines.
     */
    dependsOn: pulumi.Input<pulumi.Input<PipelineReferenceArgs>[]>;
    /**
     * Trigger description.
     */
    description?: pulumi.Input<string>;
    /**
     * Pipeline for which runs are created when all upstream pipelines complete successfully.
     */
    pipeline: pulumi.Input<TriggerPipelineReferenceArgs>;
    /**
     * Run Dimension property that needs to be emitted by upstream pipelines.
     */
    runDimension: pulumi.Input<string>;
    /**
     * Trigger type.
     * Expected value is 'ChainingTrigger'.
     */
    type: pulumi.Input<"ChainingTrigger">;
}

/**
 * The folder that this CDC is in. If not specified, CDC will appear at the root level.
 */
export interface ChangeDataCaptureFolderArgs {
    /**
     * The name of the folder that this CDC is in.
     */
    name?: pulumi.Input<string>;
}

/**
 * The custom setup of running cmdkey commands.
 */
export interface CmdkeySetupArgs {
    /**
     * The password of data source access.
     */
    password: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The server name of data source access. Type: string.
     */
    targetName: any;
    /**
     * The type of custom setup.
     * Expected value is 'CmdkeySetup'.
     */
    type: pulumi.Input<"CmdkeySetup">;
    /**
     * The user name of data source access. Type: string.
     */
    userName: any;
}

/**
 * The Common Data Service for Apps entity dataset.
 */
export interface CommonDataServiceForAppsEntityDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The logical name of the entity. Type: string (or Expression with resultType string).
     */
    entityName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"CommonDataServiceForAppsEntity">;
}

/**
 * Common Data Service for Apps linked service.
 */
export interface CommonDataServiceForAppsLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
     */
    authenticationType: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string).
     */
    deploymentType: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
     */
    domain?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to access the Common Data Service for Apps instance.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"CommonDataServiceForApps">;
    /**
     * User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Common Data Service for Apps sink.
 */
export interface CommonDataServiceForAppsSinkArgs {
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
    type: pulumi.Input<"CommonDataServiceForAppsSink">;
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
    writeBehavior: pulumi.Input<string | enums.DynamicsSinkWriteBehavior>;
}

/**
 * A copy activity Common Data Service for Apps source.
 */
export interface CommonDataServiceForAppsSourceArgs {
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
    type: pulumi.Input<"CommonDataServiceForAppsSource">;
}

/**
 * The custom setup of installing 3rd party components.
 */
export interface ComponentSetupArgs {
    /**
     * The name of the 3rd party component.
     */
    componentName: pulumi.Input<string>;
    /**
     * The license key to activate the component.
     */
    licenseKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The type of custom setup.
     * Expected value is 'ComponentSetup'.
     */
    type: pulumi.Input<"ComponentSetup">;
}

/**
 * Concur Service linked service.
 */
export interface ConcurLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Application client_id supplied by Concur App Management.
     */
    clientId: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name that you provided in the username field.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Concur'.
     */
    type: pulumi.Input<"Concur">;
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
    version?: pulumi.Input<string>;
}

/**
 * Concur Service dataset.
 */
export interface ConcurObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"ConcurObject">;
}

/**
 * A copy activity Concur Service source.
 */
export interface ConcurSourceArgs {
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
    type: pulumi.Input<"ConcurSource">;
}

/**
 * Continuation settings for execute data flow activity.
 */
export interface ContinuationSettingsReferenceArgs {
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
export interface ControlActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Container'.
     */
    type: pulumi.Input<"Container">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Copy activity.
 */
export interface CopyActivityArgs {
    /**
     * Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    dataIntegrationUnits?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
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
    inputs?: pulumi.Input<pulumi.Input<DatasetReferenceArgs>[]>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Log settings customer needs provide when enabling log.
     */
    logSettings?: pulumi.Input<LogSettingsArgs>;
    /**
     * (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log.
     */
    logStorageSettings?: pulumi.Input<LogStorageSettingsArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * List of outputs for the activity.
     */
    outputs?: pulumi.Input<pulumi.Input<DatasetReferenceArgs>[]>;
    /**
     * Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    parallelCopies?: any;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Preserve rules.
     */
    preserve?: pulumi.Input<any[]>;
    /**
     * Preserve Rules.
     */
    preserveRules?: pulumi.Input<any[]>;
    /**
     * Redirect incompatible row settings when EnableSkipIncompatibleRow is true.
     */
    redirectIncompatibleRowSettings?: pulumi.Input<RedirectIncompatibleRowSettingsArgs>;
    /**
     * Copy activity sink.
     */
    sink: pulumi.Input<AvroSinkArgs | AzureBlobFSSinkArgs | AzureDataExplorerSinkArgs | AzureDataLakeStoreSinkArgs | AzureDatabricksDeltaLakeSinkArgs | AzureMySqlSinkArgs | AzurePostgreSqlSinkArgs | AzureQueueSinkArgs | AzureSearchIndexSinkArgs | AzureSqlSinkArgs | AzureTableSinkArgs | BinarySinkArgs | BlobSinkArgs | CommonDataServiceForAppsSinkArgs | CosmosDbMongoDbApiSinkArgs | CosmosDbSqlApiSinkArgs | DelimitedTextSinkArgs | DocumentDbCollectionSinkArgs | DynamicsCrmSinkArgs | DynamicsSinkArgs | FileSystemSinkArgs | IcebergSinkArgs | InformixSinkArgs | JsonSinkArgs | LakeHouseTableSinkArgs | MicrosoftAccessSinkArgs | MongoDbAtlasSinkArgs | MongoDbV2SinkArgs | OdbcSinkArgs | OracleSinkArgs | OrcSinkArgs | ParquetSinkArgs | RestSinkArgs | SalesforceServiceCloudSinkArgs | SalesforceServiceCloudV2SinkArgs | SalesforceSinkArgs | SalesforceV2SinkArgs | SapCloudForCustomerSinkArgs | SnowflakeSinkArgs | SnowflakeV2SinkArgs | SqlDWSinkArgs | SqlMISinkArgs | SqlServerSinkArgs | SqlSinkArgs | TeradataSinkArgs | WarehouseSinkArgs>;
    /**
     * Specify the fault tolerance for data consistency.
     */
    skipErrorFile?: pulumi.Input<SkipErrorFileArgs>;
    /**
     * Copy activity source.
     */
    source: pulumi.Input<AmazonMWSSourceArgs | AmazonRdsForOracleSourceArgs | AmazonRdsForSqlServerSourceArgs | AmazonRedshiftSourceArgs | AvroSourceArgs | AzureBlobFSSourceArgs | AzureDataExplorerSourceArgs | AzureDataLakeStoreSourceArgs | AzureDatabricksDeltaLakeSourceArgs | AzureMariaDBSourceArgs | AzureMySqlSourceArgs | AzurePostgreSqlSourceArgs | AzureSqlSourceArgs | AzureTableSourceArgs | BinarySourceArgs | BlobSourceArgs | CassandraSourceArgs | CommonDataServiceForAppsSourceArgs | ConcurSourceArgs | CosmosDbMongoDbApiSourceArgs | CosmosDbSqlApiSourceArgs | CouchbaseSourceArgs | Db2SourceArgs | DelimitedTextSourceArgs | DocumentDbCollectionSourceArgs | DrillSourceArgs | DynamicsAXSourceArgs | DynamicsCrmSourceArgs | DynamicsSourceArgs | EloquaSourceArgs | ExcelSourceArgs | FileSystemSourceArgs | GoogleAdWordsSourceArgs | GoogleBigQuerySourceArgs | GoogleBigQueryV2SourceArgs | GreenplumSourceArgs | HBaseSourceArgs | HdfsSourceArgs | HiveSourceArgs | HttpSourceArgs | HubspotSourceArgs | ImpalaSourceArgs | InformixSourceArgs | JiraSourceArgs | JsonSourceArgs | LakeHouseTableSourceArgs | MagentoSourceArgs | MariaDBSourceArgs | MarketoSourceArgs | MicrosoftAccessSourceArgs | MongoDbAtlasSourceArgs | MongoDbSourceArgs | MongoDbV2SourceArgs | MySqlSourceArgs | NetezzaSourceArgs | ODataSourceArgs | OdbcSourceArgs | Office365SourceArgs | OracleServiceCloudSourceArgs | OracleSourceArgs | OrcSourceArgs | ParquetSourceArgs | PaypalSourceArgs | PhoenixSourceArgs | PostgreSqlSourceArgs | PostgreSqlV2SourceArgs | PrestoSourceArgs | QuickBooksSourceArgs | RelationalSourceArgs | ResponsysSourceArgs | RestSourceArgs | SalesforceMarketingCloudSourceArgs | SalesforceServiceCloudSourceArgs | SalesforceServiceCloudV2SourceArgs | SalesforceSourceArgs | SalesforceV2SourceArgs | SapBwSourceArgs | SapCloudForCustomerSourceArgs | SapEccSourceArgs | SapHanaSourceArgs | SapOdpSourceArgs | SapOpenHubSourceArgs | SapTableSourceArgs | ServiceNowSourceArgs | ServiceNowV2SourceArgs | SharePointOnlineListSourceArgs | ShopifySourceArgs | SnowflakeSourceArgs | SnowflakeV2SourceArgs | SparkSourceArgs | SqlDWSourceArgs | SqlMISourceArgs | SqlServerSourceArgs | SqlSourceArgs | SquareSourceArgs | SybaseSourceArgs | TabularSourceArgs | TeradataSourceArgs | VerticaSourceArgs | WarehouseSourceArgs | WebSourceArgs | XeroSourceArgs | XmlSourceArgs | ZohoSourceArgs>;
    /**
     * Specifies interim staging settings when EnableStaging is true.
     */
    stagingSettings?: pulumi.Input<StagingSettingsArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Copy activity translator. If not specified, tabular translator is used.
     */
    translator?: any;
    /**
     * Type of activity.
     * Expected value is 'Copy'.
     */
    type: pulumi.Input<"Copy">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
    /**
     * Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean).
     */
    validateDataConsistency?: any;
}

/**
 * Settings for copy activity log.
 */
export interface CopyActivityLogSettingsArgs {
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
 * CopyComputeScale properties for managed integration runtime.
 */
export interface CopyComputeScalePropertiesArgs {
    /**
     * DIU number setting reserved for copy activity execution. Supported values are multiples of 4 in range 4-256.
     */
    dataIntegrationUnit?: pulumi.Input<number>;
    /**
     * Time to live (in minutes) setting of integration runtime which will execute copy activity.
     */
    timeToLive?: pulumi.Input<number>;
}

/**
 * Microsoft Azure Cosmos Database (CosmosDB) linked service.
 */
export interface CosmosDbLinkedServiceArgs {
    /**
     * The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string)
     */
    accountEndpoint?: any;
    /**
     * The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference.
     */
    accountKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection mode used to access CosmosDB account. Type: string.
     */
    connectionMode?: pulumi.Input<string | enums.CosmosDbConnectionMode>;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The name of the database. Type: string (or Expression with resultType string)
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"CosmosDb">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The CosmosDB (MongoDB API) database dataset.
 */
export interface CosmosDbMongoDbApiCollectionDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string).
     */
    collection: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"CosmosDbMongoDbApiCollection">;
}

/**
 * Linked service for CosmosDB (MongoDB API) data source.
 */
export interface CosmosDbMongoDbApiLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * Whether the CosmosDB (MongoDB API) server version is higher than 3.2. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    isServerVersionAbove32?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'CosmosDbMongoDbApi'.
     */
    type: pulumi.Input<"CosmosDbMongoDbApi">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity sink for a CosmosDB (MongoDB API) database.
 */
export interface CosmosDbMongoDbApiSinkArgs {
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
    type: pulumi.Input<"CosmosDbMongoDbApiSink">;
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
export interface CosmosDbMongoDbApiSourceArgs {
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
    cursorMethods?: pulumi.Input<MongoDbCursorMethodsPropertiesArgs>;
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
    type: pulumi.Input<"CosmosDbMongoDbApiSource">;
}

/**
 * Microsoft Azure CosmosDB (SQL API) Collection dataset.
 */
export interface CosmosDbSqlApiCollectionDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string).
     */
    collectionName: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"CosmosDbSqlApiCollection">;
}

/**
 * A copy activity Azure CosmosDB (SQL API) Collection sink.
 */
export interface CosmosDbSqlApiSinkArgs {
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
    type: pulumi.Input<"CosmosDbSqlApiSink">;
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
export interface CosmosDbSqlApiSourceArgs {
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
    type: pulumi.Input<"CosmosDbSqlApiSource">;
}

/**
 * Couchbase server linked service.
 */
export interface CouchbaseLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The Azure key vault secret reference of credString in connection string.
     */
    credString?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Couchbase'.
     */
    type: pulumi.Input<"Couchbase">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Couchbase server source.
 */
export interface CouchbaseSourceArgs {
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
    type: pulumi.Input<"CouchbaseSource">;
}

/**
 * Couchbase server dataset.
 */
export interface CouchbaseTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"CouchbaseTable">;
}

/**
 * Credential reference type.
 */
export interface CredentialReferenceArgs {
    /**
     * Reference credential name.
     */
    referenceName: pulumi.Input<string>;
    /**
     * Credential reference type.
     */
    type: pulumi.Input<string | enums.CredentialReferenceType>;
}

/**
 * Custom activity type.
 */
export interface CustomActivityArgs {
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
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined.
     */
    extendedProperties?: pulumi.Input<{[key: string]: any}>;
    /**
     * Folder path for resource files Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Reference objects
     */
    referenceObjects?: pulumi.Input<CustomActivityReferenceObjectArgs>;
    /**
     * Resource linked service reference.
     */
    resourceLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double).
     */
    retentionTimeInDays?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Custom'.
     */
    type: pulumi.Input<"Custom">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Reference objects for custom activity
 */
export interface CustomActivityReferenceObjectArgs {
    /**
     * Dataset references.
     */
    datasets?: pulumi.Input<pulumi.Input<DatasetReferenceArgs>[]>;
    /**
     * Linked service references.
     */
    linkedServices?: pulumi.Input<pulumi.Input<LinkedServiceReferenceArgs>[]>;
}

/**
 * Custom linked service.
 */
export interface CustomDataSourceLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'CustomDataSource'.
     */
    type: pulumi.Input<"CustomDataSource">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The custom dataset.
 */
export interface CustomDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"CustomDataset">;
}

/**
 * Trigger that runs every time a custom event is received.
 */
export interface CustomEventsTriggerArgs {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Trigger description.
     */
    description?: pulumi.Input<string>;
    /**
     * The list of event types that cause this trigger to fire.
     */
    events: pulumi.Input<any[]>;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: pulumi.Input<pulumi.Input<TriggerPipelineReferenceArgs>[]>;
    /**
     * The ARM resource ID of the Azure Event Grid Topic.
     */
    scope: pulumi.Input<string>;
    /**
     * The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.
     */
    subjectBeginsWith?: pulumi.Input<string>;
    /**
     * The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.
     */
    subjectEndsWith?: pulumi.Input<string>;
    /**
     * Trigger type.
     * Expected value is 'CustomEventsTrigger'.
     */
    type: pulumi.Input<"CustomEventsTrigger">;
}

/**
 * Default value.
 */
export interface DWCopyCommandDefaultValueArgs {
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
export interface DWCopyCommandSettingsArgs {
    /**
     * Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" }
     */
    additionalOptions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects).
     */
    defaultValues?: pulumi.Input<pulumi.Input<DWCopyCommandDefaultValueArgs>[]>;
}

/**
 * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
 */
export interface DataFlowFolderArgs {
    /**
     * The name of the folder that this data flow is in.
     */
    name?: pulumi.Input<string>;
}

/**
 * Data flow reference type.
 */
export interface DataFlowReferenceArgs {
    /**
     * Reference data flow parameters from dataset.
     */
    datasetParameters?: any;
    /**
     * Data flow parameters
     */
    parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Reference data flow name.
     */
    referenceName: pulumi.Input<string>;
    /**
     * Data flow reference type.
     */
    type: pulumi.Input<string | enums.DataFlowReferenceType>;
}

/**
 * Transformation for data flow sink.
 */
export interface DataFlowSinkArgs {
    /**
     * Dataset reference.
     */
    dataset?: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Transformation description.
     */
    description?: pulumi.Input<string>;
    /**
     * Flowlet Reference
     */
    flowlet?: pulumi.Input<DataFlowReferenceArgs>;
    /**
     * Linked service reference.
     */
    linkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Transformation name.
     */
    name: pulumi.Input<string>;
    /**
     * Rejected data linked service reference.
     */
    rejectedDataLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Schema linked service reference.
     */
    schemaLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
}

/**
 * Transformation for data flow source.
 */
export interface DataFlowSourceArgs {
    /**
     * Dataset reference.
     */
    dataset?: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Transformation description.
     */
    description?: pulumi.Input<string>;
    /**
     * Flowlet Reference
     */
    flowlet?: pulumi.Input<DataFlowReferenceArgs>;
    /**
     * Linked service reference.
     */
    linkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Transformation name.
     */
    name: pulumi.Input<string>;
    /**
     * Schema linked service reference.
     */
    schemaLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
}

/**
 * Staging info for execute data flow activity.
 */
export interface DataFlowStagingInfoArgs {
    /**
     * Folder path for staging blob. Type: string (or Expression with resultType string)
     */
    folderPath?: any;
    /**
     * Staging linked service reference.
     */
    linkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
}

/**
 * Data Lake Analytics U-SQL activity.
 */
export interface DataLakeAnalyticsUSQLActivityArgs {
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
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Parameters for U-SQL job request.
     */
    parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
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
    scriptLinkedService: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string).
     */
    scriptPath: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'DataLakeAnalyticsU-SQL'.
     */
    type: pulumi.Input<"DataLakeAnalyticsU-SQL">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Source and target table mapping details.
 */
export interface DataMapperMappingArgs {
    /**
     * This holds the user provided attribute mapping information.
     */
    attributeMappingInfo?: pulumi.Input<MapperAttributeMappingsArgs>;
    /**
     * The connection reference for the source connection.
     */
    sourceConnectionReference?: pulumi.Input<MapperConnectionReferenceArgs>;
    /**
     * This holds the source denormalization information used while joining multiple sources.
     */
    sourceDenormalizeInfo?: any;
    /**
     * Name of the source table
     */
    sourceEntityName?: pulumi.Input<string>;
    /**
     * Name of the target table
     */
    targetEntityName?: pulumi.Input<string>;
}

/**
 * DatabricksNotebook activity.
 */
export interface DatabricksNotebookActivityArgs {
    /**
     * Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used.
     */
    baseParameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of libraries to be installed on the cluster that will execute the job.
     */
    libraries?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string).
     */
    notebookPath: any;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'DatabricksNotebook'.
     */
    type: pulumi.Input<"DatabricksNotebook">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * DatabricksSparkJar activity.
 */
export interface DatabricksSparkJarActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of libraries to be installed on the cluster that will execute the job.
     */
    libraries?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string).
     */
    mainClassName: any;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Parameters that will be passed to the main method.
     */
    parameters?: pulumi.Input<any[]>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'DatabricksSparkJar'.
     */
    type: pulumi.Input<"DatabricksSparkJar">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * DatabricksSparkPython activity.
 */
export interface DatabricksSparkPythonActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of libraries to be installed on the cluster that will execute the job.
     */
    libraries?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Command line parameters that will be passed to the Python file.
     */
    parameters?: pulumi.Input<any[]>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string).
     */
    pythonFile: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'DatabricksSparkPython'.
     */
    type: pulumi.Input<"DatabricksSparkPython">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * The compression method used on a dataset.
 */
export interface DatasetCompressionArgs {
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
 * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
 */
export interface DatasetFolderArgs {
    /**
     * The name of the folder that this Dataset is in.
     */
    name?: pulumi.Input<string>;
}

/**
 * Dataset reference type.
 */
export interface DatasetReferenceArgs {
    /**
     * Arguments for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Reference dataset name.
     */
    referenceName: pulumi.Input<string>;
    /**
     * Dataset reference type.
     */
    type: pulumi.Input<string>;
}

/**
 * Linked service for Dataworld.
 */
export interface DataworldLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The api token for the Dataworld source.
     */
    apiToken: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Dataworld'.
     */
    type: pulumi.Input<"Dataworld">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Linked service for DB2 data source.
 */
export interface Db2LinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * AuthenticationType to be used for connection. It is mutually exclusive with connectionString property.
     */
    authenticationType?: pulumi.Input<string | enums.Db2AuthenticationType>;
    /**
     * Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    certificateCommonName?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    packageCollection?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * Type of linked service.
     * Expected value is 'Db2'.
     */
    type: pulumi.Input<"Db2">;
    /**
     * Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for Db2 databases.
 */
export interface Db2SourceArgs {
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
    type: pulumi.Input<"Db2Source">;
}

/**
 * The Db2 table dataset.
 */
export interface Db2TableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Db2Table">;
}

/**
 * Delete activity.
 */
export interface DeleteActivityArgs {
    /**
     * Delete activity dataset reference.
     */
    dataset: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    enableLogging?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Log storage settings customer need to provide when enableLogging is true.
     */
    logStorageSettings?: pulumi.Input<LogStorageSettingsArgs>;
    /**
     * The max concurrent connections to connect data source at the same time.
     */
    maxConcurrentConnections?: pulumi.Input<number>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    recursive?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Delete activity store settings.
     */
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Type of activity.
     * Expected value is 'Delete'.
     */
    type: pulumi.Input<"Delete">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Delimited text dataset.
 */
export interface DelimitedTextDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
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
    description?: pulumi.Input<string>;
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
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the delimited text storage.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * The null value string. Type: string (or Expression with resultType string).
     */
    nullValue?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"DelimitedText">;
}

/**
 * Delimited text read settings.
 */
export interface DelimitedTextReadSettingsArgs {
    /**
     * Compression settings.
     */
    compressionProperties?: pulumi.Input<TarGZipReadSettingsArgs | TarReadSettingsArgs | ZipDeflateReadSettingsArgs>;
    /**
     * Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer).
     */
    skipLineCount?: any;
    /**
     * The read setting type.
     * Expected value is 'DelimitedTextReadSettings'.
     */
    type: pulumi.Input<"DelimitedTextReadSettings">;
}

/**
 * A copy activity DelimitedText sink.
 */
export interface DelimitedTextSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * DelimitedText format settings.
     */
    formatSettings?: pulumi.Input<DelimitedTextWriteSettingsArgs>;
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
    storeSettings?: pulumi.Input<AzureBlobFSWriteSettingsArgs | AzureBlobStorageWriteSettingsArgs | AzureDataLakeStoreWriteSettingsArgs | AzureFileStorageWriteSettingsArgs | FileServerWriteSettingsArgs | LakeHouseWriteSettingsArgs | SftpWriteSettingsArgs>;
    /**
     * Copy sink type.
     * Expected value is 'DelimitedTextSink'.
     */
    type: pulumi.Input<"DelimitedTextSink">;
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
export interface DelimitedTextSourceArgs {
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
    formatSettings?: pulumi.Input<DelimitedTextReadSettingsArgs>;
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
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Copy source type.
     * Expected value is 'DelimitedTextSource'.
     */
    type: pulumi.Input<"DelimitedTextSource">;
}

/**
 * Delimited text write settings.
 */
export interface DelimitedTextWriteSettingsArgs {
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
    type: pulumi.Input<"DelimitedTextWriteSettings">;
}

/**
 * Distcp settings.
 */
export interface DistcpSettingsArgs {
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
export interface DocumentDbCollectionDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Document Database collection name. Type: string (or Expression with resultType string).
     */
    collectionName: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"DocumentDbCollection">;
}

/**
 * A copy activity Document Database Collection sink.
 */
export interface DocumentDbCollectionSinkArgs {
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
    type: pulumi.Input<"DocumentDbCollectionSink">;
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
export interface DocumentDbCollectionSourceArgs {
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
    type: pulumi.Input<"DocumentDbCollectionSource">;
}

/**
 * Drill server linked service.
 */
export interface DrillLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Drill'.
     */
    type: pulumi.Input<"Drill">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Drill server source.
 */
export interface DrillSourceArgs {
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
    type: pulumi.Input<"DrillSource">;
}

/**
 * Drill server dataset.
 */
export interface DrillTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"DrillTable">;
}

/**
 * Dynamics AX linked service.
 */
export interface DynamicsAXLinkedServiceArgs {
    /**
     * Specify the resource you are requesting authorization. Type: string (or Expression with resultType string).
     */
    aadResourceId: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Specify the application's client ID. Type: string (or Expression with resultType string).
     */
    servicePrincipalId: any;
    /**
     * Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string).
     */
    servicePrincipalKey: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string).
     */
    tenant: any;
    /**
     * Type of linked service.
     * Expected value is 'DynamicsAX'.
     */
    type: pulumi.Input<"DynamicsAX">;
    /**
     * The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint.
     */
    url: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The path of the Dynamics AX OData entity.
 */
export interface DynamicsAXResourceDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"DynamicsAXResource">;
}

/**
 * A copy activity Dynamics AX source.
 */
export interface DynamicsAXSourceArgs {
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
    type: pulumi.Input<"DynamicsAXSource">;
}

/**
 * The Dynamics CRM entity dataset.
 */
export interface DynamicsCrmEntityDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The logical name of the entity. Type: string (or Expression with resultType string).
     */
    entityName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"DynamicsCrmEntity">;
}

/**
 * Dynamics CRM linked service.
 */
export interface DynamicsCrmLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
     */
    authenticationType: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string).
     */
    deploymentType: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
     */
    domain?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to access the Dynamics CRM instance.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"DynamicsCrm">;
    /**
     * User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Dynamics CRM sink.
 */
export interface DynamicsCrmSinkArgs {
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
    type: pulumi.Input<"DynamicsCrmSink">;
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
    writeBehavior: pulumi.Input<string | enums.DynamicsSinkWriteBehavior>;
}

/**
 * A copy activity Dynamics CRM source.
 */
export interface DynamicsCrmSourceArgs {
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
    type: pulumi.Input<"DynamicsCrmSource">;
}

/**
 * The Dynamics entity dataset.
 */
export interface DynamicsEntityDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The logical name of the entity. Type: string (or Expression with resultType string).
     */
    entityName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"DynamicsEntity">;
}

/**
 * Dynamics linked service.
 */
export interface DynamicsLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario, 'Active Directory' for Dynamics on-premises with IFD. Type: string (or Expression with resultType string).
     */
    authenticationType: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
     */
    deploymentType: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Active Directory domain that will verify user credentials. Type: string (or Expression with resultType string).
     */
    domain?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to access the Dynamics instance.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"Dynamics">;
    /**
     * User name to access the Dynamics instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Dynamics sink.
 */
export interface DynamicsSinkArgs {
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
    type: pulumi.Input<"DynamicsSink">;
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
    writeBehavior: pulumi.Input<string | enums.DynamicsSinkWriteBehavior>;
}

/**
 * A copy activity Dynamics source.
 */
export interface DynamicsSourceArgs {
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
    type: pulumi.Input<"DynamicsSource">;
}

/**
 * Eloqua server linked service.
 */
export interface EloquaLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the Eloqua server. (i.e. eloqua.example.com)
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Eloqua'.
     */
    type: pulumi.Input<"Eloqua">;
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
    version?: pulumi.Input<string>;
}

/**
 * Eloqua server dataset.
 */
export interface EloquaObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"EloquaObject">;
}

/**
 * A copy activity Eloqua server source.
 */
export interface EloquaSourceArgs {
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
    type: pulumi.Input<"EloquaSource">;
}

/**
 * Definition of CMK for the factory.
 */
export interface EncryptionConfigurationArgs {
    /**
     * User assigned identity to use to authenticate to customer's key vault. If not provided Managed Service Identity will be used.
     */
    identity?: pulumi.Input<CMKIdentityDefinitionArgs>;
    /**
     * The name of the key in Azure Key Vault to use as Customer Managed Key.
     */
    keyName: pulumi.Input<string>;
    /**
     * The version of the key used for CMK. If not provided, latest version will be used.
     */
    keyVersion?: pulumi.Input<string>;
    /**
     * The url of the Azure Key Vault used for CMK.
     */
    vaultBaseUrl: pulumi.Input<string>;
}

/**
 * The entity reference.
 */
export interface EntityReferenceArgs {
    /**
     * The name of this referenced entity.
     */
    referenceName?: pulumi.Input<string>;
    /**
     * The type of this referenced entity.
     */
    type?: pulumi.Input<string | enums.IntegrationRuntimeEntityReferenceType>;
}

/**
 * The custom setup of setting environment variable.
 */
export interface EnvironmentVariableSetupArgs {
    /**
     * The type of custom setup.
     * Expected value is 'EnvironmentVariableSetup'.
     */
    type: pulumi.Input<"EnvironmentVariableSetup">;
    /**
     * The name of the environment variable.
     */
    variableName: pulumi.Input<string>;
    /**
     * The value of the environment variable.
     */
    variableValue: pulumi.Input<string>;
}

/**
 * Excel dataset.
 */
export interface ExcelDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used for the json dataset.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    firstRowAsHeader?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the excel storage.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * The null value string. Type: string (or Expression with resultType string).
     */
    nullValue?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Excel">;
}

/**
 * A copy activity excel source.
 */
export interface ExcelSourceArgs {
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
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Copy source type.
     * Expected value is 'ExcelSource'.
     */
    type: pulumi.Input<"ExcelSource">;
}

/**
 * Execute data flow activity.
 */
export interface ExecuteDataFlowActivityArgs {
    /**
     * Compute properties for data flow activity.
     */
    compute?: pulumi.Input<ExecuteDataFlowActivityTypePropertiesComputeArgs>;
    /**
     * Continuation settings for execute data flow activity.
     */
    continuationSettings?: pulumi.Input<ContinuationSettingsReferenceArgs>;
    /**
     * Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean)
     */
    continueOnError?: any;
    /**
     * Data flow reference.
     */
    dataFlow: pulumi.Input<DataFlowReferenceArgs>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference.
     */
    integrationRuntime?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
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
    staging?: pulumi.Input<DataFlowStagingInfoArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string)
     */
    traceLevel?: any;
    /**
     * Type of activity.
     * Expected value is 'ExecuteDataFlow'.
     */
    type: pulumi.Input<"ExecuteDataFlow">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Compute properties for data flow activity.
 */
export interface ExecuteDataFlowActivityTypePropertiesComputeArgs {
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
 * Execute pipeline activity.
 */
export interface ExecutePipelineActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Pipeline parameters.
     */
    parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Pipeline reference.
     */
    pipeline: pulumi.Input<PipelineReferenceArgs>;
    /**
     * Execute pipeline activity policy.
     */
    policy?: pulumi.Input<ExecutePipelineActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'ExecutePipeline'.
     */
    type: pulumi.Input<"ExecutePipeline">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
    /**
     * Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false.
     */
    waitOnCompletion?: pulumi.Input<boolean>;
}

/**
 * Execution policy for an execute pipeline activity.
 */
export interface ExecutePipelineActivityPolicyArgs {
    /**
     * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
     */
    secureInput?: pulumi.Input<boolean>;
}

/**
 * Execute SSIS package activity.
 */
export interface ExecuteSSISPackageActivityArgs {
    /**
     * The integration runtime reference.
     */
    connectVia: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * The environment path to execute the SSIS package. Type: string (or Expression with resultType string).
     */
    environmentPath?: any;
    /**
     * The package execution credential.
     */
    executionCredential?: pulumi.Input<SSISExecutionCredentialArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * SSIS package execution log location.
     */
    logLocation?: pulumi.Input<SSISLogLocationArgs>;
    /**
     * The logging level of SSIS package execution. Type: string (or Expression with resultType string).
     */
    loggingLevel?: any;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * The package level connection managers to execute the SSIS package.
     */
    packageConnectionManagers?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<SSISExecutionParameterArgs>}>}>;
    /**
     * SSIS package location.
     */
    packageLocation: pulumi.Input<SSISPackageLocationArgs>;
    /**
     * The package level parameters to execute the SSIS package.
     */
    packageParameters?: pulumi.Input<{[key: string]: pulumi.Input<SSISExecutionParameterArgs>}>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * The project level connection managers to execute the SSIS package.
     */
    projectConnectionManagers?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<SSISExecutionParameterArgs>}>}>;
    /**
     * The project level parameters to execute the SSIS package.
     */
    projectParameters?: pulumi.Input<{[key: string]: pulumi.Input<SSISExecutionParameterArgs>}>;
    /**
     * The property overrides to execute the SSIS package.
     */
    propertyOverrides?: pulumi.Input<{[key: string]: pulumi.Input<SSISPropertyOverrideArgs>}>;
    /**
     * Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string).
     */
    runtime?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'ExecuteSSISPackage'.
     */
    type: pulumi.Input<"ExecuteSSISPackage">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Execute power query activity.
 */
export interface ExecuteWranglingDataflowActivityArgs {
    /**
     * Compute properties for data flow activity.
     */
    compute?: pulumi.Input<ExecuteDataFlowActivityTypePropertiesComputeArgs>;
    /**
     * Continuation settings for execute data flow activity.
     */
    continuationSettings?: pulumi.Input<ContinuationSettingsReferenceArgs>;
    /**
     * Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean)
     */
    continueOnError?: any;
    /**
     * Data flow reference.
     */
    dataFlow: pulumi.Input<DataFlowReferenceArgs>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference.
     */
    integrationRuntime?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * List of mapping for Power Query mashup query to sink dataset(s).
     */
    queries?: pulumi.Input<pulumi.Input<PowerQuerySinkMappingArgs>[]>;
    /**
     * Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean)
     */
    runConcurrently?: any;
    /**
     * (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName.
     */
    sinks?: pulumi.Input<{[key: string]: pulumi.Input<PowerQuerySinkArgs>}>;
    /**
     * Specify number of parallel staging for sources applicable to the sink. Type: integer (or Expression with resultType integer)
     */
    sourceStagingConcurrency?: any;
    /**
     * Staging info for execute data flow activity.
     */
    staging?: pulumi.Input<DataFlowStagingInfoArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string)
     */
    traceLevel?: any;
    /**
     * Type of activity.
     * Expected value is 'ExecuteWranglingDataflow'.
     */
    type: pulumi.Input<"ExecuteWranglingDataflow">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Base class for all execution activities.
 */
export interface ExecutionActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Execution'.
     */
    type: pulumi.Input<"Execution">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Azure Data Factory expression definition.
 */
export interface ExpressionArgs {
    /**
     * Expression type.
     */
    type: pulumi.Input<string>;
    /**
     * Expression value.
     */
    value: pulumi.Input<string>;
}

/**
 * Nested representation of a complex expression.
 */
export interface ExpressionV2Args {
    /**
     * List of nested expressions.
     */
    operands?: pulumi.Input<pulumi.Input<ExpressionV2Args>[]>;
    /**
     * Expression operator value Type: list of strings.
     */
    operators?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of expressions supported by the system. Type: string.
     */
    type?: pulumi.Input<string | enums.ExpressionV2Type>;
    /**
     * Value for Constant/Field Type: string.
     */
    value?: pulumi.Input<string>;
}

/**
 * Factory's GitHub repo information.
 */
export interface FactoryGitHubConfigurationArgs {
    /**
     * Account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * GitHub bring your own app client id.
     */
    clientId?: pulumi.Input<string>;
    /**
     * GitHub bring your own app client secret information.
     */
    clientSecret?: pulumi.Input<GitHubClientSecretArgs>;
    /**
     * Collaboration branch.
     */
    collaborationBranch: pulumi.Input<string>;
    /**
     * Disable manual publish operation in ADF studio to favor automated publish.
     */
    disablePublish?: pulumi.Input<boolean>;
    /**
     * GitHub Enterprise host name. For example: `https://github.mydomain.com`
     */
    hostName?: pulumi.Input<string>;
    /**
     * Last commit id.
     */
    lastCommitId?: pulumi.Input<string>;
    /**
     * Repository name.
     */
    repositoryName: pulumi.Input<string>;
    /**
     * Root folder.
     */
    rootFolder: pulumi.Input<string>;
    /**
     * Type of repo configuration.
     * Expected value is 'FactoryGitHubConfiguration'.
     */
    type: pulumi.Input<"FactoryGitHubConfiguration">;
}

/**
 * Identity properties of the factory resource.
 */
export interface FactoryIdentityArgs {
    /**
     * The identity type.
     */
    type: pulumi.Input<string | enums.FactoryIdentityType>;
    /**
     * List of user assigned identities for the factory.
     */
    userAssignedIdentities?: pulumi.Input<{[key: string]: any}>;
}

/**
 * Factory's VSTS repo information.
 */
export interface FactoryVSTSConfigurationArgs {
    /**
     * Account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Collaboration branch.
     */
    collaborationBranch: pulumi.Input<string>;
    /**
     * Disable manual publish operation in ADF studio to favor automated publish.
     */
    disablePublish?: pulumi.Input<boolean>;
    /**
     * Last commit id.
     */
    lastCommitId?: pulumi.Input<string>;
    /**
     * VSTS project name.
     */
    projectName: pulumi.Input<string>;
    /**
     * Repository name.
     */
    repositoryName: pulumi.Input<string>;
    /**
     * Root folder.
     */
    rootFolder: pulumi.Input<string>;
    /**
     * VSTS tenant id.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Type of repo configuration.
     * Expected value is 'FactoryVSTSConfiguration'.
     */
    type: pulumi.Input<"FactoryVSTSConfiguration">;
}

/**
 * This activity will fail within its own scope and output a custom error message and error code. The error message and code can provided either as a string literal or as an expression that can be evaluated to a string at runtime. The activity scope can be the whole pipeline or a control activity (e.g. foreach, switch, until), if the fail activity is contained in it.
 */
export interface FailActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
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
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Fail'.
     */
    type: pulumi.Input<"Fail">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * File system linked service.
 */
export interface FileServerLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Host name of the server. Type: string (or Expression with resultType string).
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to logon the server.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'FileServer'.
     */
    type: pulumi.Input<"FileServer">;
    /**
     * User ID to logon the server. Type: string (or Expression with resultType string).
     */
    userId?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of file server dataset.
 */
export interface FileServerLocationArgs {
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
    type: pulumi.Input<"FileServerLocation">;
}

/**
 * File server read settings.
 */
export interface FileServerReadSettingsArgs {
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
    type: pulumi.Input<"FileServerReadSettings">;
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
export interface FileServerWriteSettingsArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
    /**
     * The write setting type.
     * Expected value is 'FileServerWriteSettings'.
     */
    type: pulumi.Input<"FileServerWriteSettings">;
}

/**
 * An on-premises file system dataset.
 */
export interface FileShareDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used for the file system.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
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
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * The path of the on-premises file system. Type: string (or Expression with resultType string).
     */
    folderPath?: any;
    /**
     * The format of the files.
     */
    format?: pulumi.Input<AvroFormatArgs | JsonFormatArgs | OrcFormatArgs | ParquetFormatArgs | TextFormatArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"FileShare">;
}

/**
 * A copy activity file system sink.
 */
export interface FileSystemSinkArgs {
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
    type: pulumi.Input<"FileSystemSink">;
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
export interface FileSystemSourceArgs {
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
    type: pulumi.Input<"FileSystemSource">;
}

/**
 * Filter and return results from input array based on the conditions.
 */
export interface FilterActivityArgs {
    /**
     * Condition to be used for filtering the input.
     */
    condition: pulumi.Input<ExpressionArgs>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Input array on which filter should be applied.
     */
    items: pulumi.Input<ExpressionArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Filter'.
     */
    type: pulumi.Input<"Filter">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Data flow flowlet
 */
export interface FlowletArgs {
    /**
     * List of tags that can be used for describing the data flow.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The description of the data flow.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
     */
    folder?: pulumi.Input<DataFlowFolderArgs>;
    /**
     * Flowlet script.
     */
    script?: pulumi.Input<string>;
    /**
     * Flowlet script lines.
     */
    scriptLines?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of sinks in Flowlet.
     */
    sinks?: pulumi.Input<pulumi.Input<DataFlowSinkArgs>[]>;
    /**
     * List of sources in Flowlet.
     */
    sources?: pulumi.Input<pulumi.Input<DataFlowSourceArgs>[]>;
    /**
     * List of transformations in Flowlet.
     */
    transformations?: pulumi.Input<pulumi.Input<TransformationArgs>[]>;
    /**
     * Type of data flow.
     * Expected value is 'Flowlet'.
     */
    type: pulumi.Input<"Flowlet">;
}

/**
 * This activity is used for iterating over a collection and execute given activities.
 */
export interface ForEachActivityArgs {
    /**
     * List of activities to execute .
     */
    activities: pulumi.Input<pulumi.Input<AppendVariableActivityArgs | AzureDataExplorerCommandActivityArgs | AzureFunctionActivityArgs | AzureMLBatchExecutionActivityArgs | AzureMLExecutePipelineActivityArgs | AzureMLUpdateResourceActivityArgs | ControlActivityArgs | CopyActivityArgs | CustomActivityArgs | DataLakeAnalyticsUSQLActivityArgs | DatabricksNotebookActivityArgs | DatabricksSparkJarActivityArgs | DatabricksSparkPythonActivityArgs | DeleteActivityArgs | ExecuteDataFlowActivityArgs | ExecutePipelineActivityArgs | ExecuteSSISPackageActivityArgs | ExecuteWranglingDataflowActivityArgs | ExecutionActivityArgs | FailActivityArgs | FilterActivityArgs | ForEachActivityArgs | GetMetadataActivityArgs | HDInsightHiveActivityArgs | HDInsightMapReduceActivityArgs | HDInsightPigActivityArgs | HDInsightSparkActivityArgs | HDInsightStreamingActivityArgs | IfConditionActivityArgs | LookupActivityArgs | ScriptActivityArgs | SetVariableActivityArgs | SqlServerStoredProcedureActivityArgs | SwitchActivityArgs | SynapseNotebookActivityArgs | SynapseSparkJobDefinitionActivityArgs | UntilActivityArgs | ValidationActivityArgs | WaitActivityArgs | WebActivityArgs | WebHookActivityArgs>[]>;
    /**
     * Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
     */
    batchCount?: pulumi.Input<number>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Should the loop be executed in sequence or in parallel (max 50)
     */
    isSequential?: pulumi.Input<boolean>;
    /**
     * Collection to iterate.
     */
    items: pulumi.Input<ExpressionArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'ForEach'.
     */
    type: pulumi.Input<"ForEach">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Ftp read settings.
 */
export interface FtpReadSettingsArgs {
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
    type: pulumi.Input<"FtpReadSettings">;
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
export interface FtpServerLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to be used to connect to the FTP server.
     */
    authenticationType?: pulumi.Input<string | enums.FtpAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
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
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Host name of the FTP server. Type: string (or Expression with resultType string).
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to logon the FTP server.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * Type of linked service.
     * Expected value is 'FtpServer'.
     */
    type: pulumi.Input<"FtpServer">;
    /**
     * Username to logon the FTP server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of ftp server dataset.
 */
export interface FtpServerLocationArgs {
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
    type: pulumi.Input<"FtpServerLocation">;
}

/**
 * Activity to get metadata of dataset
 */
export interface GetMetadataActivityArgs {
    /**
     * GetMetadata activity dataset reference.
     */
    dataset: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Fields of metadata to get from dataset.
     */
    fieldList?: pulumi.Input<any[]>;
    /**
     * GetMetadata activity format settings.
     */
    formatSettings?: pulumi.Input<BinaryReadSettingsArgs | DelimitedTextReadSettingsArgs | JsonReadSettingsArgs | ParquetReadSettingsArgs | XmlReadSettingsArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * GetMetadata activity store settings.
     */
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Type of activity.
     * Expected value is 'GetMetadata'.
     */
    type: pulumi.Input<"GetMetadata">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Client secret information for factory's bring your own app repository configuration.
 */
export interface GitHubClientSecret {
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
 * Client secret information for factory's bring your own app repository configuration.
 */
export interface GitHubClientSecretArgs {
    /**
     * Bring your own app client secret AKV URL.
     */
    byoaSecretAkvUrl?: pulumi.Input<string>;
    /**
     * Bring your own app client secret name in AKV.
     */
    byoaSecretName?: pulumi.Input<string>;
}

/**
 * Definition of a single parameter for an entity.
 */
export interface GlobalParameterSpecificationArgs {
    /**
     * Global Parameter type.
     */
    type: pulumi.Input<string | enums.GlobalParameterType>;
    /**
     * Value of parameter.
     */
    value: any;
}

/**
 * Google AdWords service linked service.
 */
export interface GoogleAdWordsLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
     */
    authenticationType?: pulumi.Input<string | enums.GoogleAdWordsAuthenticationType>;
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
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * (Deprecated) Properties used to connect to GoogleAds. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The developer token associated with the manager account that you use to grant access to the AdWords API.
     */
    developerToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
     */
    email?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The private key that is used to authenticate the service account email address and can only be used on self-hosted IR.
     */
    privateKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication.
     */
    refreshToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"GoogleAdWords">;
    /**
     * (Deprecated) Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    useSystemTrustStore?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Google AdWords service dataset.
 */
export interface GoogleAdWordsObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"GoogleAdWordsObject">;
}

/**
 * A copy activity Google AdWords service source.
 */
export interface GoogleAdWordsSourceArgs {
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
    type: pulumi.Input<"GoogleAdWordsSource">;
}

/**
 * Google BigQuery service linked service.
 */
export interface GoogleBigQueryLinkedServiceArgs {
    /**
     * A comma-separated list of public BigQuery projects to access. Type: string (or Expression with resultType string).
     */
    additionalProjects?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
     */
    authenticationType: pulumi.Input<string | enums.GoogleBigQueryAuthenticationType>;
    /**
     * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret of the google application used to acquire the refresh token.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
     */
    email?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. Type: string (or Expression with resultType string).
     */
    keyFilePath?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The default BigQuery project to query against. Type: string (or Expression with resultType string).
     */
    project: any;
    /**
     * The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
     */
    refreshToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"GoogleBigQuery">;
    /**
     * Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.Type: boolean (or Expression with resultType boolean).
     */
    useSystemTrustStore?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Google BigQuery service dataset.
 */
export interface GoogleBigQueryObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The database name of the Google BigQuery. Type: string (or Expression with resultType string).
     */
    dataset?: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"GoogleBigQueryObject">;
}

/**
 * A copy activity Google BigQuery service source.
 */
export interface GoogleBigQuerySourceArgs {
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
    type: pulumi.Input<"GoogleBigQuerySource">;
}

/**
 * Google BigQuery service linked service.
 */
export interface GoogleBigQueryV2LinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The OAuth 2.0 authentication mechanism used for authentication.
     */
    authenticationType: pulumi.Input<string | enums.GoogleBigQueryV2AuthenticationType>;
    /**
     * The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret of the google application used to acquire the refresh token.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The content of the .json key file that is used to authenticate the service account. Type: string (or Expression with resultType string).
     */
    keyFileContent?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The default BigQuery project id to query against. Type: string (or Expression with resultType string).
     */
    projectId: any;
    /**
     * The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
     */
    refreshToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'GoogleBigQueryV2'.
     */
    type: pulumi.Input<"GoogleBigQueryV2">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Google BigQuery service dataset.
 */
export interface GoogleBigQueryV2ObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The database name of the Google BigQuery. Type: string (or Expression with resultType string).
     */
    dataset?: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"GoogleBigQueryV2Object">;
}

/**
 * A copy activity Google BigQuery service source.
 */
export interface GoogleBigQueryV2SourceArgs {
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
    type: pulumi.Input<"GoogleBigQueryV2Source">;
}

/**
 * Linked service for Google Cloud Storage.
 */
export interface GoogleCloudStorageLinkedServiceArgs {
    /**
     * The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
     */
    accessKeyId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user.
     */
    secretAccessKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
     */
    serviceUrl?: any;
    /**
     * Type of linked service.
     * Expected value is 'GoogleCloudStorage'.
     */
    type: pulumi.Input<"GoogleCloudStorage">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of Google Cloud Storage dataset.
 */
export interface GoogleCloudStorageLocationArgs {
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
    type: pulumi.Input<"GoogleCloudStorageLocation">;
    /**
     * Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Google Cloud Storage read settings.
 */
export interface GoogleCloudStorageReadSettingsArgs {
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
    type: pulumi.Input<"GoogleCloudStorageReadSettings">;
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
export interface GoogleSheetsLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The api token for the GoogleSheets source.
     */
    apiToken: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'GoogleSheets'.
     */
    type: pulumi.Input<"GoogleSheets">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Greenplum Database linked service.
 */
export interface GreenplumLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to use. Type: string. Only used for V2.
     */
    authenticationType?: pulumi.Input<string | enums.GreenplumAuthenticationType>;
    /**
     * The time to wait (in seconds) while trying to execute a command before terminating the attempt and generating an error. Set to zero for infinity. Type: integer. Only used for V2.
     */
    commandTimeout?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Host name for connection. Type: string. Only used for V2.
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The port for the connection. Type: integer. Only used for V2.
     */
    port?: any;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * SSL mode for connection. Type: integer. 0: disable, 1:allow, 2: prefer, 3: require, 4: verify-ca, 5: verify-full. Type: integer. Only used for V2.
     */
    sslMode?: any;
    /**
     * Type of linked service.
     * Expected value is 'Greenplum'.
     */
    type: pulumi.Input<"Greenplum">;
    /**
     * Username for authentication. Type: string. Only used for V2.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Greenplum Database source.
 */
export interface GreenplumSourceArgs {
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
    type: pulumi.Input<"GreenplumSource">;
}

/**
 * Greenplum Database dataset.
 */
export interface GreenplumTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"GreenplumTable">;
}

/**
 * HBase server linked service.
 */
export interface HBaseLinkedServiceArgs {
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
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication mechanism to use to connect to the HBase server.
     */
    authenticationType: pulumi.Input<string | enums.HBaseAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"HBase">;
    /**
     * The user name used to connect to the HBase instance.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * HBase server dataset.
 */
export interface HBaseObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"HBaseObject">;
}

/**
 * A copy activity HBase server source.
 */
export interface HBaseSourceArgs {
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
    type: pulumi.Input<"HBaseSource">;
}

/**
 * HDInsight Hive activity type.
 */
export interface HDInsightHiveActivityArgs {
    /**
     * User specified arguments to HDInsightActivity.
     */
    arguments?: pulumi.Input<any[]>;
    /**
     * Allows user to specify defines for Hive job request.
     */
    defines?: pulumi.Input<{[key: string]: any}>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Debug info option.
     */
    getDebugInfo?: pulumi.Input<string | enums.HDInsightActivityDebugInfoOption>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package)
     */
    queryTimeout?: pulumi.Input<number>;
    /**
     * Script linked service reference.
     */
    scriptLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Script path. Type: string (or Expression with resultType string).
     */
    scriptPath?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Storage linked service references.
     */
    storageLinkedServices?: pulumi.Input<pulumi.Input<LinkedServiceReferenceArgs>[]>;
    /**
     * Type of activity.
     * Expected value is 'HDInsightHive'.
     */
    type: pulumi.Input<"HDInsightHive">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
    /**
     * User specified arguments under hivevar namespace.
     */
    variables?: pulumi.Input<{[key: string]: any}>;
}

/**
 * HDInsight linked service.
 */
export interface HDInsightLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * HDInsight cluster URI. Type: string (or Expression with resultType string).
     */
    clusterUri: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string).
     */
    fileSystem?: any;
    /**
     * A reference to the Azure SQL linked service that points to the HCatalog database.
     */
    hcatalogLinkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean.
     */
    isEspEnabled?: any;
    /**
     * The Azure Storage linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * HDInsight cluster password.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'HDInsight'.
     */
    type: pulumi.Input<"HDInsight">;
    /**
     * HDInsight cluster user name. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * HDInsight MapReduce activity type.
 */
export interface HDInsightMapReduceActivityArgs {
    /**
     * User specified arguments to HDInsightActivity.
     */
    arguments?: pulumi.Input<any[]>;
    /**
     * Class name. Type: string (or Expression with resultType string).
     */
    className: any;
    /**
     * Allows user to specify defines for the MapReduce job request.
     */
    defines?: pulumi.Input<{[key: string]: any}>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Debug info option.
     */
    getDebugInfo?: pulumi.Input<string | enums.HDInsightActivityDebugInfoOption>;
    /**
     * Jar path. Type: string (or Expression with resultType string).
     */
    jarFilePath: any;
    /**
     * Jar libs.
     */
    jarLibs?: pulumi.Input<any[]>;
    /**
     * Jar linked service reference.
     */
    jarLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Storage linked service references.
     */
    storageLinkedServices?: pulumi.Input<pulumi.Input<LinkedServiceReferenceArgs>[]>;
    /**
     * Type of activity.
     * Expected value is 'HDInsightMapReduce'.
     */
    type: pulumi.Input<"HDInsightMapReduce">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * HDInsight ondemand linked service.
 */
export interface HDInsightOnDemandLinkedServiceArgs {
    /**
     * Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
     */
    additionalLinkedServiceNames?: pulumi.Input<pulumi.Input<LinkedServiceReferenceArgs>[]>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string).
     */
    clusterNamePrefix?: any;
    /**
     * The password to access the cluster.
     */
    clusterPassword?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    clusterSshPassword?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created.
     */
    coreConfiguration?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Specifies the size of the data node for the HDInsight cluster.
     */
    dataNodeSize?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster.
     */
    hBaseConfiguration?: any;
    /**
     * The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore.
     */
    hcatalogLinkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
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
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions.
     */
    scriptActions?: pulumi.Input<pulumi.Input<ScriptActionArgs>[]>;
    /**
     * The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key for the service principal id.
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"HDInsightOnDemand">;
    /**
     * Version of the linked service.
     */
    version: pulumi.Input<string>;
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
export interface HDInsightPigActivityArgs {
    /**
     * User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array).
     */
    arguments?: any;
    /**
     * Allows user to specify defines for Pig job request.
     */
    defines?: pulumi.Input<{[key: string]: any}>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Debug info option.
     */
    getDebugInfo?: pulumi.Input<string | enums.HDInsightActivityDebugInfoOption>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Script linked service reference.
     */
    scriptLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Script path. Type: string (or Expression with resultType string).
     */
    scriptPath?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Storage linked service references.
     */
    storageLinkedServices?: pulumi.Input<pulumi.Input<LinkedServiceReferenceArgs>[]>;
    /**
     * Type of activity.
     * Expected value is 'HDInsightPig'.
     */
    type: pulumi.Input<"HDInsightPig">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * HDInsight Spark activity.
 */
export interface HDInsightSparkActivityArgs {
    /**
     * The user-specified arguments to HDInsightSparkActivity.
     */
    arguments?: pulumi.Input<any[]>;
    /**
     * The application's Java/Spark main class.
     */
    className?: pulumi.Input<string>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string).
     */
    entryFilePath: any;
    /**
     * Debug info option.
     */
    getDebugInfo?: pulumi.Input<string | enums.HDInsightActivityDebugInfoOption>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
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
    sparkConfig?: pulumi.Input<{[key: string]: any}>;
    /**
     * The storage linked service for uploading the entry file and dependencies, and for receiving logs.
     */
    sparkJobLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'HDInsightSpark'.
     */
    type: pulumi.Input<"HDInsightSpark">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * HDInsight streaming activity type.
 */
export interface HDInsightStreamingActivityArgs {
    /**
     * User specified arguments to HDInsightActivity.
     */
    arguments?: pulumi.Input<any[]>;
    /**
     * Combiner executable name. Type: string (or Expression with resultType string).
     */
    combiner?: any;
    /**
     * Command line environment values.
     */
    commandEnvironment?: pulumi.Input<any[]>;
    /**
     * Allows user to specify defines for streaming job request.
     */
    defines?: pulumi.Input<{[key: string]: any}>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Linked service reference where the files are located.
     */
    fileLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Paths to streaming job files. Can be directories.
     */
    filePaths: pulumi.Input<any[]>;
    /**
     * Debug info option.
     */
    getDebugInfo?: pulumi.Input<string | enums.HDInsightActivityDebugInfoOption>;
    /**
     * Input blob path. Type: string (or Expression with resultType string).
     */
    input: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Mapper executable name. Type: string (or Expression with resultType string).
     */
    mapper: any;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Output blob path. Type: string (or Expression with resultType string).
     */
    output: any;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Reducer executable name. Type: string (or Expression with resultType string).
     */
    reducer: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Storage linked service references.
     */
    storageLinkedServices?: pulumi.Input<pulumi.Input<LinkedServiceReferenceArgs>[]>;
    /**
     * Type of activity.
     * Expected value is 'HDInsightStreaming'.
     */
    type: pulumi.Input<"HDInsightStreaming">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Hadoop Distributed File System (HDFS) linked service.
 */
export interface HdfsLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for Windows authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Hdfs'.
     */
    type: pulumi.Input<"Hdfs">;
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
    version?: pulumi.Input<string>;
}

/**
 * The location of HDFS.
 */
export interface HdfsLocationArgs {
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
    type: pulumi.Input<"HdfsLocation">;
}

/**
 * HDFS read settings.
 */
export interface HdfsReadSettingsArgs {
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
    distcpSettings?: pulumi.Input<DistcpSettingsArgs>;
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
    type: pulumi.Input<"HdfsReadSettings">;
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
export interface HdfsSourceArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Specifies Distcp-related settings.
     */
    distcpSettings?: pulumi.Input<DistcpSettingsArgs>;
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
    type: pulumi.Input<"HdfsSource">;
}

/**
 * Hive Server linked service.
 */
export interface HiveLinkedServiceArgs {
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
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication method used to access the Hive server.
     */
    authenticationType: pulumi.Input<string | enums.HiveAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name that you provided in the Username field
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The TCP port that the Hive server uses to listen for client connections.
     */
    port?: any;
    /**
     * The type of Hive server.
     */
    serverType?: pulumi.Input<string | enums.HiveServerType>;
    /**
     * true to indicate using the ZooKeeper service, false not.
     */
    serviceDiscoveryMode?: any;
    /**
     * The transport protocol to use in the Thrift layer.
     */
    thriftTransportProtocol?: pulumi.Input<string | enums.HiveThriftTransportProtocol>;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'Hive'.
     */
    type: pulumi.Input<"Hive">;
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
    version?: pulumi.Input<string>;
    /**
     * The namespace on ZooKeeper under which Hive Server 2 nodes are added.
     */
    zooKeeperNameSpace?: any;
}

/**
 * Hive Server dataset.
 */
export interface HiveObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"HiveObject">;
}

/**
 * A copy activity Hive Server source.
 */
export interface HiveSourceArgs {
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
    type: pulumi.Input<"HiveSource">;
}

/**
 * A file in an HTTP web server.
 */
export interface HttpDatasetArgs {
    /**
     * The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
     * ...
     * request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
     */
    additionalHeaders?: any;
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used on files.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * The format of files.
     */
    format?: pulumi.Input<AvroFormatArgs | JsonFormatArgs | OrcFormatArgs | ParquetFormatArgs | TextFormatArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"HttpFile">;
}

/**
 * Linked service for an HTTP source.
 */
export interface HttpLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The additional HTTP headers in the request to RESTful API used for authorization. Type: key value pairs (value should be string type).
     */
    authHeaders?: any;
    /**
     * The authentication type to be used to connect to the HTTP server.
     */
    authenticationType?: pulumi.Input<string | enums.HttpAuthenticationType>;
    /**
     * Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string).
     */
    certThumbprint?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
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
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'HttpServer'.
     */
    type: pulumi.Input<"HttpServer">;
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
    version?: pulumi.Input<string>;
}

/**
 * Http read settings.
 */
export interface HttpReadSettingsArgs {
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
    type: pulumi.Input<"HttpReadSettings">;
}

/**
 * The location of http server.
 */
export interface HttpServerLocationArgs {
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
    type: pulumi.Input<"HttpServerLocation">;
}

/**
 * A copy activity source for an HTTP file.
 */
export interface HttpSourceArgs {
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
    type: pulumi.Input<"HttpSource">;
}

/**
 * Hubspot Service linked service.
 */
export interface HubspotLinkedServiceArgs {
    /**
     * The access token obtained when initially authenticating your OAuth integration.
     */
    accessToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The client ID associated with your Hubspot application.
     */
    clientId: any;
    /**
     * The client secret associated with your Hubspot application.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The refresh token obtained when initially authenticating your OAuth integration.
     */
    refreshToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Hubspot'.
     */
    type: pulumi.Input<"Hubspot">;
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
    version?: pulumi.Input<string>;
}

/**
 * Hubspot Service dataset.
 */
export interface HubspotObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"HubspotObject">;
}

/**
 * A copy activity Hubspot Service source.
 */
export interface HubspotSourceArgs {
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
    type: pulumi.Input<"HubspotSource">;
}

/**
 * Iceberg dataset.
 */
export interface IcebergDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the iceberg storage. Setting a file name is not allowed for iceberg format.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Iceberg">;
}

/**
 * A copy activity Iceberg sink.
 */
export interface IcebergSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Iceberg format settings.
     */
    formatSettings?: pulumi.Input<IcebergWriteSettingsArgs>;
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
    storeSettings?: pulumi.Input<AzureBlobFSWriteSettingsArgs | AzureBlobStorageWriteSettingsArgs | AzureDataLakeStoreWriteSettingsArgs | AzureFileStorageWriteSettingsArgs | FileServerWriteSettingsArgs | LakeHouseWriteSettingsArgs | SftpWriteSettingsArgs>;
    /**
     * Copy sink type.
     * Expected value is 'IcebergSink'.
     */
    type: pulumi.Input<"IcebergSink">;
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
export interface IcebergWriteSettingsArgs {
    /**
     * The write setting type.
     * Expected value is 'IcebergWriteSettings'.
     */
    type: pulumi.Input<"IcebergWriteSettings">;
}

/**
 * This activity evaluates a boolean expression and executes either the activities under the ifTrueActivities property or the ifFalseActivities property depending on the result of the expression.
 */
export interface IfConditionActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed.
     */
    expression: pulumi.Input<ExpressionArgs>;
    /**
     * List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action.
     */
    ifFalseActivities?: pulumi.Input<pulumi.Input<AppendVariableActivityArgs | AzureDataExplorerCommandActivityArgs | AzureFunctionActivityArgs | AzureMLBatchExecutionActivityArgs | AzureMLExecutePipelineActivityArgs | AzureMLUpdateResourceActivityArgs | ControlActivityArgs | CopyActivityArgs | CustomActivityArgs | DataLakeAnalyticsUSQLActivityArgs | DatabricksNotebookActivityArgs | DatabricksSparkJarActivityArgs | DatabricksSparkPythonActivityArgs | DeleteActivityArgs | ExecuteDataFlowActivityArgs | ExecutePipelineActivityArgs | ExecuteSSISPackageActivityArgs | ExecuteWranglingDataflowActivityArgs | ExecutionActivityArgs | FailActivityArgs | FilterActivityArgs | ForEachActivityArgs | GetMetadataActivityArgs | HDInsightHiveActivityArgs | HDInsightMapReduceActivityArgs | HDInsightPigActivityArgs | HDInsightSparkActivityArgs | HDInsightStreamingActivityArgs | IfConditionActivityArgs | LookupActivityArgs | ScriptActivityArgs | SetVariableActivityArgs | SqlServerStoredProcedureActivityArgs | SwitchActivityArgs | SynapseNotebookActivityArgs | SynapseSparkJobDefinitionActivityArgs | UntilActivityArgs | ValidationActivityArgs | WaitActivityArgs | WebActivityArgs | WebHookActivityArgs>[]>;
    /**
     * List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action.
     */
    ifTrueActivities?: pulumi.Input<pulumi.Input<AppendVariableActivityArgs | AzureDataExplorerCommandActivityArgs | AzureFunctionActivityArgs | AzureMLBatchExecutionActivityArgs | AzureMLExecutePipelineActivityArgs | AzureMLUpdateResourceActivityArgs | ControlActivityArgs | CopyActivityArgs | CustomActivityArgs | DataLakeAnalyticsUSQLActivityArgs | DatabricksNotebookActivityArgs | DatabricksSparkJarActivityArgs | DatabricksSparkPythonActivityArgs | DeleteActivityArgs | ExecuteDataFlowActivityArgs | ExecutePipelineActivityArgs | ExecuteSSISPackageActivityArgs | ExecuteWranglingDataflowActivityArgs | ExecutionActivityArgs | FailActivityArgs | FilterActivityArgs | ForEachActivityArgs | GetMetadataActivityArgs | HDInsightHiveActivityArgs | HDInsightMapReduceActivityArgs | HDInsightPigActivityArgs | HDInsightSparkActivityArgs | HDInsightStreamingActivityArgs | IfConditionActivityArgs | LookupActivityArgs | ScriptActivityArgs | SetVariableActivityArgs | SqlServerStoredProcedureActivityArgs | SwitchActivityArgs | SynapseNotebookActivityArgs | SynapseSparkJobDefinitionActivityArgs | UntilActivityArgs | ValidationActivityArgs | WaitActivityArgs | WebActivityArgs | WebHookActivityArgs>[]>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'IfCondition'.
     */
    type: pulumi.Input<"IfCondition">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Impala server linked service.
 */
export interface ImpalaLinkedServiceArgs {
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
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to use.
     */
    authenticationType: pulumi.Input<string | enums.ImpalaAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specify whether to enable server SSL certificate validation when you connect.Always use System Trust Store (for V2 only). The default value is true.
     */
    enableServerCertificateValidation?: any;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The IP address or host name of the Impala server. (i.e. 192.168.222.160)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name when using UsernameAndPassword.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The TCP port that the Impala server uses to listen for client connections. The default value is 21050.
     */
    port?: any;
    /**
     * The transport protocol to use in the Thrift layer (for V2 only). Default value is Binary.
     */
    thriftTransportProtocol?: pulumi.Input<string | enums.ImpalaThriftTransportProtocol>;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'Impala'.
     */
    type: pulumi.Input<"Impala">;
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
    version?: pulumi.Input<string>;
}

/**
 * Impala server dataset.
 */
export interface ImpalaObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"ImpalaObject">;
}

/**
 * A copy activity Impala server source.
 */
export interface ImpalaSourceArgs {
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
    type: pulumi.Input<"ImpalaSource">;
}

/**
 * Informix linked service.
 */
export interface InformixLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
     */
    connectionString: any;
    /**
     * The access credential portion of the connection string specified in driver-specific property-value format.
     */
    credential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for Basic authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Informix'.
     */
    type: pulumi.Input<"Informix">;
    /**
     * User name for Basic authentication. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Informix sink.
 */
export interface InformixSinkArgs {
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
    type: pulumi.Input<"InformixSink">;
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
export interface InformixSourceArgs {
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
    type: pulumi.Input<"InformixSource">;
}

/**
 * The Informix table dataset.
 */
export interface InformixTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"InformixTable">;
}

/**
 * The compute resource properties for managed integration runtime.
 */
export interface IntegrationRuntimeComputePropertiesArgs {
    /**
     * CopyComputeScale properties for managed integration runtime.
     */
    copyComputeScaleProperties?: pulumi.Input<CopyComputeScalePropertiesArgs>;
    /**
     * Data flow properties for managed integration runtime.
     */
    dataFlowProperties?: pulumi.Input<IntegrationRuntimeDataFlowPropertiesArgs>;
    /**
     * The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
     */
    location?: pulumi.Input<string>;
    /**
     * Maximum parallel executions count per node for managed integration runtime.
     */
    maxParallelExecutionsPerNode?: pulumi.Input<number>;
    /**
     * The node size requirement to managed integration runtime.
     */
    nodeSize?: pulumi.Input<string>;
    /**
     * The required number of nodes for managed integration runtime.
     */
    numberOfNodes?: pulumi.Input<number>;
    /**
     * PipelineExternalComputeScale properties for managed integration runtime.
     */
    pipelineExternalComputeScaleProperties?: pulumi.Input<PipelineExternalComputeScalePropertiesArgs>;
    /**
     * VNet properties for managed integration runtime.
     */
    vNetProperties?: pulumi.Input<IntegrationRuntimeVNetPropertiesArgs>;
}

/**
 * Custom setup script properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeCustomSetupScriptPropertiesArgs {
    /**
     * The URI of the Azure blob container that contains the custom setup script.
     */
    blobContainerUri?: pulumi.Input<string>;
    /**
     * The SAS token of the Azure blob container.
     */
    sasToken?: pulumi.Input<SecureStringArgs>;
}

/**
 * The definition and properties of virtual network to which Azure-SSIS integration runtime will join.
 */
export interface IntegrationRuntimeCustomerVirtualNetworkArgs {
    /**
     * The ID of subnet to which Azure-SSIS integration runtime will join.
     */
    subnetId?: pulumi.Input<string>;
}

/**
 * Data flow properties for managed integration runtime.
 */
export interface IntegrationRuntimeDataFlowPropertiesArgs {
    /**
     * Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as false. Default is true.
     */
    cleanup?: pulumi.Input<boolean>;
    /**
     * Compute type of the cluster which will execute data flow job.
     */
    computeType?: pulumi.Input<string | enums.DataFlowComputeType>;
    /**
     * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
     */
    coreCount?: pulumi.Input<number>;
    /**
     * Custom properties are used to tune the data flow runtime performance.
     */
    customProperties?: pulumi.Input<pulumi.Input<IntegrationRuntimeDataFlowPropertiesCustomPropertiesArgs>[]>;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job.
     */
    timeToLive?: pulumi.Input<number>;
}

export interface IntegrationRuntimeDataFlowPropertiesCustomPropertiesArgs {
    /**
     * Name of custom property.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of custom property.
     */
    value?: pulumi.Input<string>;
}

/**
 * Data proxy properties for a managed dedicated integration runtime.
 */
export interface IntegrationRuntimeDataProxyPropertiesArgs {
    /**
     * The self-hosted integration runtime reference.
     */
    connectVia?: pulumi.Input<EntityReferenceArgs>;
    /**
     * The path to contain the staged data in the Blob storage.
     */
    path?: pulumi.Input<string>;
    /**
     * The staging linked service reference.
     */
    stagingLinkedService?: pulumi.Input<EntityReferenceArgs>;
}

/**
 * Integration runtime reference type.
 */
export interface IntegrationRuntimeReferenceArgs {
    /**
     * Arguments for integration runtime.
     */
    parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Reference integration runtime name.
     */
    referenceName: pulumi.Input<string>;
    /**
     * Type of integration runtime.
     */
    type: pulumi.Input<string>;
}

/**
 * Catalog information for managed dedicated integration runtime.
 */
export interface IntegrationRuntimeSsisCatalogInfoArgs {
    /**
     * The password of the administrator user account of the catalog database.
     */
    catalogAdminPassword?: pulumi.Input<SecureStringArgs>;
    /**
     * The administrator user name of catalog database.
     */
    catalogAdminUserName?: pulumi.Input<string>;
    /**
     * The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
     */
    catalogPricingTier?: pulumi.Input<string | enums.IntegrationRuntimeSsisCatalogPricingTier>;
    /**
     * The catalog database server URL.
     */
    catalogServerEndpoint?: pulumi.Input<string>;
    /**
     * The dual standby pair name of Azure-SSIS Integration Runtimes to support SSISDB failover.
     */
    dualStandbyPairName?: pulumi.Input<string>;
}

/**
 * SSIS properties for managed integration runtime.
 */
export interface IntegrationRuntimeSsisPropertiesArgs {
    /**
     * Catalog information for managed dedicated integration runtime.
     */
    catalogInfo?: pulumi.Input<IntegrationRuntimeSsisCatalogInfoArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Custom setup script properties for a managed dedicated integration runtime.
     */
    customSetupScriptProperties?: pulumi.Input<IntegrationRuntimeCustomSetupScriptPropertiesArgs>;
    /**
     * Data proxy properties for a managed dedicated integration runtime.
     */
    dataProxyProperties?: pulumi.Input<IntegrationRuntimeDataProxyPropertiesArgs>;
    /**
     * The edition for the SSIS Integration Runtime
     */
    edition?: pulumi.Input<string | enums.IntegrationRuntimeEdition>;
    /**
     * Custom setup without script properties for a SSIS integration runtime.
     */
    expressCustomSetupProperties?: pulumi.Input<pulumi.Input<AzPowerShellSetupArgs | CmdkeySetupArgs | ComponentSetupArgs | EnvironmentVariableSetupArgs>[]>;
    /**
     * License type for bringing your own license scenario.
     */
    licenseType?: pulumi.Input<string | enums.IntegrationRuntimeLicenseType>;
    /**
     * Package stores for the SSIS Integration Runtime.
     */
    packageStores?: pulumi.Input<pulumi.Input<PackageStoreArgs>[]>;
}

/**
 * VNet properties for managed integration runtime.
 */
export interface IntegrationRuntimeVNetPropertiesArgs {
    /**
     * Resource IDs of the public IP addresses that this integration runtime will use.
     */
    publicIPs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the subnet this integration runtime will join.
     */
    subnet?: pulumi.Input<string>;
    /**
     * The ID of subnet, to which this Azure-SSIS integration runtime will be joined.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * The ID of the VNet that this integration runtime will join.
     */
    vNetId?: pulumi.Input<string>;
}

/**
 * Jira Service linked service.
 */
export interface JiraLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The IP address or host name of the Jira service. (e.g. jira.example.com)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name that you provided in the username field.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP.
     */
    port?: any;
    /**
     * Type of linked service.
     * Expected value is 'Jira'.
     */
    type: pulumi.Input<"Jira">;
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
    version?: pulumi.Input<string>;
}

/**
 * Jira Service dataset.
 */
export interface JiraObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"JiraObject">;
}

/**
 * A copy activity Jira Service source.
 */
export interface JiraSourceArgs {
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
    type: pulumi.Input<"JiraSource">;
}

/**
 * Json dataset.
 */
export interface JsonDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used for the json dataset.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
     */
    encodingName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the json data storage.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Json">;
}

/**
 * The data stored in JSON format.
 */
export interface JsonFormatArgs {
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
    type: pulumi.Input<"JsonFormat">;
}

/**
 * Json read settings.
 */
export interface JsonReadSettingsArgs {
    /**
     * Compression settings.
     */
    compressionProperties?: pulumi.Input<TarGZipReadSettingsArgs | TarReadSettingsArgs | ZipDeflateReadSettingsArgs>;
    /**
     * The read setting type.
     * Expected value is 'JsonReadSettings'.
     */
    type: pulumi.Input<"JsonReadSettings">;
}

/**
 * A copy activity Json sink.
 */
export interface JsonSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Json format settings.
     */
    formatSettings?: pulumi.Input<JsonWriteSettingsArgs>;
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
    storeSettings?: pulumi.Input<AzureBlobFSWriteSettingsArgs | AzureBlobStorageWriteSettingsArgs | AzureDataLakeStoreWriteSettingsArgs | AzureFileStorageWriteSettingsArgs | FileServerWriteSettingsArgs | LakeHouseWriteSettingsArgs | SftpWriteSettingsArgs>;
    /**
     * Copy sink type.
     * Expected value is 'JsonSink'.
     */
    type: pulumi.Input<"JsonSink">;
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
export interface JsonSourceArgs {
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
    formatSettings?: pulumi.Input<JsonReadSettingsArgs>;
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
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Copy source type.
     * Expected value is 'JsonSource'.
     */
    type: pulumi.Input<"JsonSource">;
}

/**
 * Json write settings.
 */
export interface JsonWriteSettingsArgs {
    /**
     * File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive.
     */
    filePattern?: any;
    /**
     * The write setting type.
     * Expected value is 'JsonWriteSettings'.
     */
    type: pulumi.Input<"JsonWriteSettings">;
}

/**
 * Microsoft Fabric Lakehouse linked service.
 */
export interface LakeHouseLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The ID of Microsoft Fabric Lakehouse artifact. Type: string (or Expression with resultType string).
     */
    artifactId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'Lakehouse'.
     */
    type: pulumi.Input<"Lakehouse">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
    /**
     * The ID of Microsoft Fabric workspace. Type: string (or Expression with resultType string).
     */
    workspaceId?: any;
}

/**
 * The location of Microsoft Fabric Lakehouse Files dataset.
 */
export interface LakeHouseLocationArgs {
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
    type: pulumi.Input<"LakeHouseLocation">;
}

/**
 * Microsoft Fabric Lakehouse Files read settings.
 */
export interface LakeHouseReadSettingsArgs {
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
    type: pulumi.Input<"LakeHouseReadSettings">;
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
export interface LakeHouseTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"LakehouseTable">;
}

/**
 * A copy activity for Microsoft Fabric Lakehouse Table sink.
 */
export interface LakeHouseTableSinkArgs {
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
    type: pulumi.Input<"LakeHouseTableSink">;
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
export interface LakeHouseTableSourceArgs {
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
    type: pulumi.Input<"LakeHouseTableSource">;
    /**
     * Query an older snapshot by version. Type: integer (or Expression with resultType integer).
     */
    versionAsOf?: any;
}

/**
 * Microsoft Fabric Lakehouse Files write settings.
 */
export interface LakeHouseWriteSettingsArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
    /**
     * The write setting type.
     * Expected value is 'LakeHouseWriteSettings'.
     */
    type: pulumi.Input<"LakeHouseWriteSettings">;
}

/**
 * The key authorization type integration runtime.
 */
export interface LinkedIntegrationRuntimeKeyAuthorizationArgs {
    /**
     * The authorization type for integration runtime sharing.
     * Expected value is 'Key'.
     */
    authorizationType: pulumi.Input<"Key">;
    /**
     * The key used for authorization.
     */
    key: pulumi.Input<SecureStringArgs>;
}

/**
 * The role based access control (RBAC) authorization type integration runtime.
 */
export interface LinkedIntegrationRuntimeRbacAuthorizationArgs {
    /**
     * The authorization type for integration runtime sharing.
     * Expected value is 'RBAC'.
     */
    authorizationType: pulumi.Input<"RBAC">;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The resource identifier of the integration runtime to be shared.
     */
    resourceId: pulumi.Input<string>;
}

/**
 * Linked service reference type.
 */
export interface LinkedServiceReferenceArgs {
    /**
     * Arguments for LinkedService.
     */
    parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Reference LinkedService name.
     */
    referenceName: pulumi.Input<string>;
    /**
     * Linked service reference type.
     */
    type: pulumi.Input<string | enums.Type>;
}

/**
 * Log location settings.
 */
export interface LogLocationSettingsArgs {
    /**
     * Log storage linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string).
     */
    path?: any;
}

/**
 * Log settings.
 */
export interface LogSettingsArgs {
    /**
     * Specifies settings for copy activity log.
     */
    copyActivityLogSettings?: pulumi.Input<CopyActivityLogSettingsArgs>;
    /**
     * Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean).
     */
    enableCopyActivityLog?: any;
    /**
     * Log location settings customer needs to provide when enabling log.
     */
    logLocationSettings: pulumi.Input<LogLocationSettingsArgs>;
}

/**
 * (Deprecated. Please use LogSettings) Log storage settings.
 */
export interface LogStorageSettingsArgs {
    /**
     * Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean).
     */
    enableReliableLogging?: any;
    /**
     * Log storage linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
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
export interface LookupActivityArgs {
    /**
     * Lookup activity dataset reference.
     */
    dataset: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean).
     */
    firstRowOnly?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Dataset-specific source properties, same as copy activity source.
     */
    source: pulumi.Input<AmazonMWSSourceArgs | AmazonRdsForOracleSourceArgs | AmazonRdsForSqlServerSourceArgs | AmazonRedshiftSourceArgs | AvroSourceArgs | AzureBlobFSSourceArgs | AzureDataExplorerSourceArgs | AzureDataLakeStoreSourceArgs | AzureDatabricksDeltaLakeSourceArgs | AzureMariaDBSourceArgs | AzureMySqlSourceArgs | AzurePostgreSqlSourceArgs | AzureSqlSourceArgs | AzureTableSourceArgs | BinarySourceArgs | BlobSourceArgs | CassandraSourceArgs | CommonDataServiceForAppsSourceArgs | ConcurSourceArgs | CosmosDbMongoDbApiSourceArgs | CosmosDbSqlApiSourceArgs | CouchbaseSourceArgs | Db2SourceArgs | DelimitedTextSourceArgs | DocumentDbCollectionSourceArgs | DrillSourceArgs | DynamicsAXSourceArgs | DynamicsCrmSourceArgs | DynamicsSourceArgs | EloquaSourceArgs | ExcelSourceArgs | FileSystemSourceArgs | GoogleAdWordsSourceArgs | GoogleBigQuerySourceArgs | GoogleBigQueryV2SourceArgs | GreenplumSourceArgs | HBaseSourceArgs | HdfsSourceArgs | HiveSourceArgs | HttpSourceArgs | HubspotSourceArgs | ImpalaSourceArgs | InformixSourceArgs | JiraSourceArgs | JsonSourceArgs | LakeHouseTableSourceArgs | MagentoSourceArgs | MariaDBSourceArgs | MarketoSourceArgs | MicrosoftAccessSourceArgs | MongoDbAtlasSourceArgs | MongoDbSourceArgs | MongoDbV2SourceArgs | MySqlSourceArgs | NetezzaSourceArgs | ODataSourceArgs | OdbcSourceArgs | Office365SourceArgs | OracleServiceCloudSourceArgs | OracleSourceArgs | OrcSourceArgs | ParquetSourceArgs | PaypalSourceArgs | PhoenixSourceArgs | PostgreSqlSourceArgs | PostgreSqlV2SourceArgs | PrestoSourceArgs | QuickBooksSourceArgs | RelationalSourceArgs | ResponsysSourceArgs | RestSourceArgs | SalesforceMarketingCloudSourceArgs | SalesforceServiceCloudSourceArgs | SalesforceServiceCloudV2SourceArgs | SalesforceSourceArgs | SalesforceV2SourceArgs | SapBwSourceArgs | SapCloudForCustomerSourceArgs | SapEccSourceArgs | SapHanaSourceArgs | SapOdpSourceArgs | SapOpenHubSourceArgs | SapTableSourceArgs | ServiceNowSourceArgs | ServiceNowV2SourceArgs | SharePointOnlineListSourceArgs | ShopifySourceArgs | SnowflakeSourceArgs | SnowflakeV2SourceArgs | SparkSourceArgs | SqlDWSourceArgs | SqlMISourceArgs | SqlServerSourceArgs | SqlSourceArgs | SquareSourceArgs | SybaseSourceArgs | TabularSourceArgs | TeradataSourceArgs | VerticaSourceArgs | WarehouseSourceArgs | WebSourceArgs | XeroSourceArgs | XmlSourceArgs | ZohoSourceArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Lookup'.
     */
    type: pulumi.Input<"Lookup">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Magento server linked service.
 */
export interface MagentoLinkedServiceArgs {
    /**
     * The access token from Magento.
     */
    accessToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The URL of the Magento instance. (i.e. 192.168.222.110/magento3)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Magento'.
     */
    type: pulumi.Input<"Magento">;
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
    version?: pulumi.Input<string>;
}

/**
 * Magento server dataset.
 */
export interface MagentoObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"MagentoObject">;
}

/**
 * A copy activity Magento server source.
 */
export interface MagentoSourceArgs {
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
    type: pulumi.Input<"MagentoSource">;
}

/**
 * Managed identity credential.
 */
export interface ManagedIdentityCredentialArgs {
    /**
     * List of tags that can be used for describing the Credential.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Credential description.
     */
    description?: pulumi.Input<string>;
    /**
     * The resource id of user assigned managed identity
     */
    resourceId?: pulumi.Input<string>;
    /**
     * Type of credential.
     * Expected value is 'ManagedIdentity'.
     */
    type: pulumi.Input<"ManagedIdentity">;
}

/**
 * Managed integration runtime, including managed elastic and managed dedicated integration runtimes.
 */
export interface ManagedIntegrationRuntimeArgs {
    /**
     * The compute resource for managed integration runtime.
     */
    computeProperties?: pulumi.Input<IntegrationRuntimeComputePropertiesArgs>;
    /**
     * The name of virtual network to which Azure-SSIS integration runtime will join
     */
    customerVirtualNetwork?: pulumi.Input<IntegrationRuntimeCustomerVirtualNetworkArgs>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * Managed Virtual Network reference.
     */
    managedVirtualNetwork?: pulumi.Input<ManagedVirtualNetworkReferenceArgs>;
    /**
     * SSIS properties for managed integration runtime.
     */
    ssisProperties?: pulumi.Input<IntegrationRuntimeSsisPropertiesArgs>;
    /**
     * The type of integration runtime.
     * Expected value is 'Managed'.
     */
    type: pulumi.Input<"Managed">;
}

/**
 * Properties of a managed private endpoint
 */
export interface ManagedPrivateEndpointArgs {
    /**
     * Fully qualified domain names
     */
    fqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The groupId to which the managed private endpoint is created
     */
    groupId?: pulumi.Input<string>;
    /**
     * The ARM resource ID of the resource to which the managed private endpoint is created
     */
    privateLinkResourceId?: pulumi.Input<string>;
}

/**
 * Managed Virtual Network reference type.
 */
export interface ManagedVirtualNetworkReferenceArgs {
    /**
     * Reference ManagedVirtualNetwork name.
     */
    referenceName: pulumi.Input<string>;
    /**
     * Managed Virtual Network reference type.
     */
    type: pulumi.Input<string | enums.ManagedVirtualNetworkReferenceType>;
}

/**
 * Source and target column mapping details.
 */
export interface MapperAttributeMappingArgs {
    /**
     * Reference of the source column used in the mapping. It is used for 'Direct' mapping type only.
     */
    attributeReference?: pulumi.Input<MapperAttributeReferenceArgs>;
    /**
     * List of references for source columns. It is used for 'Derived' and 'Aggregate' type mappings only.
     */
    attributeReferences?: pulumi.Input<pulumi.Input<MapperAttributeReferenceArgs>[]>;
    /**
     * Expression used for 'Aggregate' and 'Derived' type mapping.
     */
    expression?: pulumi.Input<string>;
    /**
     * Name of the function used for 'Aggregate' and 'Derived' (except 'Advanced') type mapping.
     */
    functionName?: pulumi.Input<string>;
    /**
     * Name of the target column.
     */
    name?: pulumi.Input<string>;
    /**
     * Type of the CDC attribute mapping. Note: 'Advanced' mapping type is also saved as 'Derived'.
     */
    type?: pulumi.Input<string | enums.MappingType>;
}

/**
 * Attribute mapping details.
 */
export interface MapperAttributeMappingsArgs {
    /**
     * List of attribute mappings.
     */
    attributeMappings?: pulumi.Input<pulumi.Input<MapperAttributeMappingArgs>[]>;
}

/**
 * Attribute reference details for the referred column.
 */
export interface MapperAttributeReferenceArgs {
    /**
     * Name of the table.
     */
    entity?: pulumi.Input<string>;
    /**
     * The connection reference for the connection.
     */
    entityConnectionReference?: pulumi.Input<MapperConnectionReferenceArgs>;
    /**
     * Name of the column.
     */
    name?: pulumi.Input<string>;
}

/**
 * Source connection details.
 */
export interface MapperConnectionArgs {
    /**
     * List of name/value pairs for connection properties.
     */
    commonDslConnectorProperties?: pulumi.Input<pulumi.Input<MapperDslConnectorPropertiesArgs>[]>;
    /**
     * A boolean indicating whether linked service is of type inline dataset. Currently only inline datasets are supported.
     */
    isInlineDataset?: pulumi.Input<boolean>;
    /**
     * Linked service reference.
     */
    linkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Type of the linked service e.g.: AzureBlobFS.
     */
    linkedServiceType?: pulumi.Input<string>;
    /**
     * Type of connection via linked service or dataset.
     */
    type: pulumi.Input<string | enums.ConnectionType>;
}

/**
 * Source or target connection reference details.
 */
export interface MapperConnectionReferenceArgs {
    /**
     * Name of the connection
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Type of connection via linked service or dataset.
     */
    type?: pulumi.Input<string | enums.ConnectionType>;
}

/**
 * Connector properties of a CDC table in terms of name / value pairs.
 */
export interface MapperDslConnectorPropertiesArgs {
    /**
     * Name of the property.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the property.
     */
    value?: any;
}

/**
 * CDC Policy.
 */
export interface MapperPolicyArgs {
    /**
     * Mode of running the CDC: batch vs continuous.
     */
    mode?: pulumi.Input<string>;
    /**
     * Defines the frequency and interval for running the CDC for batch mode.
     */
    recurrence?: pulumi.Input<MapperPolicyRecurrenceArgs>;
}

/**
 * CDC policy recurrence details.
 */
export interface MapperPolicyRecurrenceArgs {
    /**
     * Frequency of period in terms of 'Hour', 'Minute' or 'Second'.
     */
    frequency?: pulumi.Input<string | enums.FrequencyType>;
    /**
     * Actual interval value as per chosen frequency.
     */
    interval?: pulumi.Input<number>;
}

/**
 * A object which contains list of tables and connection details for a source connection.
 */
export interface MapperSourceConnectionsInfoArgs {
    /**
     * Source connection details.
     */
    connection?: pulumi.Input<MapperConnectionArgs>;
    /**
     * List of source tables for a source connection.
     */
    sourceEntities?: pulumi.Input<pulumi.Input<MapperTableArgs>[]>;
}

/**
 * CDC table details.
 */
export interface MapperTableArgs {
    /**
     * List of name/value pairs for connection properties.
     */
    dslConnectorProperties?: pulumi.Input<pulumi.Input<MapperDslConnectorPropertiesArgs>[]>;
    /**
     * Name of the table.
     */
    name?: pulumi.Input<string>;
    /**
     * List of columns for the source table.
     */
    schema?: pulumi.Input<pulumi.Input<MapperTableSchemaArgs>[]>;
}

/**
 * Schema of a CDC table in terms of column names and their corresponding data types.
 */
export interface MapperTableSchemaArgs {
    /**
     * Data type of the column.
     */
    dataType?: pulumi.Input<string>;
    /**
     * Name of the column.
     */
    name?: pulumi.Input<string>;
}

/**
 * A object which contains list of tables and connection details for a target connection.
 */
export interface MapperTargetConnectionsInfoArgs {
    /**
     * Source connection details.
     */
    connection?: pulumi.Input<MapperConnectionArgs>;
    /**
     * List of table mappings.
     */
    dataMapperMappings?: pulumi.Input<pulumi.Input<DataMapperMappingArgs>[]>;
    /**
     * List of relationship info among the tables.
     */
    relationships?: pulumi.Input<any[]>;
    /**
     * List of source tables for a target connection.
     */
    targetEntities?: pulumi.Input<pulumi.Input<MapperTableArgs>[]>;
}

/**
 * Mapping data flow.
 */
export interface MappingDataFlowArgs {
    /**
     * List of tags that can be used for describing the data flow.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The description of the data flow.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
     */
    folder?: pulumi.Input<DataFlowFolderArgs>;
    /**
     * DataFlow script.
     */
    script?: pulumi.Input<string>;
    /**
     * Data flow script lines.
     */
    scriptLines?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of sinks in data flow.
     */
    sinks?: pulumi.Input<pulumi.Input<DataFlowSinkArgs>[]>;
    /**
     * List of sources in data flow.
     */
    sources?: pulumi.Input<pulumi.Input<DataFlowSourceArgs>[]>;
    /**
     * List of transformations in data flow.
     */
    transformations?: pulumi.Input<pulumi.Input<TransformationArgs>[]>;
    /**
     * Type of data flow.
     * Expected value is 'MappingDataFlow'.
     */
    type: pulumi.Input<"MappingDataFlow">;
}

/**
 * MariaDB server linked service.
 */
export interface MariaDBLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * The version of the MariaDB driver. Type: string. V1 or empty for legacy driver, V2 for new driver. V1 can support connection string and property bag, V2 can only support connection string. The legacy driver is scheduled for deprecation by October 2024.
     */
    driverVersion?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    type: pulumi.Input<"MariaDB">;
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
    version?: pulumi.Input<string>;
}

/**
 * A copy activity MariaDB server source.
 */
export interface MariaDBSourceArgs {
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
    type: pulumi.Input<"MariaDBSource">;
}

/**
 * MariaDB server dataset.
 */
export interface MariaDBTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"MariaDBTable">;
}

/**
 * Marketo server linked service.
 */
export interface MarketoLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The client Id of your Marketo service.
     */
    clientId: any;
    /**
     * The client secret of your Marketo service.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com)
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Marketo'.
     */
    type: pulumi.Input<"Marketo">;
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
    version?: pulumi.Input<string>;
}

/**
 * Marketo server dataset.
 */
export interface MarketoObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"MarketoObject">;
}

/**
 * A copy activity Marketo server source.
 */
export interface MarketoSourceArgs {
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
    type: pulumi.Input<"MarketoSource">;
}

/**
 * Specify the name and value of custom metadata item.
 */
export interface MetadataItemArgs {
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
export interface MicrosoftAccessLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
     */
    connectionString: any;
    /**
     * The access credential portion of the connection string specified in driver-specific property-value format.
     */
    credential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for Basic authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'MicrosoftAccess'.
     */
    type: pulumi.Input<"MicrosoftAccess">;
    /**
     * User name for Basic authentication. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Microsoft Access sink.
 */
export interface MicrosoftAccessSinkArgs {
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
    type: pulumi.Input<"MicrosoftAccessSink">;
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
export interface MicrosoftAccessSourceArgs {
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
    type: pulumi.Input<"MicrosoftAccessSource">;
}

/**
 * The Microsoft Access table dataset.
 */
export interface MicrosoftAccessTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"MicrosoftAccessTable">;
}

/**
 * The MongoDB Atlas database dataset.
 */
export interface MongoDbAtlasCollectionDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string).
     */
    collection: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"MongoDbAtlasCollection">;
}

/**
 * Linked service for MongoDB Atlas data source.
 */
export interface MongoDbAtlasLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * The driver version that you want to choose. Allowed value are v1 and v2. Type: string (or Expression with resultType string).
     */
    driverVersion?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'MongoDbAtlas'.
     */
    type: pulumi.Input<"MongoDbAtlas">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity MongoDB Atlas sink.
 */
export interface MongoDbAtlasSinkArgs {
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
    type: pulumi.Input<"MongoDbAtlasSink">;
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
export interface MongoDbAtlasSourceArgs {
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
    cursorMethods?: pulumi.Input<MongoDbCursorMethodsPropertiesArgs>;
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
    type: pulumi.Input<"MongoDbAtlasSource">;
}

/**
 * The MongoDB database dataset.
 */
export interface MongoDbCollectionDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The table name of the MongoDB database. Type: string (or Expression with resultType string).
     */
    collectionName: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"MongoDbCollection">;
}

/**
 * Cursor methods for Mongodb query
 */
export interface MongoDbCursorMethodsPropertiesArgs {
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
export interface MongoDbLinkedServiceArgs {
    /**
     * Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    allowSelfSignedServerCert?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Database to verify the username and password. Type: string (or Expression with resultType string).
     */
    authSource?: any;
    /**
     * The authentication type to be used to connect to the MongoDB database.
     */
    authenticationType?: pulumi.Input<string | enums.MongoDbAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string).
     */
    databaseName: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean).
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"MongoDb">;
    /**
     * Username for authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for a MongoDB database.
 */
export interface MongoDbSourceArgs {
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
    type: pulumi.Input<"MongoDbSource">;
}

/**
 * The MongoDB database dataset.
 */
export interface MongoDbV2CollectionDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The collection name of the MongoDB database. Type: string (or Expression with resultType string).
     */
    collection: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"MongoDbV2Collection">;
}

/**
 * Linked service for MongoDB data source.
 */
export interface MongoDbV2LinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'MongoDbV2'.
     */
    type: pulumi.Input<"MongoDbV2">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity MongoDB sink.
 */
export interface MongoDbV2SinkArgs {
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
    type: pulumi.Input<"MongoDbV2Sink">;
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
export interface MongoDbV2SourceArgs {
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
    cursorMethods?: pulumi.Input<MongoDbCursorMethodsPropertiesArgs>;
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
    type: pulumi.Input<"MongoDbV2Source">;
}

/**
 * Base class for all triggers that support one to many model for trigger to pipeline.
 */
export interface MultiplePipelineTriggerArgs {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Trigger description.
     */
    description?: pulumi.Input<string>;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: pulumi.Input<pulumi.Input<TriggerPipelineReferenceArgs>[]>;
    /**
     * Trigger type.
     * Expected value is 'MultiplePipelineTrigger'.
     */
    type: pulumi.Input<"MultiplePipelineTrigger">;
}

/**
 * Linked service for MySQL data source.
 */
export interface MySqlLinkedServiceArgs {
    /**
     * This allows the special “zero” date value 0000-00-00 to be retrieved from the database. Type: boolean.
     */
    allowZeroDateTime?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * The version of the MySQL driver. Type: string. V1 or empty for legacy driver, V2 for new driver. V1 can support connection string and property bag, V2 can only support connection string.
     */
    driverVersion?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Determines which column type (if any) should be read as a GUID. Type: string. None: No column types are automatically read as a Guid; Char36: All CHAR(36) columns are read/written as a Guid using lowercase hex with hyphens, which matches UUID.
     */
    guidFormat?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    type: pulumi.Input<"MySql">;
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
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for MySQL databases.
 */
export interface MySqlSourceArgs {
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
    type: pulumi.Input<"MySqlSource">;
}

/**
 * The MySQL table dataset.
 */
export interface MySqlTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"MySqlTable">;
}

/**
 * Netezza linked service.
 */
export interface NetezzaLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Netezza'.
     */
    type: pulumi.Input<"Netezza">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The settings that will be leveraged for Netezza source partitioning.
 */
export interface NetezzaPartitionSettingsArgs {
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
export interface NetezzaSourceArgs {
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
    partitionSettings?: pulumi.Input<NetezzaPartitionSettingsArgs>;
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
    type: pulumi.Input<"NetezzaSource">;
}

/**
 * Netezza dataset.
 */
export interface NetezzaTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"NetezzaTable">;
}

/**
 * Notebook parameter.
 */
export interface NotebookParameterArgs {
    /**
     * Notebook parameter type.
     */
    type?: pulumi.Input<string | enums.NotebookParameterType>;
    /**
     * Notebook parameter value. Type: string (or Expression with resultType string).
     */
    value?: any;
}

/**
 * Open Data Protocol (OData) linked service.
 */
export interface ODataLinkedServiceArgs {
    /**
     * Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string).
     */
    aadResourceId?: any;
    /**
     * Specify the credential type (key or cert) is used for service principal.
     */
    aadServicePrincipalCredentialType?: pulumi.Input<string | enums.ODataAadServicePrincipalCredentialType>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The additional HTTP headers in the request to RESTful API used for authorization. Type: key value pairs (value should be string type).
     */
    authHeaders?: any;
    /**
     * Type of authentication used to connect to the OData service.
     */
    authenticationType?: pulumi.Input<string | enums.ODataAuthenticationType>;
    /**
     * Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
     */
    azureCloudType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password of the OData service.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCert?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'OData'.
     */
    type: pulumi.Input<"OData">;
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
    version?: pulumi.Input<string>;
}

/**
 * The Open Data Protocol (OData) resource dataset.
 */
export interface ODataResourceDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"ODataResource">;
}

/**
 * A copy activity source for OData source.
 */
export interface ODataSourceArgs {
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
    type: pulumi.Input<"ODataSource">;
}

/**
 * Open Database Connectivity (ODBC) linked service.
 */
export interface OdbcLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string).
     */
    authenticationType?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, or SecureString, or AzureKeyVaultSecretReference, or Expression with resultType string.
     */
    connectionString: any;
    /**
     * The access credential portion of the connection string specified in driver-specific property-value format.
     */
    credential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for Basic authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Odbc'.
     */
    type: pulumi.Input<"Odbc">;
    /**
     * User name for Basic authentication. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity ODBC sink.
 */
export interface OdbcSinkArgs {
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
    type: pulumi.Input<"OdbcSink">;
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
export interface OdbcSourceArgs {
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
    type: pulumi.Input<"OdbcSource">;
}

/**
 * The ODBC table dataset.
 */
export interface OdbcTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"OdbcTable">;
}

/**
 * The Office365 account.
 */
export interface Office365DatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Office365Table">;
}

/**
 * Office365 linked service.
 */
export interface Office365LinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string).
     */
    office365TenantId: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The service principal credential type for authentication.'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. If not specified, 'ServicePrincipalKey' is in use. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCert?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the application's client ID. Type: string (or Expression with resultType string).
     */
    servicePrincipalId: any;
    /**
     * Specify the application's key.
     */
    servicePrincipalKey: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string).
     */
    servicePrincipalTenantId: any;
    /**
     * Type of linked service.
     * Expected value is 'Office365'.
     */
    type: pulumi.Input<"Office365">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for an Office 365 service.
 */
export interface Office365SourceArgs {
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
    type: pulumi.Input<"Office365Source">;
    /**
     * The user scope uri. Type: string (or Expression with resultType string).
     */
    userScopeFilterUri?: any;
}

/**
 * Linked service for Oracle Cloud Storage.
 */
export interface OracleCloudStorageLinkedServiceArgs {
    /**
     * The access key identifier of the Oracle Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string).
     */
    accessKeyId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The secret access key of the Oracle Cloud Storage Identity and Access Management (IAM) user.
     */
    secretAccessKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * This value specifies the endpoint to access with the Oracle Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string).
     */
    serviceUrl?: any;
    /**
     * Type of linked service.
     * Expected value is 'OracleCloudStorage'.
     */
    type: pulumi.Input<"OracleCloudStorage">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The location of Oracle Cloud Storage dataset.
 */
export interface OracleCloudStorageLocationArgs {
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
    type: pulumi.Input<"OracleCloudStorageLocation">;
    /**
     * Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string).
     */
    version?: any;
}

/**
 * Oracle Cloud Storage read settings.
 */
export interface OracleCloudStorageReadSettingsArgs {
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
    type: pulumi.Input<"OracleCloudStorageReadSettings">;
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
export interface OracleLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Authentication type for connecting to the Oracle database. Only used for Version 2.0.
     */
    authenticationType?: pulumi.Input<string | enums.OracleAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * Specifies whether to use bulk copy or batch insert when loading data into the database, default value is true. Type: boolean. Only used for Version 2.0.
     */
    enableBulkLoad?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    type: pulumi.Input<"Oracle">;
    /**
     * The Oracle database username. Type: string. Only used for Version 2.0.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The settings that will be leveraged for Oracle source partitioning.
 */
export interface OraclePartitionSettingsArgs {
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
    partitionNames?: pulumi.Input<any[]>;
    /**
     * The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionUpperBound?: any;
}

/**
 * Oracle Service Cloud linked service.
 */
export interface OracleServiceCloudLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The URL of the Oracle Service Cloud instance.
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name that you provided in the username key.
     */
    password: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'OracleServiceCloud'.
     */
    type: pulumi.Input<"OracleServiceCloud">;
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
    version?: pulumi.Input<string>;
}

/**
 * Oracle Service Cloud dataset.
 */
export interface OracleServiceCloudObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"OracleServiceCloudObject">;
}

/**
 * A copy activity Oracle Service Cloud source.
 */
export interface OracleServiceCloudSourceArgs {
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
    type: pulumi.Input<"OracleServiceCloudSource">;
}

/**
 * A copy activity Oracle sink.
 */
export interface OracleSinkArgs {
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
    type: pulumi.Input<"OracleSink">;
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
export interface OracleSourceArgs {
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
    partitionSettings?: pulumi.Input<OraclePartitionSettingsArgs>;
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
    type: pulumi.Input<"OracleSource">;
}

/**
 * The on-premises Oracle database dataset.
 */
export interface OracleTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"OracleTable">;
}

/**
 * ORC dataset.
 */
export interface OrcDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the ORC data storage.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * The data orcCompressionCodec. Type: string (or Expression with resultType string).
     */
    orcCompressionCodec?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Orc">;
}

/**
 * The data stored in Optimized Row Columnar (ORC) format.
 */
export interface OrcFormatArgs {
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
    type: pulumi.Input<"OrcFormat">;
}

/**
 * A copy activity ORC sink.
 */
export interface OrcSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * ORC format settings.
     */
    formatSettings?: pulumi.Input<OrcWriteSettingsArgs>;
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
    storeSettings?: pulumi.Input<AzureBlobFSWriteSettingsArgs | AzureBlobStorageWriteSettingsArgs | AzureDataLakeStoreWriteSettingsArgs | AzureFileStorageWriteSettingsArgs | FileServerWriteSettingsArgs | LakeHouseWriteSettingsArgs | SftpWriteSettingsArgs>;
    /**
     * Copy sink type.
     * Expected value is 'OrcSink'.
     */
    type: pulumi.Input<"OrcSink">;
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
export interface OrcSourceArgs {
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
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Copy source type.
     * Expected value is 'OrcSource'.
     */
    type: pulumi.Input<"OrcSource">;
}

/**
 * Orc write settings.
 */
export interface OrcWriteSettingsArgs {
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
    type: pulumi.Input<"OrcWriteSettings">;
}

/**
 * Package store for the SSIS integration runtime.
 */
export interface PackageStoreArgs {
    /**
     * The name of the package store
     */
    name: pulumi.Input<string>;
    /**
     * The package store linked service reference.
     */
    packageStoreLinkedService: pulumi.Input<EntityReferenceArgs>;
}

/**
 * Definition of a single parameter for an entity.
 */
export interface ParameterSpecificationArgs {
    /**
     * Default value of parameter.
     */
    defaultValue?: any;
    /**
     * Parameter type.
     */
    type: pulumi.Input<string | enums.ParameterType>;
}

/**
 * Parquet dataset.
 */
export interface ParquetDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compressionCodec. Type: string (or Expression with resultType string).
     */
    compressionCodec?: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the parquet storage.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Parquet">;
}

/**
 * The data stored in Parquet format.
 */
export interface ParquetFormatArgs {
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
    type: pulumi.Input<"ParquetFormat">;
}

/**
 * Parquet read settings.
 */
export interface ParquetReadSettingsArgs {
    /**
     * Compression settings.
     */
    compressionProperties?: pulumi.Input<TarGZipReadSettingsArgs | TarReadSettingsArgs | ZipDeflateReadSettingsArgs>;
    /**
     * The read setting type.
     * Expected value is 'ParquetReadSettings'.
     */
    type: pulumi.Input<"ParquetReadSettings">;
}

/**
 * A copy activity Parquet sink.
 */
export interface ParquetSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Parquet format settings.
     */
    formatSettings?: pulumi.Input<ParquetWriteSettingsArgs>;
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
    storeSettings?: pulumi.Input<AzureBlobFSWriteSettingsArgs | AzureBlobStorageWriteSettingsArgs | AzureDataLakeStoreWriteSettingsArgs | AzureFileStorageWriteSettingsArgs | FileServerWriteSettingsArgs | LakeHouseWriteSettingsArgs | SftpWriteSettingsArgs>;
    /**
     * Copy sink type.
     * Expected value is 'ParquetSink'.
     */
    type: pulumi.Input<"ParquetSink">;
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
export interface ParquetSourceArgs {
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
    formatSettings?: pulumi.Input<ParquetReadSettingsArgs>;
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
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Copy source type.
     * Expected value is 'ParquetSource'.
     */
    type: pulumi.Input<"ParquetSource">;
}

/**
 * Parquet write settings.
 */
export interface ParquetWriteSettingsArgs {
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
    type: pulumi.Input<"ParquetWriteSettings">;
}

/**
 * Paypal Service linked service.
 */
export interface PaypalLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The client ID associated with your PayPal application.
     */
    clientId: any;
    /**
     * The client secret associated with your PayPal application.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The URL of the PayPal instance. (i.e. api.sandbox.paypal.com)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Paypal'.
     */
    type: pulumi.Input<"Paypal">;
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
    version?: pulumi.Input<string>;
}

/**
 * Paypal Service dataset.
 */
export interface PaypalObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"PaypalObject">;
}

/**
 * A copy activity Paypal Service source.
 */
export interface PaypalSourceArgs {
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
    type: pulumi.Input<"PaypalSource">;
}

/**
 * Phoenix server linked service.
 */
export interface PhoenixLinkedServiceArgs {
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
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication mechanism used to connect to the Phoenix server.
     */
    authenticationType: pulumi.Input<string | enums.PhoenixAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"Phoenix">;
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
    version?: pulumi.Input<string>;
}

/**
 * Phoenix server dataset.
 */
export interface PhoenixObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"PhoenixObject">;
}

/**
 * A copy activity Phoenix server source.
 */
export interface PhoenixSourceArgs {
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
    type: pulumi.Input<"PhoenixSource">;
}

/**
 * Pipeline ElapsedTime Metric Policy.
 */
export interface PipelineElapsedTimeMetricPolicyArgs {
    /**
     * TimeSpan value, after which an Azure Monitoring Metric is fired.
     */
    duration?: any;
}

/**
 * PipelineExternalComputeScale properties for managed integration runtime.
 */
export interface PipelineExternalComputeScalePropertiesArgs {
    /**
     * Number of the the external nodes, which should be greater than 0 and less than 11.
     */
    numberOfExternalNodes?: pulumi.Input<number>;
    /**
     * Number of the pipeline nodes, which should be greater than 0 and less than 11.
     */
    numberOfPipelineNodes?: pulumi.Input<number>;
    /**
     * Time to live (in minutes) setting of integration runtime which will execute pipeline and external activity.
     */
    timeToLive?: pulumi.Input<number>;
}

/**
 * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
 */
export interface PipelineFolderArgs {
    /**
     * The name of the folder that this Pipeline is in.
     */
    name?: pulumi.Input<string>;
}

/**
 * Pipeline Policy.
 */
export interface PipelinePolicyArgs {
    /**
     * Pipeline ElapsedTime Metric Policy.
     */
    elapsedTimeMetric?: pulumi.Input<PipelineElapsedTimeMetricPolicyArgs>;
}

/**
 * Pipeline reference type.
 */
export interface PipelineReferenceArgs {
    /**
     * Reference name.
     */
    name?: pulumi.Input<string>;
    /**
     * Reference pipeline name.
     */
    referenceName: pulumi.Input<string>;
    /**
     * Pipeline reference type.
     */
    type: pulumi.Input<string>;
}

/**
 * PolyBase settings.
 */
export interface PolybaseSettingsArgs {
    /**
     * Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    rejectSampleValue?: any;
    /**
     * Reject type.
     */
    rejectType?: pulumi.Input<string | enums.PolybaseSettingsRejectType>;
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
export interface PostgreSqlLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Type of linked service.
     * Expected value is 'PostgreSql'.
     */
    type: pulumi.Input<"PostgreSql">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for PostgreSQL databases.
 */
export interface PostgreSqlSourceArgs {
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
    type: pulumi.Input<"PostgreSqlSource">;
}

/**
 * The PostgreSQL table dataset.
 */
export interface PostgreSqlTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"PostgreSqlTable">;
}

/**
 * Linked service for PostgreSQLV2 data source.
 */
export interface PostgreSqlV2LinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
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
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the .NET encoding that will be used to encode/decode PostgreSQL string data. Type: string
     */
    encoding?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * When enabled, parameter values are logged when commands are executed. Type: boolean.
     */
    logParameters?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string. Type: string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
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
    type: pulumi.Input<"PostgreSqlV2">;
    /**
     * Username for authentication. Type: string.
     */
    username: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for PostgreSQL databases.
 */
export interface PostgreSqlV2SourceArgs {
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
    type: pulumi.Input<"PostgreSqlV2Source">;
}

/**
 * The PostgreSQLV2 table dataset.
 */
export interface PostgreSqlV2TableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"PostgreSqlV2Table">;
}

/**
 * Power query sink.
 */
export interface PowerQuerySinkArgs {
    /**
     * Dataset reference.
     */
    dataset?: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Transformation description.
     */
    description?: pulumi.Input<string>;
    /**
     * Flowlet Reference
     */
    flowlet?: pulumi.Input<DataFlowReferenceArgs>;
    /**
     * Linked service reference.
     */
    linkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Transformation name.
     */
    name: pulumi.Input<string>;
    /**
     * Rejected data linked service reference.
     */
    rejectedDataLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Schema linked service reference.
     */
    schemaLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * sink script.
     */
    script?: pulumi.Input<string>;
}

/**
 * Map Power Query mashup query to sink dataset(s).
 */
export interface PowerQuerySinkMappingArgs {
    /**
     * List of sinks mapped to Power Query mashup query.
     */
    dataflowSinks?: pulumi.Input<pulumi.Input<PowerQuerySinkArgs>[]>;
    /**
     * Name of the query in Power Query mashup document.
     */
    queryName?: pulumi.Input<string>;
}

/**
 * Power query source.
 */
export interface PowerQuerySourceArgs {
    /**
     * Dataset reference.
     */
    dataset?: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Transformation description.
     */
    description?: pulumi.Input<string>;
    /**
     * Flowlet Reference
     */
    flowlet?: pulumi.Input<DataFlowReferenceArgs>;
    /**
     * Linked service reference.
     */
    linkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Transformation name.
     */
    name: pulumi.Input<string>;
    /**
     * Schema linked service reference.
     */
    schemaLinkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * source script.
     */
    script?: pulumi.Input<string>;
}

/**
 * Presto server linked service. This linked service has supported version property. The Version 1.0 is scheduled for deprecation while your pipeline will continue to run after EOL but without any bug fix or new features.
 */
export interface PrestoLinkedServiceArgs {
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
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication mechanism used to connect to the Presto server.
     */
    authenticationType: pulumi.Input<string | enums.PrestoAuthenticationType>;
    /**
     * The catalog context for all request against the server.
     */
    catalog: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
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
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The IP address or host name of the Presto server. (i.e. 192.168.222.160)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"Presto">;
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
    version?: pulumi.Input<string>;
}

/**
 * Presto server dataset.
 */
export interface PrestoObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"PrestoObject">;
}

/**
 * A copy activity Presto server source.
 */
export interface PrestoSourceArgs {
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
    type: pulumi.Input<"PrestoSource">;
}

/**
 * Private endpoint which a connection belongs to.
 */
export interface PrivateEndpointArgs {
    /**
     * The resource Id for private endpoint
     */
    id?: pulumi.Input<string>;
}

/**
 * A request to approve or reject a private endpoint connection
 */
export interface PrivateLinkConnectionApprovalRequestArgs {
    /**
     * The resource of private endpoint.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
    /**
     * The state of a private link connection
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkConnectionStateArgs>;
}

/**
 * The state of a private link connection
 */
export interface PrivateLinkConnectionStateArgs {
    /**
     * ActionsRequired for a private link connection
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * Description of a private link connection
     */
    description?: pulumi.Input<string>;
    /**
     * Status of a private link connection
     */
    status?: pulumi.Input<string>;
}

/**
 * Purview configuration.
 */
export interface PurviewConfigurationArgs {
    /**
     * Purview resource id.
     */
    purviewResourceId?: pulumi.Input<string>;
}

/**
 * QuickBooks server linked service.
 */
export interface QuickBooksLinkedServiceArgs {
    /**
     * The access token for OAuth 1.0 authentication.
     */
    accessToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The access token secret for OAuth 1.0 authentication.
     */
    accessTokenSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The company ID of the QuickBooks company to authorize.
     */
    companyId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    consumerSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com)
     */
    endpoint?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'QuickBooks'.
     */
    type: pulumi.Input<"QuickBooks">;
    /**
     * Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
     */
    useEncryptedEndpoints?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * QuickBooks server dataset.
 */
export interface QuickBooksObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"QuickBooksObject">;
}

/**
 * A copy activity QuickBooks server source.
 */
export interface QuickBooksSourceArgs {
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
    type: pulumi.Input<"QuickBooksSource">;
}

/**
 * Linked service for Quickbase.
 */
export interface QuickbaseLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Quickbase'.
     */
    type: pulumi.Input<"Quickbase">;
    /**
     * The url to connect Quickbase source. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * The user token for the Quickbase source.
     */
    userToken: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The recurrence schedule.
 */
export interface RecurrenceScheduleArgs {
    /**
     * The hours.
     */
    hours?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The minutes.
     */
    minutes?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The month days.
     */
    monthDays?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The monthly occurrences.
     */
    monthlyOccurrences?: pulumi.Input<pulumi.Input<RecurrenceScheduleOccurrenceArgs>[]>;
    /**
     * The days of the week.
     */
    weekDays?: pulumi.Input<pulumi.Input<enums.DaysOfWeek>[]>;
}

/**
 * The recurrence schedule occurrence.
 */
export interface RecurrenceScheduleOccurrenceArgs {
    /**
     * The day of the week.
     */
    day?: pulumi.Input<enums.DayOfWeek>;
    /**
     * The occurrence.
     */
    occurrence?: pulumi.Input<number>;
}

/**
 * Redirect incompatible row settings
 */
export interface RedirectIncompatibleRowSettingsArgs {
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
export interface RedshiftUnloadSettingsArgs {
    /**
     * The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string).
     */
    bucketName: any;
    /**
     * The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source.
     */
    s3LinkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
}

/**
 * A copy activity source for various relational databases.
 */
export interface RelationalSourceArgs {
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
    type: pulumi.Input<"RelationalSource">;
}

/**
 * The relational table dataset.
 */
export interface RelationalTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"RelationalTable">;
}

/**
 * Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time.
 */
export interface RerunTumblingWindowTriggerArgs {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Trigger description.
     */
    description?: pulumi.Input<string>;
    /**
     * The parent trigger reference.
     */
    parentTrigger: any;
    /**
     * The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
     */
    requestedEndTime: pulumi.Input<string>;
    /**
     * The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
     */
    requestedStartTime: pulumi.Input<string>;
    /**
     * The max number of parallel time windows (ready for execution) for which a rerun is triggered.
     */
    rerunConcurrency: pulumi.Input<number>;
    /**
     * Trigger type.
     * Expected value is 'RerunTumblingWindowTrigger'.
     */
    type: pulumi.Input<"RerunTumblingWindowTrigger">;
}

/**
 * Responsys linked service.
 */
export interface ResponsysLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The client ID associated with the Responsys application. Type: string (or Expression with resultType string).
     */
    clientId: any;
    /**
     * The client secret associated with the Responsys application. Type: string (or Expression with resultType string).
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the Responsys server.
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Responsys'.
     */
    type: pulumi.Input<"Responsys">;
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
    version?: pulumi.Input<string>;
}

/**
 * Responsys dataset.
 */
export interface ResponsysObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"ResponsysObject">;
}

/**
 * A copy activity Responsys source.
 */
export interface ResponsysSourceArgs {
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
    type: pulumi.Input<"ResponsysSource">;
}

/**
 * A Rest service dataset.
 */
export interface RestResourceDatasetArgs {
    /**
     * The additional HTTP headers in the request to the RESTful API.
     */
    additionalHeaders?: pulumi.Input<{[key: string]: any}>;
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The pagination rules to compose next page requests.
     */
    paginationRules?: pulumi.Input<{[key: string]: any}>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"RestResource">;
}

/**
 * Rest Service linked service.
 */
export interface RestServiceLinkedServiceArgs {
    /**
     * The resource you are requesting authorization to use. Type: string (or Expression with resultType string).
     */
    aadResourceId?: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object).
     */
    authHeaders?: any;
    /**
     * Type of authentication used to connect to the REST service.
     */
    authenticationType: pulumi.Input<string | enums.RestServiceAuthenticationType>;
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
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    enableServerCertificateValidation?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password used in Basic authentication type.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    servicePrincipalEmbeddedCert?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The application's client ID used in AadServicePrincipal authentication type. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The application's key used in AadServicePrincipal authentication type.
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"RestService">;
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
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Rest service Sink.
 */
export interface RestSinkArgs {
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
    type: pulumi.Input<"RestSink">;
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
export interface RestSourceArgs {
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
    type: pulumi.Input<"RestSource">;
}

/**
 * Execution policy for an activity.
 */
export interface RetryPolicyArgs {
    /**
     * Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    count?: any;
    /**
     * Interval between retries in seconds. Default is 30.
     */
    intervalInSeconds?: pulumi.Input<number>;
}

/**
 * SSIS access credential.
 */
export interface SSISAccessCredentialArgs {
    /**
     * Domain for windows authentication. Type: string (or Expression with resultType string).
     */
    domain: any;
    /**
     * Password for windows authentication.
     */
    password: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * UseName for windows authentication. Type: string (or Expression with resultType string).
     */
    userName: any;
}

/**
 * SSIS embedded child package.
 */
export interface SSISChildPackageArgs {
    /**
     * Content for embedded child package. Type: string (or Expression with resultType string).
     */
    packageContent: any;
    /**
     * Last modified date for embedded child package.
     */
    packageLastModifiedDate?: pulumi.Input<string>;
    /**
     * Name for embedded child package.
     */
    packageName?: pulumi.Input<string>;
    /**
     * Path for embedded child package. Type: string (or Expression with resultType string).
     */
    packagePath: any;
}

/**
 * SSIS package execution credential.
 */
export interface SSISExecutionCredentialArgs {
    /**
     * Domain for windows authentication. Type: string (or Expression with resultType string).
     */
    domain: any;
    /**
     * Password for windows authentication.
     */
    password: pulumi.Input<SecureStringArgs>;
    /**
     * UseName for windows authentication. Type: string (or Expression with resultType string).
     */
    userName: any;
}

/**
 * SSIS execution parameter.
 */
export interface SSISExecutionParameterArgs {
    /**
     * SSIS package execution parameter value. Type: string (or Expression with resultType string).
     */
    value: any;
}

/**
 * SSIS package execution log location
 */
export interface SSISLogLocationArgs {
    /**
     * The package execution log access credential.
     */
    accessCredential?: pulumi.Input<SSISAccessCredentialArgs>;
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
    type: pulumi.Input<string | enums.SsisLogLocationType>;
}

/**
 * SSIS package location.
 */
export interface SSISPackageLocationArgs {
    /**
     * The package access credential.
     */
    accessCredential?: pulumi.Input<SSISAccessCredentialArgs>;
    /**
     * The embedded child package list.
     */
    childPackages?: pulumi.Input<pulumi.Input<SSISChildPackageArgs>[]>;
    /**
     * The configuration file access credential.
     */
    configurationAccessCredential?: pulumi.Input<SSISAccessCredentialArgs>;
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
    packageLastModifiedDate?: pulumi.Input<string>;
    /**
     * The package name.
     */
    packageName?: pulumi.Input<string>;
    /**
     * Password of the package.
     */
    packagePassword?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The SSIS package path. Type: string (or Expression with resultType string).
     */
    packagePath?: any;
    /**
     * The type of SSIS package location.
     */
    type?: pulumi.Input<string | enums.SsisPackageLocationType>;
}

/**
 * SSIS property override.
 */
export interface SSISPropertyOverrideArgs {
    /**
     * Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true
     */
    isSensitive?: pulumi.Input<boolean>;
    /**
     * SSIS package property override value. Type: string (or Expression with resultType string).
     */
    value: any;
}

/**
 * Linked service for Salesforce.
 */
export interface SalesforceLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
     */
    apiVersion?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
     */
    environmentUrl?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password for Basic authentication of the Salesforce instance.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The security token is optional to remotely access Salesforce instance.
     */
    securityToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Salesforce'.
     */
    type: pulumi.Input<"Salesforce">;
    /**
     * The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Salesforce Marketing Cloud linked service.
 */
export interface SalesforceMarketingCloudLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string).
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'SalesforceMarketingCloud'.
     */
    type: pulumi.Input<"SalesforceMarketingCloud">;
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
    version?: pulumi.Input<string>;
}

/**
 * Salesforce Marketing Cloud dataset.
 */
export interface SalesforceMarketingCloudObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SalesforceMarketingCloudObject">;
}

/**
 * A copy activity Salesforce Marketing Cloud source.
 */
export interface SalesforceMarketingCloudSourceArgs {
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
    type: pulumi.Input<"SalesforceMarketingCloudSource">;
}

/**
 * The Salesforce object dataset.
 */
export interface SalesforceObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The Salesforce object API name. Type: string (or Expression with resultType string).
     */
    objectApiName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SalesforceObject">;
}

/**
 * Linked service for Salesforce Service Cloud.
 */
export interface SalesforceServiceCloudLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The Salesforce API version used in ADF. Type: string (or Expression with resultType string).
     */
    apiVersion?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password for Basic authentication of the Salesforce instance.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The security token is optional to remotely access Salesforce instance.
     */
    securityToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'SalesforceServiceCloud'.
     */
    type: pulumi.Input<"SalesforceServiceCloud">;
    /**
     * The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The Salesforce Service Cloud object dataset.
 */
export interface SalesforceServiceCloudObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string).
     */
    objectApiName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SalesforceServiceCloudObject">;
}

/**
 * A copy activity Salesforce Service Cloud sink.
 */
export interface SalesforceServiceCloudSinkArgs {
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
    type: pulumi.Input<"SalesforceServiceCloudSink">;
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
    writeBehavior?: pulumi.Input<string | enums.SalesforceSinkWriteBehavior>;
}

/**
 * A copy activity Salesforce Service Cloud source.
 */
export interface SalesforceServiceCloudSourceArgs {
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
    type: pulumi.Input<"SalesforceServiceCloudSource">;
}

/**
 * Linked service for Salesforce Service Cloud V2.
 */
export interface SalesforceServiceCloudV2LinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
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
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The URL of Salesforce Service Cloud instance. For example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
     */
    environmentUrl?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'SalesforceServiceCloudV2'.
     */
    type: pulumi.Input<"SalesforceServiceCloudV2">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The Salesforce Service Cloud V2 object dataset.
 */
export interface SalesforceServiceCloudV2ObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The Salesforce Service Cloud V2 object API name. Type: string (or Expression with resultType string).
     */
    objectApiName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SalesforceServiceCloudV2Object">;
}

/**
 * A copy activity Salesforce Service Cloud V2 sink.
 */
export interface SalesforceServiceCloudV2SinkArgs {
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
    type: pulumi.Input<"SalesforceServiceCloudV2Sink">;
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
    writeBehavior?: pulumi.Input<string | enums.SalesforceV2SinkWriteBehavior>;
}

/**
 * A copy activity Salesforce Service Cloud V2 source.
 */
export interface SalesforceServiceCloudV2SourceArgs {
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
    type: pulumi.Input<"SalesforceServiceCloudV2Source">;
}

/**
 * A copy activity Salesforce sink.
 */
export interface SalesforceSinkArgs {
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
    type: pulumi.Input<"SalesforceSink">;
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
    writeBehavior?: pulumi.Input<string | enums.SalesforceSinkWriteBehavior>;
}

/**
 * A copy activity Salesforce source.
 */
export interface SalesforceSourceArgs {
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
    type: pulumi.Input<"SalesforceSource">;
}

/**
 * Linked service for Salesforce V2.
 */
export interface SalesforceV2LinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
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
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The URL of Salesforce instance. For example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string).
     */
    environmentUrl?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'SalesforceV2'.
     */
    type: pulumi.Input<"SalesforceV2">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The Salesforce V2 object dataset.
 */
export interface SalesforceV2ObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The Salesforce V2 object API name. Type: string (or Expression with resultType string).
     */
    objectApiName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SalesforceV2Object">;
}

/**
 * A copy activity Salesforce V2 sink.
 */
export interface SalesforceV2SinkArgs {
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
    type: pulumi.Input<"SalesforceV2Sink">;
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
    writeBehavior?: pulumi.Input<string | enums.SalesforceV2SinkWriteBehavior>;
}

/**
 * A copy activity Salesforce V2 source.
 */
export interface SalesforceV2SourceArgs {
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
    type: pulumi.Input<"SalesforceV2Source">;
}

/**
 * SAP Business Warehouse Linked Service.
 */
export interface SapBWLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
     */
    clientId: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to access the SAP BW server.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"SapBW">;
    /**
     * Username to access the SAP BW server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The SAP BW cube dataset.
 */
export interface SapBwCubeDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SapBwCube">;
}

/**
 * A copy activity source for SapBW server via MDX.
 */
export interface SapBwSourceArgs {
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
    type: pulumi.Input<"SapBwSource">;
}

/**
 * Linked service for SAP Cloud for Customer.
 */
export interface SapCloudForCustomerLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password for Basic authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'SapCloudForCustomer'.
     */
    type: pulumi.Input<"SapCloudForCustomer">;
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
    version?: pulumi.Input<string>;
}

/**
 * The path of the SAP Cloud for Customer OData entity.
 */
export interface SapCloudForCustomerResourceDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SapCloudForCustomerResource">;
}

/**
 * A copy activity SAP Cloud for Customer sink.
 */
export interface SapCloudForCustomerSinkArgs {
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
    type: pulumi.Input<"SapCloudForCustomerSink">;
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
    writeBehavior?: pulumi.Input<string | enums.SapCloudForCustomerSinkWriteBehavior>;
}

/**
 * A copy activity source for SAP Cloud for Customer source.
 */
export interface SapCloudForCustomerSourceArgs {
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
    type: pulumi.Input<"SapCloudForCustomerSource">;
}

/**
 * Linked service for SAP ERP Central Component(SAP ECC).
 */
export interface SapEccLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password for Basic authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'SapEcc'.
     */
    type: pulumi.Input<"SapEcc">;
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
    version?: pulumi.Input<string>;
}

/**
 * The path of the SAP ECC OData entity.
 */
export interface SapEccResourceDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SapEccResource">;
}

/**
 * A copy activity source for SAP ECC source.
 */
export interface SapEccSourceArgs {
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
    type: pulumi.Input<"SapEccSource">;
}

/**
 * SAP HANA Linked Service.
 */
export interface SapHanaLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to be used to connect to the SAP HANA server.
     */
    authenticationType?: pulumi.Input<string | enums.SapHanaAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to access the SAP HANA server.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Host name of the SAP HANA server. Type: string (or Expression with resultType string).
     */
    server?: any;
    /**
     * Type of linked service.
     * Expected value is 'SapHana'.
     */
    type: pulumi.Input<"SapHana">;
    /**
     * Username to access the SAP HANA server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The settings that will be leveraged for SAP HANA source partitioning.
 */
export interface SapHanaPartitionSettingsArgs {
    /**
     * The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string).
     */
    partitionColumnName?: any;
}

/**
 * A copy activity source for SAP HANA source.
 */
export interface SapHanaSourceArgs {
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
    partitionSettings?: pulumi.Input<SapHanaPartitionSettingsArgs>;
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
    type: pulumi.Input<"SapHanaSource">;
}

/**
 * SAP HANA Table properties.
 */
export interface SapHanaTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SapHanaTable">;
}

/**
 * SAP ODP Linked Service.
 */
export interface SapOdpLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to access the SAP server where the table is located.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"SapOdp">;
    /**
     * Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
    /**
     * SNC X509 certificate file path. Type: string (or Expression with resultType string).
     */
    x509CertificatePath?: any;
}

/**
 * SAP ODP Resource properties.
 */
export interface SapOdpResourceDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The context of the SAP ODP Object. Type: string (or Expression with resultType string).
     */
    context: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The name of the SAP ODP Object. Type: string (or Expression with resultType string).
     */
    objectName: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SapOdpResource">;
}

/**
 * A copy activity source for SAP ODP source.
 */
export interface SapOdpSourceArgs {
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
    type: pulumi.Input<"SapOdpSource">;
}

/**
 * SAP Business Warehouse Open Hub Destination Linked Service.
 */
export interface SapOpenHubLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to access the SAP BW server where the open hub destination is located.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"SapOpenHub">;
    /**
     * Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for SAP Business Warehouse Open Hub Destination source.
 */
export interface SapOpenHubSourceArgs {
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
    type: pulumi.Input<"SapOpenHubSource">;
}

/**
 * Sap Business Warehouse Open Hub Destination Table properties.
 */
export interface SapOpenHubTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ).
     */
    baseRequestId?: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean).
     */
    excludeLastRequest?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string).
     */
    openHubDestinationName: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SapOpenHubTable">;
}

/**
 * SAP Table Linked Service.
 */
export interface SapTableLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string).
     */
    clientId?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password to access the SAP server where the table is located.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"SapTable">;
    /**
     * Username to access the SAP server where the table is located. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The settings that will be leveraged for SAP table source partitioning.
 */
export interface SapTablePartitionSettingsArgs {
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
export interface SapTableResourceDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SapTableResource">;
}

/**
 * A copy activity source for SAP Table source.
 */
export interface SapTableSourceArgs {
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
    partitionSettings?: pulumi.Input<SapTablePartitionSettingsArgs>;
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
    type: pulumi.Input<"SapTableSource">;
}

/**
 * Trigger that creates pipeline runs periodically, on schedule.
 */
export interface ScheduleTriggerArgs {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Trigger description.
     */
    description?: pulumi.Input<string>;
    /**
     * Pipelines that need to be started.
     */
    pipelines?: pulumi.Input<pulumi.Input<TriggerPipelineReferenceArgs>[]>;
    /**
     * Recurrence schedule configuration.
     */
    recurrence: pulumi.Input<ScheduleTriggerRecurrenceArgs>;
    /**
     * Trigger type.
     * Expected value is 'ScheduleTrigger'.
     */
    type: pulumi.Input<"ScheduleTrigger">;
}

/**
 * The workflow trigger recurrence.
 */
export interface ScheduleTriggerRecurrenceArgs {
    /**
     * The end time.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The frequency.
     */
    frequency?: pulumi.Input<string | enums.RecurrenceFrequency>;
    /**
     * The interval.
     */
    interval?: pulumi.Input<number>;
    /**
     * The recurrence schedule.
     */
    schedule?: pulumi.Input<RecurrenceScheduleArgs>;
    /**
     * The start time.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The time zone.
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * Custom script action to run on HDI ondemand cluster once it's up.
 */
export interface ScriptActionArgs {
    /**
     * The user provided name of the script action.
     */
    name: pulumi.Input<string>;
    /**
     * The parameters for the script action.
     */
    parameters?: pulumi.Input<string>;
    /**
     * The node types on which the script action should be executed.
     */
    roles: any;
    /**
     * The URI for the script action.
     */
    uri: pulumi.Input<string>;
}

/**
 * Script activity type.
 */
export interface ScriptActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Log settings of script activity.
     */
    logSettings?: pulumi.Input<ScriptActivityTypePropertiesLogSettingsArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
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
    scripts?: pulumi.Input<pulumi.Input<ScriptActivityScriptBlockArgs>[]>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Script'.
     */
    type: pulumi.Input<"Script">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Parameters of a script block.
 */
export interface ScriptActivityParameterArgs {
    /**
     * The direction of the parameter.
     */
    direction?: pulumi.Input<string | enums.ScriptActivityParameterDirection>;
    /**
     * The name of the parameter. Type: string (or Expression with resultType string).
     */
    name?: any;
    /**
     * The size of the output direction parameter.
     */
    size?: pulumi.Input<number>;
    /**
     * The type of the parameter.
     */
    type?: pulumi.Input<string | enums.ScriptActivityParameterType>;
    /**
     * The value of the parameter. Type: string (or Expression with resultType string).
     */
    value?: any;
}

/**
 * Script block of scripts.
 */
export interface ScriptActivityScriptBlockArgs {
    /**
     * Array of script parameters. Type: array.
     */
    parameters?: pulumi.Input<pulumi.Input<ScriptActivityParameterArgs>[]>;
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
export interface ScriptActivityTypePropertiesLogSettingsArgs {
    /**
     * The destination of logs. Type: string.
     */
    logDestination: pulumi.Input<string | enums.ScriptActivityLogDestination>;
    /**
     * Log location settings customer needs to provide when enabling log.
     */
    logLocationSettings?: pulumi.Input<LogLocationSettingsArgs>;
}

/**
 * Execution policy for an activity that supports secure input and output.
 */
export interface SecureInputOutputPolicyArgs {
    /**
     * When set to true, Input from activity is considered as secure and will not be logged to monitoring.
     */
    secureInput?: pulumi.Input<boolean>;
    /**
     * When set to true, Output from activity is considered as secure and will not be logged to monitoring.
     */
    secureOutput?: pulumi.Input<boolean>;
}

/**
 * Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
 */
export interface SecureStringArgs {
    /**
     * Type of the secret.
     * Expected value is 'SecureString'.
     */
    type: pulumi.Input<"SecureString">;
    /**
     * Value of secure string.
     */
    value: pulumi.Input<string>;
}

/**
 * Self referenced tumbling window trigger dependency.
 */
export interface SelfDependencyTumblingWindowTriggerReferenceArgs {
    /**
     * Timespan applied to the start time of a tumbling window when evaluating dependency.
     */
    offset: pulumi.Input<string>;
    /**
     * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
     */
    size?: pulumi.Input<string>;
    /**
     * The type of dependency reference.
     * Expected value is 'SelfDependencyTumblingWindowTriggerReference'.
     */
    type: pulumi.Input<"SelfDependencyTumblingWindowTriggerReference">;
}

/**
 * Self-hosted integration runtime.
 */
export interface SelfHostedIntegrationRuntimeArgs {
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The base definition of a linked integration runtime.
     */
    linkedInfo?: pulumi.Input<LinkedIntegrationRuntimeKeyAuthorizationArgs | LinkedIntegrationRuntimeRbacAuthorizationArgs>;
    /**
     * An alternative option to ensure interactive authoring function when your self-hosted integration runtime is unable to establish a connection with Azure Relay.
     */
    selfContainedInteractiveAuthoringEnabled?: pulumi.Input<boolean>;
    /**
     * The type of integration runtime.
     * Expected value is 'SelfHosted'.
     */
    type: pulumi.Input<"SelfHosted">;
}

/**
 * ServiceNow server linked service.
 */
export interface ServiceNowLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to use.
     */
    authenticationType: pulumi.Input<string | enums.ServiceNowAuthenticationType>;
    /**
     * The client id for OAuth2 authentication.
     */
    clientId?: any;
    /**
     * The client secret for OAuth2 authentication.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com)
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name for Basic and OAuth2 authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'ServiceNow'.
     */
    type: pulumi.Input<"ServiceNow">;
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
    version?: pulumi.Input<string>;
}

/**
 * ServiceNow server dataset.
 */
export interface ServiceNowObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"ServiceNowObject">;
}

/**
 * A copy activity ServiceNow server source.
 */
export interface ServiceNowSourceArgs {
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
    type: pulumi.Input<"ServiceNowSource">;
}

/**
 * ServiceNowV2 server linked service.
 */
export interface ServiceNowV2LinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to use.
     */
    authenticationType: pulumi.Input<string | enums.ServiceNowV2AuthenticationType>;
    /**
     * The client id for OAuth2 authentication.
     */
    clientId?: any;
    /**
     * The client secret for OAuth2 authentication.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name for Basic and OAuth2 authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'ServiceNowV2'.
     */
    type: pulumi.Input<"ServiceNowV2">;
    /**
     * The user name used to connect to the ServiceNowV2 server for Basic and OAuth2 authentication.
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * ServiceNowV2 server dataset.
 */
export interface ServiceNowV2ObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"ServiceNowV2Object">;
    /**
     * Type of value copied from source.
     */
    valueType?: pulumi.Input<string | enums.ValueType>;
}

/**
 * A copy activity ServiceNowV2 server source.
 */
export interface ServiceNowV2SourceArgs {
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
    expression?: pulumi.Input<ExpressionV2Args>;
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
    type: pulumi.Input<"ServiceNowV2Source">;
}

/**
 * Service principal credential.
 */
export interface ServicePrincipalCredentialArgs {
    /**
     * List of tags that can be used for describing the Credential.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Credential description.
     */
    description?: pulumi.Input<string>;
    /**
     * The app ID of the service principal used to authenticate
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate.
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * The ID of the tenant to which the service principal belongs
     */
    tenant?: any;
    /**
     * Type of credential.
     * Expected value is 'ServicePrincipal'.
     */
    type: pulumi.Input<"ServicePrincipal">;
}

/**
 * Set value for a Variable.
 */
export interface SetVariableActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<SecureInputOutputPolicyArgs>;
    /**
     * If set to true, it sets the pipeline run return value.
     */
    setSystemVariable?: pulumi.Input<boolean>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'SetVariable'.
     */
    type: pulumi.Input<"SetVariable">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
    /**
     * Value to be set. Could be a static value or Expression.
     */
    value?: any;
    /**
     * Name of the variable whose value needs to be set.
     */
    variableName?: pulumi.Input<string>;
}

/**
 * The location of SFTP dataset.
 */
export interface SftpLocationArgs {
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
    type: pulumi.Input<"SftpLocation">;
}

/**
 * Sftp read settings.
 */
export interface SftpReadSettingsArgs {
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
    type: pulumi.Input<"SftpReadSettings">;
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
export interface SftpServerLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication type to be used to connect to the FTP server.
     */
    authenticationType?: pulumi.Input<string | enums.SftpAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password to decrypt the SSH private key if the SSH private key is encrypted.
     */
    passPhrase?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Password to logon the SFTP server for Basic authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    port?: any;
    /**
     * Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format.
     */
    privateKeyContent?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"Sftp">;
    /**
     * The username used to log on to the SFTP server. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * Sftp write settings.
 */
export interface SftpWriteSettingsArgs {
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
    metadata?: pulumi.Input<pulumi.Input<MetadataItemArgs>[]>;
    /**
     * Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string).
     */
    operationTimeout?: any;
    /**
     * The write setting type.
     * Expected value is 'SftpWriteSettings'.
     */
    type: pulumi.Input<"SftpWriteSettings">;
    /**
     * Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean).
     */
    useTempFileRename?: any;
}

/**
 * SharePoint Online List linked service.
 */
export interface SharePointOnlineListLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
     */
    servicePrincipalCredentialType?: any;
    /**
     * Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCert?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalEmbeddedCertPassword?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string).
     */
    servicePrincipalId: any;
    /**
     * The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"SharePointOnlineList">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The sharepoint online list resource dataset.
 */
export interface SharePointOnlineListResourceDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The name of the SharePoint Online list. Type: string (or Expression with resultType string).
     */
    listName?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SharePointOnlineListResource">;
}

/**
 * A copy activity source for sharePoint online list source.
 */
export interface SharePointOnlineListSourceArgs {
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
    type: pulumi.Input<"SharePointOnlineListSource">;
}

/**
 * Shopify Service linked service.
 */
export interface ShopifyLinkedServiceArgs {
    /**
     * The API access token that can be used to access Shopify’s data. The token won't expire if it is offline mode.
     */
    accessToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the Shopify server. (i.e. mystore.myshopify.com)
     */
    host: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Shopify'.
     */
    type: pulumi.Input<"Shopify">;
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
    version?: pulumi.Input<string>;
}

/**
 * Shopify Service dataset.
 */
export interface ShopifyObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"ShopifyObject">;
}

/**
 * A copy activity Shopify Service source.
 */
export interface ShopifySourceArgs {
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
    type: pulumi.Input<"ShopifySource">;
}

/**
 * Skip error file.
 */
export interface SkipErrorFileArgs {
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
export interface SmartsheetLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The api token for the Smartsheet source.
     */
    apiToken: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Smartsheet'.
     */
    type: pulumi.Input<"Smartsheet">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * The snowflake dataset.
 */
export interface SnowflakeDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SnowflakeTable">;
}

/**
 * Snowflake export command settings.
 */
export interface SnowflakeExportCopyCommandArgs {
    /**
     * Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
     */
    additionalCopyOptions?: pulumi.Input<{[key: string]: any}>;
    /**
     * Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" }
     */
    additionalFormatOptions?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the snowflake storage integration to use for the copy operation. Type: string (or Expression with resultType string).
     */
    storageIntegration?: any;
    /**
     * The export setting type.
     * Expected value is 'SnowflakeExportCopyCommand'.
     */
    type: pulumi.Input<"SnowflakeExportCopyCommand">;
}

/**
 * Snowflake import command settings.
 */
export interface SnowflakeImportCopyCommandArgs {
    /**
     * Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
     */
    additionalCopyOptions?: pulumi.Input<{[key: string]: any}>;
    /**
     * Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" }
     */
    additionalFormatOptions?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the snowflake storage integration to use for the copy operation. Type: string (or Expression with resultType string).
     */
    storageIntegration?: any;
    /**
     * The import setting type.
     * Expected value is 'SnowflakeImportCopyCommand'.
     */
    type: pulumi.Input<"SnowflakeImportCopyCommand">;
}

/**
 * Snowflake linked service.
 */
export interface SnowflakeLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string of snowflake. Type: string, SecureString.
     */
    connectionString: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Snowflake'.
     */
    type: pulumi.Input<"Snowflake">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity snowflake sink.
 */
export interface SnowflakeSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Snowflake import settings.
     */
    importSettings?: pulumi.Input<SnowflakeImportCopyCommandArgs>;
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
    type: pulumi.Input<"SnowflakeSink">;
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
export interface SnowflakeSourceArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Snowflake export settings.
     */
    exportSettings: pulumi.Input<SnowflakeExportCopyCommandArgs>;
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
    type: pulumi.Input<"SnowflakeSource">;
}

/**
 * The snowflake dataset.
 */
export interface SnowflakeV2DatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SnowflakeV2Table">;
}

/**
 * Snowflake linked service.
 */
export interface SnowflakeV2LinkedServiceArgs {
    /**
     * The account identifier of your Snowflake account, e.g. xy12345.east-us-2.azure
     */
    accountIdentifier: any;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: pulumi.Input<string | enums.SnowflakeAuthenticationType>;
    /**
     * The client ID of the application registered in Azure Active Directory for AADServicePrincipal authentication.
     */
    clientId?: any;
    /**
     * The Azure key vault secret reference of client secret for AADServicePrincipal authentication.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The name of the Snowflake database.
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The host name of the Snowflake account. Type: string (or Expression with resultType string).
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The Azure key vault secret reference of privateKey for KeyPair auth.
     */
    privateKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The Azure key vault secret reference of private key password for KeyPair auth with encrypted private key.
     */
    privateKeyPassphrase?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"SnowflakeV2">;
    /**
     * The name of the Snowflake user.
     */
    user?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
    /**
     * The name of the Snowflake warehouse.
     */
    warehouse: any;
}
/**
 * snowflakeV2LinkedServiceArgsProvideDefaults sets the appropriate defaults for SnowflakeV2LinkedServiceArgs
 */
export function snowflakeV2LinkedServiceArgsProvideDefaults(val: SnowflakeV2LinkedServiceArgs): SnowflakeV2LinkedServiceArgs {
    return {
        ...val,
        authenticationType: (val.authenticationType) ?? "Basic",
    };
}

/**
 * A copy activity snowflake sink.
 */
export interface SnowflakeV2SinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Snowflake import settings.
     */
    importSettings?: pulumi.Input<SnowflakeImportCopyCommandArgs>;
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
    type: pulumi.Input<"SnowflakeV2Sink">;
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
export interface SnowflakeV2SourceArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Snowflake export settings.
     */
    exportSettings: pulumi.Input<SnowflakeExportCopyCommandArgs>;
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
    type: pulumi.Input<"SnowflakeV2Source">;
}

/**
 * Spark configuration reference.
 */
export interface SparkConfigurationParametrizationReferenceArgs {
    /**
     * Reference spark configuration name. Type: string (or Expression with resultType string).
     */
    referenceName: any;
    /**
     * Spark configuration reference type.
     */
    type: pulumi.Input<string | enums.SparkConfigurationReferenceType>;
}

/**
 * Spark Server linked service.
 */
export interface SparkLinkedServiceArgs {
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
    annotations?: pulumi.Input<any[]>;
    /**
     * The authentication method used to access the Spark server.
     */
    authenticationType: pulumi.Input<string | enums.SparkAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether the connections to the server are encrypted using SSL. The default value is false.
     */
    enableSsl?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password corresponding to the user name that you provided in the Username field
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The TCP port that the Spark server uses to listen for client connections.
     */
    port: any;
    /**
     * The type of Spark server.
     */
    serverType?: pulumi.Input<string | enums.SparkServerType>;
    /**
     * The transport protocol to use in the Thrift layer.
     */
    thriftTransportProtocol?: pulumi.Input<string | enums.SparkThriftTransportProtocol>;
    /**
     * The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
     */
    trustedCertPath?: any;
    /**
     * Type of linked service.
     * Expected value is 'Spark'.
     */
    type: pulumi.Input<"Spark">;
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
    version?: pulumi.Input<string>;
}

/**
 * Spark Server dataset.
 */
export interface SparkObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SparkObject">;
}

/**
 * A copy activity Spark Server source.
 */
export interface SparkSourceArgs {
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
    type: pulumi.Input<"SparkSource">;
}

/**
 * Sql always encrypted properties.
 */
export interface SqlAlwaysEncryptedPropertiesArgs {
    /**
     * Sql always encrypted AKV authentication type. Type: string.
     */
    alwaysEncryptedAkvAuthType: pulumi.Input<string | enums.SqlAlwaysEncryptedAkvAuthType>;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The client ID of the application in Azure Active Directory used for Azure Key Vault authentication. Type: string (or Expression with resultType string).
     */
    servicePrincipalId?: any;
    /**
     * The key of the service principal used to authenticate against Azure Key Vault.
     */
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
}

/**
 * A copy activity SQL Data Warehouse sink.
 */
export interface SqlDWSinkArgs {
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
    copyCommandSettings?: pulumi.Input<DWCopyCommandSettingsArgs>;
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
    polyBaseSettings?: pulumi.Input<PolybaseSettingsArgs>;
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
    type: pulumi.Input<"SqlDWSink">;
    /**
     * SQL DW upsert settings.
     */
    upsertSettings?: pulumi.Input<SqlDWUpsertSettingsArgs>;
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
export interface SqlDWSourceArgs {
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
    partitionSettings?: pulumi.Input<SqlPartitionSettingsArgs>;
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
    type: pulumi.Input<"SqlDWSource">;
}

/**
 * Sql DW upsert option settings
 */
export interface SqlDWUpsertSettingsArgs {
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
export interface SqlMISinkArgs {
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
    type: pulumi.Input<"SqlMISink">;
    /**
     * SQL upsert settings.
     */
    upsertSettings?: pulumi.Input<SqlUpsertSettingsArgs>;
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
export interface SqlMISourceArgs {
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
    partitionSettings?: pulumi.Input<SqlPartitionSettingsArgs>;
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
    type: pulumi.Input<"SqlMISource">;
}

/**
 * The settings that will be leveraged for Sql source partitioning.
 */
export interface SqlPartitionSettingsArgs {
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
export interface SqlServerLinkedServiceArgs {
    /**
     * Sql always encrypted properties.
     */
    alwaysEncryptedSettings?: pulumi.Input<SqlAlwaysEncryptedPropertiesArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The application workload type when connecting to a server, used by recommended version. Possible values are ReadOnly and ReadWrite. Type: string (or Expression with resultType string).
     */
    applicationIntent?: any;
    /**
     * The type used for authentication. Type: string.
     */
    authenticationType?: pulumi.Input<string | enums.SqlServerAuthenticationType>;
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
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * The connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
     */
    connectionString?: any;
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * The name of the database, used by recommended version. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicate whether TLS encryption is required for all data sent between the client and server, used by recommended version. Possible values are true/yes/mandatory, false/no/optional and strict. Type: string (or Expression with resultType string).
     */
    encrypt?: any;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The on-premises Windows authentication password.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"SqlServer">;
    /**
     * The on-premises Windows authentication user name. Type: string (or Expression with resultType string).
     */
    userName?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity SQL server sink.
 */
export interface SqlServerSinkArgs {
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
    type: pulumi.Input<"SqlServerSink">;
    /**
     * SQL upsert settings.
     */
    upsertSettings?: pulumi.Input<SqlUpsertSettingsArgs>;
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
export interface SqlServerSourceArgs {
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
    partitionSettings?: pulumi.Input<SqlPartitionSettingsArgs>;
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
    type: pulumi.Input<"SqlServerSource">;
}

/**
 * SQL stored procedure activity type.
 */
export interface SqlServerStoredProcedureActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
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
    type: pulumi.Input<"SqlServerStoredProcedure">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * The on-premises SQL Server dataset.
 */
export interface SqlServerTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SqlServerTable">;
}

/**
 * A copy activity SQL sink.
 */
export interface SqlSinkArgs {
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
    type: pulumi.Input<"SqlSink">;
    /**
     * SQL upsert settings.
     */
    upsertSettings?: pulumi.Input<SqlUpsertSettingsArgs>;
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
export interface SqlSourceArgs {
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
    partitionSettings?: pulumi.Input<SqlPartitionSettingsArgs>;
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
    type: pulumi.Input<"SqlSource">;
}

/**
 * Sql upsert option settings
 */
export interface SqlUpsertSettingsArgs {
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
export interface SquareLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The client ID associated with your Square application.
     */
    clientId?: any;
    /**
     * The client secret associated with your Square application.
     */
    clientSecret?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The URL of the Square instance. (i.e. mystore.mysquare.com)
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
     */
    redirectUri?: any;
    /**
     * Type of linked service.
     * Expected value is 'Square'.
     */
    type: pulumi.Input<"Square">;
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
    version?: pulumi.Input<string>;
}

/**
 * Square Service dataset.
 */
export interface SquareObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SquareObject">;
}

/**
 * A copy activity Square Service source.
 */
export interface SquareSourceArgs {
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
    type: pulumi.Input<"SquareSource">;
}

/**
 * Staging settings.
 */
export interface StagingSettingsArgs {
    /**
     * Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean).
     */
    enableCompression?: any;
    /**
     * Staging linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The path to storage for storing the interim data. Type: string (or Expression with resultType string).
     */
    path?: any;
}

/**
 * This activity evaluates an expression and executes activities under the cases property that correspond to the expression evaluation expected in the equals property.
 */
export interface SwitchActivityArgs {
    /**
     * List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities.
     */
    cases?: pulumi.Input<pulumi.Input<SwitchCaseArgs>[]>;
    /**
     * List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action.
     */
    defaultActivities?: pulumi.Input<pulumi.Input<AppendVariableActivityArgs | AzureDataExplorerCommandActivityArgs | AzureFunctionActivityArgs | AzureMLBatchExecutionActivityArgs | AzureMLExecutePipelineActivityArgs | AzureMLUpdateResourceActivityArgs | ControlActivityArgs | CopyActivityArgs | CustomActivityArgs | DataLakeAnalyticsUSQLActivityArgs | DatabricksNotebookActivityArgs | DatabricksSparkJarActivityArgs | DatabricksSparkPythonActivityArgs | DeleteActivityArgs | ExecuteDataFlowActivityArgs | ExecutePipelineActivityArgs | ExecuteSSISPackageActivityArgs | ExecuteWranglingDataflowActivityArgs | ExecutionActivityArgs | FailActivityArgs | FilterActivityArgs | ForEachActivityArgs | GetMetadataActivityArgs | HDInsightHiveActivityArgs | HDInsightMapReduceActivityArgs | HDInsightPigActivityArgs | HDInsightSparkActivityArgs | HDInsightStreamingActivityArgs | IfConditionActivityArgs | LookupActivityArgs | ScriptActivityArgs | SetVariableActivityArgs | SqlServerStoredProcedureActivityArgs | SwitchActivityArgs | SynapseNotebookActivityArgs | SynapseSparkJobDefinitionActivityArgs | UntilActivityArgs | ValidationActivityArgs | WaitActivityArgs | WebActivityArgs | WebHookActivityArgs>[]>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed.
     */
    on: pulumi.Input<ExpressionArgs>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Switch'.
     */
    type: pulumi.Input<"Switch">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Switch cases with have a value and corresponding activities.
 */
export interface SwitchCaseArgs {
    /**
     * List of activities to execute for satisfied case condition.
     */
    activities?: pulumi.Input<pulumi.Input<AppendVariableActivityArgs | AzureDataExplorerCommandActivityArgs | AzureFunctionActivityArgs | AzureMLBatchExecutionActivityArgs | AzureMLExecutePipelineActivityArgs | AzureMLUpdateResourceActivityArgs | ControlActivityArgs | CopyActivityArgs | CustomActivityArgs | DataLakeAnalyticsUSQLActivityArgs | DatabricksNotebookActivityArgs | DatabricksSparkJarActivityArgs | DatabricksSparkPythonActivityArgs | DeleteActivityArgs | ExecuteDataFlowActivityArgs | ExecutePipelineActivityArgs | ExecuteSSISPackageActivityArgs | ExecuteWranglingDataflowActivityArgs | ExecutionActivityArgs | FailActivityArgs | FilterActivityArgs | ForEachActivityArgs | GetMetadataActivityArgs | HDInsightHiveActivityArgs | HDInsightMapReduceActivityArgs | HDInsightPigActivityArgs | HDInsightSparkActivityArgs | HDInsightStreamingActivityArgs | IfConditionActivityArgs | LookupActivityArgs | ScriptActivityArgs | SetVariableActivityArgs | SqlServerStoredProcedureActivityArgs | SwitchActivityArgs | SynapseNotebookActivityArgs | SynapseSparkJobDefinitionActivityArgs | UntilActivityArgs | ValidationActivityArgs | WaitActivityArgs | WebActivityArgs | WebHookActivityArgs>[]>;
    /**
     * Expected value that satisfies the expression result of the 'on' property.
     */
    value?: pulumi.Input<string>;
}

/**
 * Linked service for Sybase data source.
 */
export interface SybaseLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * AuthenticationType to be used for connection.
     */
    authenticationType?: pulumi.Input<string | enums.SybaseAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Database name for connection. Type: string (or Expression with resultType string).
     */
    database: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"Sybase">;
    /**
     * Username for authentication. Type: string (or Expression with resultType string).
     */
    username?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for Sybase databases.
 */
export interface SybaseSourceArgs {
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
    type: pulumi.Input<"SybaseSource">;
}

/**
 * The Sybase table dataset.
 */
export interface SybaseTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"SybaseTable">;
}

/**
 * Execute Synapse notebook activity.
 */
export interface SynapseNotebookActivityArgs {
    /**
     * Spark configuration properties, which will override the 'conf' of the notebook you provide.
     */
    conf?: any;
    /**
     * The type of the spark config.
     */
    configurationType?: pulumi.Input<string | enums.ConfigurationType>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
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
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Synapse notebook reference.
     */
    notebook: pulumi.Input<SynapseNotebookReferenceArgs>;
    /**
     * Number of executors to launch for this session, which will override the 'numExecutors' of the notebook you provide. Type: integer (or Expression with resultType integer).
     */
    numExecutors?: any;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Notebook parameters.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<NotebookParameterArgs>}>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Spark configuration property.
     */
    sparkConfig?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the big data pool which will be used to execute the notebook.
     */
    sparkPool?: pulumi.Input<BigDataPoolParametrizationReferenceArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * The spark configuration of the spark job.
     */
    targetSparkConfiguration?: pulumi.Input<SparkConfigurationParametrizationReferenceArgs>;
    /**
     * Type of activity.
     * Expected value is 'SynapseNotebook'.
     */
    type: pulumi.Input<"SynapseNotebook">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Synapse notebook reference type.
 */
export interface SynapseNotebookReferenceArgs {
    /**
     * Reference notebook name. Type: string (or Expression with resultType string).
     */
    referenceName: any;
    /**
     * Synapse notebook reference type.
     */
    type: pulumi.Input<string | enums.NotebookReferenceType>;
}

/**
 * Execute spark job activity.
 */
export interface SynapseSparkJobDefinitionActivityArgs {
    /**
     * User specified arguments to SynapseSparkJobDefinitionActivity.
     */
    arguments?: pulumi.Input<any[]>;
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
    configurationType?: pulumi.Input<string | enums.ConfigurationType>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
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
    files?: pulumi.Input<any[]>;
    /**
     * Additional files used for reference in the main definition file, which will override the 'jars' and 'files' of the spark job definition you provide.
     */
    filesV2?: pulumi.Input<any[]>;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Number of executors to launch for this job, which will override the 'numExecutors' of the spark job definition you provide. Type: integer (or Expression with resultType integer).
     */
    numExecutors?: any;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Additional python code files used for reference in the main definition file, which will override the 'pyFiles' of the spark job definition you provide.
     */
    pythonCodeReference?: pulumi.Input<any[]>;
    /**
     * Scanning subfolders from the root folder of the main definition file, these files will be added as reference files. The folders named 'jars', 'pyFiles', 'files' or 'archives' will be scanned, and the folders name are case sensitive. Type: boolean (or Expression with resultType boolean).
     */
    scanFolder?: any;
    /**
     * Spark configuration property.
     */
    sparkConfig?: pulumi.Input<{[key: string]: any}>;
    /**
     * Synapse spark job reference.
     */
    sparkJob: pulumi.Input<SynapseSparkJobReferenceArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * The name of the big data pool which will be used to execute the spark batch job, which will override the 'targetBigDataPool' of the spark job definition you provide.
     */
    targetBigDataPool?: pulumi.Input<BigDataPoolParametrizationReferenceArgs>;
    /**
     * The spark configuration of the spark job.
     */
    targetSparkConfiguration?: pulumi.Input<SparkConfigurationParametrizationReferenceArgs>;
    /**
     * Type of activity.
     * Expected value is 'SparkJob'.
     */
    type: pulumi.Input<"SparkJob">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Synapse spark job reference type.
 */
export interface SynapseSparkJobReferenceArgs {
    /**
     * Reference spark job name. Expression with resultType string.
     */
    referenceName: any;
    /**
     * Synapse spark job reference type.
     */
    type: pulumi.Input<string | enums.SparkJobReferenceType>;
}

/**
 * Copy activity sources of tabular type.
 */
export interface TabularSourceArgs {
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
    type: pulumi.Input<"TabularSource">;
}

/**
 * The TarGZip compression read settings.
 */
export interface TarGZipReadSettingsArgs {
    /**
     * Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean).
     */
    preserveCompressionFileNameAsFolder?: any;
    /**
     * The Compression setting type.
     * Expected value is 'TarGZipReadSettings'.
     */
    type: pulumi.Input<"TarGZipReadSettings">;
}

/**
 * The Tar compression read settings.
 */
export interface TarReadSettingsArgs {
    /**
     * Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean).
     */
    preserveCompressionFileNameAsFolder?: any;
    /**
     * The Compression setting type.
     * Expected value is 'TarReadSettings'.
     */
    type: pulumi.Input<"TarReadSettings">;
}

/**
 * Linked service for TeamDesk.
 */
export interface TeamDeskLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The api token for the TeamDesk source.
     */
    apiToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The authentication type to use.
     */
    authenticationType: pulumi.Input<string | enums.TeamDeskAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password of the TeamDesk source.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'TeamDesk'.
     */
    type: pulumi.Input<"TeamDesk">;
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
    version?: pulumi.Input<string>;
}

/**
 * Teradata import command settings.
 */
export interface TeradataImportCommandArgs {
    /**
     * Additional format options for Teradata Copy Command. The format options only applies to direct copy from CSV source. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "timeFormat": "HHhMImSSs" }
     */
    additionalFormatOptions?: any;
    /**
     * The import setting type.
     * Expected value is 'TeradataImportCommand'.
     */
    type: pulumi.Input<"TeradataImportCommand">;
}

/**
 * Linked service for Teradata data source.
 */
export interface TeradataLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * AuthenticationType to be used for connection.
     */
    authenticationType?: pulumi.Input<string | enums.TeradataAuthenticationType>;
    /**
     * The character set to use for the connection. Type: string (or Expression with resultType string). Only applied for version 2.0.
     */
    characterSet?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Only applied for version 1.0.
     */
    connectionString?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
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
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Password for authentication.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    type: pulumi.Input<"Teradata">;
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
    version?: pulumi.Input<string>;
}

/**
 * The settings that will be leveraged for teradata source partitioning.
 */
export interface TeradataPartitionSettingsArgs {
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
export interface TeradataSinkArgs {
    /**
     * If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    disableMetricsCollection?: any;
    /**
     * Teradata import settings.
     */
    importSettings?: pulumi.Input<TeradataImportCommandArgs>;
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
    type: pulumi.Input<"TeradataSink">;
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
export interface TeradataSourceArgs {
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
    partitionSettings?: pulumi.Input<TeradataPartitionSettingsArgs>;
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
    type: pulumi.Input<"TeradataSource">;
}

/**
 * The Teradata database dataset.
 */
export interface TeradataTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The database name of Teradata. Type: string (or Expression with resultType string).
     */
    database?: any;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"TeradataTable">;
}

/**
 * The data stored in text format.
 */
export interface TextFormatArgs {
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
    type: pulumi.Input<"TextFormat">;
}

/**
 * A data flow transformation.
 */
export interface TransformationArgs {
    /**
     * Dataset reference.
     */
    dataset?: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Transformation description.
     */
    description?: pulumi.Input<string>;
    /**
     * Flowlet Reference
     */
    flowlet?: pulumi.Input<DataFlowReferenceArgs>;
    /**
     * Linked service reference.
     */
    linkedService?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Transformation name.
     */
    name: pulumi.Input<string>;
}

/**
 * Trigger referenced dependency.
 */
export interface TriggerDependencyReferenceArgs {
    /**
     * Referenced trigger.
     */
    referenceTrigger: pulumi.Input<TriggerReferenceArgs>;
    /**
     * The type of dependency reference.
     * Expected value is 'TriggerDependencyReference'.
     */
    type: pulumi.Input<"TriggerDependencyReference">;
}

/**
 * Pipeline that needs to be triggered with the given parameters.
 */
export interface TriggerPipelineReferenceArgs {
    /**
     * Pipeline parameters.
     */
    parameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Pipeline reference.
     */
    pipelineReference?: pulumi.Input<PipelineReferenceArgs>;
}

/**
 * Trigger reference type.
 */
export interface TriggerReferenceArgs {
    /**
     * Reference trigger name.
     */
    referenceName: pulumi.Input<string>;
    /**
     * Trigger reference type.
     */
    type: pulumi.Input<string | enums.TriggerReferenceType>;
}

/**
 * Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past).
 */
export interface TumblingWindowTriggerArgs {
    /**
     * List of tags that can be used for describing the trigger.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    delay?: any;
    /**
     * Triggers that this trigger depends on. Only tumbling window triggers are supported.
     */
    dependsOn?: pulumi.Input<pulumi.Input<SelfDependencyTumblingWindowTriggerReferenceArgs | TriggerDependencyReferenceArgs | TumblingWindowTriggerDependencyReferenceArgs>[]>;
    /**
     * Trigger description.
     */
    description?: pulumi.Input<string>;
    /**
     * The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The frequency of the time windows.
     */
    frequency: pulumi.Input<string | enums.TumblingWindowFrequency>;
    /**
     * The interval of the time windows. The minimum interval allowed is 15 Minutes.
     */
    interval: pulumi.Input<number>;
    /**
     * The max number of parallel time windows (ready for execution) for which a new run is triggered.
     */
    maxConcurrency: pulumi.Input<number>;
    /**
     * Pipeline for which runs are created when an event is fired for trigger window that is ready.
     */
    pipeline: pulumi.Input<TriggerPipelineReferenceArgs>;
    /**
     * Retry policy that will be applied for failed pipeline runs.
     */
    retryPolicy?: pulumi.Input<RetryPolicyArgs>;
    /**
     * The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
     */
    startTime: pulumi.Input<string>;
    /**
     * Trigger type.
     * Expected value is 'TumblingWindowTrigger'.
     */
    type: pulumi.Input<"TumblingWindowTrigger">;
}

/**
 * Referenced tumbling window trigger dependency.
 */
export interface TumblingWindowTriggerDependencyReferenceArgs {
    /**
     * Timespan applied to the start time of a tumbling window when evaluating dependency.
     */
    offset?: pulumi.Input<string>;
    /**
     * Referenced trigger.
     */
    referenceTrigger: pulumi.Input<TriggerReferenceArgs>;
    /**
     * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
     */
    size?: pulumi.Input<string>;
    /**
     * The type of dependency reference.
     * Expected value is 'TumblingWindowTriggerDependencyReference'.
     */
    type: pulumi.Input<"TumblingWindowTriggerDependencyReference">;
}

/**
 * Linked service for Twilio.
 */
export interface TwilioLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The auth token of Twilio service.
     */
    password: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Twilio'.
     */
    type: pulumi.Input<"Twilio">;
    /**
     * The Account SID of Twilio service. Type: string (or Expression with resultType string).
     */
    userName: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * This activity executes inner activities until the specified boolean expression results to true or timeout is reached, whichever is earlier.
 */
export interface UntilActivityArgs {
    /**
     * List of activities to execute.
     */
    activities: pulumi.Input<pulumi.Input<AppendVariableActivityArgs | AzureDataExplorerCommandActivityArgs | AzureFunctionActivityArgs | AzureMLBatchExecutionActivityArgs | AzureMLExecutePipelineActivityArgs | AzureMLUpdateResourceActivityArgs | ControlActivityArgs | CopyActivityArgs | CustomActivityArgs | DataLakeAnalyticsUSQLActivityArgs | DatabricksNotebookActivityArgs | DatabricksSparkJarActivityArgs | DatabricksSparkPythonActivityArgs | DeleteActivityArgs | ExecuteDataFlowActivityArgs | ExecutePipelineActivityArgs | ExecuteSSISPackageActivityArgs | ExecuteWranglingDataflowActivityArgs | ExecutionActivityArgs | FailActivityArgs | FilterActivityArgs | ForEachActivityArgs | GetMetadataActivityArgs | HDInsightHiveActivityArgs | HDInsightMapReduceActivityArgs | HDInsightPigActivityArgs | HDInsightSparkActivityArgs | HDInsightStreamingActivityArgs | IfConditionActivityArgs | LookupActivityArgs | ScriptActivityArgs | SetVariableActivityArgs | SqlServerStoredProcedureActivityArgs | SwitchActivityArgs | SynapseNotebookActivityArgs | SynapseSparkJobDefinitionActivityArgs | UntilActivityArgs | ValidationActivityArgs | WaitActivityArgs | WebActivityArgs | WebHookActivityArgs>[]>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true
     */
    expression: pulumi.Input<ExpressionArgs>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    timeout?: any;
    /**
     * Type of activity.
     * Expected value is 'Until'.
     */
    type: pulumi.Input<"Until">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * User property.
 */
export interface UserPropertyArgs {
    /**
     * User property name.
     */
    name: pulumi.Input<string>;
    /**
     * User property value. Type: string (or Expression with resultType string).
     */
    value: any;
}

/**
 * This activity verifies that an external resource exists.
 */
export interface ValidationActivityArgs {
    /**
     * Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean).
     */
    childItems?: any;
    /**
     * Validation activity dataset reference.
     */
    dataset: pulumi.Input<DatasetReferenceArgs>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer).
     */
    minimumSize?: any;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer).
     */
    sleep?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    timeout?: any;
    /**
     * Type of activity.
     * Expected value is 'Validation'.
     */
    type: pulumi.Input<"Validation">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Definition of a single variable for a Pipeline.
 */
export interface VariableSpecificationArgs {
    /**
     * Default value of variable.
     */
    defaultValue?: any;
    /**
     * Variable type.
     */
    type: pulumi.Input<string | enums.VariableType>;
}

/**
 * Vertica linked service.
 */
export interface VerticaLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
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
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The port for the connection. Type: integer.
     */
    port?: any;
    /**
     * The Azure key vault secret reference of password in connection string.
     */
    pwd?: pulumi.Input<AzureKeyVaultSecretReferenceArgs>;
    /**
     * Server name for connection. Type: string.
     */
    server?: any;
    /**
     * Type of linked service.
     * Expected value is 'Vertica'.
     */
    type: pulumi.Input<"Vertica">;
    /**
     * Username for authentication. Type: string.
     */
    uid?: any;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity Vertica source.
 */
export interface VerticaSourceArgs {
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
    type: pulumi.Input<"VerticaSource">;
}

/**
 * Vertica dataset.
 */
export interface VerticaTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"VerticaTable">;
}

/**
 * This activity suspends pipeline execution for the specified interval.
 */
export interface WaitActivityArgs {
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Type of activity.
     * Expected value is 'Wait'.
     */
    type: pulumi.Input<"Wait">;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
    /**
     * Duration in seconds. Type: integer (or Expression with resultType integer).
     */
    waitTimeInSeconds: any;
}

/**
 * Microsoft Fabric Warehouse linked service.
 */
export interface WarehouseLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The ID of Microsoft Fabric Warehouse artifact. Type: string (or Expression with resultType string).
     */
    artifactId: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of Microsoft Fabric Warehouse server. Type: string (or Expression with resultType string).
     */
    endpoint: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
     */
    servicePrincipalCredential?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
    servicePrincipalKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
     */
    tenant?: any;
    /**
     * Type of linked service.
     * Expected value is 'Warehouse'.
     */
    type: pulumi.Input<"Warehouse">;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
    /**
     * The ID of Microsoft Fabric workspace. Type: string (or Expression with resultType string).
     */
    workspaceId?: any;
}

/**
 * A copy activity Microsoft Fabric Warehouse sink.
 */
export interface WarehouseSinkArgs {
    /**
     * Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean).
     */
    allowCopyCommand?: any;
    /**
     * Specifies Copy Command related settings when allowCopyCommand is true.
     */
    copyCommandSettings?: pulumi.Input<DWCopyCommandSettingsArgs>;
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
    type: pulumi.Input<"WarehouseSink">;
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
export interface WarehouseSourceArgs {
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
    partitionSettings?: pulumi.Input<SqlPartitionSettingsArgs>;
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
    type: pulumi.Input<"WarehouseSource">;
}

/**
 * Microsoft Fabric Warehouse dataset.
 */
export interface WarehouseTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"WarehouseTable">;
}

/**
 * Web activity.
 */
export interface WebActivityArgs {
    /**
     * Authentication method used for calling the endpoint.
     */
    authentication?: pulumi.Input<WebActivityAuthenticationArgs>;
    /**
     * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
     */
    body?: any;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * List of datasets passed to web endpoint.
     */
    datasets?: pulumi.Input<pulumi.Input<DatasetReferenceArgs>[]>;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * When set to true, Certificate validation will be disabled.
     */
    disableCertValidation?: pulumi.Input<boolean>;
    /**
     * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
     */
    headers?: pulumi.Input<{[key: string]: any}>;
    /**
     * Timeout for the HTTP request to get a response. Format is in TimeSpan (hh:mm:ss). This value is the timeout to get a response, not the activity timeout. The default value is 00:01:00 (1 minute). The range is from 1 to 10 minutes
     */
    httpRequestTimeout?: any;
    /**
     * Linked service reference.
     */
    linkedServiceName?: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * List of linked services passed to web endpoint.
     */
    linkedServices?: pulumi.Input<pulumi.Input<LinkedServiceReferenceArgs>[]>;
    /**
     * Rest API method for target endpoint.
     */
    method: pulumi.Input<string | enums.WebActivityMethod>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<ActivityPolicyArgs>;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * Option to disable invoking HTTP GET on location given in response header of a HTTP 202 Response. If set true, it stops invoking HTTP GET on http location given in response header. If set false then continues to invoke HTTP GET call on location given in http response headers.
     */
    turnOffAsync?: pulumi.Input<boolean>;
    /**
     * Type of activity.
     * Expected value is 'WebActivity'.
     */
    type: pulumi.Input<"WebActivity">;
    /**
     * Web activity target endpoint and path. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Web activity authentication properties.
 */
export interface WebActivityAuthenticationArgs {
    /**
     * The credential reference containing authentication information.
     */
    credential?: pulumi.Input<CredentialReferenceArgs>;
    /**
     * Password for the PFX file or basic authentication / Secret when used for ServicePrincipal
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Base64-encoded contents of a PFX file or Certificate when used for ServicePrincipal
     */
    pfx?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Resource for which Azure Auth token will be requested when using MSI Authentication. Type: string (or Expression with resultType string).
     */
    resource?: any;
    /**
     * Web activity authentication (Basic/ClientCertificate/MSI/ServicePrincipal)
     */
    type?: pulumi.Input<string>;
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
 * A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint.
 */
export interface WebAnonymousAuthenticationArgs {
    /**
     * Type of authentication used to connect to the web table source.
     * Expected value is 'Anonymous'.
     */
    authenticationType: pulumi.Input<"Anonymous">;
    /**
     * The URL of the web service endpoint, e.g. https://www.microsoft.com . Type: string (or Expression with resultType string).
     */
    url: any;
}

/**
 * A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint.
 */
export interface WebBasicAuthenticationArgs {
    /**
     * Type of authentication used to connect to the web table source.
     * Expected value is 'Basic'.
     */
    authenticationType: pulumi.Input<"Basic">;
    /**
     * The password for Basic authentication.
     */
    password: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
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
export interface WebClientCertificateAuthenticationArgs {
    /**
     * Type of authentication used to connect to the web table source.
     * Expected value is 'ClientCertificate'.
     */
    authenticationType: pulumi.Input<"ClientCertificate">;
    /**
     * Password for the PFX file.
     */
    password: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Base64-encoded contents of a PFX file.
     */
    pfx: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The URL of the web service endpoint, e.g. https://www.microsoft.com . Type: string (or Expression with resultType string).
     */
    url: any;
}

/**
 * WebHook activity.
 */
export interface WebHookActivityArgs {
    /**
     * Authentication method used for calling the endpoint.
     */
    authentication?: pulumi.Input<WebActivityAuthenticationArgs>;
    /**
     * Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string).
     */
    body?: any;
    /**
     * Activity depends on condition.
     */
    dependsOn?: pulumi.Input<pulumi.Input<ActivityDependencyArgs>[]>;
    /**
     * Activity description.
     */
    description?: pulumi.Input<string>;
    /**
     * Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string).
     */
    headers?: pulumi.Input<{[key: string]: any}>;
    /**
     * Rest API method for target endpoint.
     */
    method: pulumi.Input<string | enums.WebHookActivityMethod>;
    /**
     * Activity name.
     */
    name: pulumi.Input<string>;
    /**
     * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
     */
    onInactiveMarkAs?: pulumi.Input<string | enums.ActivityOnInactiveMarkAs>;
    /**
     * Activity policy.
     */
    policy?: pulumi.Input<SecureInputOutputPolicyArgs>;
    /**
     * When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean).
     */
    reportStatusOnCallBack?: any;
    /**
     * Activity state. This is an optional property and if not provided, the state will be Active by default.
     */
    state?: pulumi.Input<string | enums.ActivityState>;
    /**
     * The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
     */
    timeout?: pulumi.Input<string>;
    /**
     * Type of activity.
     * Expected value is 'WebHook'.
     */
    type: pulumi.Input<"WebHook">;
    /**
     * WebHook activity target endpoint and path. Type: string (or Expression with resultType string).
     */
    url: any;
    /**
     * Activity user properties.
     */
    userProperties?: pulumi.Input<pulumi.Input<UserPropertyArgs>[]>;
}

/**
 * Web linked service.
 */
export interface WebLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Web'.
     */
    type: pulumi.Input<"Web">;
    /**
     * Web linked service properties.
     */
    typeProperties: pulumi.Input<WebAnonymousAuthenticationArgs | WebBasicAuthenticationArgs | WebClientCertificateAuthenticationArgs>;
    /**
     * Version of the linked service.
     */
    version?: pulumi.Input<string>;
}

/**
 * A copy activity source for web page table.
 */
export interface WebSourceArgs {
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
    type: pulumi.Input<"WebSource">;
}

/**
 * The dataset points to a HTML table in the web page.
 */
export interface WebTableDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0.
     */
    index: any;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"WebTable">;
}

/**
 * Power Query data flow.
 */
export interface WranglingDataFlowArgs {
    /**
     * List of tags that can be used for describing the data flow.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The description of the data flow.
     */
    description?: pulumi.Input<string>;
    /**
     * Locale of the Power query mashup document.
     */
    documentLocale?: pulumi.Input<string>;
    /**
     * The folder that this data flow is in. If not specified, Data flow will appear at the root level.
     */
    folder?: pulumi.Input<DataFlowFolderArgs>;
    /**
     * Power query mashup script.
     */
    script?: pulumi.Input<string>;
    /**
     * List of sources in Power Query.
     */
    sources?: pulumi.Input<pulumi.Input<PowerQuerySourceArgs>[]>;
    /**
     * Type of data flow.
     * Expected value is 'WranglingDataFlow'.
     */
    type: pulumi.Input<"WranglingDataFlow">;
}

/**
 * Xero Service linked service.
 */
export interface XeroLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * The consumer key associated with the Xero application.
     */
    consumerKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the Xero server. (i.e. api.xero.com)
     */
    host?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(
     * ).
     */
    privateKey?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Xero'.
     */
    type: pulumi.Input<"Xero">;
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
    version?: pulumi.Input<string>;
}

/**
 * Xero Service dataset.
 */
export interface XeroObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"XeroObject">;
}

/**
 * A copy activity Xero Service source.
 */
export interface XeroSourceArgs {
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
    type: pulumi.Input<"XeroSource">;
}

/**
 * Xml dataset.
 */
export interface XmlDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The data compression method used for the json dataset.
     */
    compression?: pulumi.Input<DatasetCompressionArgs>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string).
     */
    encodingName?: any;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * The location of the json data storage.
     */
    location: pulumi.Input<AmazonS3CompatibleLocationArgs | AmazonS3LocationArgs | AzureBlobFSLocationArgs | AzureBlobStorageLocationArgs | AzureDataLakeStoreLocationArgs | AzureFileStorageLocationArgs | FileServerLocationArgs | FtpServerLocationArgs | GoogleCloudStorageLocationArgs | HdfsLocationArgs | HttpServerLocationArgs | LakeHouseLocationArgs | OracleCloudStorageLocationArgs | SftpLocationArgs>;
    /**
     * The null value string. Type: string (or Expression with resultType string).
     */
    nullValue?: any;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"Xml">;
}

/**
 * Xml read settings.
 */
export interface XmlReadSettingsArgs {
    /**
     * Compression settings.
     */
    compressionProperties?: pulumi.Input<TarGZipReadSettingsArgs | TarReadSettingsArgs | ZipDeflateReadSettingsArgs>;
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
    type: pulumi.Input<"XmlReadSettings">;
    /**
     * Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string).
     */
    validationMode?: any;
}

/**
 * A copy activity Xml source.
 */
export interface XmlSourceArgs {
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
    formatSettings?: pulumi.Input<XmlReadSettingsArgs>;
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
    storeSettings?: pulumi.Input<AmazonS3CompatibleReadSettingsArgs | AmazonS3ReadSettingsArgs | AzureBlobFSReadSettingsArgs | AzureBlobStorageReadSettingsArgs | AzureDataLakeStoreReadSettingsArgs | AzureFileStorageReadSettingsArgs | FileServerReadSettingsArgs | FtpReadSettingsArgs | GoogleCloudStorageReadSettingsArgs | HdfsReadSettingsArgs | HttpReadSettingsArgs | LakeHouseReadSettingsArgs | OracleCloudStorageReadSettingsArgs | SftpReadSettingsArgs>;
    /**
     * Copy source type.
     * Expected value is 'XmlSource'.
     */
    type: pulumi.Input<"XmlSource">;
}

/**
 * Linked service for Zendesk.
 */
export interface ZendeskLinkedServiceArgs {
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The api token for the Zendesk source.
     */
    apiToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * The authentication type to use.
     */
    authenticationType: pulumi.Input<string | enums.ZendeskAuthenticationType>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * The password of the Zendesk source.
     */
    password?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * Type of linked service.
     * Expected value is 'Zendesk'.
     */
    type: pulumi.Input<"Zendesk">;
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
    version?: pulumi.Input<string>;
}

/**
 * The ZipDeflate compression read settings.
 */
export interface ZipDeflateReadSettingsArgs {
    /**
     * Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean).
     */
    preserveZipFileNameAsFolder?: any;
    /**
     * The Compression setting type.
     * Expected value is 'ZipDeflateReadSettings'.
     */
    type: pulumi.Input<"ZipDeflateReadSettings">;
}

/**
 * Zoho server linked service.
 */
export interface ZohoLinkedServiceArgs {
    /**
     * The access token for Zoho authentication.
     */
    accessToken?: pulumi.Input<AzureKeyVaultSecretReferenceArgs | SecureStringArgs>;
    /**
     * List of tags that can be used for describing the linked service.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The integration runtime reference.
     */
    connectVia?: pulumi.Input<IntegrationRuntimeReferenceArgs>;
    /**
     * Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object.
     */
    connectionProperties?: any;
    /**
     * Linked service description.
     */
    description?: pulumi.Input<string>;
    /**
     * The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string.
     */
    encryptedCredential?: pulumi.Input<string>;
    /**
     * The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private)
     */
    endpoint?: any;
    /**
     * Parameters for linked service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
    /**
     * Type of linked service.
     * Expected value is 'Zoho'.
     */
    type: pulumi.Input<"Zoho">;
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
    version?: pulumi.Input<string>;
}

/**
 * Zoho server dataset.
 */
export interface ZohoObjectDatasetArgs {
    /**
     * List of tags that can be used for describing the Dataset.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * Dataset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
     */
    folder?: pulumi.Input<DatasetFolderArgs>;
    /**
     * Linked service reference.
     */
    linkedServiceName: pulumi.Input<LinkedServiceReferenceArgs>;
    /**
     * Parameters for dataset.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterSpecificationArgs>}>;
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
    type: pulumi.Input<"ZohoObject">;
}

/**
 * A copy activity Zoho server source.
 */
export interface ZohoSourceArgs {
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
    type: pulumi.Input<"ZohoSource">;
}
