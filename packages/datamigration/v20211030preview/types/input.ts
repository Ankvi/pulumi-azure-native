import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * Describes a connection to a MongoDB data source
     */
    export interface MongoDbConnectionInfoArgs {
        /**
         * Additional connection settings
         */
        additionalSettings?: pulumi.Input<string>;
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
     * Information for connecting to MySQL server
     */
    export interface MySqlConnectionInfoArgs {
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
         * EZConnect or TNSName connection string.
         */
        dataSource: pulumi.Input<string>;
        /**
         * Password credential.
         */
        password?: pulumi.Input<string>;
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
         * port for server
         */
        port?: pulumi.Input<string>;
        /**
         * Represents the ID of an HTTP resource represented by an Azure resource provider.
         */
        resourceId?: pulumi.Input<string>;
        /**
         * name of the server
         */
        serverName?: pulumi.Input<string>;
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
