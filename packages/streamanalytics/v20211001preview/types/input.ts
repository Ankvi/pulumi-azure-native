import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties that are associated with an aggregate function.
     */
    export interface AggregateFunctionPropertiesArgs {
        /**
         * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
         */
        binding?: pulumi.Input<AzureMachineLearningServiceFunctionBindingArgs | AzureMachineLearningStudioFunctionBindingArgs | CSharpFunctionBindingArgs | JavaScriptFunctionBindingArgs>;
        inputs?: pulumi.Input<pulumi.Input<FunctionInputArgs>[]>;
        /**
         * Describes the output of a function.
         */
        output?: pulumi.Input<FunctionOutputArgs>;
        /**
         * Indicates the type of function.
         * Expected value is 'Aggregate'.
         */
        type: pulumi.Input<"Aggregate">;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in Avro format.
     */
    export interface AvroSerializationArgs {
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Avro'.
         */
        type: pulumi.Input<"Avro">;
    }

    /**
     * Describes an Azure Data Explorer output data source.
     */
    export interface AzureDataExplorerOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of the Azure Data Explorer cluster. Required on PUT (CreateOrReplace) requests.
         */
        cluster?: pulumi.Input<string>;
        /**
         * The name of the Azure Data Explorer database. Required on PUT (CreateOrReplace) requests.
         */
        database?: pulumi.Input<string>;
        /**
         * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
         */
        table?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Kusto/clusters/databases'.
         */
        type: pulumi.Input<"Microsoft.Kusto/clusters/databases">;
    }

    /**
     * Describes an Azure Data Lake Store output data source.
     */
    export interface AzureDataLakeStoreOutputDataSourceArgs {
        /**
         * The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
         */
        accountName?: pulumi.Input<string>;
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
         */
        dateFormat?: pulumi.Input<string>;
        /**
         * The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
         */
        filePathPrefix?: pulumi.Input<string>;
        /**
         * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
         */
        refreshToken?: pulumi.Input<string>;
        /**
         * The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
         */
        tenantId?: pulumi.Input<string>;
        /**
         * The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
         */
        timeFormat?: pulumi.Input<string>;
        /**
         * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
         */
        tokenUserDisplayName?: pulumi.Input<string>;
        /**
         * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
         */
        tokenUserPrincipalName?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.DataLake/Accounts'.
         */
        type: pulumi.Input<"Microsoft.DataLake/Accounts">;
    }

    /**
     * Defines the metadata of AzureFunctionOutputDataSource
     */
    export interface AzureFunctionOutputDataSourceArgs {
        /**
         * If you want to use an Azure Function from another subscription, you can do so by providing the key to access your function.
         */
        apiKey?: pulumi.Input<string>;
        /**
         * The name of your Azure Functions app.
         */
        functionAppName?: pulumi.Input<string>;
        /**
         * The name of the function in your Azure Functions app.
         */
        functionName?: pulumi.Input<string>;
        /**
         * A property that lets you specify the maximum number of events in each batch that's sent to Azure Functions. The default value is 100.
         */
        maxBatchCount?: pulumi.Input<number>;
        /**
         * A property that lets you set the maximum size for each output batch that's sent to your Azure function. The input unit is in bytes. By default, this value is 262,144 bytes (256 KB).
         */
        maxBatchSize?: pulumi.Input<number>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.AzureFunction'.
         */
        type: pulumi.Input<"Microsoft.AzureFunction">;
    }

    /**
     * The binding to an Azure Machine Learning web service.
     */
    export interface AzureMachineLearningServiceFunctionBindingArgs {
        /**
         * The API key used to authenticate with Request-Response endpoint.
         */
        apiKey?: pulumi.Input<string>;
        /**
         * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
         */
        batchSize?: pulumi.Input<number>;
        /**
         * The Request-Response execute endpoint of the Azure Machine Learning web service.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * Label for the input request object.
         */
        inputRequestName?: pulumi.Input<string>;
        /**
         * The inputs for the Azure Machine Learning web service endpoint.
         */
        inputs?: pulumi.Input<pulumi.Input<AzureMachineLearningServiceInputColumnArgs>[]>;
        /**
         * The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1.
         */
        numberOfParallelRequests?: pulumi.Input<number>;
        /**
         * Label for the output request object.
         */
        outputResponseName?: pulumi.Input<string>;
        /**
         * A list of outputs from the Azure Machine Learning web service endpoint execution.
         */
        outputs?: pulumi.Input<pulumi.Input<AzureMachineLearningServiceOutputColumnArgs>[]>;
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.MachineLearningServices'.
         */
        type: pulumi.Input<"Microsoft.MachineLearningServices">;
    }

    /**
     * Describes an input column for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningServiceInputColumnArgs {
        /**
         * The (Azure Machine Learning supported) data type of the input column.
         */
        dataType?: pulumi.Input<string>;
        /**
         * The zero based index of the function parameter this input maps to.
         */
        mapTo?: pulumi.Input<number>;
        /**
         * The name of the input column.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Describes an output column for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningServiceOutputColumnArgs {
        /**
         * The (Azure Machine Learning supported) data type of the output column.
         */
        dataType?: pulumi.Input<string>;
        /**
         * The zero based index of the function parameter this input maps to.
         */
        mapTo?: pulumi.Input<number>;
        /**
         * The name of the output column.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The binding to an Azure Machine Learning Studio.
     */
    export interface AzureMachineLearningStudioFunctionBindingArgs {
        /**
         * The API key used to authenticate with Request-Response endpoint.
         */
        apiKey?: pulumi.Input<string>;
        /**
         * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
         */
        batchSize?: pulumi.Input<number>;
        /**
         * The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
         */
        endpoint?: pulumi.Input<string>;
        /**
         * The inputs for the Azure Machine Learning Studio endpoint.
         */
        inputs?: pulumi.Input<AzureMachineLearningStudioInputsArgs>;
        /**
         * A list of outputs from the Azure Machine Learning Studio endpoint execution.
         */
        outputs?: pulumi.Input<pulumi.Input<AzureMachineLearningStudioOutputColumnArgs>[]>;
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.MachineLearning/WebService'.
         */
        type: pulumi.Input<"Microsoft.MachineLearning/WebService">;
    }

    /**
     * Describes an input column for the Azure Machine Learning Studio endpoint.
     */
    export interface AzureMachineLearningStudioInputColumnArgs {
        /**
         * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
         */
        dataType?: pulumi.Input<string>;
        /**
         * The zero based index of the function parameter this input maps to.
         */
        mapTo?: pulumi.Input<number>;
        /**
         * The name of the input column.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The inputs for the Azure Machine Learning Studio endpoint.
     */
    export interface AzureMachineLearningStudioInputsArgs {
        /**
         * A list of input columns for the Azure Machine Learning Studio endpoint.
         */
        columnNames?: pulumi.Input<pulumi.Input<AzureMachineLearningStudioInputColumnArgs>[]>;
        /**
         * The name of the input. This is the name provided while authoring the endpoint.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Describes an output column for the Azure Machine Learning Studio endpoint.
     */
    export interface AzureMachineLearningStudioOutputColumnArgs {
        /**
         * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
         */
        dataType?: pulumi.Input<string>;
        /**
         * The name of the output column.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Describes an Azure SQL database output data source.
     */
    export interface AzureSqlDatabaseOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        database?: pulumi.Input<string>;
        /**
         * Max Batch count for write to Sql database, the default value is 10,000. Optional on PUT requests.
         */
        maxBatchCount?: pulumi.Input<number>;
        /**
         * Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
         */
        maxWriterCount?: pulumi.Input<number>;
        /**
         * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        password?: pulumi.Input<string>;
        /**
         * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        server?: pulumi.Input<string>;
        /**
         * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        table?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Sql/Server/Database'.
         */
        type: pulumi.Input<"Microsoft.Sql/Server/Database">;
        /**
         * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        user?: pulumi.Input<string>;
    }

    /**
     * Describes an Azure SQL database reference input data source.
     */
    export interface AzureSqlReferenceInputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * This element is associated with the datasource element. This is the name of the database that output will be written to.
         */
        database?: pulumi.Input<string>;
        /**
         * This element is associated with the datasource element. This query is used to fetch incremental changes from the SQL database. To use this option, we recommend using temporal tables in Azure SQL Database.
         */
        deltaSnapshotQuery?: pulumi.Input<string>;
        /**
         * This element is associated with the datasource element. This query is used to fetch data from the sql database.
         */
        fullSnapshotQuery?: pulumi.Input<string>;
        /**
         * This element is associated with the datasource element. This is the password that will be used to connect to the SQL Database instance.
         */
        password?: pulumi.Input<string>;
        /**
         * This element is associated with the datasource element. This indicates how frequently the data will be fetched from the database. It is of DateTime format.
         */
        refreshRate?: pulumi.Input<string>;
        /**
         * Indicates the type of data refresh option.
         */
        refreshType?: pulumi.Input<string | enums.RefreshType>;
        /**
         * This element is associated with the datasource element. This is the name of the server that contains the database that will be written to.
         */
        server?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Sql/Server/Database'.
         */
        type: pulumi.Input<"Microsoft.Sql/Server/Database">;
        /**
         * This element is associated with the datasource element. This is the user name that will be used to connect to the SQL Database instance.
         */
        user?: pulumi.Input<string>;
    }

    /**
     * Describes an Azure Synapse output data source.
     */
    export interface AzureSynapseOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        database?: pulumi.Input<string>;
        /**
         * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        password?: pulumi.Input<string>;
        /**
         * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        server?: pulumi.Input<string>;
        /**
         * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        table?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Sql/Server/DataWarehouse'.
         */
        type: pulumi.Input<"Microsoft.Sql/Server/DataWarehouse">;
        /**
         * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        user?: pulumi.Input<string>;
    }

    /**
     * Describes an Azure Table output data source.
     */
    export interface AzureTableOutputDataSourceArgs {
        /**
         * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountKey?: pulumi.Input<string>;
        /**
         * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountName?: pulumi.Input<string>;
        /**
         * The number of rows to write to the Azure Table at a time.
         */
        batchSize?: pulumi.Input<number>;
        /**
         * If specified, each item in the array is the name of a column to remove (if present) from output event entities.
         */
        columnsToRemove?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests.
         */
        partitionKey?: pulumi.Input<string>;
        /**
         * This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests.
         */
        rowKey?: pulumi.Input<string>;
        /**
         * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
         */
        table?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/Table'.
         */
        type: pulumi.Input<"Microsoft.Storage/Table">;
    }

    /**
     * Describes a blob output data source.
     */
    export interface BlobOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * Blob path prefix.
         */
        blobPathPrefix?: pulumi.Input<string>;
        /**
         * Blob write mode.
         */
        blobWriteMode?: pulumi.Input<string | enums.BlobWriteMode>;
        /**
         * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
         */
        container?: pulumi.Input<string>;
        /**
         * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
         */
        dateFormat?: pulumi.Input<string>;
        /**
         * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
         */
        pathPattern?: pulumi.Input<string>;
        /**
         * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
         */
        storageAccounts?: pulumi.Input<pulumi.Input<StorageAccountArgs>[]>;
        /**
         * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
         */
        timeFormat?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/Blob'.
         */
        type: pulumi.Input<"Microsoft.Storage/Blob">;
    }

    /**
     * Describes a blob input data source that contains reference data.
     */
    export interface BlobReferenceInputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of the blob input.
         */
        blobName?: pulumi.Input<string>;
        /**
         * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
         */
        container?: pulumi.Input<string>;
        /**
         * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
         */
        dateFormat?: pulumi.Input<string>;
        /**
         * The path pattern of the delta snapshot.
         */
        deltaPathPattern?: pulumi.Input<string>;
        /**
         * The interval that the user generates a delta snapshot of this reference blob input data source.
         */
        deltaSnapshotRefreshRate?: pulumi.Input<string>;
        /**
         * The refresh interval of the blob input data source.
         */
        fullSnapshotRefreshRate?: pulumi.Input<string>;
        /**
         * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
         */
        pathPattern?: pulumi.Input<string>;
        /**
         * The partition count of the blob input data source. Range 1 - 256.
         */
        sourcePartitionCount?: pulumi.Input<number>;
        /**
         * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
         */
        storageAccounts?: pulumi.Input<pulumi.Input<StorageAccountArgs>[]>;
        /**
         * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
         */
        timeFormat?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/Blob'.
         */
        type: pulumi.Input<"Microsoft.Storage/Blob">;
    }

    /**
     * Describes a blob input data source that contains stream data.
     */
    export interface BlobStreamInputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
         */
        container?: pulumi.Input<string>;
        /**
         * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
         */
        dateFormat?: pulumi.Input<string>;
        /**
         * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
         */
        pathPattern?: pulumi.Input<string>;
        /**
         * The partition count of the blob input data source. Range 1 - 1024.
         */
        sourcePartitionCount?: pulumi.Input<number>;
        /**
         * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
         */
        storageAccounts?: pulumi.Input<pulumi.Input<StorageAccountArgs>[]>;
        /**
         * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
         */
        timeFormat?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/Blob'.
         */
        type: pulumi.Input<"Microsoft.Storage/Blob">;
    }

    /**
     * The binding to a CSharp function.
     */
    export interface CSharpFunctionBindingArgs {
        /**
         * The Csharp code containing a single function definition.
         */
        class?: pulumi.Input<string>;
        /**
         * The Csharp code containing a single function definition.
         */
        dllPath?: pulumi.Input<string>;
        /**
         * The Csharp code containing a single function definition.
         */
        method?: pulumi.Input<string>;
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.StreamAnalytics/CLRUdf'.
         */
        type: pulumi.Input<"Microsoft.StreamAnalytics/CLRUdf">;
        /**
         * Refresh modes for Stream Analytics functions.
         */
        updateMode?: pulumi.Input<string | enums.UpdateMode>;
    }

    /**
     * The properties associated with a Stream Analytics cluster.
     */
    export interface ClusterInfoArgs {
        /**
         * The resource id of cluster.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Describes how input data is compressed
     */
    export interface CompressionArgs {
        /**
         * Indicates the type of compression that the input uses. Required on PUT (CreateOrReplace) requests.
         */
        type: pulumi.Input<string | enums.CompressionType>;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in CSV format.
     */
    export interface CsvSerializationArgs {
        /**
         * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
         */
        encoding?: pulumi.Input<string | enums.Encoding>;
        /**
         * Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests.
         */
        fieldDelimiter?: pulumi.Input<string>;
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Csv'.
         */
        type: pulumi.Input<"Csv">;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in custom format.
     */
    export interface CustomClrSerializationArgs {
        /**
         * The serialization class name.
         */
        serializationClassName?: pulumi.Input<string>;
        /**
         * The serialization library path.
         */
        serializationDllPath?: pulumi.Input<string>;
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'CustomClr'.
         */
        type: pulumi.Input<"CustomClr">;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in Delta Lake format.
     */
    export interface DeltaSerializationArgs {
        /**
         * Specifies the path of the Delta Lake table that the output will be written to.
         */
        deltaTablePath: pulumi.Input<string>;
        /**
         * Specifies the names of the columns for which the Delta Lake table will be partitioned. We are only supporting 1 partition column, but keeping it as an array for extensibility.
         */
        partitionColumns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Delta'.
         */
        type: pulumi.Input<"Delta">;
    }

    /**
     * Describes a DocumentDB output data source.
     */
    export interface DocumentDbOutputDataSourceArgs {
        /**
         * The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
         */
        accountId?: pulumi.Input<string>;
        /**
         * The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
         */
        accountKey?: pulumi.Input<string>;
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests.
         */
        collectionNamePattern?: pulumi.Input<string>;
        /**
         * The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
         */
        database?: pulumi.Input<string>;
        /**
         * The name of the field in output events used to specify the primary key which insert or update operations are based on.
         */
        documentId?: pulumi.Input<string>;
        /**
         * The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.
         */
        partitionKey?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/DocumentDB'.
         */
        type: pulumi.Input<"Microsoft.Storage/DocumentDB">;
    }

    /**
     * Describes an event grid input data source that contains stream data.
     */
    export interface EventGridStreamInputDataSourceArgs {
        /**
         * List of Event Types that are supported by the Event Grid adapter.
         */
        eventTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Indicates the Event Grid schema type.
         */
        schema?: pulumi.Input<string | enums.EventGridEventSchemaType>;
        /**
         * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
         */
        storageAccounts?: pulumi.Input<pulumi.Input<StorageAccountArgs>[]>;
        /**
         * Subscribers for the Event Grid. Currently only EventHub Subscriber is supported.
         */
        subscriber?: pulumi.Input<EventHubV2StreamInputDataSourceArgs>;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.EventGrid/EventSubscriptions'.
         */
        type: pulumi.Input<"Microsoft.EventGrid/EventSubscriptions">;
    }

    /**
     * Describes an Event Hub output data source.
     */
    export interface EventHubOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
         */
        eventHubName?: pulumi.Input<string>;
        /**
         * The partition count of the event hub data source. Range 1 - 256.
         */
        partitionCount?: pulumi.Input<number>;
        /**
         * The key/column that is used to determine to which partition to send event data.
         */
        partitionKey?: pulumi.Input<string>;
        /**
         * The properties associated with this Event Hub output.
         */
        propertyColumns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: pulumi.Input<string>;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: pulumi.Input<string>;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.ServiceBus/EventHub'.
         */
        type: pulumi.Input<"Microsoft.ServiceBus/EventHub">;
    }

    /**
     * Describes an Event Hub input data source that contains stream data.
     */
    export interface EventHubStreamInputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
         */
        consumerGroupName?: pulumi.Input<string>;
        /**
         * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
         */
        eventHubName?: pulumi.Input<string>;
        /**
         * The partition count of the event hub data source. Range 1 - 256.
         */
        partitionCount?: pulumi.Input<number>;
        /**
         * The number of messages that the message receiver can simultaneously request.
         */
        prefetchCount?: pulumi.Input<number>;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: pulumi.Input<string>;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: pulumi.Input<string>;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.ServiceBus/EventHub'.
         */
        type: pulumi.Input<"Microsoft.ServiceBus/EventHub">;
    }

    /**
     * Describes an Event Hub output data source.
     */
    export interface EventHubV2OutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
         */
        eventHubName?: pulumi.Input<string>;
        /**
         * The partition count of the event hub data source. Range 1 - 256.
         */
        partitionCount?: pulumi.Input<number>;
        /**
         * The key/column that is used to determine to which partition to send event data.
         */
        partitionKey?: pulumi.Input<string>;
        /**
         * The properties associated with this Event Hub output.
         */
        propertyColumns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: pulumi.Input<string>;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: pulumi.Input<string>;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.EventHub/EventHub'.
         */
        type: pulumi.Input<"Microsoft.EventHub/EventHub">;
    }

    /**
     * Describes an Event Hub input data source that contains stream data.
     */
    export interface EventHubV2StreamInputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
         */
        consumerGroupName?: pulumi.Input<string>;
        /**
         * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
         */
        eventHubName?: pulumi.Input<string>;
        /**
         * The partition count of the event hub data source. Range 1 - 256.
         */
        partitionCount?: pulumi.Input<number>;
        /**
         * The number of messages that the message receiver can simultaneously request.
         */
        prefetchCount?: pulumi.Input<number>;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: pulumi.Input<string>;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: pulumi.Input<string>;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.EventHub/EventHub'.
         */
        type: pulumi.Input<"Microsoft.EventHub/EventHub">;
    }

    /**
     * The storage account where the custom code artifacts are located.
     */
    export interface ExternalArgs {
        /**
         * The UserCustomCode container.
         */
        container?: pulumi.Input<string>;
        /**
         * The UserCustomCode path.
         */
        path?: pulumi.Input<string>;
        /**
         * The refresh parameters for any/all updatable user defined functions present in the job config.
         */
        refreshConfiguration?: pulumi.Input<RefreshConfigurationArgs>;
        /**
         * The properties that are associated with an Azure Storage account
         */
        storageAccount?: pulumi.Input<StorageAccountArgs>;
    }

    /**
     * Describes a file input data source that contains reference data.
     */
    export interface FileReferenceInputDataSourceArgs {
        /**
         * The path of the file.
         */
        path?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'File'.
         */
        type: pulumi.Input<"File">;
    }

    /**
     * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
     */
    export interface FunctionArgs {
        /**
         * Resource name
         */
        name?: pulumi.Input<string>;
        /**
         * The properties that are associated with a function.
         */
        properties?: pulumi.Input<AggregateFunctionPropertiesArgs | ScalarFunctionPropertiesArgs>;
    }

    /**
     * Describes one input parameter of a function.
     */
    export interface FunctionInputArgs {
        /**
         * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
         */
        dataType?: pulumi.Input<string>;
        /**
         * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
         */
        isConfigurationParameter?: pulumi.Input<boolean>;
    }

    /**
     * Describes the output of a function.
     */
    export interface FunctionOutputArgs {
        /**
         * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
         */
        dataType?: pulumi.Input<string>;
    }

    /**
     * Describes a Gateway Message Bus output data source.
     */
    export interface GatewayMessageBusOutputDataSourceArgs {
        /**
         * The name of the Service Bus topic.
         */
        topic?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'GatewayMessageBus'.
         */
        type: pulumi.Input<"GatewayMessageBus">;
    }

    /**
     * Describes a blob input data source that contains stream data.
     */
    export interface GatewayMessageBusStreamInputDataSourceArgs {
        /**
         * The name of the Service Bus topic.
         */
        topic?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'GatewayMessageBus'.
         */
        type: pulumi.Input<"GatewayMessageBus">;
    }

    /**
     * Describes how identity is verified
     */
    export interface IdentityArgs {
        /**
         * The type of identity, can be SystemAssigned or UserAssigned.
         */
        type?: pulumi.Input<string>;
        /**
         * The user assigned identities associated with the streaming job resource.
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: any}>;
    }

    /**
     * An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
     */
    export interface InputArgs {
        /**
         * Resource name
         */
        name?: pulumi.Input<string>;
        /**
         * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
         */
        properties?: pulumi.Input<ReferenceInputPropertiesArgs | StreamInputPropertiesArgs>;
    }

    /**
     * Settings which determine whether to read watermark events.
     */
    export interface InputWatermarkPropertiesArgs {
        /**
         * The input watermark mode.
         */
        watermarkMode?: pulumi.Input<string | enums.InputWatermarkMode>;
    }

    /**
     * Describes an IoT Hub input data source that contains stream data.
     */
    export interface IoTHubStreamInputDataSourceArgs {
        /**
         * The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group.
         */
        consumerGroupName?: pulumi.Input<string>;
        /**
         * The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.).
         */
        endpoint?: pulumi.Input<string>;
        /**
         * The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests.
         */
        iotHubNamespace?: pulumi.Input<string>;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: pulumi.Input<string>;
        /**
         * The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Devices/IotHubs'.
         */
        type: pulumi.Input<"Microsoft.Devices/IotHubs">;
    }

    /**
     * The binding to a JavaScript function.
     */
    export interface JavaScriptFunctionBindingArgs {
        /**
         * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
         */
        script?: pulumi.Input<string>;
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
         */
        type: pulumi.Input<"Microsoft.StreamAnalytics/JavascriptUdf">;
    }

    /**
     * The properties that are associated with an Azure Storage account with MSI
     */
    export interface JobStorageAccountArgs {
        /**
         * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountKey?: pulumi.Input<string>;
        /**
         * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountName?: pulumi.Input<string>;
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in JSON format.
     */
    export interface JsonSerializationArgs {
        /**
         * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
         */
        encoding?: pulumi.Input<string | enums.Encoding>;
        /**
         * This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
         */
        format?: pulumi.Input<string | enums.JsonOutputSerializationFormat>;
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Json'.
         */
        type: pulumi.Input<"Json">;
    }

    /**
     * An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
     */
    export interface OutputArgs {
        /**
         * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
         */
        datasource?: pulumi.Input<AzureDataExplorerOutputDataSourceArgs | AzureDataLakeStoreOutputDataSourceArgs | AzureFunctionOutputDataSourceArgs | AzureSqlDatabaseOutputDataSourceArgs | AzureSynapseOutputDataSourceArgs | AzureTableOutputDataSourceArgs | BlobOutputDataSourceArgs | DocumentDbOutputDataSourceArgs | EventHubOutputDataSourceArgs | EventHubV2OutputDataSourceArgs | GatewayMessageBusOutputDataSourceArgs | PostgreSQLOutputDataSourceArgs | PowerBIOutputDataSourceArgs | RawOutputDatasourceArgs | ServiceBusQueueOutputDataSourceArgs | ServiceBusTopicOutputDataSourceArgs>;
        /**
         * Resource name
         */
        name?: pulumi.Input<string>;
        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
         */
        serialization?: pulumi.Input<AvroSerializationArgs | CsvSerializationArgs | CustomClrSerializationArgs | DeltaSerializationArgs | JsonSerializationArgs | ParquetSerializationArgs>;
        /**
         * The size window to constrain a Stream Analytics output to.
         */
        sizeWindow?: pulumi.Input<number>;
        /**
         * The time frame for filtering Stream Analytics job outputs.
         */
        timeWindow?: pulumi.Input<string>;
        /**
         * Settings which determine whether to send watermarks to downstream.
         */
        watermarkSettings?: pulumi.Input<OutputWatermarkPropertiesArgs>;
    }

    /**
     * Settings which determine whether to send watermarks to downstream.
     */
    export interface OutputWatermarkPropertiesArgs {
        /**
         * Describes the maximal delta between the fastest and slowest partitions, so the out of order window that catches all necessary events in downstream jobs is well defined.
         */
        maxWatermarkDifferenceAcrossPartitions?: pulumi.Input<string>;
        /**
         * The output watermark mode.
         */
        watermarkMode?: pulumi.Input<string | enums.OutputWatermarkMode>;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in Parquet format.
     */
    export interface ParquetSerializationArgs {
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Parquet'.
         */
        type: pulumi.Input<"Parquet">;
    }

    /**
     * Describes a PostgreSQL output data source.
     */
    export interface PostgreSQLOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        database?: pulumi.Input<string>;
        /**
         * Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
         */
        maxWriterCount?: pulumi.Input<number>;
        /**
         * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        password?: pulumi.Input<string>;
        /**
         * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        server?: pulumi.Input<string>;
        /**
         * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        table?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.DBForPostgreSQL/servers/databases'.
         */
        type: pulumi.Input<"Microsoft.DBForPostgreSQL/servers/databases">;
        /**
         * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        user?: pulumi.Input<string>;
    }

    /**
     * Describes a Power BI output data source.
     */
    export interface PowerBIOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests.
         */
        dataset?: pulumi.Input<string>;
        /**
         * The ID of the Power BI group.
         */
        groupId?: pulumi.Input<string>;
        /**
         * The name of the Power BI group. Use this property to help remember which specific Power BI group id was used.
         */
        groupName?: pulumi.Input<string>;
        /**
         * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
         */
        refreshToken?: pulumi.Input<string>;
        /**
         * The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests.
         */
        table?: pulumi.Input<string>;
        /**
         * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
         */
        tokenUserDisplayName?: pulumi.Input<string>;
        /**
         * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
         */
        tokenUserPrincipalName?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'PowerBI'.
         */
        type: pulumi.Input<"PowerBI">;
    }

    /**
     * Describes a raw output data source. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an output of this data source type to an existing job.
     */
    export interface RawOutputDatasourceArgs {
        /**
         * The SAS URL to a blob where the output should be written. If this property is not set, output data will be written into a temporary storage, and a SAS URL to that temporary storage will be included in the result.
         */
        payloadUri?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Raw'.
         */
        type: pulumi.Input<"Raw">;
    }

    /**
     * Describes a raw input data source that contains reference data. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an input of this data source type to an existing job.
     */
    export interface RawReferenceInputDataSourceArgs {
        /**
         * The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both. 
         */
        payload?: pulumi.Input<string>;
        /**
         * The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
         */
        payloadUri?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Raw'.
         */
        type: pulumi.Input<"Raw">;
    }

    /**
     * Describes a raw input data source that contains stream data. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an input of this data source type to an existing job.
     */
    export interface RawStreamInputDataSourceArgs {
        /**
         * The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both. 
         */
        payload?: pulumi.Input<string>;
        /**
         * The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
         */
        payloadUri?: pulumi.Input<string>;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Raw'.
         */
        type: pulumi.Input<"Raw">;
    }

    /**
     * The properties that are associated with an input containing reference data.
     */
    export interface ReferenceInputPropertiesArgs {
        /**
         * Describes how input data is compressed
         */
        compression?: pulumi.Input<CompressionArgs>;
        /**
         * Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests.
         */
        datasource?: pulumi.Input<AzureSqlReferenceInputDataSourceArgs | BlobReferenceInputDataSourceArgs | FileReferenceInputDataSourceArgs | RawReferenceInputDataSourceArgs>;
        /**
         * partitionKey Describes a key in the input data which is used for partitioning the input data
         */
        partitionKey?: pulumi.Input<string>;
        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
         */
        serialization?: pulumi.Input<AvroSerializationArgs | CsvSerializationArgs | CustomClrSerializationArgs | DeltaSerializationArgs | JsonSerializationArgs | ParquetSerializationArgs>;
        /**
         * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Reference'.
         */
        type: pulumi.Input<"Reference">;
        /**
         * Settings which determine whether to read watermark events.
         */
        watermarkSettings?: pulumi.Input<InputWatermarkPropertiesArgs>;
    }

    /**
     * The refresh parameters for any/all updatable user defined functions present in the job config.
     */
    export interface RefreshConfigurationArgs {
        /**
         * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
         */
        dateFormat?: pulumi.Input<string>;
        /**
         * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
         */
        pathPattern?: pulumi.Input<string>;
        /**
         * The refresh interval.
         */
        refreshInterval?: pulumi.Input<string>;
        /**
         * This property indicates which data refresh option to use, Blocking or Nonblocking.
         */
        refreshType?: pulumi.Input<string | enums.UpdatableUdfRefreshType>;
        /**
         * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
         */
        timeFormat?: pulumi.Input<string>;
    }

    /**
     * The properties that are associated with a scalar function.
     */
    export interface ScalarFunctionPropertiesArgs {
        /**
         * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
         */
        binding?: pulumi.Input<AzureMachineLearningServiceFunctionBindingArgs | AzureMachineLearningStudioFunctionBindingArgs | CSharpFunctionBindingArgs | JavaScriptFunctionBindingArgs>;
        inputs?: pulumi.Input<pulumi.Input<FunctionInputArgs>[]>;
        /**
         * Describes the output of a function.
         */
        output?: pulumi.Input<FunctionOutputArgs>;
        /**
         * Indicates the type of function.
         * Expected value is 'Scalar'.
         */
        type: pulumi.Input<"Scalar">;
    }

    /**
     * Describes a Service Bus Queue output data source.
     */
    export interface ServiceBusQueueOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
         */
        propertyColumns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests.
         */
        queueName?: pulumi.Input<string>;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: pulumi.Input<string>;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: pulumi.Input<string>;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: pulumi.Input<string>;
        /**
         * The system properties associated with the Service Bus Queue. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
         */
        systemPropertyColumns?: any;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.ServiceBus/Queue'.
         */
        type: pulumi.Input<"Microsoft.ServiceBus/Queue">;
    }

    /**
     * Describes a Service Bus Topic output data source.
     */
    export interface ServiceBusTopicOutputDataSourceArgs {
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
        /**
         * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
         */
        propertyColumns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: pulumi.Input<string>;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: pulumi.Input<string>;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: pulumi.Input<string>;
        /**
         * The system properties associated with the Service Bus Topic Output. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
         */
        systemPropertyColumns?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.
         */
        topicName?: pulumi.Input<string>;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.ServiceBus/Topic'.
         */
        type: pulumi.Input<"Microsoft.ServiceBus/Topic">;
    }

    /**
     * The properties that are associated with a SKU.
     */
    export interface SkuArgs {
        /**
         * The capacity of the SKU.
         */
        capacity?: pulumi.Input<number>;
        /**
         * The name of the SKU. Required on PUT (CreateOrReplace) requests.
         */
        name?: pulumi.Input<string | enums.SkuName>;
    }

    /**
     * The properties that are associated with an Azure Storage account
     */
    export interface StorageAccountArgs {
        /**
         * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountKey?: pulumi.Input<string>;
        /**
         * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountName?: pulumi.Input<string>;
        /**
         * Authentication Mode.
         */
        authenticationMode?: pulumi.Input<string | enums.AuthenticationMode>;
    }

    /**
     * The properties that are associated with an input containing stream data.
     */
    export interface StreamInputPropertiesArgs {
        /**
         * Describes how input data is compressed
         */
        compression?: pulumi.Input<CompressionArgs>;
        /**
         * Describes an input data source that contains stream data. Required on PUT (CreateOrReplace) requests.
         */
        datasource?: pulumi.Input<BlobStreamInputDataSourceArgs | EventGridStreamInputDataSourceArgs | EventHubStreamInputDataSourceArgs | EventHubV2StreamInputDataSourceArgs | GatewayMessageBusStreamInputDataSourceArgs | IoTHubStreamInputDataSourceArgs | RawStreamInputDataSourceArgs>;
        /**
         * partitionKey Describes a key in the input data which is used for partitioning the input data
         */
        partitionKey?: pulumi.Input<string>;
        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
         */
        serialization?: pulumi.Input<AvroSerializationArgs | CsvSerializationArgs | CustomClrSerializationArgs | DeltaSerializationArgs | JsonSerializationArgs | ParquetSerializationArgs>;
        /**
         * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Stream'.
         */
        type: pulumi.Input<"Stream">;
        /**
         * Settings which determine whether to read watermark events.
         */
        watermarkSettings?: pulumi.Input<InputWatermarkPropertiesArgs>;
    }

    /**
     * A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.
     */
    export interface TransformationArgs {
        /**
         * Resource name
         */
        name?: pulumi.Input<string>;
        /**
         * Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests.
         */
        query?: pulumi.Input<string>;
        /**
         * Specifies the number of streaming units that the streaming job uses.
         */
        streamingUnits?: pulumi.Input<number>;
        /**
         * Specifies the valid streaming units a streaming job can scale to.
         */
        validStreamingUnits?: pulumi.Input<pulumi.Input<number>[]>;
    }
    /**
     * transformationArgsProvideDefaults sets the appropriate defaults for TransformationArgs
     */
    export function transformationArgsProvideDefaults(val: TransformationArgs): TransformationArgs {
        return {
            ...val,
            streamingUnits: (val.streamingUnits) ?? 3,
        };
    }
