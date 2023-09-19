import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AzureDataLakeSectionResponse {
        /**
         * The authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * The content of the certificate used for authentication.
         */
        certificate?: string;
        /**
         * The Client ID/Application ID
         */
        clientId?: string;
        /**
         * The client secret.
         */
        clientSecret?: string;
        /**
         * The Azure Data Lake credential type.
         */
        credentialType?: string;
        /**
         *  Is it using certificate to authenticate. If false then use client secret.
         */
        isCertAuth?: boolean;
        /**
         * Resource Group.
         */
        resourceGroup?: string;
        /**
         * The resource the service principal/app has access to.
         */
        resourceUri?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * The Azure Data Lake store name.
         */
        storeName?: string;
        /**
         * Subscription ID.
         */
        subscriptionId?: string;
        /**
         * The ID of the tenant the service principal/app belongs to.
         */
        tenantId?: string;
        /**
         * The thumbprint of the certificate above.
         */
        thumbprint?: string;
    }

    export interface AzureMySqlSectionResponse {
        /**
         * The authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * The content of the certificate used for authentication.
         */
        certificate?: string;
        /**
         * The Client ID/Application ID
         */
        clientId?: string;
        /**
         * The client secret.
         */
        clientSecret?: string;
        /**
         * Sql Authentication type.
         */
        credentialType?: string;
        /**
         * The Azure SQL database name.
         */
        databaseName?: string;
        /**
         * The server host endpoint.
         */
        endpoint?: string;
        /**
         *  Is it using certificate to authenticate. If false then use client secret.
         */
        isCertAuth?: boolean;
        /**
         * / The Azure SQL port number.
         */
        portNumber?: string;
        /**
         * Resource Group.
         */
        resourceGroup?: string;
        /**
         * The resource the service principal/app has access to.
         */
        resourceUri?: string;
        /**
         * The Azure SQL server name.
         */
        serverName?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Subscription ID.
         */
        subscriptionId?: string;
        /**
         * The ID of the tenant the service principal/app belongs to.
         */
        tenantId?: string;
        /**
         * The thumbprint of the certificate above.
         */
        thumbprint?: string;
        /**
         * The Azure SQL user id.
         */
        userId?: string;
        /**
         * The Azure SQL user password.
         */
        userPassword?: string;
    }

    export interface AzurePostgreSqlSectionResponse {
        /**
         * The authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * The content of the certificate used for authentication.
         */
        certificate?: string;
        /**
         * The Client ID/Application ID
         */
        clientId?: string;
        /**
         * The client secret.
         */
        clientSecret?: string;
        /**
         * Sql Authentication type.
         */
        credentialType?: string;
        /**
         * The Azure SQL database name.
         */
        databaseName?: string;
        /**
         * Indicates SSL requirement of Azure Postgresql server.
         */
        enableSsl?: boolean;
        /**
         * The server host endpoint.
         */
        endpoint?: string;
        /**
         *  Is it using certificate to authenticate. If false then use client secret.
         */
        isCertAuth?: boolean;
        /**
         * / The Azure SQL port number.
         */
        portNumber?: string;
        /**
         * Resource Group.
         */
        resourceGroup?: string;
        /**
         * The resource the service principal/app has access to.
         */
        resourceUri?: string;
        /**
         * The Azure SQL server name.
         */
        serverName?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Subscription ID.
         */
        subscriptionId?: string;
        /**
         * The ID of the tenant the service principal/app belongs to.
         */
        tenantId?: string;
        /**
         * The thumbprint of the certificate above.
         */
        thumbprint?: string;
        /**
         * The Azure SQL user id.
         */
        userId?: string;
        /**
         * The Azure SQL user password.
         */
        userPassword?: string;
    }

    export interface AzureSqlDatabaseSectionResponse {
        /**
         * The authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * The content of the certificate used for authentication.
         */
        certificate?: string;
        /**
         * The Client ID/Application ID
         */
        clientId?: string;
        /**
         * The client secret.
         */
        clientSecret?: string;
        /**
         * Sql Authentication type.
         */
        credentialType?: string;
        /**
         * The Azure SQL database name.
         */
        databaseName?: string;
        /**
         * The server host endpoint.
         */
        endpoint?: string;
        /**
         *  Is it using certificate to authenticate. If false then use client secret.
         */
        isCertAuth?: boolean;
        /**
         * / The Azure SQL port number.
         */
        portNumber?: string;
        /**
         * Resource Group.
         */
        resourceGroup?: string;
        /**
         * The resource the service principal/app has access to.
         */
        resourceUri?: string;
        /**
         * The Azure SQL server name.
         */
        serverName?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Subscription ID.
         */
        subscriptionId?: string;
        /**
         * The ID of the tenant the service principal/app belongs to.
         */
        tenantId?: string;
        /**
         * The thumbprint of the certificate above.
         */
        thumbprint?: string;
        /**
         * The Azure SQL user id.
         */
        userId?: string;
        /**
         * The Azure SQL user password.
         */
        userPassword?: string;
    }

    export interface AzureStorageSectionResponse {
        /**
         *  Storage Account Key (Deprecated).
         */
        accountKey?: string;
        /**
         * Storage Account Name.
         */
        accountName?: string;
        /**
         * Indicate if we are using Workspace ManagedIdentities/MSI token (Deprecated).
         */
        areWorkspaceManagedIdentitiesAllowed?: boolean;
        /**
         *  If this is an "DataStoreType.AzureBlob", the length of time (in seconds) to cache files locally after they are accessed (downloaded).
         */
        blobCacheTimeout?: number;
        clientCredentials?: ClientCredentialsResponse;
        /**
         * The storage container name.
         */
        containerName?: string;
        /**
         * The credential.
         */
        credential?: string;
        /**
         *  The credential type.
         */
        credentialType?: string;
        /**
         * The host of the container.
         */
        endpoint?: string;
        /**
         * Indicate if we are using SAS token or Account Key (Deprecated).
         */
        isSas?: boolean;
        /**
         * The protocol to use. Defaults to https.
         */
        protocol?: string;
        /**
         * Resource Group.
         */
        resourceGroup?: string;
        /**
         *  SAS Token for the container (Deprecated).
         */
        sasToken?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Subscription ID.
         */
        subscriptionId?: string;
    }

    export interface ClientCredentialsResponse {
        /**
         * The authority URL used for authentication.
         */
        authorityUrl?: string;
        /**
         * The content of the certificate used for authentication.
         */
        certificate?: string;
        /**
         * The Client ID/Application ID
         */
        clientId?: string;
        /**
         * The client secret.
         */
        clientSecret?: string;
        /**
         *  Is it using certificate to authenticate. If false then use client secret.
         */
        isCertAuth?: boolean;
        /**
         * Resource Group.
         */
        resourceGroup?: string;
        /**
         * The resource the service principal/app has access to.
         */
        resourceUri?: string;
        /**
         * Indicates which identity to use to authenticate service data access to customer's storage.
         */
        serviceDataAccessAuthIdentity?: string;
        /**
         * Subscription ID.
         */
        subscriptionId?: string;
        /**
         * The ID of the tenant the service principal/app belongs to.
         */
        tenantId?: string;
        /**
         * The thumbprint of the certificate above.
         */
        thumbprint?: string;
    }

    /**
     * Machine Learning dataset object.
     */
    export interface DatasetResponse {
        /**
         * The dataset creation time (UTC).
         */
        createdTime: string;
        /**
         * Unique Dataset identifier.
         */
        datasetId: string;
        /**
         * Dataset state
         */
        datasetState?: DatasetStateResponse;
        /**
         * Dataset Type.
         */
        datasetType: string;
        /**
         * Name of the default compute to be used for any Dataset actions (such as Profile, Write).
         */
        defaultCompute: string;
        /**
         * Description about this dataset version.
         */
        description: string;
        /**
         * eTag description
         */
        etag: string;
        /**
         * Flag to hide Dataset in UI
         */
        isVisible: boolean;
        /**
         * Last created Dataset definition.
         */
        latest?: DatasetResponseLatest;
        /**
         * The dataset last modified time (UTC).
         */
        modifiedTime: string;
        /**
         * Unique dataset name
         */
        name: string;
        /**
         * Tags for this dataset version.
         */
        tags: {[key: string]: string};
    }

    /**
     *  Datastore and reference to location of data such as relativePath, Sql Query and etc.
     */
    export interface DatasetResponseDataPath {
        /**
         * Additional Properties.
         */
        additionalProperties?: {[key: string]: any};
        /**
         * Azure path for Azure Blob or File
         */
        azureFilePath: string;
        /**
         * Data store Name
         */
        datastoreName: string;
        /**
         * HTTP URL.
         */
        httpUrl: string;
        /**
         * Specify the partition format of path. Defaults to None.
         */
        partitionFormat: string;
        /**
         * Whether or not to ignore unmatched path.
         */
        partitionFormatIgnoreError: boolean;
        /**
         * List of files expanded from a file GLOB specified
         */
        paths: string[];
        /**
         * Relative path in the data store
         */
        relativePath: string;
        /**
         * Sql Query/Table/Stored Procedure details.
         */
        sqlDataPath?: DatasetResponseSqlDataPath;
    }

    /**
     * Last created Dataset definition.
     */
    export interface DatasetResponseLatest {
        /**
         * User who created.
         */
        createdBy?: UserInfoResponse;
        /**
         * The dataset creation time (UTC).
         */
        createdTime: string;
        /**
         *  Datastore and reference to location of data such as relativePath, Sql Query and etc.
         */
        dataPath?: DatasetResponseDataPath;
        /**
         * Dataflow Json
         */
        dataflow: string;
        /**
         * Dataset state
         */
        datasetDefinitionState?: DatasetStateResponse;
        /**
         * Unique Dataset identifier.
         */
        datasetId: string;
        /**
         * Description about the dataset.
         */
        description: string;
        /**
         * eTag description
         */
        etag: string;
        /**
         * Dataset FileType, specified by user.
         */
        fileType: string;
        /**
         * The dataset last modified time (UTC).
         */
        modifiedTime: string;
        /**
         * Summary of Definition changes.
         */
        notes: string;
        /**
         * Indicates how the source data is partitioned. This is defined to filter on a range of partitioned data before performing actions or materialization.
         */
        partitionFormatInPath: boolean;
        /**
         * Properties stores information like name of time series column for time series dataset.
         */
        properties?: {[key: string]: any};
        /**
         * Indicates the saved dataset this definition is mapping to, populated on Get.
         */
        savedDatasetId: string;
        /**
         * Tags associated with the dataset.
         */
        tags: {[key: string]: string};
        /**
         *  Telemetry information about the dataset including information like which service the dataset was created from.
         */
        telemetryInfo: {[key: string]: string};
        /**
         *  Whether to use description and tags from the definition level as opposed to dataset level (old behavior).
         */
        useDescriptionTagsFromDefinition: boolean;
        /**
         * An identifier uniquely identifies a definition change.
         */
        versionId: string;
    }

    /**
     * Sql Query/Table/Stored Procedure details.
     */
    export interface DatasetResponseSqlDataPath {
        /**
         * SQL query timeout. Unit in seconds.
         */
        queryTimeout: number;
        /**
         * SQL query
         */
        sqlQuery: string;
        /**
         * SQL storedProcedure name
         */
        sqlStoredProcedureName: string;
        /**
         * SQL table name
         */
        sqlTableName: string;
    }

    /**
     * Dataset state
     */
    export interface DatasetStateResponse {
        /**
         * Reference to better Dataset or a Definition
         */
        deprecatedBy?: DatasetStateResponseDeprecatedBy;
        /**
         * eTag description
         */
        etag: string;
        /**
         * Dataset state
         */
        state?: string;
    }

    /**
     * Reference to better Dataset or a Definition
     */
    export interface DatasetStateResponseDeprecatedBy {
        /**
         * Unique Dataset identifier.
         */
        datasetId: string;
        /**
         * Definition Version
         */
        definitionVersion?: string;
    }

    /**
     * Machine Learning datastore object.
     */
    export interface DatastoreResponse {
        azureDataLakeSection?: AzureDataLakeSectionResponse;
        azureMySqlSection?: AzureMySqlSectionResponse;
        azurePostgreSqlSection?: AzurePostgreSqlSectionResponse;
        azureSqlDatabaseSection?: AzureSqlDatabaseSectionResponse;
        azureStorageSection?: AzureStorageSectionResponse;
        /**
         * The User who created the datastore.
         */
        createdBy: UserInfoResponse;
        /**
         * The date and time when the datastore was created.
         */
        createdTime: string;
        /**
         * The datastore type.
         */
        dataStoreType?: string;
        /**
         * Description of the datastore.
         */
        description?: string;
        /**
         * Data specific to GlusterFS.
         */
        glusterFsSection?: GlusterFsSectionResponse;
        /**
         * A read only property that denotes whether the service datastore has been validated with credentials.
         */
        hasBeenValidated?: boolean;
        /**
         * Info about origin if it is linked.
         */
        linkedInfo?: LinkedInfoResponse;
        /**
         * The User who modified the datastore.
         */
        modifiedBy: UserInfoResponse;
        /**
         * The date and time when the datastore was last modified.
         */
        modifiedTime: string;
        /**
         * Name of the datastore.
         */
        name?: string;
        /**
         * Tags for this datastore.
         */
        tags: {[key: string]: string};
    }
    /**
     * datastoreResponseProvideDefaults sets the appropriate defaults for DatastoreResponse
     */
    export function datastoreResponseProvideDefaults(val: DatastoreResponse): DatastoreResponse {
        return {
            ...val,
            hasBeenValidated: (val.hasBeenValidated) ?? false,
        };
    }

    /**
     * Data specific to GlusterFS.
     */
    export interface GlusterFsSectionResponse {
        /**
         * The server address of one of the servers that hosts the GlusterFS. Can be either the IP address or server name.
         */
        serverAddress: string;
        /**
         * The name of the created GlusterFS volume.
         */
        volumeName: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
        /**
         * The user assigned identities associated with the resource.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Info about origin if it is linked.
     */
    export interface LinkedInfoResponse {
        /**
         * LinkedId id.
         */
        linkedId?: string;
        /**
         * Linked resource name.
         */
        linkedResourceName?: string;
        /**
         * Datastore origin
         */
        origin?: string;
    }

    /**
     * Sku of the resource
     */
    export interface SkuResponse {
        /**
         * Name of the sku
         */
        name?: string;
        /**
         * Tier of the sku like Basic or Enterprise
         */
        tier?: string;
    }

    /**
     * User Assigned Identity
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The clientId(aka appId) of the user assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the user assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the user assigned identity.
         */
        tenantId: string;
    }

    /**
     * User who created.
     */
    export interface UserInfoResponse {
        /**
         * A user alternate sec id. This represents the user in a different identity provider system Eg.1:live.com:puid
         */
        userAltSecId?: string;
        /**
         * A user identity provider. Eg live.com
         */
        userIdp?: string;
        /**
         * The issuer which issued the token for this user.
         */
        userIss?: string;
        /**
         *  A user's full name or a service principal's app ID.
         */
        userName?: string;
        /**
         * A user or service principal's object ID..
         */
        userObjectId?: string;
        /**
         * A user or service principal's PuID.
         */
        userPuId?: string;
        /**
         * A user or service principal's tenant ID.
         */
        userTenantId?: string;
    }
