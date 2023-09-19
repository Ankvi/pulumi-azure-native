import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * Describes a connection to a MongoDB data source
     */
    export interface MongoDbConnectionInfoResponse {
        /**
         * Additional connection settings
         */
        additionalSettings?: string;
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
     * Information for connecting to MySQL server
     */
    export interface MySqlConnectionInfoResponse {
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

    /**
     * Information for connecting to Oracle server
     */
    export interface OracleConnectionInfoResponse {
        /**
         * EZConnect or TNSName connection string.
         */
        dataSource: string;
        /**
         * Password credential.
         */
        password?: string;
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
     * Information for connecting to PostgreSQL server
     */
    export interface PostgreSqlConnectionInfoResponse {
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
         * port for server
         */
        port?: string;
        /**
         * Represents the ID of an HTTP resource represented by an Azure resource provider.
         */
        resourceId?: string;
        /**
         * name of the server
         */
        serverName?: string;
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

    export interface SystemDataResponse {
        createdAt?: string;
        createdBy?: string;
        createdByType?: string;
        lastModifiedAt?: string;
        lastModifiedBy?: string;
        lastModifiedByType?: string;
    }
