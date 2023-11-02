export const AnalyticalStorageSchemaType = {
    WellDefined: "WellDefined",
    FullFidelity: "FullFidelity",
} as const;

/**
 * Describes the types of schema for analytical storage.
 */
export type AnalyticalStorageSchemaType = (typeof AnalyticalStorageSchemaType)[keyof typeof AnalyticalStorageSchemaType];

export const AuthenticationMethod = {
    None: "None",
    Cassandra: "Cassandra",
    Ldap: "Ldap",
} as const;

/**
 * Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'.
 */
export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

export const BackupPolicyMigrationStatus = {
    Invalid: "Invalid",
    InProgress: "InProgress",
    Completed: "Completed",
    Failed: "Failed",
} as const;

/**
 * Describes the status of migration between backup policy types.
 */
export type BackupPolicyMigrationStatus = (typeof BackupPolicyMigrationStatus)[keyof typeof BackupPolicyMigrationStatus];

export const BackupPolicyType = {
    Periodic: "Periodic",
    Continuous: "Continuous",
} as const;

/**
 * Describes the mode of backups.
 */
export type BackupPolicyType = (typeof BackupPolicyType)[keyof typeof BackupPolicyType];

export const BackupStorageRedundancy = {
    Geo: "Geo",
    Local: "Local",
    Zone: "Zone",
} as const;

/**
 * Enum to indicate type of backup residency
 */
export type BackupStorageRedundancy = (typeof BackupStorageRedundancy)[keyof typeof BackupStorageRedundancy];

export const ClusterType = {
    Production: "Production",
    NonProduction: "NonProduction",
} as const;

/**
 * Type of the cluster. If set to Production, some operations might not be permitted on cluster.
 */
export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

export const CompositePathSortOrder = {
    Ascending: "ascending",
    Descending: "descending",
} as const;

/**
 * Sort order for composite paths.
 */
export type CompositePathSortOrder = (typeof CompositePathSortOrder)[keyof typeof CompositePathSortOrder];

export const ConflictResolutionMode = {
    LastWriterWins: "LastWriterWins",
    Custom: "Custom",
} as const;

/**
 * Indicates the conflict resolution mode.
 */
export type ConflictResolutionMode = (typeof ConflictResolutionMode)[keyof typeof ConflictResolutionMode];

export const ConnectorOffer = {
    Small: "Small",
} as const;

/**
 * The cassandra connector offer type for the Cosmos DB database C* account.
 */
export type ConnectorOffer = (typeof ConnectorOffer)[keyof typeof ConnectorOffer];

export const ContinuousTier = {
    Continuous7Days: "Continuous7Days",
    Continuous30Days: "Continuous30Days",
} as const;

/**
 * Enum to indicate type of Continuos backup mode
 */
export type ContinuousTier = (typeof ContinuousTier)[keyof typeof ContinuousTier];

export const CreateMode = {
    Default: "Default",
    Restore: "Restore",
} as const;

/**
 * Enum to indicate the mode of resource creation.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const CustomerManagedKeyStatus = {
    Access_to_your_account_is_currently_revoked_because_the_Azure_Cosmos_DB_service_is_unable_to_obtain_the_AAD_authentication_token_for_the_account_s_default_identity_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_azure_active_directory_token_acquisition_error_4000_: "Access to your account is currently revoked because the Azure Cosmos DB service is unable to obtain the AAD authentication token for the account's default identity; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide#azure-active-directory-token-acquisition-error (4000).",
    Access_to_your_account_is_currently_revoked_because_the_Azure_Cosmos_DB_account_s_key_vault_key_URI_does_not_follow_the_expected_format_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_improper_syntax_detected_on_the_key_vault_uri_property_4006_: "Access to your account is currently revoked because the Azure Cosmos DB account's key vault key URI does not follow the expected format; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide#improper-syntax-detected-on-the-key-vault-uri-property (4006).",
    Access_to_your_account_is_currently_revoked_because_the_current_default_identity_no_longer_has_permission_to_the_associated_Key_Vault_key_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_default_identity_is_unauthorized_to_access_the_azure_key_vault_key_4002_: "Access to your account is currently revoked because the current default identity no longer has permission to the associated Key Vault key; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide#default-identity-is-unauthorized-to-access-the-azure-key-vault-key (4002).",
    Access_to_your_account_is_currently_revoked_because_the_Azure_Key_Vault_DNS_name_specified_by_the_account_s_keyvaultkeyuri_property_could_not_be_resolved_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_unable_to_resolve_the_key_vaults_dns_4009_: "Access to your account is currently revoked because the Azure Key Vault DNS name specified by the account's keyvaultkeyuri property could not be resolved; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide#unable-to-resolve-the-key-vaults-dns (4009).",
    Access_to_your_account_is_currently_revoked_because_the_correspondent_key_is_not_found_on_the_specified_Key_Vault_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_azure_key_vault_resource_not_found_4003_: "Access to your account is currently revoked because the correspondent key is not found on the specified Key Vault; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide#azure-key-vault-resource-not-found (4003).",
    Access_to_your_account_is_currently_revoked_because_the_Azure_Cosmos_DB_service_is_unable_to_wrap_or_unwrap_the_key_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_internal_unwrapping_procedure_error_4005_: "Access to your account is currently revoked because the Azure Cosmos DB service is unable to wrap or unwrap the key; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide#internal-unwrapping-procedure-error (4005).",
    Access_to_your_account_is_currently_revoked_because_the_Azure_Cosmos_DB_account_has_an_undefined_default_identity_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_invalid_azure_cosmos_db_default_identity_4015_: "Access to your account is currently revoked because the Azure Cosmos DB account has an undefined default identity; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide#invalid-azure-cosmos-db-default-identity (4015).",
    Access_to_your_account_is_currently_revoked_because_the_access_rules_are_blocking_outbound_requests_to_the_Azure_Key_Vault_service_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_4016_: "Access to your account is currently revoked because the access rules are blocking outbound requests to the Azure Key Vault service; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide (4016).",
    Access_to_your_account_is_currently_revoked_because_the_correspondent_Azure_Key_Vault_was_not_found_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide_azure_key_vault_resource_not_found_4017_: "Access to your account is currently revoked because the correspondent Azure Key Vault was not found; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide#azure-key-vault-resource-not-found (4017).",
    Access_to_your_account_is_currently_revoked_for_more_details_about_this_error_and_how_to_restore_access_to_your_account_please_visit_https_learn_microsoft_com_en_us_azure_cosmos_db_cmk_troubleshooting_guide: "Access to your account is currently revoked; for more details about this error and how to restore access to your account please visit https://learn.microsoft.com/en-us/azure/cosmos-db/cmk-troubleshooting-guide",
    Access_to_the_configured_customer_managed_key_confirmed_: "Access to the configured customer managed key confirmed.",
} as const;

/**
 * Indicates the status of the Customer Managed Key feature on the account. In case there are errors, the property provides troubleshooting guidance.
 */
export type CustomerManagedKeyStatus = (typeof CustomerManagedKeyStatus)[keyof typeof CustomerManagedKeyStatus];

export const DataType = {
    String: "String",
    Number: "Number",
    Point: "Point",
    Polygon: "Polygon",
    LineString: "LineString",
    MultiPolygon: "MultiPolygon",
} as const;

/**
 * The datatype for which the indexing behavior is applied to.
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

export const DatabaseAccountKind = {
    GlobalDocumentDB: "GlobalDocumentDB",
    MongoDB: "MongoDB",
    Parse: "Parse",
} as const;

/**
 * Indicates the type of database account. This can only be set at database account creation.
 */
export type DatabaseAccountKind = (typeof DatabaseAccountKind)[keyof typeof DatabaseAccountKind];

export const DatabaseAccountOfferType = {
    Standard: "Standard",
} as const;

/**
 * The offer type for the database
 */
export type DatabaseAccountOfferType = (typeof DatabaseAccountOfferType)[keyof typeof DatabaseAccountOfferType];

export const DefaultConsistencyLevel = {
    Eventual: "Eventual",
    Session: "Session",
    BoundedStaleness: "BoundedStaleness",
    Strong: "Strong",
    ConsistentPrefix: "ConsistentPrefix",
} as const;

/**
 * The default consistency level and configuration settings of the Cosmos DB account.
 */
export type DefaultConsistencyLevel = (typeof DefaultConsistencyLevel)[keyof typeof DefaultConsistencyLevel];

export const DefaultPriorityLevel = {
    High: "High",
    Low: "Low",
} as const;

/**
 * Enum to indicate default Priority Level of request for Priority Based Execution.
 */
export type DefaultPriorityLevel = (typeof DefaultPriorityLevel)[keyof typeof DefaultPriorityLevel];

export const EnableFullTextQuery = {
    None: "None",
    True: "True",
    False: "False",
} as const;

/**
 * Describe the level of detail with which queries are to be logged.
 */
export type EnableFullTextQuery = (typeof EnableFullTextQuery)[keyof typeof EnableFullTextQuery];

export const IndexKind = {
    Hash: "Hash",
    Range: "Range",
    Spatial: "Spatial",
} as const;

/**
 * Indicates the type of index.
 */
export type IndexKind = (typeof IndexKind)[keyof typeof IndexKind];

export const IndexingMode = {
    Consistent: "consistent",
    Lazy: "lazy",
    None: "none",
} as const;

/**
 * Indicates the indexing mode.
 */
export type IndexingMode = (typeof IndexingMode)[keyof typeof IndexingMode];

export const ManagedCassandraProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
} as const;

/**
 * The status of the resource at the time the operation was called.
 */
export type ManagedCassandraProvisioningState = (typeof ManagedCassandraProvisioningState)[keyof typeof ManagedCassandraProvisioningState];

export const ManagedCassandraResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of the resource.
 */
export type ManagedCassandraResourceIdentityType = (typeof ManagedCassandraResourceIdentityType)[keyof typeof ManagedCassandraResourceIdentityType];

export const MinimalTlsVersion = {
    Tls: "Tls",
    Tls11: "Tls11",
    Tls12: "Tls12",
} as const;

/**
 * Indicates the minimum allowed Tls version. The default is Tls 1.0, except for Cassandra and Mongo API's, which only work with Tls 1.2.
 */
export type MinimalTlsVersion = (typeof MinimalTlsVersion)[keyof typeof MinimalTlsVersion];

export const MongoRoleDefinitionType = {
    BuiltInRole: "BuiltInRole",
    CustomRole: "CustomRole",
} as const;

/**
 * Indicates whether the Role Definition was built-in or user created.
 */
export type MongoRoleDefinitionType = (typeof MongoRoleDefinitionType)[keyof typeof MongoRoleDefinitionType];

export const NetworkAclBypass = {
    None: "None",
    AzureServices: "AzureServices",
} as const;

/**
 * Indicates what services are allowed to bypass firewall checks.
 */
export type NetworkAclBypass = (typeof NetworkAclBypass)[keyof typeof NetworkAclBypass];

export const NodeKind = {
    Shard: "Shard",
} as const;

/**
 * The node type deployed in the node group.
 */
export type NodeKind = (typeof NodeKind)[keyof typeof NodeKind];

export const PartitionKind = {
    Hash: "Hash",
    Range: "Range",
    MultiHash: "MultiHash",
} as const;

/**
 * Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create
 */
export type PartitionKind = (typeof PartitionKind)[keyof typeof PartitionKind];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * Whether requests from Public Network are allowed
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RestoreMode = {
    PointInTime: "PointInTime",
} as const;

/**
 * Describes the mode of the restore.
 */
export type RestoreMode = (typeof RestoreMode)[keyof typeof RestoreMode];

export const RoleDefinitionType = {
    BuiltInRole: "BuiltInRole",
    CustomRole: "CustomRole",
} as const;

/**
 * Indicates whether the Role Definition was built-in or user created.
 */
export type RoleDefinitionType = (typeof RoleDefinitionType)[keyof typeof RoleDefinitionType];

export const ServerVersion = {
    ServerVersion_3_2: "3.2",
    ServerVersion_3_6: "3.6",
    ServerVersion_4_0: "4.0",
    ServerVersion_4_2: "4.2",
} as const;

/**
 * Describes the ServerVersion of an a MongoDB account.
 */
export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const ServiceSize = {
    Cosmos_D4s: "Cosmos.D4s",
    Cosmos_D8s: "Cosmos.D8s",
    Cosmos_D16s: "Cosmos.D16s",
} as const;

/**
 * Instance type for the service.
 */
export type ServiceSize = (typeof ServiceSize)[keyof typeof ServiceSize];

export const ServiceType = {
    SqlDedicatedGateway: "SqlDedicatedGateway",
    DataTransfer: "DataTransfer",
    GraphAPICompute: "GraphAPICompute",
    MaterializedViewsBuilder: "MaterializedViewsBuilder",
} as const;

/**
 * ServiceType for the service.
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

export const SpatialType = {
    Point: "Point",
    LineString: "LineString",
    Polygon: "Polygon",
    MultiPolygon: "MultiPolygon",
} as const;

/**
 * Indicates the spatial type of index.
 */
export type SpatialType = (typeof SpatialType)[keyof typeof SpatialType];

export const TriggerOperation = {
    All: "All",
    Create: "Create",
    Update: "Update",
    Delete: "Delete",
    Replace: "Replace",
} as const;

/**
 * The operation the trigger is associated with
 */
export type TriggerOperation = (typeof TriggerOperation)[keyof typeof TriggerOperation];

export const TriggerType = {
    Pre: "Pre",
    Post: "Post",
} as const;

/**
 * Type of the Trigger
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];