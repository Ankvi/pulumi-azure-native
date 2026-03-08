import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of a data store.
 */
export interface DatastoreResponse {
    /**
     * The Azure resource ID of an Azure Data Explorer cluster.
     */
    adxClusterResourceId?: string;
    /**
     * The Kusto cluster display name.
     */
    kustoClusterDisplayName?: string;
    /**
     * The Kusto cluster URI.
     */
    kustoClusterUri: string;
    /**
     * The Kusto data ingestion URI.
     */
    kustoDataIngestionUri: string;
    /**
     * The name of a Kusto database.
     */
    kustoDatabaseName: string;
    /**
     * The Kusto management URL.
     */
    kustoManagementUrl: string;
    /**
     * The type of a Kusto offering.
     */
    kustoOfferingType: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The properties specific to an elastic pool in Azure SQL Database.
 */
export interface SqlDbElasticPoolTargetPropertiesResponse {
    /**
     * The Azure resource ID of the anchor database used to connect to an elastic pool.
     */
    anchorDatabaseResourceId: string;
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: string;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Set to true to monitor a high availability replica of specified target, if any.
     */
    readIntent?: boolean;
    /**
     * The Azure resource ID of an Azure SQL DB elastic pool target.
     */
    sqlEpResourceId: string;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: string;
    /**
     * Discriminator property for TargetProperties.
     * Expected value is 'SqlEp'.
     */
    targetType: "SqlEp";
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: VaultSecretResponse;
}
/**
 * sqlDbElasticPoolTargetPropertiesResponseProvideDefaults sets the appropriate defaults for SqlDbElasticPoolTargetPropertiesResponse
 */
export function sqlDbElasticPoolTargetPropertiesResponseProvideDefaults(val: SqlDbElasticPoolTargetPropertiesResponse): SqlDbElasticPoolTargetPropertiesResponse {
    return {
        ...val,
        readIntent: (val.readIntent) ?? false,
    };
}

/**
 * The properties specific to a database in Azure SQL Database.
 */
export interface SqlDbSingleDatabaseTargetPropertiesResponse {
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: string;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Set to true to monitor a high availability replica of specified target, if any.
     */
    readIntent?: boolean;
    /**
     * The Azure resource ID of an Azure SQL DB database target.
     */
    sqlDbResourceId: string;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: string;
    /**
     * Discriminator property for TargetProperties.
     * Expected value is 'SqlDb'.
     */
    targetType: "SqlDb";
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: VaultSecretResponse;
}
/**
 * sqlDbSingleDatabaseTargetPropertiesResponseProvideDefaults sets the appropriate defaults for SqlDbSingleDatabaseTargetPropertiesResponse
 */
export function sqlDbSingleDatabaseTargetPropertiesResponseProvideDefaults(val: SqlDbSingleDatabaseTargetPropertiesResponse): SqlDbSingleDatabaseTargetPropertiesResponse {
    return {
        ...val,
        readIntent: (val.readIntent) ?? false,
    };
}

/**
 * The properties specific to Azure SQL Managed Instance targets.
 */
export interface SqlMiTargetPropertiesResponse {
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: string;
    /**
     * The TCP port number to optionally use in the connection string when connecting to an Azure SQL Managed Instance target.
     */
    connectionTcpPort?: number;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * Set to true to monitor a high availability replica of specified target, if any.
     */
    readIntent?: boolean;
    /**
     * The Azure resource ID of an Azure SQL Managed Instance target.
     */
    sqlMiResourceId: string;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: string;
    /**
     * Discriminator property for TargetProperties.
     * Expected value is 'SqlMi'.
     */
    targetType: "SqlMi";
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: VaultSecretResponse;
}
/**
 * sqlMiTargetPropertiesResponseProvideDefaults sets the appropriate defaults for SqlMiTargetPropertiesResponse
 */
export function sqlMiTargetPropertiesResponseProvideDefaults(val: SqlMiTargetPropertiesResponse): SqlMiTargetPropertiesResponse {
    return {
        ...val,
        connectionTcpPort: (val.connectionTcpPort) ?? 1433,
        readIntent: (val.readIntent) ?? false,
    };
}

/**
 * The properties specific to Azure SQL VM targets.
 */
export interface SqlVmTargetPropertiesResponse {
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: string;
    /**
     * The TCP port number to optionally use in the connection string when connecting to an Azure SQL VM target.
     */
    connectionTcpPort?: number;
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
    /**
     * The SQL instance name to optionally use in the connection string when connecting to an Azure SQL VM target.
     */
    sqlNamedInstanceName?: string;
    /**
     * The Azure resource ID of an Azure SQL VM target.
     */
    sqlVmResourceId: string;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: string;
    /**
     * Discriminator property for TargetProperties.
     * Expected value is 'SqlVm'.
     */
    targetType: "SqlVm";
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: VaultSecretResponse;
}
/**
 * sqlVmTargetPropertiesResponseProvideDefaults sets the appropriate defaults for SqlVmTargetPropertiesResponse
 */
export function sqlVmTargetPropertiesResponseProvideDefaults(val: SqlVmTargetPropertiesResponse): SqlVmTargetPropertiesResponse {
    return {
        ...val,
        connectionTcpPort: (val.connectionTcpPort) ?? 1433,
    };
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

/**
 * The vault specific details required if using SQL authentication to connect to a target.
 */
export interface VaultSecretResponse {
    /**
     * The Azure resource ID of the Key Vault instance storing database authentication secrets.
     */
    akvResourceId?: string;
    /**
     * The path to the Key Vault secret storing the password for authentication to a target.
     */
    akvTargetPassword?: string;
    /**
     * The path to the Key Vault secret storing the login name (aka user name, aka account name) for authentication to a target.
     */
    akvTargetUser?: string;
}
