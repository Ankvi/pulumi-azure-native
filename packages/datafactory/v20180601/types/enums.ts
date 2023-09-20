export const ActivityOnInactiveMarkAs = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Skipped: "Skipped",
} as const;

export type ActivityOnInactiveMarkAs = (typeof ActivityOnInactiveMarkAs)[keyof typeof ActivityOnInactiveMarkAs];

export const ActivityState = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

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

export type AzureFunctionActivityMethod = (typeof AzureFunctionActivityMethod)[keyof typeof AzureFunctionActivityMethod];

export const AzureSearchIndexWriteBehaviorType = {
    Merge: "Merge",
    Upload: "Upload",
} as const;

export type AzureSearchIndexWriteBehaviorType = (typeof AzureSearchIndexWriteBehaviorType)[keyof typeof AzureSearchIndexWriteBehaviorType];

export const AzureStorageAuthenticationType = {
    Anonymous: "Anonymous",
    AccountKey: "AccountKey",
    SasUri: "SasUri",
    ServicePrincipal: "ServicePrincipal",
    Msi: "Msi",
} as const;

export type AzureStorageAuthenticationType = (typeof AzureStorageAuthenticationType)[keyof typeof AzureStorageAuthenticationType];

export const BigDataPoolReferenceType = {
    BigDataPoolReference: "BigDataPoolReference",
} as const;

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

export type CassandraSourceReadConsistencyLevels = (typeof CassandraSourceReadConsistencyLevels)[keyof typeof CassandraSourceReadConsistencyLevels];

export const ConfigurationType = {
    Default: "Default",
    Customized: "Customized",
    Artifact: "Artifact",
} as const;

export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const ConnectionType = {
    Linkedservicetype: "linkedservicetype",
} as const;

export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

export const CosmosDbConnectionMode = {
    Gateway: "Gateway",
    Direct: "Direct",
} as const;

export type CosmosDbConnectionMode = (typeof CosmosDbConnectionMode)[keyof typeof CosmosDbConnectionMode];

export const CredentialReferenceType = {
    CredentialReference: "CredentialReference",
} as const;

export type CredentialReferenceType = (typeof CredentialReferenceType)[keyof typeof CredentialReferenceType];

export const DataFlowComputeType = {
    General: "General",
    MemoryOptimized: "MemoryOptimized",
    ComputeOptimized: "ComputeOptimized",
} as const;

export type DataFlowComputeType = (typeof DataFlowComputeType)[keyof typeof DataFlowComputeType];

export const DataFlowReferenceType = {
    DataFlowReference: "DataFlowReference",
} as const;

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

export type DynamicsSinkWriteBehavior = (typeof DynamicsSinkWriteBehavior)[keyof typeof DynamicsSinkWriteBehavior];

export const FactoryIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type FactoryIdentityType = (typeof FactoryIdentityType)[keyof typeof FactoryIdentityType];

export const FrequencyType = {
    Hour: "Hour",
    Minute: "Minute",
    Second: "Second",
} as const;

export type FrequencyType = (typeof FrequencyType)[keyof typeof FrequencyType];

export const FtpAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
} as const;

export type FtpAuthenticationType = (typeof FtpAuthenticationType)[keyof typeof FtpAuthenticationType];

export const GlobalParameterType = {
    Object: "Object",
    String: "String",
    Int: "Int",
    Float: "Float",
    Bool: "Bool",
    Array: "Array",
} as const;

export type GlobalParameterType = (typeof GlobalParameterType)[keyof typeof GlobalParameterType];

export const GoogleAdWordsAuthenticationType = {
    ServiceAuthentication: "ServiceAuthentication",
    UserAuthentication: "UserAuthentication",
} as const;

export type GoogleAdWordsAuthenticationType = (typeof GoogleAdWordsAuthenticationType)[keyof typeof GoogleAdWordsAuthenticationType];

export const GoogleBigQueryAuthenticationType = {
    ServiceAuthentication: "ServiceAuthentication",
    UserAuthentication: "UserAuthentication",
} as const;

export type GoogleBigQueryAuthenticationType = (typeof GoogleBigQueryAuthenticationType)[keyof typeof GoogleBigQueryAuthenticationType];

export const HBaseAuthenticationType = {
    Anonymous: "Anonymous",
    Basic: "Basic",
} as const;

export type HBaseAuthenticationType = (typeof HBaseAuthenticationType)[keyof typeof HBaseAuthenticationType];

export const HDInsightActivityDebugInfoOption = {
    None: "None",
    Always: "Always",
    Failure: "Failure",
} as const;

export type HDInsightActivityDebugInfoOption = (typeof HDInsightActivityDebugInfoOption)[keyof typeof HDInsightActivityDebugInfoOption];

export const HiveAuthenticationType = {
    Anonymous: "Anonymous",
    Username: "Username",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

export type HiveAuthenticationType = (typeof HiveAuthenticationType)[keyof typeof HiveAuthenticationType];

export const HiveServerType = {
    HiveServer1: "HiveServer1",
    HiveServer2: "HiveServer2",
    HiveThriftServer: "HiveThriftServer",
} as const;

export type HiveServerType = (typeof HiveServerType)[keyof typeof HiveServerType];

export const HiveThriftTransportProtocol = {
    Binary: "Binary",
    SASL: "SASL",
    HTTP_: "HTTP ",
} as const;

export type HiveThriftTransportProtocol = (typeof HiveThriftTransportProtocol)[keyof typeof HiveThriftTransportProtocol];

export const HttpAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
    Digest: "Digest",
    Windows: "Windows",
    ClientCertificate: "ClientCertificate",
} as const;

export type HttpAuthenticationType = (typeof HttpAuthenticationType)[keyof typeof HttpAuthenticationType];

export const ImpalaAuthenticationType = {
    Anonymous: "Anonymous",
    SASLUsername: "SASLUsername",
    UsernameAndPassword: "UsernameAndPassword",
} as const;

export type ImpalaAuthenticationType = (typeof ImpalaAuthenticationType)[keyof typeof ImpalaAuthenticationType];

export const IntegrationRuntimeEdition = {
    Standard: "Standard",
    Enterprise: "Enterprise",
} as const;

export type IntegrationRuntimeEdition = (typeof IntegrationRuntimeEdition)[keyof typeof IntegrationRuntimeEdition];

export const IntegrationRuntimeEntityReferenceType = {
    IntegrationRuntimeReference: "IntegrationRuntimeReference",
    LinkedServiceReference: "LinkedServiceReference",
} as const;

export type IntegrationRuntimeEntityReferenceType = (typeof IntegrationRuntimeEntityReferenceType)[keyof typeof IntegrationRuntimeEntityReferenceType];

export const IntegrationRuntimeLicenseType = {
    BasePrice: "BasePrice",
    LicenseIncluded: "LicenseIncluded",
} as const;

export type IntegrationRuntimeLicenseType = (typeof IntegrationRuntimeLicenseType)[keyof typeof IntegrationRuntimeLicenseType];

export const IntegrationRuntimeSsisCatalogPricingTier = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    PremiumRS: "PremiumRS",
} as const;

export type IntegrationRuntimeSsisCatalogPricingTier = (typeof IntegrationRuntimeSsisCatalogPricingTier)[keyof typeof IntegrationRuntimeSsisCatalogPricingTier];

export const IntegrationRuntimeType = {
    Managed: "Managed",
    SelfHosted: "SelfHosted",
} as const;

export type IntegrationRuntimeType = (typeof IntegrationRuntimeType)[keyof typeof IntegrationRuntimeType];

export const ManagedVirtualNetworkReferenceType = {
    ManagedVirtualNetworkReference: "ManagedVirtualNetworkReference",
} as const;

export type ManagedVirtualNetworkReferenceType = (typeof ManagedVirtualNetworkReferenceType)[keyof typeof ManagedVirtualNetworkReferenceType];

export const MappingType = {
    Direct: "Direct",
    Derived: "Derived",
    Aggregate: "Aggregate",
} as const;

export type MappingType = (typeof MappingType)[keyof typeof MappingType];

export const MongoDbAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
} as const;

export type MongoDbAuthenticationType = (typeof MongoDbAuthenticationType)[keyof typeof MongoDbAuthenticationType];

export const NotebookParameterType = {
    String: "string",
    Int: "int",
    Float: "float",
    Bool: "bool",
} as const;

export type NotebookParameterType = (typeof NotebookParameterType)[keyof typeof NotebookParameterType];

export const NotebookReferenceType = {
    NotebookReference: "NotebookReference",
} as const;

export type NotebookReferenceType = (typeof NotebookReferenceType)[keyof typeof NotebookReferenceType];

export const ODataAadServicePrincipalCredentialType = {
    ServicePrincipalKey: "ServicePrincipalKey",
    ServicePrincipalCert: "ServicePrincipalCert",
} as const;

export type ODataAadServicePrincipalCredentialType = (typeof ODataAadServicePrincipalCredentialType)[keyof typeof ODataAadServicePrincipalCredentialType];

export const ODataAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
    Windows: "Windows",
    AadServicePrincipal: "AadServicePrincipal",
    ManagedServiceIdentity: "ManagedServiceIdentity",
} as const;

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

export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

export const PhoenixAuthenticationType = {
    Anonymous: "Anonymous",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

export type PhoenixAuthenticationType = (typeof PhoenixAuthenticationType)[keyof typeof PhoenixAuthenticationType];

export const PolybaseSettingsRejectType = {
    Value: "value",
    Percentage: "percentage",
} as const;

export type PolybaseSettingsRejectType = (typeof PolybaseSettingsRejectType)[keyof typeof PolybaseSettingsRejectType];

export const PrestoAuthenticationType = {
    Anonymous: "Anonymous",
    LDAP: "LDAP",
} as const;

export type PrestoAuthenticationType = (typeof PrestoAuthenticationType)[keyof typeof PrestoAuthenticationType];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

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

export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const RestServiceAuthenticationType = {
    Anonymous: "Anonymous",
    Basic: "Basic",
    AadServicePrincipal: "AadServicePrincipal",
    ManagedServiceIdentity: "ManagedServiceIdentity",
    OAuth2ClientCredential: "OAuth2ClientCredential",
} as const;

export type RestServiceAuthenticationType = (typeof RestServiceAuthenticationType)[keyof typeof RestServiceAuthenticationType];

export const SalesforceSinkWriteBehavior = {
    Insert: "Insert",
    Upsert: "Upsert",
} as const;

export type SalesforceSinkWriteBehavior = (typeof SalesforceSinkWriteBehavior)[keyof typeof SalesforceSinkWriteBehavior];

export const SapCloudForCustomerSinkWriteBehavior = {
    Insert: "Insert",
    Update: "Update",
} as const;

export type SapCloudForCustomerSinkWriteBehavior = (typeof SapCloudForCustomerSinkWriteBehavior)[keyof typeof SapCloudForCustomerSinkWriteBehavior];

export const SapHanaAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

export type SapHanaAuthenticationType = (typeof SapHanaAuthenticationType)[keyof typeof SapHanaAuthenticationType];

export const ScriptActivityLogDestination = {
    ActivityOutput: "ActivityOutput",
    ExternalStore: "ExternalStore",
} as const;

export type ScriptActivityLogDestination = (typeof ScriptActivityLogDestination)[keyof typeof ScriptActivityLogDestination];

export const ScriptActivityParameterDirection = {
    ValueInput: "Input",
    ValueOutput: "Output",
    ValueInputOutput: "InputOutput",
} as const;

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

export type ScriptActivityParameterType = (typeof ScriptActivityParameterType)[keyof typeof ScriptActivityParameterType];

export const ScriptType = {
    Query: "Query",
    NonQuery: "NonQuery",
} as const;

export type ScriptType = (typeof ScriptType)[keyof typeof ScriptType];

export const ServiceNowAuthenticationType = {
    Basic: "Basic",
    OAuth2: "OAuth2",
} as const;

export type ServiceNowAuthenticationType = (typeof ServiceNowAuthenticationType)[keyof typeof ServiceNowAuthenticationType];

export const SftpAuthenticationType = {
    Basic: "Basic",
    SshPublicKey: "SshPublicKey",
    MultiFactor: "MultiFactor",
} as const;

export type SftpAuthenticationType = (typeof SftpAuthenticationType)[keyof typeof SftpAuthenticationType];

export const SparkAuthenticationType = {
    Anonymous: "Anonymous",
    Username: "Username",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

export type SparkAuthenticationType = (typeof SparkAuthenticationType)[keyof typeof SparkAuthenticationType];

export const SparkConfigurationReferenceType = {
    SparkConfigurationReference: "SparkConfigurationReference",
} as const;

export type SparkConfigurationReferenceType = (typeof SparkConfigurationReferenceType)[keyof typeof SparkConfigurationReferenceType];

export const SparkJobReferenceType = {
    SparkJobDefinitionReference: "SparkJobDefinitionReference",
} as const;

export type SparkJobReferenceType = (typeof SparkJobReferenceType)[keyof typeof SparkJobReferenceType];

export const SparkServerType = {
    SharkServer: "SharkServer",
    SharkServer2: "SharkServer2",
    SparkThriftServer: "SparkThriftServer",
} as const;

export type SparkServerType = (typeof SparkServerType)[keyof typeof SparkServerType];

export const SparkThriftTransportProtocol = {
    Binary: "Binary",
    SASL: "SASL",
    HTTP_: "HTTP ",
} as const;

export type SparkThriftTransportProtocol = (typeof SparkThriftTransportProtocol)[keyof typeof SparkThriftTransportProtocol];

export const SqlAlwaysEncryptedAkvAuthType = {
    ServicePrincipal: "ServicePrincipal",
    ManagedIdentity: "ManagedIdentity",
    UserAssignedManagedIdentity: "UserAssignedManagedIdentity",
} as const;

export type SqlAlwaysEncryptedAkvAuthType = (typeof SqlAlwaysEncryptedAkvAuthType)[keyof typeof SqlAlwaysEncryptedAkvAuthType];

export const SsisLogLocationType = {
    File: "File",
} as const;

export type SsisLogLocationType = (typeof SsisLogLocationType)[keyof typeof SsisLogLocationType];

export const SsisPackageLocationType = {
    SSISDB: "SSISDB",
    File: "File",
    InlinePackage: "InlinePackage",
    PackageStore: "PackageStore",
} as const;

export type SsisPackageLocationType = (typeof SsisPackageLocationType)[keyof typeof SsisPackageLocationType];

export const SybaseAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

export type SybaseAuthenticationType = (typeof SybaseAuthenticationType)[keyof typeof SybaseAuthenticationType];

export const TeamDeskAuthenticationType = {
    Basic: "Basic",
    Token: "Token",
} as const;

export type TeamDeskAuthenticationType = (typeof TeamDeskAuthenticationType)[keyof typeof TeamDeskAuthenticationType];

export const TeradataAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

export type TeradataAuthenticationType = (typeof TeradataAuthenticationType)[keyof typeof TeradataAuthenticationType];

export const TriggerReferenceType = {
    TriggerReference: "TriggerReference",
} as const;

export type TriggerReferenceType = (typeof TriggerReferenceType)[keyof typeof TriggerReferenceType];

export const TumblingWindowFrequency = {
    Minute: "Minute",
    Hour: "Hour",
    Month: "Month",
} as const;

export type TumblingWindowFrequency = (typeof TumblingWindowFrequency)[keyof typeof TumblingWindowFrequency];

export const Type = {
    LinkedServiceReference: "LinkedServiceReference",
} as const;

export type Type = (typeof Type)[keyof typeof Type];

export const VariableType = {
    String: "String",
    Bool: "Bool",
    Array: "Array",
} as const;

export type VariableType = (typeof VariableType)[keyof typeof VariableType];

export const WebActivityMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
} as const;

export type WebActivityMethod = (typeof WebActivityMethod)[keyof typeof WebActivityMethod];

export const WebAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
    ClientCertificate: "ClientCertificate",
} as const;

export type WebAuthenticationType = (typeof WebAuthenticationType)[keyof typeof WebAuthenticationType];

export const WebHookActivityMethod = {
    POST: "POST",
} as const;

export type WebHookActivityMethod = (typeof WebHookActivityMethod)[keyof typeof WebHookActivityMethod];

export const ZendeskAuthenticationType = {
    Basic: "Basic",
    Token: "Token",
} as const;

export type ZendeskAuthenticationType = (typeof ZendeskAuthenticationType)[keyof typeof ZendeskAuthenticationType];