import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of a data store.
 */
export interface DatastoreArgs {
    /**
     * The Azure resource ID of an Azure Data Explorer cluster.
     */
    adxClusterResourceId?: pulumi.Input<string | undefined>;
    /**
     * The Kusto cluster display name.
     */
    kustoClusterDisplayName?: pulumi.Input<string | undefined>;
    /**
     * The Kusto cluster URI.
     */
    kustoClusterUri: pulumi.Input<string>;
    /**
     * The Kusto data ingestion URI.
     */
    kustoDataIngestionUri: pulumi.Input<string>;
    /**
     * The name of a Kusto database.
     */
    kustoDatabaseName: pulumi.Input<string>;
    /**
     * The Kusto management URL.
     */
    kustoManagementUrl: pulumi.Input<string>;
    /**
     * The type of a Kusto offering.
     */
    kustoOfferingType: pulumi.Input<string | enums.KustoOfferingType>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The properties specific to an elastic pool in Azure SQL Database.
 */
export interface SqlDbElasticPoolTargetPropertiesArgs {
    /**
     * The Azure resource ID of the anchor database used to connect to an elastic pool.
     */
    anchorDatabaseResourceId: pulumi.Input<string>;
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: pulumi.Input<string>;
    /**
     * Set to true to monitor a high availability replica of specified target, if any.
     */
    readIntent?: pulumi.Input<boolean | undefined>;
    /**
     * The Azure resource ID of an Azure SQL DB elastic pool target.
     */
    sqlEpResourceId: pulumi.Input<string>;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: pulumi.Input<string | enums.TargetAuthenticationType>;
    /**
     * Discriminator property for TargetProperties.
     * Expected value is 'SqlEp'.
     */
    targetType: pulumi.Input<"SqlEp">;
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: pulumi.Input<VaultSecretArgs | undefined>;
}
/**
 * sqlDbElasticPoolTargetPropertiesArgsProvideDefaults sets the appropriate defaults for SqlDbElasticPoolTargetPropertiesArgs
 */
export function sqlDbElasticPoolTargetPropertiesArgsProvideDefaults(val: SqlDbElasticPoolTargetPropertiesArgs): SqlDbElasticPoolTargetPropertiesArgs {
    return {
        ...val,
        readIntent: (val.readIntent) ?? false,
    };
}

/**
 * The properties specific to a database in Azure SQL Database.
 */
export interface SqlDbSingleDatabaseTargetPropertiesArgs {
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: pulumi.Input<string>;
    /**
     * Set to true to monitor a high availability replica of specified target, if any.
     */
    readIntent?: pulumi.Input<boolean | undefined>;
    /**
     * The Azure resource ID of an Azure SQL DB database target.
     */
    sqlDbResourceId: pulumi.Input<string>;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: pulumi.Input<string | enums.TargetAuthenticationType>;
    /**
     * Discriminator property for TargetProperties.
     * Expected value is 'SqlDb'.
     */
    targetType: pulumi.Input<"SqlDb">;
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: pulumi.Input<VaultSecretArgs | undefined>;
}
/**
 * sqlDbSingleDatabaseTargetPropertiesArgsProvideDefaults sets the appropriate defaults for SqlDbSingleDatabaseTargetPropertiesArgs
 */
export function sqlDbSingleDatabaseTargetPropertiesArgsProvideDefaults(val: SqlDbSingleDatabaseTargetPropertiesArgs): SqlDbSingleDatabaseTargetPropertiesArgs {
    return {
        ...val,
        readIntent: (val.readIntent) ?? false,
    };
}

/**
 * The properties specific to Azure SQL Managed Instance targets.
 */
export interface SqlMiTargetPropertiesArgs {
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: pulumi.Input<string>;
    /**
     * The TCP port number to optionally use in the connection string when connecting to an Azure SQL Managed Instance target.
     */
    connectionTcpPort?: pulumi.Input<number | undefined>;
    /**
     * Set to true to monitor a high availability replica of specified target, if any.
     */
    readIntent?: pulumi.Input<boolean | undefined>;
    /**
     * The Azure resource ID of an Azure SQL Managed Instance target.
     */
    sqlMiResourceId: pulumi.Input<string>;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: pulumi.Input<string | enums.TargetAuthenticationType>;
    /**
     * Discriminator property for TargetProperties.
     * Expected value is 'SqlMi'.
     */
    targetType: pulumi.Input<"SqlMi">;
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: pulumi.Input<VaultSecretArgs | undefined>;
}
/**
 * sqlMiTargetPropertiesArgsProvideDefaults sets the appropriate defaults for SqlMiTargetPropertiesArgs
 */
export function sqlMiTargetPropertiesArgsProvideDefaults(val: SqlMiTargetPropertiesArgs): SqlMiTargetPropertiesArgs {
    return {
        ...val,
        connectionTcpPort: (val.connectionTcpPort) ?? 1433,
        readIntent: (val.readIntent) ?? false,
    };
}

/**
 * The properties specific to Azure SQL VM targets.
 */
export interface SqlVmTargetPropertiesArgs {
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: pulumi.Input<string>;
    /**
     * The TCP port number to optionally use in the connection string when connecting to an Azure SQL VM target.
     */
    connectionTcpPort?: pulumi.Input<number | undefined>;
    /**
     * The SQL instance name to optionally use in the connection string when connecting to an Azure SQL VM target.
     */
    sqlNamedInstanceName?: pulumi.Input<string | undefined>;
    /**
     * The Azure resource ID of an Azure SQL VM target.
     */
    sqlVmResourceId: pulumi.Input<string>;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: pulumi.Input<string | enums.TargetAuthenticationType>;
    /**
     * Discriminator property for TargetProperties.
     * Expected value is 'SqlVm'.
     */
    targetType: pulumi.Input<"SqlVm">;
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: pulumi.Input<VaultSecretArgs | undefined>;
}
/**
 * sqlVmTargetPropertiesArgsProvideDefaults sets the appropriate defaults for SqlVmTargetPropertiesArgs
 */
export function sqlVmTargetPropertiesArgsProvideDefaults(val: SqlVmTargetPropertiesArgs): SqlVmTargetPropertiesArgs {
    return {
        ...val,
        connectionTcpPort: (val.connectionTcpPort) ?? 1433,
    };
}

/**
 * The vault specific details required if using SQL authentication to connect to a target.
 */
export interface VaultSecretArgs {
    /**
     * The Azure resource ID of the Key Vault instance storing database authentication secrets.
     */
    akvResourceId?: pulumi.Input<string | undefined>;
    /**
     * The path to the Key Vault secret storing the password for authentication to a target.
     */
    akvTargetPassword?: pulumi.Input<string | undefined>;
    /**
     * The path to the Key Vault secret storing the login name (aka user name, aka account name) for authentication to a target.
     */
    akvTargetUser?: pulumi.Input<string | undefined>;
}
