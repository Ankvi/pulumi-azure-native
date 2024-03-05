export const ActivityOnInactiveMarkAs = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Skipped: "Skipped",
} as const;

/**
 * Status result of the activity when the state is set to Inactive. This is an optional property and if not provided when the activity is inactive, the status will be Succeeded by default.
 */
export type ActivityOnInactiveMarkAs = (typeof ActivityOnInactiveMarkAs)[keyof typeof ActivityOnInactiveMarkAs];

export const ActivityState = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

/**
 * Activity state. This is an optional property and if not provided, the state will be Active by default.
 */
export type ActivityState = (typeof ActivityState)[keyof typeof ActivityState];

export const AzureFunctionActivityMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    OPTIONS: "OPTIONS",
    HEAD: "HEAD",
    TRACE: "TRACE",
} as const;

/**
 * Rest API method for target endpoint.
 */
export type AzureFunctionActivityMethod = (typeof AzureFunctionActivityMethod)[keyof typeof AzureFunctionActivityMethod];

export const AzureSearchIndexWriteBehaviorType = {
    Merge: "Merge",
    Upload: "Upload",
} as const;

/**
 * Specify the write behavior when upserting documents into Azure Search Index.
 */
export type AzureSearchIndexWriteBehaviorType = (typeof AzureSearchIndexWriteBehaviorType)[keyof typeof AzureSearchIndexWriteBehaviorType];

export const AzureStorageAuthenticationType = {
    Anonymous: "Anonymous",
    AccountKey: "AccountKey",
    SasUri: "SasUri",
    ServicePrincipal: "ServicePrincipal",
    Msi: "Msi",
} as const;

/**
 * The type used for authentication. Type: string.
 */
export type AzureStorageAuthenticationType = (typeof AzureStorageAuthenticationType)[keyof typeof AzureStorageAuthenticationType];

export const BigDataPoolReferenceType = {
    BigDataPoolReference: "BigDataPoolReference",
} as const;

/**
 * Big data pool reference type.
 */
export type BigDataPoolReferenceType = (typeof BigDataPoolReferenceType)[keyof typeof BigDataPoolReferenceType];

export const BlobEventTypes = {
    Microsoft_Storage_BlobCreated: "Microsoft.Storage.BlobCreated",
    Microsoft_Storage_BlobDeleted: "Microsoft.Storage.BlobDeleted",
} as const;

export type BlobEventTypes = (typeof BlobEventTypes)[keyof typeof BlobEventTypes];

export const CassandraSourceReadConsistencyLevels = {
    ALL: "ALL",
    EACH_QUORUM: "EACH_QUORUM",
    QUORUM: "QUORUM",
    LOCAL_QUORUM: "LOCAL_QUORUM",
    ONE: "ONE",
    TWO: "TWO",
    THREE: "THREE",
    LOCAL_ONE: "LOCAL_ONE",
    SERIAL: "SERIAL",
    LOCAL_SERIAL: "LOCAL_SERIAL",
} as const;

/**
 * The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive.
 */
export type CassandraSourceReadConsistencyLevels = (typeof CassandraSourceReadConsistencyLevels)[keyof typeof CassandraSourceReadConsistencyLevels];

export const ConfigurationType = {
    Default: "Default",
    Customized: "Customized",
    Artifact: "Artifact",
} as const;

/**
 * The type of the spark config.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const ConnectionType = {
    Linkedservicetype: "linkedservicetype",
} as const;

/**
 * Type of connection via linked service or dataset.
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

export const CosmosDbConnectionMode = {
    Gateway: "Gateway",
    Direct: "Direct",
} as const;

/**
 * The connection mode used to access CosmosDB account. Type: string.
 */
export type CosmosDbConnectionMode = (typeof CosmosDbConnectionMode)[keyof typeof CosmosDbConnectionMode];

export const CredentialReferenceType = {
    CredentialReference: "CredentialReference",
} as const;

/**
 * Credential reference type.
 */
export type CredentialReferenceType = (typeof CredentialReferenceType)[keyof typeof CredentialReferenceType];

export const DataFlowComputeType = {
    General: "General",
    MemoryOptimized: "MemoryOptimized",
    ComputeOptimized: "ComputeOptimized",
} as const;

/**
 * Compute type of the cluster which will execute data flow job.
 */
export type DataFlowComputeType = (typeof DataFlowComputeType)[keyof typeof DataFlowComputeType];

export const DataFlowReferenceType = {
    DataFlowReference: "DataFlowReference",
} as const;

/**
 * Data flow reference type.
 */
export type DataFlowReferenceType = (typeof DataFlowReferenceType)[keyof typeof DataFlowReferenceType];

export const DayOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

/**
 * The day of the week.
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const DaysOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek];

export const Db2AuthenticationType = {
    Basic: "Basic",
} as const;

/**
 * AuthenticationType to be used for connection. It is mutually exclusive with connectionString property.
 */
export type Db2AuthenticationType = (typeof Db2AuthenticationType)[keyof typeof Db2AuthenticationType];

export const DependencyCondition = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Skipped: "Skipped",
    Completed: "Completed",
} as const;

export type DependencyCondition = (typeof DependencyCondition)[keyof typeof DependencyCondition];

export const DynamicsSinkWriteBehavior = {
    Upsert: "Upsert",
} as const;

/**
 * The write behavior for the operation.
 */
export type DynamicsSinkWriteBehavior = (typeof DynamicsSinkWriteBehavior)[keyof typeof DynamicsSinkWriteBehavior];

export const ExpressionV2Type = {
    Constant: "Constant",
    Field: "Field",
    Unary: "Unary",
    Binary: "Binary",
} as const;

/**
 * Type of expressions supported by the system. Type: string.
 */
export type ExpressionV2Type = (typeof ExpressionV2Type)[keyof typeof ExpressionV2Type];

export const FactoryIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The identity type.
 */
export type FactoryIdentityType = (typeof FactoryIdentityType)[keyof typeof FactoryIdentityType];

export const FrequencyType = {
    Hour: "Hour",
    Minute: "Minute",
    Second: "Second",
} as const;

/**
 * Frequency of period in terms of 'Hour', 'Minute' or 'Second'.
 */
export type FrequencyType = (typeof FrequencyType)[keyof typeof FrequencyType];

export const FtpAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
} as const;

/**
 * The authentication type to be used to connect to the FTP server.
 */
export type FtpAuthenticationType = (typeof FtpAuthenticationType)[keyof typeof FtpAuthenticationType];

export const GlobalParameterType = {
    Object: "Object",
    String: "String",
    Int: "Int",
    Float: "Float",
    Bool: "Bool",
    Array: "Array",
} as const;

/**
 * Global Parameter type.
 */
export type GlobalParameterType = (typeof GlobalParameterType)[keyof typeof GlobalParameterType];

export const GoogleAdWordsAuthenticationType = {
    ServiceAuthentication: "ServiceAuthentication",
    UserAuthentication: "UserAuthentication",
} as const;

/**
 * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
 */
export type GoogleAdWordsAuthenticationType = (typeof GoogleAdWordsAuthenticationType)[keyof typeof GoogleAdWordsAuthenticationType];

export const GoogleBigQueryAuthenticationType = {
    ServiceAuthentication: "ServiceAuthentication",
    UserAuthentication: "UserAuthentication",
} as const;

/**
 * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
 */
export type GoogleBigQueryAuthenticationType = (typeof GoogleBigQueryAuthenticationType)[keyof typeof GoogleBigQueryAuthenticationType];

export const GoogleBigQueryV2AuthenticationType = {
    ServiceAuthentication: "ServiceAuthentication",
    UserAuthentication: "UserAuthentication",
} as const;

/**
 * The OAuth 2.0 authentication mechanism used for authentication.
 */
export type GoogleBigQueryV2AuthenticationType = (typeof GoogleBigQueryV2AuthenticationType)[keyof typeof GoogleBigQueryV2AuthenticationType];

export const HBaseAuthenticationType = {
    Anonymous: "Anonymous",
    Basic: "Basic",
} as const;

/**
 * The authentication mechanism to use to connect to the HBase server.
 */
export type HBaseAuthenticationType = (typeof HBaseAuthenticationType)[keyof typeof HBaseAuthenticationType];

export const HDInsightActivityDebugInfoOption = {
    None: "None",
    Always: "Always",
    Failure: "Failure",
} as const;

/**
 * Debug info option.
 */
export type HDInsightActivityDebugInfoOption = (typeof HDInsightActivityDebugInfoOption)[keyof typeof HDInsightActivityDebugInfoOption];

export const HiveAuthenticationType = {
    Anonymous: "Anonymous",
    Username: "Username",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

/**
 * The authentication method used to access the Hive server.
 */
export type HiveAuthenticationType = (typeof HiveAuthenticationType)[keyof typeof HiveAuthenticationType];

export const HiveServerType = {
    HiveServer1: "HiveServer1",
    HiveServer2: "HiveServer2",
    HiveThriftServer: "HiveThriftServer",
} as const;

/**
 * The type of Hive server.
 */
export type HiveServerType = (typeof HiveServerType)[keyof typeof HiveServerType];

export const HiveThriftTransportProtocol = {
    Binary: "Binary",
    SASL: "SASL",
    HTTP_: "HTTP ",
} as const;

/**
 * The transport protocol to use in the Thrift layer.
 */
export type HiveThriftTransportProtocol = (typeof HiveThriftTransportProtocol)[keyof typeof HiveThriftTransportProtocol];

export const HttpAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
    Digest: "Digest",
    Windows: "Windows",
    ClientCertificate: "ClientCertificate",
} as const;

/**
 * The authentication type to be used to connect to the HTTP server.
 */
export type HttpAuthenticationType = (typeof HttpAuthenticationType)[keyof typeof HttpAuthenticationType];

export const ImpalaAuthenticationType = {
    Anonymous: "Anonymous",
    SASLUsername: "SASLUsername",
    UsernameAndPassword: "UsernameAndPassword",
} as const;

/**
 * The authentication type to use.
 */
export type ImpalaAuthenticationType = (typeof ImpalaAuthenticationType)[keyof typeof ImpalaAuthenticationType];

export const IntegrationRuntimeEdition = {
    Standard: "Standard",
    Enterprise: "Enterprise",
} as const;

/**
 * The edition for the SSIS Integration Runtime
 */
export type IntegrationRuntimeEdition = (typeof IntegrationRuntimeEdition)[keyof typeof IntegrationRuntimeEdition];

export const IntegrationRuntimeEntityReferenceType = {
    IntegrationRuntimeReference: "IntegrationRuntimeReference",
    LinkedServiceReference: "LinkedServiceReference",
} as const;

/**
 * The type of this referenced entity.
 */
export type IntegrationRuntimeEntityReferenceType = (typeof IntegrationRuntimeEntityReferenceType)[keyof typeof IntegrationRuntimeEntityReferenceType];

export const IntegrationRuntimeLicenseType = {
    BasePrice: "BasePrice",
    LicenseIncluded: "LicenseIncluded",
} as const;

/**
 * License type for bringing your own license scenario.
 */
export type IntegrationRuntimeLicenseType = (typeof IntegrationRuntimeLicenseType)[keyof typeof IntegrationRuntimeLicenseType];

export const IntegrationRuntimeSsisCatalogPricingTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    PremiumRS: "PremiumRS",
} as const;

/**
 * The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
 */
export type IntegrationRuntimeSsisCatalogPricingTier = (typeof IntegrationRuntimeSsisCatalogPricingTier)[keyof typeof IntegrationRuntimeSsisCatalogPricingTier];

export const IntegrationRuntimeType = {
    Managed: "Managed",
    SelfHosted: "SelfHosted",
} as const;

/**
 * Type of integration runtime.
 */
export type IntegrationRuntimeType = (typeof IntegrationRuntimeType)[keyof typeof IntegrationRuntimeType];

export const ManagedVirtualNetworkReferenceType = {
    ManagedVirtualNetworkReference: "ManagedVirtualNetworkReference",
} as const;

/**
 * Managed Virtual Network reference type.
 */
export type ManagedVirtualNetworkReferenceType = (typeof ManagedVirtualNetworkReferenceType)[keyof typeof ManagedVirtualNetworkReferenceType];

export const MappingType = {
    Direct: "Direct",
    Derived: "Derived",
    Aggregate: "Aggregate",
} as const;

/**
 * Type of the CDC attribute mapping. Note: 'Advanced' mapping type is also saved as 'Derived'.
 */
export type MappingType = (typeof MappingType)[keyof typeof MappingType];

export const MongoDbAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
} as const;

/**
 * The authentication type to be used to connect to the MongoDB database.
 */
export type MongoDbAuthenticationType = (typeof MongoDbAuthenticationType)[keyof typeof MongoDbAuthenticationType];

export const NotebookParameterType = {
    String: "string",
    Int: "int",
    Float: "float",
    Bool: "bool",
} as const;

/**
 * Notebook parameter type.
 */
export type NotebookParameterType = (typeof NotebookParameterType)[keyof typeof NotebookParameterType];

export const NotebookReferenceType = {
    NotebookReference: "NotebookReference",
} as const;

/**
 * Synapse notebook reference type.
 */
export type NotebookReferenceType = (typeof NotebookReferenceType)[keyof typeof NotebookReferenceType];

export const ODataAadServicePrincipalCredentialType = {
    ServicePrincipalKey: "ServicePrincipalKey",
    ServicePrincipalCert: "ServicePrincipalCert",
} as const;

/**
 * Specify the credential type (key or cert) is used for service principal.
 */
export type ODataAadServicePrincipalCredentialType = (typeof ODataAadServicePrincipalCredentialType)[keyof typeof ODataAadServicePrincipalCredentialType];

export const ODataAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
    Windows: "Windows",
    AadServicePrincipal: "AadServicePrincipal",
    ManagedServiceIdentity: "ManagedServiceIdentity",
} as const;

/**
 * Type of authentication used to connect to the OData service.
 */
export type ODataAuthenticationType = (typeof ODataAuthenticationType)[keyof typeof ODataAuthenticationType];

export const ParameterType = {
    Object: "Object",
    String: "String",
    Int: "Int",
    Float: "Float",
    Bool: "Bool",
    Array: "Array",
    SecureString: "SecureString",
} as const;

/**
 * Parameter type.
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

export const PhoenixAuthenticationType = {
    Anonymous: "Anonymous",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

/**
 * The authentication mechanism used to connect to the Phoenix server.
 */
export type PhoenixAuthenticationType = (typeof PhoenixAuthenticationType)[keyof typeof PhoenixAuthenticationType];

export const PolybaseSettingsRejectType = {
    Value: "value",
    Percentage: "percentage",
} as const;

/**
 * Reject type.
 */
export type PolybaseSettingsRejectType = (typeof PolybaseSettingsRejectType)[keyof typeof PolybaseSettingsRejectType];

export const PrestoAuthenticationType = {
    Anonymous: "Anonymous",
    LDAP: "LDAP",
} as const;

/**
 * The authentication mechanism used to connect to the Presto server.
 */
export type PrestoAuthenticationType = (typeof PrestoAuthenticationType)[keyof typeof PrestoAuthenticationType];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether or not public network access is allowed for the data factory.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RecurrenceFrequency = {
    NotSpecified: "NotSpecified",
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
    Year: "Year",
} as const;

/**
 * The frequency.
 */
export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const RestServiceAuthenticationType = {
    Anonymous: "Anonymous",
    Basic: "Basic",
    AadServicePrincipal: "AadServicePrincipal",
    ManagedServiceIdentity: "ManagedServiceIdentity",
    OAuth2ClientCredential: "OAuth2ClientCredential",
} as const;

/**
 * Type of authentication used to connect to the REST service.
 */
export type RestServiceAuthenticationType = (typeof RestServiceAuthenticationType)[keyof typeof RestServiceAuthenticationType];

export const SalesforceSinkWriteBehavior = {
    Insert: "Insert",
    Upsert: "Upsert",
} as const;

/**
 * The write behavior for the operation. Default is Insert.
 */
export type SalesforceSinkWriteBehavior = (typeof SalesforceSinkWriteBehavior)[keyof typeof SalesforceSinkWriteBehavior];

export const SalesforceV2SinkWriteBehavior = {
    Insert: "Insert",
    Upsert: "Upsert",
} as const;

/**
 * The write behavior for the operation. Default is Insert.
 */
export type SalesforceV2SinkWriteBehavior = (typeof SalesforceV2SinkWriteBehavior)[keyof typeof SalesforceV2SinkWriteBehavior];

export const SapCloudForCustomerSinkWriteBehavior = {
    Insert: "Insert",
    Update: "Update",
} as const;

/**
 * The write behavior for the operation. Default is 'Insert'.
 */
export type SapCloudForCustomerSinkWriteBehavior = (typeof SapCloudForCustomerSinkWriteBehavior)[keyof typeof SapCloudForCustomerSinkWriteBehavior];

export const SapHanaAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

/**
 * The authentication type to be used to connect to the SAP HANA server.
 */
export type SapHanaAuthenticationType = (typeof SapHanaAuthenticationType)[keyof typeof SapHanaAuthenticationType];

export const ScriptActivityLogDestination = {
    ActivityOutput: "ActivityOutput",
    ExternalStore: "ExternalStore",
} as const;

/**
 * The destination of logs. Type: string.
 */
export type ScriptActivityLogDestination = (typeof ScriptActivityLogDestination)[keyof typeof ScriptActivityLogDestination];

export const ScriptActivityParameterDirection = {
    ValueInput: "Input",
    ValueOutput: "Output",
    ValueInputOutput: "InputOutput",
} as const;

/**
 * The direction of the parameter.
 */
export type ScriptActivityParameterDirection = (typeof ScriptActivityParameterDirection)[keyof typeof ScriptActivityParameterDirection];

export const ScriptActivityParameterType = {
    Boolean: "Boolean",
    DateTime: "DateTime",
    DateTimeOffset: "DateTimeOffset",
    Decimal: "Decimal",
    Double: "Double",
    Guid: "Guid",
    Int16: "Int16",
    Int32: "Int32",
    Int64: "Int64",
    Single: "Single",
    String: "String",
    Timespan: "Timespan",
} as const;

/**
 * The type of the parameter.
 */
export type ScriptActivityParameterType = (typeof ScriptActivityParameterType)[keyof typeof ScriptActivityParameterType];

export const ScriptType = {
    Query: "Query",
    NonQuery: "NonQuery",
} as const;

/**
 * The type of the query. Type: string.
 */
export type ScriptType = (typeof ScriptType)[keyof typeof ScriptType];

export const ServiceNowAuthenticationType = {
    Basic: "Basic",
    OAuth2: "OAuth2",
} as const;

/**
 * The authentication type to use.
 */
export type ServiceNowAuthenticationType = (typeof ServiceNowAuthenticationType)[keyof typeof ServiceNowAuthenticationType];

export const ServiceNowV2AuthenticationType = {
    Basic: "Basic",
    OAuth2: "OAuth2",
} as const;

/**
 * The authentication type to use.
 */
export type ServiceNowV2AuthenticationType = (typeof ServiceNowV2AuthenticationType)[keyof typeof ServiceNowV2AuthenticationType];

export const SftpAuthenticationType = {
    Basic: "Basic",
    SshPublicKey: "SshPublicKey",
    MultiFactor: "MultiFactor",
} as const;

/**
 * The authentication type to be used to connect to the FTP server.
 */
export type SftpAuthenticationType = (typeof SftpAuthenticationType)[keyof typeof SftpAuthenticationType];

export const SnowflakeAuthenticationType = {
    Basic: "Basic",
    KeyPair: "KeyPair",
    AADServicePrincipal: "AADServicePrincipal",
} as const;

/**
 * The type used for authentication. Type: string.
 */
export type SnowflakeAuthenticationType = (typeof SnowflakeAuthenticationType)[keyof typeof SnowflakeAuthenticationType];

export const SparkAuthenticationType = {
    Anonymous: "Anonymous",
    Username: "Username",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

/**
 * The authentication method used to access the Spark server.
 */
export type SparkAuthenticationType = (typeof SparkAuthenticationType)[keyof typeof SparkAuthenticationType];

export const SparkConfigurationReferenceType = {
    SparkConfigurationReference: "SparkConfigurationReference",
} as const;

/**
 * Spark configuration reference type.
 */
export type SparkConfigurationReferenceType = (typeof SparkConfigurationReferenceType)[keyof typeof SparkConfigurationReferenceType];

export const SparkJobReferenceType = {
    SparkJobDefinitionReference: "SparkJobDefinitionReference",
} as const;

/**
 * Synapse spark job reference type.
 */
export type SparkJobReferenceType = (typeof SparkJobReferenceType)[keyof typeof SparkJobReferenceType];

export const SparkServerType = {
    SharkServer: "SharkServer",
    SharkServer2: "SharkServer2",
    SparkThriftServer: "SparkThriftServer",
} as const;

/**
 * The type of Spark server.
 */
export type SparkServerType = (typeof SparkServerType)[keyof typeof SparkServerType];

export const SparkThriftTransportProtocol = {
    Binary: "Binary",
    SASL: "SASL",
    HTTP_: "HTTP ",
} as const;

/**
 * The transport protocol to use in the Thrift layer.
 */
export type SparkThriftTransportProtocol = (typeof SparkThriftTransportProtocol)[keyof typeof SparkThriftTransportProtocol];

export const SqlAlwaysEncryptedAkvAuthType = {
    ServicePrincipal: "ServicePrincipal",
    ManagedIdentity: "ManagedIdentity",
    UserAssignedManagedIdentity: "UserAssignedManagedIdentity",
} as const;

/**
 * Sql always encrypted AKV authentication type. Type: string.
 */
export type SqlAlwaysEncryptedAkvAuthType = (typeof SqlAlwaysEncryptedAkvAuthType)[keyof typeof SqlAlwaysEncryptedAkvAuthType];

export const SsisLogLocationType = {
    File: "File",
} as const;

/**
 * The type of SSIS log location.
 */
export type SsisLogLocationType = (typeof SsisLogLocationType)[keyof typeof SsisLogLocationType];

export const SsisPackageLocationType = {
    SSISDB: "SSISDB",
    File: "File",
    InlinePackage: "InlinePackage",
    PackageStore: "PackageStore",
} as const;

/**
 * The type of SSIS package location.
 */
export type SsisPackageLocationType = (typeof SsisPackageLocationType)[keyof typeof SsisPackageLocationType];

export const SybaseAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

/**
 * AuthenticationType to be used for connection.
 */
export type SybaseAuthenticationType = (typeof SybaseAuthenticationType)[keyof typeof SybaseAuthenticationType];

export const TeamDeskAuthenticationType = {
    Basic: "Basic",
    Token: "Token",
} as const;

/**
 * The authentication type to use.
 */
export type TeamDeskAuthenticationType = (typeof TeamDeskAuthenticationType)[keyof typeof TeamDeskAuthenticationType];

export const TeradataAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

/**
 * AuthenticationType to be used for connection.
 */
export type TeradataAuthenticationType = (typeof TeradataAuthenticationType)[keyof typeof TeradataAuthenticationType];

export const TriggerReferenceType = {
    TriggerReference: "TriggerReference",
} as const;

/**
 * Trigger reference type.
 */
export type TriggerReferenceType = (typeof TriggerReferenceType)[keyof typeof TriggerReferenceType];

export const TumblingWindowFrequency = {
    Minute: "Minute",
    Hour: "Hour",
    Month: "Month",
} as const;

/**
 * The frequency of the time windows.
 */
export type TumblingWindowFrequency = (typeof TumblingWindowFrequency)[keyof typeof TumblingWindowFrequency];

export const Type = {
    LinkedServiceReference: "LinkedServiceReference",
} as const;

/**
 * Linked service reference type.
 */
export type Type = (typeof Type)[keyof typeof Type];

export const VariableType = {
    String: "String",
    Bool: "Bool",
    Array: "Array",
} as const;

/**
 * Variable type.
 */
export type VariableType = (typeof VariableType)[keyof typeof VariableType];

export const WebActivityMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
} as const;

/**
 * Rest API method for target endpoint.
 */
export type WebActivityMethod = (typeof WebActivityMethod)[keyof typeof WebActivityMethod];

export const WebAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
    ClientCertificate: "ClientCertificate",
} as const;

/**
 * Type of authentication used to connect to the web table source.
 */
export type WebAuthenticationType = (typeof WebAuthenticationType)[keyof typeof WebAuthenticationType];

export const WebHookActivityMethod = {
    POST: "POST",
} as const;

/**
 * Rest API method for target endpoint.
 */
export type WebHookActivityMethod = (typeof WebHookActivityMethod)[keyof typeof WebHookActivityMethod];

export const ZendeskAuthenticationType = {
    Basic: "Basic",
    Token: "Token",
} as const;

/**
 * The authentication type to use.
 */
export type ZendeskAuthenticationType = (typeof ZendeskAuthenticationType)[keyof typeof ZendeskAuthenticationType];
