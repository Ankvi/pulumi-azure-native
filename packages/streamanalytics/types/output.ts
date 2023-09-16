import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace streamanalytics {
    /**
     * The properties that are associated with an aggregate function.
     */
    export interface AggregateFunctionPropertiesResponse {
        /**
         * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
         */
        binding?: AzureMachineLearningWebServiceFunctionBindingResponse | JavaScriptFunctionBindingResponse;
        /**
         * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
         */
        etag: string;
        inputs?: FunctionInputResponse[];
        /**
         * Describes the output of a function.
         */
        output?: FunctionOutputResponse;
        /**
         * Indicates the type of function.
         * Expected value is 'Aggregate'.
         */
        type: "Aggregate";
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in Avro format.
     */
    export interface AvroSerializationResponse {
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Avro'.
         */
        type: "Avro";
    }

    /**
     * Describes an Azure Data Lake Store output data source.
     */
    export interface AzureDataLakeStoreOutputDataSourceResponse {
        /**
         * The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
         */
        accountName?: string;
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
         */
        dateFormat?: string;
        /**
         * The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
         */
        filePathPrefix?: string;
        /**
         * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
         */
        refreshToken?: string;
        /**
         * The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
         */
        tenantId?: string;
        /**
         * The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
         */
        timeFormat?: string;
        /**
         * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
         */
        tokenUserDisplayName?: string;
        /**
         * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
         */
        tokenUserPrincipalName?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.DataLake/Accounts'.
         */
        type: "Microsoft.DataLake/Accounts";
    }

    /**
     * Defines the metadata of AzureFunctionOutputDataSource
     */
    export interface AzureFunctionOutputDataSourceResponse {
        /**
         * If you want to use an Azure Function from another subscription, you can do so by providing the key to access your function.
         */
        apiKey?: string;
        /**
         * The name of your Azure Functions app.
         */
        functionAppName?: string;
        /**
         * The name of the function in your Azure Functions app.
         */
        functionName?: string;
        /**
         * A property that lets you specify the maximum number of events in each batch that's sent to Azure Functions. The default value is 100.
         */
        maxBatchCount?: number;
        /**
         * A property that lets you set the maximum size for each output batch that's sent to your Azure function. The input unit is in bytes. By default, this value is 262,144 bytes (256 KB).
         */
        maxBatchSize?: number;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.AzureFunction'.
         */
        type: "Microsoft.AzureFunction";
    }

    /**
     * The binding to an Azure Machine Learning web service.
     */
    export interface AzureMachineLearningWebServiceFunctionBindingResponse {
        /**
         * The API key used to authenticate with Request-Response endpoint.
         */
        apiKey?: string;
        /**
         * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
         */
        batchSize?: number;
        /**
         * The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
         */
        endpoint?: string;
        /**
         * The inputs for the Azure Machine Learning web service endpoint.
         */
        inputs?: AzureMachineLearningWebServiceInputsResponse;
        /**
         * A list of outputs from the Azure Machine Learning web service endpoint execution.
         */
        outputs?: AzureMachineLearningWebServiceOutputColumnResponse[];
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.MachineLearning/WebService'.
         */
        type: "Microsoft.MachineLearning/WebService";
    }

    /**
     * Describes an input column for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceInputColumnResponse {
        /**
         * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
         */
        dataType?: string;
        /**
         * The zero based index of the function parameter this input maps to.
         */
        mapTo?: number;
        /**
         * The name of the input column.
         */
        name?: string;
    }

    /**
     * The inputs for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceInputsResponse {
        /**
         * A list of input columns for the Azure Machine Learning web service endpoint.
         */
        columnNames?: AzureMachineLearningWebServiceInputColumnResponse[];
        /**
         * The name of the input. This is the name provided while authoring the endpoint.
         */
        name?: string;
    }

    /**
     * Describes an output column for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceOutputColumnResponse {
        /**
         * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
         */
        dataType?: string;
        /**
         * The name of the output column.
         */
        name?: string;
    }

    /**
     * Describes an Azure SQL database output data source.
     */
    export interface AzureSqlDatabaseOutputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        database?: string;
        /**
         * Max Batch count for write to Sql database, the default value is 10,000. Optional on PUT requests.
         */
        maxBatchCount?: number;
        /**
         * Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
         */
        maxWriterCount?: number;
        /**
         * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        password?: string;
        /**
         * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        server?: string;
        /**
         * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        table?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Sql/Server/Database'.
         */
        type: "Microsoft.Sql/Server/Database";
        /**
         * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        user?: string;
    }

    /**
     * Describes an Azure SQL database reference input data source.
     */
    export interface AzureSqlReferenceInputDataSourceResponse {
        /**
         * This element is associated with the datasource element. This is the name of the database that output will be written to.
         */
        database?: string;
        /**
         * This element is associated with the datasource element. This query is used to fetch incremental changes from the SQL database. To use this option, we recommend using temporal tables in Azure SQL Database.
         */
        deltaSnapshotQuery?: string;
        /**
         * This element is associated with the datasource element. This query is used to fetch data from the sql database.
         */
        fullSnapshotQuery?: string;
        /**
         * This element is associated with the datasource element. This is the password that will be used to connect to the SQL Database instance.
         */
        password?: string;
        /**
         * This element is associated with the datasource element. This indicates how frequently the data will be fetched from the database. It is of DateTime format.
         */
        refreshRate?: string;
        /**
         * Indicates the type of data refresh option.
         */
        refreshType?: string;
        /**
         * This element is associated with the datasource element. This is the name of the server that contains the database that will be written to.
         */
        server?: string;
        /**
         * This element is associated with the datasource element. The name of the table in the Azure SQL database..
         */
        table?: string;
        /**
         * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Sql/Server/Database'.
         */
        type: "Microsoft.Sql/Server/Database";
        /**
         * This element is associated with the datasource element. This is the user name that will be used to connect to the SQL Database instance.
         */
        user?: string;
    }

    /**
     * Describes an Azure Synapse output data source.
     */
    export interface AzureSynapseOutputDataSourceResponse {
        /**
         * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        database?: string;
        /**
         * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        password?: string;
        /**
         * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        server?: string;
        /**
         * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        table?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Sql/Server/DataWarehouse'.
         */
        type: "Microsoft.Sql/Server/DataWarehouse";
        /**
         * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
         */
        user?: string;
    }

    /**
     * Describes an Azure Table output data source.
     */
    export interface AzureTableOutputDataSourceResponse {
        /**
         * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountKey?: string;
        /**
         * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountName?: string;
        /**
         * The number of rows to write to the Azure Table at a time.
         */
        batchSize?: number;
        /**
         * If specified, each item in the array is the name of a column to remove (if present) from output event entities.
         */
        columnsToRemove?: string[];
        /**
         * This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests.
         */
        partitionKey?: string;
        /**
         * This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests.
         */
        rowKey?: string;
        /**
         * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
         */
        table?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/Table'.
         */
        type: "Microsoft.Storage/Table";
    }

    /**
     * Describes a blob output data source.
     */
    export interface BlobOutputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * Blob path prefix.
         */
        blobPathPrefix?: string;
        /**
         * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
         */
        container?: string;
        /**
         * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
         */
        dateFormat?: string;
        /**
         * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
         */
        pathPattern?: string;
        /**
         * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
         */
        storageAccounts?: StorageAccountResponse[];
        /**
         * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
         */
        timeFormat?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/Blob'.
         */
        type: "Microsoft.Storage/Blob";
    }

    /**
     * Describes a blob input data source that contains reference data.
     */
    export interface BlobReferenceInputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
         */
        container?: string;
        /**
         * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
         */
        dateFormat?: string;
        /**
         * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
         */
        pathPattern?: string;
        /**
         * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
         */
        storageAccounts?: StorageAccountResponse[];
        /**
         * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
         */
        timeFormat?: string;
        /**
         * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/Blob'.
         */
        type: "Microsoft.Storage/Blob";
    }

    /**
     * Describes a blob input data source that contains stream data.
     */
    export interface BlobStreamInputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
         */
        container?: string;
        /**
         * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
         */
        dateFormat?: string;
        /**
         * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
         */
        pathPattern?: string;
        /**
         * The partition count of the blob input data source. Range 1 - 1024.
         */
        sourcePartitionCount?: number;
        /**
         * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
         */
        storageAccounts?: StorageAccountResponse[];
        /**
         * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
         */
        timeFormat?: string;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/Blob'.
         */
        type: "Microsoft.Storage/Blob";
    }

    /**
     * The properties associated with a Stream Analytics cluster.
     */
    export interface ClusterInfoResponse {
        /**
         * The resource id of cluster.
         */
        id?: string;
    }

    /**
     * A streaming job.
     */
    export interface ClusterJobResponse {
        /**
         * Resource ID of the streaming job.
         */
        id: string;
        /**
         * The current execution state of the streaming job.
         */
        jobState: string;
        /**
         * The number of streaming units that are used by the streaming job.
         */
        streamingUnits: number;
    }

    /**
     * The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests.
     */
    export interface ClusterSkuResponse {
        /**
         * Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests.
         */
        capacity?: number;
        /**
         * Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests.
         */
        name?: string;
    }

    /**
     * Describes how input data is compressed
     */
    export interface CompressionResponse {
        /**
         * Indicates the type of compression that the input uses. Required on PUT (CreateOrReplace) requests.
         */
        type: string;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in CSV format.
     */
    export interface CsvSerializationResponse {
        /**
         * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
         */
        encoding?: string;
        /**
         * Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests.
         */
        fieldDelimiter?: string;
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Csv'.
         */
        type: "Csv";
    }

    /**
     * Condition applicable to the resource, or to the job overall, that warrant customer attention.
     */
    export interface DiagnosticConditionResponse {
        /**
         * The opaque diagnostic code.
         */
        code: string;
        /**
         * The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request.
         */
        message: string;
        /**
         * The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time.
         */
        since: string;
    }

    /**
     * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
     */
    export interface DiagnosticsResponse {
        /**
         * A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.
         */
        conditions: DiagnosticConditionResponse[];
    }

    /**
     * Describes a DocumentDB output data source.
     */
    export interface DocumentDbOutputDataSourceResponse {
        /**
         * The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
         */
        accountId?: string;
        /**
         * The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
         */
        accountKey?: string;
        /**
         * The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests.
         */
        collectionNamePattern?: string;
        /**
         * The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
         */
        database?: string;
        /**
         * The name of the field in output events used to specify the primary key which insert or update operations are based on.
         */
        documentId?: string;
        /**
         * The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.
         */
        partitionKey?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Storage/DocumentDB'.
         */
        type: "Microsoft.Storage/DocumentDB";
    }

    /**
     * Describes an Event Hub output data source.
     */
    export interface EventHubOutputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
         */
        eventHubName?: string;
        /**
         * The key/column that is used to determine to which partition to send event data.
         */
        partitionKey?: string;
        /**
         * The properties associated with this Event Hub output.
         */
        propertyColumns?: string[];
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: string;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: string;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.ServiceBus/EventHub'.
         */
        type: "Microsoft.ServiceBus/EventHub";
    }

    /**
     * Describes an Event Hub input data source that contains stream data.
     */
    export interface EventHubStreamInputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
         */
        consumerGroupName?: string;
        /**
         * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
         */
        eventHubName?: string;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: string;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: string;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: string;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.ServiceBus/EventHub'.
         */
        type: "Microsoft.ServiceBus/EventHub";
    }

    /**
     * Describes an Event Hub output data source.
     */
    export interface EventHubV2OutputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
         */
        eventHubName?: string;
        /**
         * The key/column that is used to determine to which partition to send event data.
         */
        partitionKey?: string;
        /**
         * The properties associated with this Event Hub output.
         */
        propertyColumns?: string[];
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: string;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: string;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.EventHub/EventHub'.
         */
        type: "Microsoft.EventHub/EventHub";
    }

    /**
     * Describes an Event Hub input data source that contains stream data.
     */
    export interface EventHubV2StreamInputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
         */
        consumerGroupName?: string;
        /**
         * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
         */
        eventHubName?: string;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: string;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: string;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: string;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.EventHub/EventHub'.
         */
        type: "Microsoft.EventHub/EventHub";
    }

    /**
     * Describes a file input data source that contains reference data.
     */
    export interface FileReferenceInputDataSourceResponse {
        /**
         * The path of the file.
         */
        path?: string;
        /**
         * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'File'.
         */
        type: "File";
    }

    /**
     * Describes one input parameter of a function.
     */
    export interface FunctionInputResponse {
        /**
         * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
         */
        dataType?: string;
        /**
         * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
         */
        isConfigurationParameter?: boolean;
    }

    /**
     * Describes the output of a function.
     */
    export interface FunctionOutputResponse {
        /**
         * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
         */
        dataType?: string;
    }

    /**
     * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
     */
    export interface FunctionResponse {
        /**
         * Resource Id
         */
        id: string;
        /**
         * Resource name
         */
        name?: string;
        /**
         * The properties that are associated with a function.
         */
        properties?: AggregateFunctionPropertiesResponse | ScalarFunctionPropertiesResponse;
        /**
         * Resource type
         */
        type: string;
    }

    /**
     * Describes a Gateway Message Bus output data source.
     */
    export interface GatewayMessageBusOutputDataSourceResponse {
        /**
         * The name of the Service Bus topic.
         */
        topic?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'GatewayMessageBus'.
         */
        type: "GatewayMessageBus";
    }

    /**
     * Describes a blob input data source that contains stream data.
     */
    export interface GatewayMessageBusStreamInputDataSourceResponse {
        /**
         * The name of the Service Bus topic.
         */
        topic?: string;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'GatewayMessageBus'.
         */
        type: "GatewayMessageBus";
    }

    /**
     * Describes how identity is verified
     */
    export interface IdentityResponse {
        /**
         * The identity principal ID
         */
        principalId: string;
        /**
         * The identity tenantId
         */
        tenantId: string;
        /**
         * The identity type
         */
        type?: string;
    }

    /**
     * An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
     */
    export interface InputResponse {
        /**
         * Resource Id
         */
        id: string;
        /**
         * Resource name
         */
        name?: string;
        /**
         * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
         */
        properties?: ReferenceInputPropertiesResponse | StreamInputPropertiesResponse;
        /**
         * Resource type
         */
        type: string;
    }

    /**
     * Describes an IoT Hub input data source that contains stream data.
     */
    export interface IoTHubStreamInputDataSourceResponse {
        /**
         * The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group.
         */
        consumerGroupName?: string;
        /**
         * The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.).
         */
        endpoint?: string;
        /**
         * The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests.
         */
        iotHubNamespace?: string;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: string;
        /**
         * The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: string;
        /**
         * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.Devices/IotHubs'.
         */
        type: "Microsoft.Devices/IotHubs";
    }

    /**
     * The binding to a JavaScript function.
     */
    export interface JavaScriptFunctionBindingResponse {
        /**
         * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
         */
        script?: string;
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
         */
        type: "Microsoft.StreamAnalytics/JavascriptUdf";
    }

    /**
     * The properties that are associated with an Azure Storage account with MSI
     */
    export interface JobStorageAccountResponse {
        /**
         * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountKey?: string;
        /**
         * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountName?: string;
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in JSON format.
     */
    export interface JsonSerializationResponse {
        /**
         * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
         */
        encoding?: string;
        /**
         * This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
         */
        format?: string;
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Json'.
         */
        type: "Json";
    }

    /**
     * An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
     */
    export interface OutputResponse {
        /**
         * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
         */
        datasource?: AzureDataLakeStoreOutputDataSourceResponse | AzureFunctionOutputDataSourceResponse | AzureSqlDatabaseOutputDataSourceResponse | AzureSynapseOutputDataSourceResponse | AzureTableOutputDataSourceResponse | BlobOutputDataSourceResponse | DocumentDbOutputDataSourceResponse | EventHubOutputDataSourceResponse | EventHubV2OutputDataSourceResponse | GatewayMessageBusOutputDataSourceResponse | PowerBIOutputDataSourceResponse | ServiceBusQueueOutputDataSourceResponse | ServiceBusTopicOutputDataSourceResponse;
        /**
         * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
         */
        diagnostics: DiagnosticsResponse;
        /**
         * The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
         */
        etag: string;
        /**
         * Resource Id
         */
        id: string;
        /**
         * Resource name
         */
        name?: string;
        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
         */
        serialization?: AvroSerializationResponse | CsvSerializationResponse | JsonSerializationResponse | ParquetSerializationResponse;
        /**
         * The size window to constrain a Stream Analytics output to.
         */
        sizeWindow?: number;
        /**
         * The time frame for filtering Stream Analytics job outputs.
         */
        timeWindow?: string;
        /**
         * Resource type
         */
        type: string;
    }

    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output in Parquet format.
     */
    export interface ParquetSerializationResponse {
        /**
         * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Parquet'.
         */
        type: "Parquet";
    }

    /**
     * Describes a Power BI output data source.
     */
    export interface PowerBIOutputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests.
         */
        dataset?: string;
        /**
         * The ID of the Power BI group.
         */
        groupId?: string;
        /**
         * The name of the Power BI group. Use this property to help remember which specific Power BI group id was used.
         */
        groupName?: string;
        /**
         * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
         */
        refreshToken?: string;
        /**
         * The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests.
         */
        table?: string;
        /**
         * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
         */
        tokenUserDisplayName?: string;
        /**
         * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
         */
        tokenUserPrincipalName?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'PowerBI'.
         */
        type: "PowerBI";
    }

    /**
     * A collection of read-only information about the state of the connection to the private remote resource.
     */
    export interface PrivateLinkConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the remote resource/service.
         */
        status: string;
    }

    /**
     * A grouping of information about the connection to the remote resource.
     */
    export interface PrivateLinkServiceConnectionResponse {
        /**
         * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests.
         */
        groupIds?: string[];
        /**
         * A collection of read-only information about the state of the connection to the private remote resource.
         */
        privateLinkServiceConnectionState?: PrivateLinkConnectionStateResponse;
        /**
         * The resource id of the private link service. Required on PUT (CreateOrUpdate) requests.
         */
        privateLinkServiceId?: string;
        /**
         * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
         */
        requestMessage: string;
    }

    /**
     * The properties that are associated with an input containing reference data.
     */
    export interface ReferenceInputPropertiesResponse {
        /**
         * Describes how input data is compressed
         */
        compression?: CompressionResponse;
        /**
         * Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests.
         */
        datasource?: AzureSqlReferenceInputDataSourceResponse | BlobReferenceInputDataSourceResponse | FileReferenceInputDataSourceResponse;
        /**
         * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
         */
        diagnostics: DiagnosticsResponse;
        /**
         * The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
         */
        etag: string;
        /**
         * partitionKey Describes a key in the input data which is used for partitioning the input data
         */
        partitionKey?: string;
        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
         */
        serialization?: AvroSerializationResponse | CsvSerializationResponse | JsonSerializationResponse | ParquetSerializationResponse;
        /**
         * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Reference'.
         */
        type: "Reference";
    }

    /**
     * The properties that are associated with a scalar function.
     */
    export interface ScalarFunctionPropertiesResponse {
        /**
         * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
         */
        binding?: AzureMachineLearningWebServiceFunctionBindingResponse | JavaScriptFunctionBindingResponse;
        /**
         * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
         */
        etag: string;
        inputs?: FunctionInputResponse[];
        /**
         * Describes the output of a function.
         */
        output?: FunctionOutputResponse;
        /**
         * Indicates the type of function.
         * Expected value is 'Scalar'.
         */
        type: "Scalar";
    }

    /**
     * Describes a Service Bus Queue output data source.
     */
    export interface ServiceBusQueueOutputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
         */
        propertyColumns?: string[];
        /**
         * The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests.
         */
        queueName?: string;
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: string;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: string;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: string;
        /**
         * The system properties associated with the Service Bus Queue. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
         */
        systemPropertyColumns?: any;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.ServiceBus/Queue'.
         */
        type: "Microsoft.ServiceBus/Queue";
    }

    /**
     * Describes a Service Bus Topic output data source.
     */
    export interface ServiceBusTopicOutputDataSourceResponse {
        /**
         * Authentication Mode.
         */
        authenticationMode?: string;
        /**
         * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
         */
        propertyColumns?: string[];
        /**
         * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        serviceBusNamespace?: string;
        /**
         * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyKey?: string;
        /**
         * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
         */
        sharedAccessPolicyName?: string;
        /**
         * The system properties associated with the Service Bus Topic Output. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
         */
        systemPropertyColumns?: {[key: string]: string};
        /**
         * The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.
         */
        topicName?: string;
        /**
         * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Microsoft.ServiceBus/Topic'.
         */
        type: "Microsoft.ServiceBus/Topic";
    }

    /**
     * The properties that are associated with a SKU.
     */
    export interface SkuResponse {
        /**
         * The name of the SKU. Required on PUT (CreateOrReplace) requests.
         */
        name?: string;
    }

    /**
     * The properties that are associated with an Azure Storage account
     */
    export interface StorageAccountResponse {
        /**
         * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountKey?: string;
        /**
         * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
         */
        accountName?: string;
    }

    /**
     * The properties that are associated with an input containing stream data.
     */
    export interface StreamInputPropertiesResponse {
        /**
         * Describes how input data is compressed
         */
        compression?: CompressionResponse;
        /**
         * Describes an input data source that contains stream data. Required on PUT (CreateOrReplace) requests.
         */
        datasource?: BlobStreamInputDataSourceResponse | EventHubStreamInputDataSourceResponse | EventHubV2StreamInputDataSourceResponse | GatewayMessageBusStreamInputDataSourceResponse | IoTHubStreamInputDataSourceResponse;
        /**
         * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
         */
        diagnostics: DiagnosticsResponse;
        /**
         * The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
         */
        etag: string;
        /**
         * partitionKey Describes a key in the input data which is used for partitioning the input data
         */
        partitionKey?: string;
        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
         */
        serialization?: AvroSerializationResponse | CsvSerializationResponse | JsonSerializationResponse | ParquetSerializationResponse;
        /**
         * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
         * Expected value is 'Stream'.
         */
        type: "Stream";
    }

    /**
     * A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.
     */
    export interface TransformationResponse {
        /**
         * The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
         */
        etag: string;
        /**
         * Resource Id
         */
        id: string;
        /**
         * Resource name
         */
        name?: string;
        /**
         * Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests.
         */
        query?: string;
        /**
         * Specifies the number of streaming units that the streaming job uses.
         */
        streamingUnits?: number;
        /**
         * Resource type
         */
        type: string;
        /**
         * Specifies the valid streaming units a streaming job can scale to.
         */
        validStreamingUnits?: number[];
    }
    /**
     * transformationResponseProvideDefaults sets the appropriate defaults for TransformationResponse
     */
    export function transformationResponseProvideDefaults(val: TransformationResponse): TransformationResponse {
        return {
            ...val,
            streamingUnits: (val.streamingUnits) ?? 3,
        };
    }

    export namespace v20160301 {
        /**
         * The binding to an Azure Machine Learning web service.
         */
        export interface AzureMachineLearningWebServiceFunctionBindingResponse {
            /**
             * The API key used to authenticate with Request-Response endpoint.
             */
            apiKey?: string;
            /**
             * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
             */
            batchSize?: number;
            /**
             * The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
             */
            endpoint?: string;
            /**
             * The inputs for the Azure Machine Learning web service endpoint.
             */
            inputs?: v20160301.AzureMachineLearningWebServiceInputsResponse;
            /**
             * A list of outputs from the Azure Machine Learning web service endpoint execution.
             */
            outputs?: v20160301.AzureMachineLearningWebServiceOutputColumnResponse[];
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.MachineLearning/WebService'.
             */
            type: "Microsoft.MachineLearning/WebService";
        }

        /**
         * Describes an input column for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningWebServiceInputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
             */
            dataType?: string;
            /**
             * The zero based index of the function parameter this input maps to.
             */
            mapTo?: number;
            /**
             * The name of the input column.
             */
            name?: string;
        }

        /**
         * The inputs for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningWebServiceInputsResponse {
            /**
             * A list of input columns for the Azure Machine Learning web service endpoint.
             */
            columnNames?: v20160301.AzureMachineLearningWebServiceInputColumnResponse[];
            /**
             * The name of the input. This is the name provided while authoring the endpoint.
             */
            name?: string;
        }

        /**
         * Describes an output column for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningWebServiceOutputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
             */
            dataType?: string;
            /**
             * The name of the output column.
             */
            name?: string;
        }

        /**
         * Describes one input parameter of a function.
         */
        export interface FunctionInputResponse {
            /**
             * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
             */
            dataType?: string;
            /**
             * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
             */
            isConfigurationParameter?: boolean;
        }

        /**
         * Describes the output of a function.
         */
        export interface FunctionOutputResponse {
            /**
             * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
             */
            dataType?: string;
        }

        /**
         * The binding to a JavaScript function.
         */
        export interface JavaScriptFunctionBindingResponse {
            /**
             * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
             */
            script?: string;
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
             */
            type: "Microsoft.StreamAnalytics/JavascriptUdf";
        }

        /**
         * The properties that are associated with a scalar function.
         */
        export interface ScalarFunctionPropertiesResponse {
            /**
             * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
             */
            binding?: v20160301.AzureMachineLearningWebServiceFunctionBindingResponse | v20160301.JavaScriptFunctionBindingResponse;
            /**
             * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * A list of inputs describing the parameters of the function.
             */
            inputs?: v20160301.FunctionInputResponse[];
            /**
             * The output of the function.
             */
            output?: v20160301.FunctionOutputResponse;
            /**
             * Indicates the type of function.
             * Expected value is 'Scalar'.
             */
            type: "Scalar";
        }

    }

    export namespace v20170401preview {
        /**
         * The properties that are associated with an aggregate function.
         */
        export interface AggregateFunctionPropertiesResponse {
            /**
             * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
             */
            binding?: v20170401preview.AzureMachineLearningServiceFunctionBindingResponse | v20170401preview.AzureMachineLearningStudioFunctionBindingResponse | v20170401preview.CSharpFunctionBindingResponse | v20170401preview.JavaScriptFunctionBindingResponse;
            /**
             * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            inputs?: v20170401preview.FunctionInputResponse[];
            /**
             * Describes the output of a function.
             */
            output?: v20170401preview.FunctionOutputResponse;
            /**
             * Indicates the type of function.
             * Expected value is 'Aggregate'.
             */
            type: "Aggregate";
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in Avro format.
         */
        export interface AvroSerializationResponse {
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Avro'.
             */
            type: "Avro";
        }

        /**
         * Describes an Azure Data Lake Store output data source.
         */
        export interface AzureDataLakeStoreOutputDataSourceResponse {
            /**
             * The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
             */
            filePathPrefix?: string;
            /**
             * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
             */
            refreshToken?: string;
            /**
             * The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
             */
            tenantId?: string;
            /**
             * The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserDisplayName?: string;
            /**
             * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserPrincipalName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.DataLake/Accounts'.
             */
            type: "Microsoft.DataLake/Accounts";
        }

        /**
         * Defines the metadata of AzureFunctionOutputDataSource
         */
        export interface AzureFunctionOutputDataSourceResponse {
            /**
             * If you want to use an Azure Function from another subscription, you can do so by providing the key to access your function.
             */
            apiKey?: string;
            /**
             * The name of your Azure Functions app.
             */
            functionAppName?: string;
            /**
             * The name of the function in your Azure Functions app.
             */
            functionName?: string;
            /**
             * A property that lets you specify the maximum number of events in each batch that's sent to Azure Functions. The default value is 100.
             */
            maxBatchCount?: number;
            /**
             * A property that lets you set the maximum size for each output batch that's sent to your Azure function. The input unit is in bytes. By default, this value is 262,144 bytes (256 KB).
             */
            maxBatchSize?: number;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.AzureFunction'.
             */
            type: "Microsoft.AzureFunction";
        }

        /**
         * The binding to an Azure Machine Learning web service.
         */
        export interface AzureMachineLearningServiceFunctionBindingResponse {
            /**
             * The API key used to authenticate with Request-Response endpoint.
             */
            apiKey?: string;
            /**
             * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
             */
            batchSize?: number;
            /**
             * The Request-Response execute endpoint of the Azure Machine Learning web service.
             */
            endpoint?: string;
            /**
             * The inputs for the Azure Machine Learning web service endpoint.
             */
            inputs?: v20170401preview.AzureMachineLearningServiceInputColumnResponse[];
            /**
             * The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1.
             */
            numberOfParallelRequests?: number;
            /**
             * A list of outputs from the Azure Machine Learning web service endpoint execution.
             */
            outputs?: v20170401preview.AzureMachineLearningServiceOutputColumnResponse[];
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.MachineLearningServices'.
             */
            type: "Microsoft.MachineLearningServices";
        }

        /**
         * Describes an input column for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningServiceInputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the input column.
             */
            dataType?: string;
            /**
             * The zero based index of the function parameter this input maps to.
             */
            mapTo?: number;
            /**
             * The name of the input column.
             */
            name?: string;
        }

        /**
         * Describes an output column for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningServiceOutputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the output column.
             */
            dataType?: string;
            /**
             * The zero based index of the function parameter this input maps to.
             */
            mapTo?: number;
            /**
             * The name of the output column.
             */
            name?: string;
        }

        /**
         * The binding to an Azure Machine Learning Studio.
         */
        export interface AzureMachineLearningStudioFunctionBindingResponse {
            /**
             * The API key used to authenticate with Request-Response endpoint.
             */
            apiKey?: string;
            /**
             * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
             */
            batchSize?: number;
            /**
             * The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
             */
            endpoint?: string;
            /**
             * The inputs for the Azure Machine Learning Studio endpoint.
             */
            inputs?: v20170401preview.AzureMachineLearningStudioInputsResponse;
            /**
             * A list of outputs from the Azure Machine Learning Studio endpoint execution.
             */
            outputs?: v20170401preview.AzureMachineLearningStudioOutputColumnResponse[];
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.MachineLearning/WebService'.
             */
            type: "Microsoft.MachineLearning/WebService";
        }

        /**
         * Describes an input column for the Azure Machine Learning Studio endpoint.
         */
        export interface AzureMachineLearningStudioInputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
             */
            dataType?: string;
            /**
             * The zero based index of the function parameter this input maps to.
             */
            mapTo?: number;
            /**
             * The name of the input column.
             */
            name?: string;
        }

        /**
         * The inputs for the Azure Machine Learning Studio endpoint.
         */
        export interface AzureMachineLearningStudioInputsResponse {
            /**
             * A list of input columns for the Azure Machine Learning Studio endpoint.
             */
            columnNames?: v20170401preview.AzureMachineLearningStudioInputColumnResponse[];
            /**
             * The name of the input. This is the name provided while authoring the endpoint.
             */
            name?: string;
        }

        /**
         * Describes an output column for the Azure Machine Learning Studio endpoint.
         */
        export interface AzureMachineLearningStudioOutputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
             */
            dataType?: string;
            /**
             * The name of the output column.
             */
            name?: string;
        }

        /**
         * Describes an Azure SQL database output data source.
         */
        export interface AzureSqlDatabaseOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * Max Batch count for write to Sql database, the default value is 10,000. Optional on PUT requests.
             */
            maxBatchCount?: number;
            /**
             * Max Write r count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
             */
            maxWriterCount?: number;
            /**
             * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            password?: string;
            /**
             * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            server?: string;
            /**
             * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/Database'.
             */
            type: "Microsoft.Sql/Server/Database";
            /**
             * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            user?: string;
        }

        /**
         * Describes Azure SQL database reference input data source properties.
         */
        export interface AzureSqlReferenceInputDataSourcePropertiesResponse {
            /**
             * This element is associated with the datasource element. This is the name of the database that output will be written to.
             */
            database?: string;
            /**
             * This element is associated with the datasource element. This query is used to fetch incremental changes from the SQL database. To use this option, we recommend using temporal tables in Azure SQL Database.
             */
            deltaSnapshotQuery?: string;
            /**
             * This element is associated with the datasource element. This query is used to fetch data from the sql database.
             */
            fullSnapshotQuery?: string;
            /**
             * This element is associated with the datasource element. This is the password that will be used to connect to the SQL Database instance.
             */
            password?: string;
            /**
             * This element is associated with the datasource element. This indicates how frequently the data will be fetched from the database. It is of DateTime format.
             */
            refreshRate?: string;
            /**
             * This element is associated with the datasource element. This element is of enum type. It indicates what kind of data refresh option do we want to use:Static/RefreshPeriodicallyWithFull/RefreshPeriodicallyWithDelta
             */
            refreshType?: string;
            /**
             * This element is associated with the datasource element. This is the name of the server that contains the database that will be written to.
             */
            server?: string;
            /**
             * This element is associated with the datasource element. The name of the table in the Azure SQL database..
             */
            table?: string;
            /**
             * This element is associated with the datasource element. This is the user name that will be used to connect to the SQL Database instance.
             */
            user?: string;
        }

        /**
         * Describes an Azure SQL database reference input data source.
         */
        export interface AzureSqlReferenceInputDataSourceResponse {
            /**
             * Describes Azure SQL database reference input data source properties.
             */
            properties?: v20170401preview.AzureSqlReferenceInputDataSourcePropertiesResponse;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/Database'.
             */
            type: "Microsoft.Sql/Server/Database";
        }

        /**
         * Describes an Azure Synapse output data source.
         */
        export interface AzureSynapseOutputDataSourceResponse {
            /**
             * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            password?: string;
            /**
             * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            server?: string;
            /**
             * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/DataWarehouse'.
             */
            type: "Microsoft.Sql/Server/DataWarehouse";
            /**
             * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            user?: string;
        }

        /**
         * Describes an Azure Table output data source.
         */
        export interface AzureTableOutputDataSourceResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * The number of rows to write to the Azure Table at a time.
             */
            batchSize?: number;
            /**
             * If specified, each item in the array is the name of a column to remove (if present) from output event entities.
             */
            columnsToRemove?: string[];
            /**
             * This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            partitionKey?: string;
            /**
             * This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            rowKey?: string;
            /**
             * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Table'.
             */
            type: "Microsoft.Storage/Table";
        }

        /**
         * Describes a blob output data source.
         */
        export interface BlobOutputDataSourceResponse {
            /**
             * Authentication Mode. 
             */
            authenticationMode?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20170401preview.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * Describes a blob input data source that contains reference data.
         */
        export interface BlobReferenceInputDataSourceResponse {
            /**
             * Authentication Mode. 
             */
            authenticationMode?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20170401preview.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * Describes a blob input data source that contains stream data.
         */
        export interface BlobStreamInputDataSourceResponse {
            /**
             * Authentication Mode. 
             */
            authenticationMode?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * The partition count of the blob input data source. Range 1 - 1024.
             */
            sourcePartitionCount?: number;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20170401preview.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * The binding to a CSharp function.
         */
        export interface CSharpFunctionBindingResponse {
            /**
             * The Csharp code containing a single function definition.
             */
            class?: string;
            /**
             * The Csharp code containing a single function definition.
             */
            dllPath?: string;
            /**
             * The Csharp code containing a single function definition.
             */
            method?: string;
            /**
             * The Csharp code containing a single function definition.
             */
            script?: string;
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.StreamAnalytics/CLRUdf'.
             */
            type: "Microsoft.StreamAnalytics/CLRUdf";
        }

        /**
         * The properties associated with a Stream Analytics cluster.
         */
        export interface ClusterInfoResponse {
            /**
             * The resource id of cluster.
             */
            id?: string;
        }

        /**
         * Describes how input data is compressed
         */
        export interface CompressionResponse {
            type: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in CSV format.
         */
        export interface CsvSerializationResponse {
            /**
             * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
             */
            encoding?: string;
            /**
             * Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests.
             */
            fieldDelimiter?: string;
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Csv'.
             */
            type: "Csv";
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in custom format.
         */
        export interface CustomClrSerializationResponse {
            /**
             * The serialization class name.
             */
            serializationClassName?: string;
            /**
             * The serialization library path.
             */
            serializationDllPath?: string;
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'CustomClr'.
             */
            type: "CustomClr";
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in Delta Lake format.
         */
        export interface DeltaSerializationResponse {
            /**
             * Specifies the path of the Delta Lake table that the output will be written to.
             */
            deltaTablePath: string;
            /**
             * Specifies the names of the columns for which the Delta Lake table will be partitioned. We are only supporting 1 partition column, but keeping it as an array for extensibility.
             */
            partitionColumns?: string[];
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Delta'.
             */
            type: "Delta";
        }

        /**
         * Condition applicable to the resource, or to the job overall, that warrant customer attention.
         */
        export interface DiagnosticConditionResponse {
            /**
             * The opaque diagnostic code.
             */
            code: string;
            /**
             * The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request.
             */
            message: string;
            /**
             * The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time.
             */
            since: string;
        }

        /**
         * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
         */
        export interface DiagnosticsResponse {
            /**
             * A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.
             */
            conditions: v20170401preview.DiagnosticConditionResponse[];
        }

        /**
         * Describes a DocumentDB output data source.
         */
        export interface DocumentDbOutputDataSourceResponse {
            /**
             * The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
             */
            accountId?: string;
            /**
             * The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests.
             */
            collectionNamePattern?: string;
            /**
             * The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * The name of the field in output events used to specify the primary key which insert or update operations are based on.
             */
            documentId?: string;
            /**
             * The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.
             */
            partitionKey?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/DocumentDB'.
             */
            type: "Microsoft.Storage/DocumentDB";
        }

        /**
         * Describes an Event Hub output data source.
         */
        export interface EventHubOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The key/column that is used to determine to which partition to send event data.
             */
            partitionKey?: string;
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/EventHub'.
             */
            type: "Microsoft.ServiceBus/EventHub";
        }

        /**
         * Describes an Event Hub input data source that contains stream data.
         */
        export interface EventHubStreamInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/EventHub'.
             */
            type: "Microsoft.ServiceBus/EventHub";
        }

        /**
         * Describes an Event Hub output data source.
         */
        export interface EventHubV2OutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The key/column that is used to determine to which partition to send event data.
             */
            partitionKey?: string;
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.EventHub/EventHub'.
             */
            type: "Microsoft.EventHub/EventHub";
        }

        /**
         * Describes an Event Hub input data source that contains stream data.
         */
        export interface EventHubV2StreamInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.EventHub/EventHub'.
             */
            type: "Microsoft.EventHub/EventHub";
        }

        /**
         * The storage account where the custom code artifacts are located.
         */
        export interface ExternalResponse {
            container?: string;
            path?: string;
            /**
             * The properties that are associated with an Azure Storage account
             */
            storageAccount?: v20170401preview.StorageAccountResponse;
        }

        /**
         * Describes one input parameter of a function.
         */
        export interface FunctionInputResponse {
            /**
             * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
             */
            dataType?: string;
            /**
             * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
             */
            isConfigurationParameter?: boolean;
        }

        /**
         * Describes the output of a function.
         */
        export interface FunctionOutputResponse {
            /**
             * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
             */
            dataType?: string;
        }

        /**
         * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
         */
        export interface FunctionResponse {
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * The properties that are associated with a function.
             */
            properties?: v20170401preview.AggregateFunctionPropertiesResponse | v20170401preview.ScalarFunctionPropertiesResponse;
            /**
             * Resource type
             */
            type: string;
        }

        /**
         * Describes how identity is verified
         */
        export interface IdentityResponse {
            principalId?: string;
            tenantId?: string;
            type?: string;
        }

        /**
         * An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
         */
        export interface InputResponse {
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
             */
            properties?: v20170401preview.ReferenceInputPropertiesResponse | v20170401preview.StreamInputPropertiesResponse;
            /**
             * Resource type
             */
            type: string;
        }

        /**
         * Describes an IoT Hub input data source that contains stream data.
         */
        export interface IoTHubStreamInputDataSourceResponse {
            /**
             * The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.).
             */
            endpoint?: string;
            /**
             * The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests.
             */
            iotHubNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Devices/IotHubs'.
             */
            type: "Microsoft.Devices/IotHubs";
        }

        /**
         * The binding to a JavaScript function.
         */
        export interface JavaScriptFunctionBindingResponse {
            /**
             * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
             */
            script?: string;
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
             */
            type: "Microsoft.StreamAnalytics/JavascriptUdf";
        }

        /**
         * The properties that are associated with an Azure Storage account with MSI
         */
        export interface JobStorageAccountResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in JSON format.
         */
        export interface JsonSerializationResponse {
            /**
             * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
             */
            encoding?: string;
            /**
             * This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
             */
            format?: string;
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Json'.
             */
            type: "Json";
        }

        /**
         * An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
         */
        export interface OutputResponse {
            /**
             * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20170401preview.AzureDataLakeStoreOutputDataSourceResponse | v20170401preview.AzureFunctionOutputDataSourceResponse | v20170401preview.AzureSqlDatabaseOutputDataSourceResponse | v20170401preview.AzureSynapseOutputDataSourceResponse | v20170401preview.AzureTableOutputDataSourceResponse | v20170401preview.BlobOutputDataSourceResponse | v20170401preview.DocumentDbOutputDataSourceResponse | v20170401preview.EventHubOutputDataSourceResponse | v20170401preview.EventHubV2OutputDataSourceResponse | v20170401preview.PowerBIOutputDataSourceResponse | v20170401preview.RawOutputDatasourceResponse | v20170401preview.ServiceBusQueueOutputDataSourceResponse | v20170401preview.ServiceBusTopicOutputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20170401preview.DiagnosticsResponse;
            /**
             * The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20170401preview.AvroSerializationResponse | v20170401preview.CsvSerializationResponse | v20170401preview.CustomClrSerializationResponse | v20170401preview.DeltaSerializationResponse | v20170401preview.JsonSerializationResponse | v20170401preview.ParquetSerializationResponse;
            /**
             * The size window to constrain a Stream Analytics output to.
             */
            sizeWindow?: number;
            timeWindow?: string;
            /**
             * Resource type
             */
            type: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in Parquet format.
         */
        export interface ParquetSerializationResponse {
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Parquet'.
             */
            type: "Parquet";
        }

        /**
         * Describes a Power BI output data source.
         */
        export interface PowerBIOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests.
             */
            dataset?: string;
            /**
             * The ID of the Power BI group.
             */
            groupId?: string;
            /**
             * The name of the Power BI group. Use this property to help remember which specific Power BI group id was used.
             */
            groupName?: string;
            /**
             * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
             */
            refreshToken?: string;
            /**
             * The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserDisplayName?: string;
            /**
             * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserPrincipalName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'PowerBI'.
             */
            type: "PowerBI";
        }

        /**
         * Describes a raw output data source. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an output of this data source type to an existing job.
         */
        export interface RawOutputDatasourceResponse {
            /**
             * The SAS URL to a blob where the output should be written. If this property is not set, output data will be written into a temporary storage, and a SAS URL to that temporary storage will be included in the result.
             */
            payloadUri?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Raw'.
             */
            type: "Raw";
        }

        /**
         * Describes a raw input data source that contains reference data. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an input of this data source type to an existing job.
         */
        export interface RawReferenceInputDataSourceResponse {
            /**
             * The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both. 
             */
            payload?: string;
            /**
             * The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
             */
            payloadUri?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Raw'.
             */
            type: "Raw";
        }

        /**
         * Describes a raw input data source that contains stream data. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an input of this data source type to an existing job.
         */
        export interface RawStreamInputDataSourceResponse {
            /**
             * The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both. 
             */
            payload?: string;
            /**
             * The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
             */
            payloadUri?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Raw'.
             */
            type: "Raw";
        }

        /**
         * The properties that are associated with an input containing reference data.
         */
        export interface ReferenceInputPropertiesResponse {
            /**
             * Describes how input data is compressed
             */
            compression?: v20170401preview.CompressionResponse;
            /**
             * Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20170401preview.AzureSqlReferenceInputDataSourceResponse | v20170401preview.BlobReferenceInputDataSourceResponse | v20170401preview.RawReferenceInputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20170401preview.DiagnosticsResponse;
            /**
             * The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * partitionKey Describes a key in the input data which is used for partitioning the input data
             */
            partitionKey?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20170401preview.AvroSerializationResponse | v20170401preview.CsvSerializationResponse | v20170401preview.CustomClrSerializationResponse | v20170401preview.DeltaSerializationResponse | v20170401preview.JsonSerializationResponse | v20170401preview.ParquetSerializationResponse;
            /**
             * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Reference'.
             */
            type: "Reference";
        }

        /**
         * The properties that are associated with a scalar function.
         */
        export interface ScalarFunctionPropertiesResponse {
            /**
             * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
             */
            binding?: v20170401preview.AzureMachineLearningServiceFunctionBindingResponse | v20170401preview.AzureMachineLearningStudioFunctionBindingResponse | v20170401preview.CSharpFunctionBindingResponse | v20170401preview.JavaScriptFunctionBindingResponse;
            /**
             * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            inputs?: v20170401preview.FunctionInputResponse[];
            /**
             * Describes the output of a function.
             */
            output?: v20170401preview.FunctionOutputResponse;
            /**
             * Indicates the type of function.
             * Expected value is 'Scalar'.
             */
            type: "Scalar";
        }

        /**
         * Describes a Service Bus Queue output data source.
         */
        export interface ServiceBusQueueOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
             */
            propertyColumns?: string[];
            /**
             * The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests.
             */
            queueName?: string;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            systemPropertyColumns?: {[key: string]: string};
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/Queue'.
             */
            type: "Microsoft.ServiceBus/Queue";
        }

        /**
         * Describes a Service Bus Topic output data source.
         */
        export interface ServiceBusTopicOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
             */
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            systemPropertyColumns?: {[key: string]: string};
            /**
             * The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.
             */
            topicName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/Topic'.
             */
            type: "Microsoft.ServiceBus/Topic";
        }

        /**
         * The properties that are associated with an Azure Storage account
         */
        export interface StorageAccountResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
        }

        /**
         * The properties that are associated with an input containing stream data.
         */
        export interface StreamInputPropertiesResponse {
            /**
             * Describes how input data is compressed
             */
            compression?: v20170401preview.CompressionResponse;
            /**
             * Describes an input data source that contains stream data. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20170401preview.BlobStreamInputDataSourceResponse | v20170401preview.EventHubStreamInputDataSourceResponse | v20170401preview.EventHubV2StreamInputDataSourceResponse | v20170401preview.IoTHubStreamInputDataSourceResponse | v20170401preview.RawStreamInputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20170401preview.DiagnosticsResponse;
            /**
             * The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * partitionKey Describes a key in the input data which is used for partitioning the input data
             */
            partitionKey?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20170401preview.AvroSerializationResponse | v20170401preview.CsvSerializationResponse | v20170401preview.CustomClrSerializationResponse | v20170401preview.DeltaSerializationResponse | v20170401preview.JsonSerializationResponse | v20170401preview.ParquetSerializationResponse;
            /**
             * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Stream'.
             */
            type: "Stream";
        }

        /**
         * The properties that are associated with a SKU.
         */
        export interface StreamingJobSkuResponse {
            /**
             * The name of the SKU. Required on PUT (CreateOrReplace) requests.
             */
            name?: string;
        }

        /**
         * A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.
         */
        export interface TransformationResponse {
            /**
             * The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests.
             */
            query?: string;
            /**
             * Specifies the number of streaming units that the streaming job uses.
             */
            streamingUnits?: number;
            /**
             * Resource type
             */
            type: string;
        }

    }

    export namespace v20200301 {
        /**
         * The properties that are associated with an aggregate function.
         */
        export interface AggregateFunctionPropertiesResponse {
            /**
             * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
             */
            binding?: v20200301.AzureMachineLearningWebServiceFunctionBindingResponse | v20200301.JavaScriptFunctionBindingResponse;
            /**
             * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            inputs?: v20200301.FunctionInputResponse[];
            /**
             * Describes the output of a function.
             */
            output?: v20200301.FunctionOutputResponse;
            /**
             * Indicates the type of function.
             * Expected value is 'Aggregate'.
             */
            type: "Aggregate";
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in Avro format.
         */
        export interface AvroSerializationResponse {
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Avro'.
             */
            type: "Avro";
        }

        /**
         * Describes an Azure Data Lake Store output data source.
         */
        export interface AzureDataLakeStoreOutputDataSourceResponse {
            /**
             * The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
             */
            filePathPrefix?: string;
            /**
             * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
             */
            refreshToken?: string;
            /**
             * The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
             */
            tenantId?: string;
            /**
             * The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserDisplayName?: string;
            /**
             * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserPrincipalName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.DataLake/Accounts'.
             */
            type: "Microsoft.DataLake/Accounts";
        }

        /**
         * Defines the metadata of AzureFunctionOutputDataSource
         */
        export interface AzureFunctionOutputDataSourceResponse {
            /**
             * If you want to use an Azure Function from another subscription, you can do so by providing the key to access your function.
             */
            apiKey?: string;
            /**
             * The name of your Azure Functions app.
             */
            functionAppName?: string;
            /**
             * The name of the function in your Azure Functions app.
             */
            functionName?: string;
            /**
             * A property that lets you specify the maximum number of events in each batch that's sent to Azure Functions. The default value is 100.
             */
            maxBatchCount?: number;
            /**
             * A property that lets you set the maximum size for each output batch that's sent to your Azure function. The input unit is in bytes. By default, this value is 262,144 bytes (256 KB).
             */
            maxBatchSize?: number;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.AzureFunction'.
             */
            type: "Microsoft.AzureFunction";
        }

        /**
         * The binding to an Azure Machine Learning web service.
         */
        export interface AzureMachineLearningWebServiceFunctionBindingResponse {
            /**
             * The API key used to authenticate with Request-Response endpoint.
             */
            apiKey?: string;
            /**
             * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
             */
            batchSize?: number;
            /**
             * The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
             */
            endpoint?: string;
            /**
             * The inputs for the Azure Machine Learning web service endpoint.
             */
            inputs?: v20200301.AzureMachineLearningWebServiceInputsResponse;
            /**
             * A list of outputs from the Azure Machine Learning web service endpoint execution.
             */
            outputs?: v20200301.AzureMachineLearningWebServiceOutputColumnResponse[];
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.MachineLearning/WebService'.
             */
            type: "Microsoft.MachineLearning/WebService";
        }

        /**
         * Describes an input column for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningWebServiceInputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
             */
            dataType?: string;
            /**
             * The zero based index of the function parameter this input maps to.
             */
            mapTo?: number;
            /**
             * The name of the input column.
             */
            name?: string;
        }

        /**
         * The inputs for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningWebServiceInputsResponse {
            /**
             * A list of input columns for the Azure Machine Learning web service endpoint.
             */
            columnNames?: v20200301.AzureMachineLearningWebServiceInputColumnResponse[];
            /**
             * The name of the input. This is the name provided while authoring the endpoint.
             */
            name?: string;
        }

        /**
         * Describes an output column for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningWebServiceOutputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
             */
            dataType?: string;
            /**
             * The name of the output column.
             */
            name?: string;
        }

        /**
         * Describes an Azure SQL database output data source.
         */
        export interface AzureSqlDatabaseOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * Max Batch count for write to Sql database, the default value is 10,000. Optional on PUT requests.
             */
            maxBatchCount?: number;
            /**
             * Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
             */
            maxWriterCount?: number;
            /**
             * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            password?: string;
            /**
             * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            server?: string;
            /**
             * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/Database'.
             */
            type: "Microsoft.Sql/Server/Database";
            /**
             * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            user?: string;
        }

        /**
         * Describes an Azure SQL database reference input data source.
         */
        export interface AzureSqlReferenceInputDataSourceResponse {
            /**
             * This element is associated with the datasource element. This is the name of the database that output will be written to.
             */
            database?: string;
            /**
             * This element is associated with the datasource element. This query is used to fetch incremental changes from the SQL database. To use this option, we recommend using temporal tables in Azure SQL Database.
             */
            deltaSnapshotQuery?: string;
            /**
             * This element is associated with the datasource element. This query is used to fetch data from the sql database.
             */
            fullSnapshotQuery?: string;
            /**
             * This element is associated with the datasource element. This is the password that will be used to connect to the SQL Database instance.
             */
            password?: string;
            /**
             * This element is associated with the datasource element. This indicates how frequently the data will be fetched from the database. It is of DateTime format.
             */
            refreshRate?: string;
            /**
             * Indicates the type of data refresh option.
             */
            refreshType?: string;
            /**
             * This element is associated with the datasource element. This is the name of the server that contains the database that will be written to.
             */
            server?: string;
            /**
             * This element is associated with the datasource element. The name of the table in the Azure SQL database..
             */
            table?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/Database'.
             */
            type: "Microsoft.Sql/Server/Database";
            /**
             * This element is associated with the datasource element. This is the user name that will be used to connect to the SQL Database instance.
             */
            user?: string;
        }

        /**
         * Describes an Azure Synapse output data source.
         */
        export interface AzureSynapseOutputDataSourceResponse {
            /**
             * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            password?: string;
            /**
             * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            server?: string;
            /**
             * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/DataWarehouse'.
             */
            type: "Microsoft.Sql/Server/DataWarehouse";
            /**
             * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            user?: string;
        }

        /**
         * Describes an Azure Table output data source.
         */
        export interface AzureTableOutputDataSourceResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * The number of rows to write to the Azure Table at a time.
             */
            batchSize?: number;
            /**
             * If specified, each item in the array is the name of a column to remove (if present) from output event entities.
             */
            columnsToRemove?: string[];
            /**
             * This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            partitionKey?: string;
            /**
             * This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            rowKey?: string;
            /**
             * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Table'.
             */
            type: "Microsoft.Storage/Table";
        }

        /**
         * Describes a blob output data source.
         */
        export interface BlobOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * Blob path prefix.
             */
            blobPathPrefix?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20200301.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * Describes a blob input data source that contains reference data.
         */
        export interface BlobReferenceInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20200301.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * Describes a blob input data source that contains stream data.
         */
        export interface BlobStreamInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * The partition count of the blob input data source. Range 1 - 1024.
             */
            sourcePartitionCount?: number;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20200301.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * The properties associated with a Stream Analytics cluster.
         */
        export interface ClusterInfoResponse {
            /**
             * The resource id of cluster.
             */
            id?: string;
        }

        /**
         * A streaming job.
         */
        export interface ClusterJobResponse {
            /**
             * Resource ID of the streaming job.
             */
            id: string;
            /**
             * The current execution state of the streaming job.
             */
            jobState: string;
            /**
             * The number of streaming units that are used by the streaming job.
             */
            streamingUnits: number;
        }

        /**
         * The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests.
         */
        export interface ClusterSkuResponse {
            /**
             * Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests.
             */
            capacity?: number;
            /**
             * Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests.
             */
            name?: string;
        }

        /**
         * Describes how input data is compressed
         */
        export interface CompressionResponse {
            /**
             * Indicates the type of compression that the input uses. Required on PUT (CreateOrReplace) requests.
             */
            type: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in CSV format.
         */
        export interface CsvSerializationResponse {
            /**
             * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
             */
            encoding?: string;
            /**
             * Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests.
             */
            fieldDelimiter?: string;
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Csv'.
             */
            type: "Csv";
        }

        /**
         * Condition applicable to the resource, or to the job overall, that warrant customer attention.
         */
        export interface DiagnosticConditionResponse {
            /**
             * The opaque diagnostic code.
             */
            code: string;
            /**
             * The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request.
             */
            message: string;
            /**
             * The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time.
             */
            since: string;
        }

        /**
         * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
         */
        export interface DiagnosticsResponse {
            /**
             * A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.
             */
            conditions: v20200301.DiagnosticConditionResponse[];
        }

        /**
         * Describes a DocumentDB output data source.
         */
        export interface DocumentDbOutputDataSourceResponse {
            /**
             * The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
             */
            accountId?: string;
            /**
             * The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests.
             */
            collectionNamePattern?: string;
            /**
             * The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * The name of the field in output events used to specify the primary key which insert or update operations are based on.
             */
            documentId?: string;
            /**
             * The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.
             */
            partitionKey?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/DocumentDB'.
             */
            type: "Microsoft.Storage/DocumentDB";
        }

        /**
         * Describes an Event Hub output data source.
         */
        export interface EventHubOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The key/column that is used to determine to which partition to send event data.
             */
            partitionKey?: string;
            /**
             * The properties associated with this Event Hub output.
             */
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/EventHub'.
             */
            type: "Microsoft.ServiceBus/EventHub";
        }

        /**
         * Describes an Event Hub input data source that contains stream data.
         */
        export interface EventHubStreamInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/EventHub'.
             */
            type: "Microsoft.ServiceBus/EventHub";
        }

        /**
         * Describes an Event Hub output data source.
         */
        export interface EventHubV2OutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The key/column that is used to determine to which partition to send event data.
             */
            partitionKey?: string;
            /**
             * The properties associated with this Event Hub output.
             */
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.EventHub/EventHub'.
             */
            type: "Microsoft.EventHub/EventHub";
        }

        /**
         * Describes an Event Hub input data source that contains stream data.
         */
        export interface EventHubV2StreamInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.EventHub/EventHub'.
             */
            type: "Microsoft.EventHub/EventHub";
        }

        /**
         * Describes a file input data source that contains reference data.
         */
        export interface FileReferenceInputDataSourceResponse {
            /**
             * The path of the file.
             */
            path?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'File'.
             */
            type: "File";
        }

        /**
         * Describes one input parameter of a function.
         */
        export interface FunctionInputResponse {
            /**
             * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
             */
            dataType?: string;
            /**
             * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
             */
            isConfigurationParameter?: boolean;
        }

        /**
         * Describes the output of a function.
         */
        export interface FunctionOutputResponse {
            /**
             * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
             */
            dataType?: string;
        }

        /**
         * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
         */
        export interface FunctionResponse {
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * The properties that are associated with a function.
             */
            properties?: v20200301.AggregateFunctionPropertiesResponse | v20200301.ScalarFunctionPropertiesResponse;
            /**
             * Resource type
             */
            type: string;
        }

        /**
         * Describes a Gateway Message Bus output data source.
         */
        export interface GatewayMessageBusOutputDataSourceResponse {
            /**
             * The name of the Service Bus topic.
             */
            topic?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'GatewayMessageBus'.
             */
            type: "GatewayMessageBus";
        }

        /**
         * Describes a blob input data source that contains stream data.
         */
        export interface GatewayMessageBusStreamInputDataSourceResponse {
            /**
             * The name of the Service Bus topic.
             */
            topic?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'GatewayMessageBus'.
             */
            type: "GatewayMessageBus";
        }

        /**
         * Describes how identity is verified
         */
        export interface IdentityResponse {
            /**
             * The identity principal ID
             */
            principalId: string;
            /**
             * The identity tenantId
             */
            tenantId: string;
            /**
             * The identity type
             */
            type?: string;
        }

        /**
         * An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
         */
        export interface InputResponse {
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
             */
            properties?: v20200301.ReferenceInputPropertiesResponse | v20200301.StreamInputPropertiesResponse;
            /**
             * Resource type
             */
            type: string;
        }

        /**
         * Describes an IoT Hub input data source that contains stream data.
         */
        export interface IoTHubStreamInputDataSourceResponse {
            /**
             * The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.).
             */
            endpoint?: string;
            /**
             * The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests.
             */
            iotHubNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Devices/IotHubs'.
             */
            type: "Microsoft.Devices/IotHubs";
        }

        /**
         * The binding to a JavaScript function.
         */
        export interface JavaScriptFunctionBindingResponse {
            /**
             * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
             */
            script?: string;
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
             */
            type: "Microsoft.StreamAnalytics/JavascriptUdf";
        }

        /**
         * The properties that are associated with an Azure Storage account with MSI
         */
        export interface JobStorageAccountResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in JSON format.
         */
        export interface JsonSerializationResponse {
            /**
             * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
             */
            encoding?: string;
            /**
             * This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
             */
            format?: string;
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Json'.
             */
            type: "Json";
        }

        /**
         * An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
         */
        export interface OutputResponse {
            /**
             * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20200301.AzureDataLakeStoreOutputDataSourceResponse | v20200301.AzureFunctionOutputDataSourceResponse | v20200301.AzureSqlDatabaseOutputDataSourceResponse | v20200301.AzureSynapseOutputDataSourceResponse | v20200301.AzureTableOutputDataSourceResponse | v20200301.BlobOutputDataSourceResponse | v20200301.DocumentDbOutputDataSourceResponse | v20200301.EventHubOutputDataSourceResponse | v20200301.EventHubV2OutputDataSourceResponse | v20200301.GatewayMessageBusOutputDataSourceResponse | v20200301.PowerBIOutputDataSourceResponse | v20200301.ServiceBusQueueOutputDataSourceResponse | v20200301.ServiceBusTopicOutputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20200301.DiagnosticsResponse;
            /**
             * The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20200301.AvroSerializationResponse | v20200301.CsvSerializationResponse | v20200301.JsonSerializationResponse | v20200301.ParquetSerializationResponse;
            /**
             * The size window to constrain a Stream Analytics output to.
             */
            sizeWindow?: number;
            /**
             * The time frame for filtering Stream Analytics job outputs.
             */
            timeWindow?: string;
            /**
             * Resource type
             */
            type: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in Parquet format.
         */
        export interface ParquetSerializationResponse {
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Parquet'.
             */
            type: "Parquet";
        }

        /**
         * Describes a Power BI output data source.
         */
        export interface PowerBIOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests.
             */
            dataset?: string;
            /**
             * The ID of the Power BI group.
             */
            groupId?: string;
            /**
             * The name of the Power BI group. Use this property to help remember which specific Power BI group id was used.
             */
            groupName?: string;
            /**
             * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
             */
            refreshToken?: string;
            /**
             * The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserDisplayName?: string;
            /**
             * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserPrincipalName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'PowerBI'.
             */
            type: "PowerBI";
        }

        /**
         * A collection of read-only information about the state of the connection to the private remote resource.
         */
        export interface PrivateLinkConnectionStateResponse {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired: string;
            /**
             * The reason for approval/rejection of the connection.
             */
            description: string;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the remote resource/service.
             */
            status: string;
        }

        /**
         * A grouping of information about the connection to the remote resource.
         */
        export interface PrivateLinkServiceConnectionResponse {
            /**
             * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests.
             */
            groupIds?: string[];
            /**
             * A collection of read-only information about the state of the connection to the private remote resource.
             */
            privateLinkServiceConnectionState?: v20200301.PrivateLinkConnectionStateResponse;
            /**
             * The resource id of the private link service. Required on PUT (CreateOrUpdate) requests.
             */
            privateLinkServiceId?: string;
            /**
             * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
             */
            requestMessage: string;
        }

        /**
         * The properties that are associated with an input containing reference data.
         */
        export interface ReferenceInputPropertiesResponse {
            /**
             * Describes how input data is compressed
             */
            compression?: v20200301.CompressionResponse;
            /**
             * Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20200301.AzureSqlReferenceInputDataSourceResponse | v20200301.BlobReferenceInputDataSourceResponse | v20200301.FileReferenceInputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20200301.DiagnosticsResponse;
            /**
             * The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * partitionKey Describes a key in the input data which is used for partitioning the input data
             */
            partitionKey?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20200301.AvroSerializationResponse | v20200301.CsvSerializationResponse | v20200301.JsonSerializationResponse | v20200301.ParquetSerializationResponse;
            /**
             * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Reference'.
             */
            type: "Reference";
        }

        /**
         * The properties that are associated with a scalar function.
         */
        export interface ScalarFunctionPropertiesResponse {
            /**
             * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
             */
            binding?: v20200301.AzureMachineLearningWebServiceFunctionBindingResponse | v20200301.JavaScriptFunctionBindingResponse;
            /**
             * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            inputs?: v20200301.FunctionInputResponse[];
            /**
             * Describes the output of a function.
             */
            output?: v20200301.FunctionOutputResponse;
            /**
             * Indicates the type of function.
             * Expected value is 'Scalar'.
             */
            type: "Scalar";
        }

        /**
         * Describes a Service Bus Queue output data source.
         */
        export interface ServiceBusQueueOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
             */
            propertyColumns?: string[];
            /**
             * The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests.
             */
            queueName?: string;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * The system properties associated with the Service Bus Queue. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
             */
            systemPropertyColumns?: any;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/Queue'.
             */
            type: "Microsoft.ServiceBus/Queue";
        }

        /**
         * Describes a Service Bus Topic output data source.
         */
        export interface ServiceBusTopicOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
             */
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * The system properties associated with the Service Bus Topic Output. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
             */
            systemPropertyColumns?: {[key: string]: string};
            /**
             * The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.
             */
            topicName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/Topic'.
             */
            type: "Microsoft.ServiceBus/Topic";
        }

        /**
         * The properties that are associated with a SKU.
         */
        export interface SkuResponse {
            /**
             * The name of the SKU. Required on PUT (CreateOrReplace) requests.
             */
            name?: string;
        }

        /**
         * The properties that are associated with an Azure Storage account
         */
        export interface StorageAccountResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
        }

        /**
         * The properties that are associated with an input containing stream data.
         */
        export interface StreamInputPropertiesResponse {
            /**
             * Describes how input data is compressed
             */
            compression?: v20200301.CompressionResponse;
            /**
             * Describes an input data source that contains stream data. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20200301.BlobStreamInputDataSourceResponse | v20200301.EventHubStreamInputDataSourceResponse | v20200301.EventHubV2StreamInputDataSourceResponse | v20200301.GatewayMessageBusStreamInputDataSourceResponse | v20200301.IoTHubStreamInputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20200301.DiagnosticsResponse;
            /**
             * The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * partitionKey Describes a key in the input data which is used for partitioning the input data
             */
            partitionKey?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20200301.AvroSerializationResponse | v20200301.CsvSerializationResponse | v20200301.JsonSerializationResponse | v20200301.ParquetSerializationResponse;
            /**
             * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Stream'.
             */
            type: "Stream";
        }

        /**
         * A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.
         */
        export interface TransformationResponse {
            /**
             * The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests.
             */
            query?: string;
            /**
             * Specifies the number of streaming units that the streaming job uses.
             */
            streamingUnits?: number;
            /**
             * Resource type
             */
            type: string;
            /**
             * Specifies the valid streaming units a streaming job can scale to.
             */
            validStreamingUnits?: number[];
        }
        /**
         * transformationResponseProvideDefaults sets the appropriate defaults for TransformationResponse
         */
        export function transformationResponseProvideDefaults(val: TransformationResponse): TransformationResponse {
            return {
                ...val,
                streamingUnits: (val.streamingUnits) ?? 3,
            };
        }

    }

    export namespace v20200301preview {
        /**
         * A streaming job.
         */
        export interface ClusterJobResponse {
            /**
             * Resource ID of the streaming job.
             */
            id: string;
            /**
             * The current execution state of the streaming job.
             */
            jobState: string;
            /**
             * The number of streaming units that are used by the streaming job.
             */
            streamingUnits: number;
        }

        /**
         * The properties associated with a Stream Analytics cluster.
         */
        export interface ClusterPropertiesResponse {
            /**
             * Represents the number of streaming units currently being used on the cluster.
             */
            capacityAllocated: number;
            /**
             * Represents the sum of the SUs of all streaming jobs associated with the cluster. If all of the jobs were running, this would be the capacity allocated.
             */
            capacityAssigned: number;
            /**
             * Unique identifier for the cluster.
             */
            clusterId: string;
            /**
             * The date this cluster was created.
             */
            createdDate: string;
            /**
             * The status of the cluster provisioning. The three terminal states are: Succeeded, Failed and Canceled
             */
            provisioningState: string;
        }

        /**
         * The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests.
         */
        export interface ClusterSkuResponse {
            /**
             * Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests.
             */
            capacity?: number;
            /**
             * Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests.
             */
            name?: string;
        }

        /**
         * The properties associated with a private endpoint.
         */
        export interface PrivateEndpointPropertiesResponse {
            /**
             * The date when this private endpoint was created.
             */
            createdDate: string;
            /**
             * A list of connections to the remote resource. Immutable after it is set.
             */
            manualPrivateLinkServiceConnections?: v20200301preview.PrivateLinkServiceConnectionResponse[];
        }

        /**
         * A collection of read-only information about the state of the connection to the private remote resource.
         */
        export interface PrivateLinkConnectionStateResponse {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired: string;
            /**
             * The reason for approval/rejection of the connection.
             */
            description: string;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the remote resource/service.
             */
            status: string;
        }

        /**
         * A grouping of information about the connection to the remote resource.
         */
        export interface PrivateLinkServiceConnectionResponse {
            /**
             * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests.
             */
            groupIds?: string[];
            /**
             * A collection of read-only information about the state of the connection to the private remote resource.
             */
            privateLinkServiceConnectionState?: v20200301preview.PrivateLinkConnectionStateResponse;
            /**
             * The resource id of the private link service. Required on PUT (CreateOrUpdate) requests.
             */
            privateLinkServiceId?: string;
            /**
             * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
             */
            requestMessage: string;
        }

    }

    export namespace v20211001preview {
        /**
         * The properties that are associated with an aggregate function.
         */
        export interface AggregateFunctionPropertiesResponse {
            /**
             * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
             */
            binding?: v20211001preview.AzureMachineLearningServiceFunctionBindingResponse | v20211001preview.AzureMachineLearningStudioFunctionBindingResponse | v20211001preview.CSharpFunctionBindingResponse | v20211001preview.JavaScriptFunctionBindingResponse;
            /**
             * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            inputs?: v20211001preview.FunctionInputResponse[];
            /**
             * Describes the output of a function.
             */
            output?: v20211001preview.FunctionOutputResponse;
            /**
             * Indicates the type of function.
             * Expected value is 'Aggregate'.
             */
            type: "Aggregate";
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in Avro format.
         */
        export interface AvroSerializationResponse {
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Avro'.
             */
            type: "Avro";
        }

        /**
         * Describes an Azure Data Explorer output data source.
         */
        export interface AzureDataExplorerOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Azure Data Explorer cluster. Required on PUT (CreateOrReplace) requests.
             */
            cluster?: string;
            /**
             * The name of the Azure Data Explorer database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Kusto/clusters/databases'.
             */
            type: "Microsoft.Kusto/clusters/databases";
        }

        /**
         * Describes an Azure Data Lake Store output data source.
         */
        export interface AzureDataLakeStoreOutputDataSourceResponse {
            /**
             * The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
             */
            filePathPrefix?: string;
            /**
             * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
             */
            refreshToken?: string;
            /**
             * The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
             */
            tenantId?: string;
            /**
             * The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserDisplayName?: string;
            /**
             * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserPrincipalName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.DataLake/Accounts'.
             */
            type: "Microsoft.DataLake/Accounts";
        }

        /**
         * Defines the metadata of AzureFunctionOutputDataSource
         */
        export interface AzureFunctionOutputDataSourceResponse {
            /**
             * If you want to use an Azure Function from another subscription, you can do so by providing the key to access your function.
             */
            apiKey?: string;
            /**
             * The name of your Azure Functions app.
             */
            functionAppName?: string;
            /**
             * The name of the function in your Azure Functions app.
             */
            functionName?: string;
            /**
             * A property that lets you specify the maximum number of events in each batch that's sent to Azure Functions. The default value is 100.
             */
            maxBatchCount?: number;
            /**
             * A property that lets you set the maximum size for each output batch that's sent to your Azure function. The input unit is in bytes. By default, this value is 262,144 bytes (256 KB).
             */
            maxBatchSize?: number;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.AzureFunction'.
             */
            type: "Microsoft.AzureFunction";
        }

        /**
         * The binding to an Azure Machine Learning web service.
         */
        export interface AzureMachineLearningServiceFunctionBindingResponse {
            /**
             * The API key used to authenticate with Request-Response endpoint.
             */
            apiKey?: string;
            /**
             * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
             */
            batchSize?: number;
            /**
             * The Request-Response execute endpoint of the Azure Machine Learning web service.
             */
            endpoint?: string;
            /**
             * Label for the input request object.
             */
            inputRequestName?: string;
            /**
             * The inputs for the Azure Machine Learning web service endpoint.
             */
            inputs?: v20211001preview.AzureMachineLearningServiceInputColumnResponse[];
            /**
             * The number of parallel requests that will be sent per partition of your job to the machine learning service. Default is 1.
             */
            numberOfParallelRequests?: number;
            /**
             * Label for the output request object.
             */
            outputResponseName?: string;
            /**
             * A list of outputs from the Azure Machine Learning web service endpoint execution.
             */
            outputs?: v20211001preview.AzureMachineLearningServiceOutputColumnResponse[];
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.MachineLearningServices'.
             */
            type: "Microsoft.MachineLearningServices";
        }

        /**
         * Describes an input column for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningServiceInputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the input column.
             */
            dataType?: string;
            /**
             * The zero based index of the function parameter this input maps to.
             */
            mapTo?: number;
            /**
             * The name of the input column.
             */
            name?: string;
        }

        /**
         * Describes an output column for the Azure Machine Learning web service endpoint.
         */
        export interface AzureMachineLearningServiceOutputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the output column.
             */
            dataType?: string;
            /**
             * The zero based index of the function parameter this input maps to.
             */
            mapTo?: number;
            /**
             * The name of the output column.
             */
            name?: string;
        }

        /**
         * The binding to an Azure Machine Learning Studio.
         */
        export interface AzureMachineLearningStudioFunctionBindingResponse {
            /**
             * The API key used to authenticate with Request-Response endpoint.
             */
            apiKey?: string;
            /**
             * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
             */
            batchSize?: number;
            /**
             * The Request-Response execute endpoint of the Azure Machine Learning Studio. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
             */
            endpoint?: string;
            /**
             * The inputs for the Azure Machine Learning Studio endpoint.
             */
            inputs?: v20211001preview.AzureMachineLearningStudioInputsResponse;
            /**
             * A list of outputs from the Azure Machine Learning Studio endpoint execution.
             */
            outputs?: v20211001preview.AzureMachineLearningStudioOutputColumnResponse[];
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.MachineLearning/WebService'.
             */
            type: "Microsoft.MachineLearning/WebService";
        }

        /**
         * Describes an input column for the Azure Machine Learning Studio endpoint.
         */
        export interface AzureMachineLearningStudioInputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
             */
            dataType?: string;
            /**
             * The zero based index of the function parameter this input maps to.
             */
            mapTo?: number;
            /**
             * The name of the input column.
             */
            name?: string;
        }

        /**
         * The inputs for the Azure Machine Learning Studio endpoint.
         */
        export interface AzureMachineLearningStudioInputsResponse {
            /**
             * A list of input columns for the Azure Machine Learning Studio endpoint.
             */
            columnNames?: v20211001preview.AzureMachineLearningStudioInputColumnResponse[];
            /**
             * The name of the input. This is the name provided while authoring the endpoint.
             */
            name?: string;
        }

        /**
         * Describes an output column for the Azure Machine Learning Studio endpoint.
         */
        export interface AzureMachineLearningStudioOutputColumnResponse {
            /**
             * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
             */
            dataType?: string;
            /**
             * The name of the output column.
             */
            name?: string;
        }

        /**
         * Describes an Azure SQL database output data source.
         */
        export interface AzureSqlDatabaseOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * Max Batch count for write to Sql database, the default value is 10,000. Optional on PUT requests.
             */
            maxBatchCount?: number;
            /**
             * Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
             */
            maxWriterCount?: number;
            /**
             * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            password?: string;
            /**
             * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            server?: string;
            /**
             * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/Database'.
             */
            type: "Microsoft.Sql/Server/Database";
            /**
             * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            user?: string;
        }

        /**
         * Describes an Azure SQL database reference input data source.
         */
        export interface AzureSqlReferenceInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * This element is associated with the datasource element. This is the name of the database that output will be written to.
             */
            database?: string;
            /**
             * This element is associated with the datasource element. This query is used to fetch incremental changes from the SQL database. To use this option, we recommend using temporal tables in Azure SQL Database.
             */
            deltaSnapshotQuery?: string;
            /**
             * This element is associated with the datasource element. This query is used to fetch data from the sql database.
             */
            fullSnapshotQuery?: string;
            /**
             * This element is associated with the datasource element. This is the password that will be used to connect to the SQL Database instance.
             */
            password?: string;
            /**
             * This element is associated with the datasource element. This indicates how frequently the data will be fetched from the database. It is of DateTime format.
             */
            refreshRate?: string;
            /**
             * Indicates the type of data refresh option.
             */
            refreshType?: string;
            /**
             * This element is associated with the datasource element. This is the name of the server that contains the database that will be written to.
             */
            server?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/Database'.
             */
            type: "Microsoft.Sql/Server/Database";
            /**
             * This element is associated with the datasource element. This is the user name that will be used to connect to the SQL Database instance.
             */
            user?: string;
        }

        /**
         * Describes an Azure Synapse output data source.
         */
        export interface AzureSynapseOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            password?: string;
            /**
             * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            server?: string;
            /**
             * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Sql/Server/DataWarehouse'.
             */
            type: "Microsoft.Sql/Server/DataWarehouse";
            /**
             * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            user?: string;
        }

        /**
         * Describes an Azure Table output data source.
         */
        export interface AzureTableOutputDataSourceResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * The number of rows to write to the Azure Table at a time.
             */
            batchSize?: number;
            /**
             * If specified, each item in the array is the name of a column to remove (if present) from output event entities.
             */
            columnsToRemove?: string[];
            /**
             * This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            partitionKey?: string;
            /**
             * This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            rowKey?: string;
            /**
             * The name of the Azure Table. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Table'.
             */
            type: "Microsoft.Storage/Table";
        }

        /**
         * Describes a blob output data source.
         */
        export interface BlobOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * Blob path prefix.
             */
            blobPathPrefix?: string;
            /**
             * Blob write mode.
             */
            blobWriteMode?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20211001preview.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * Describes a blob input data source that contains reference data.
         */
        export interface BlobReferenceInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the blob input.
             */
            blobName?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The path pattern of the delta snapshot.
             */
            deltaPathPattern?: string;
            /**
             * The interval that the user generates a delta snapshot of this reference blob input data source.
             */
            deltaSnapshotRefreshRate?: string;
            /**
             * The refresh interval of the blob input data source.
             */
            fullSnapshotRefreshRate?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * The partition count of the blob input data source. Range 1 - 256.
             */
            sourcePartitionCount?: number;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20211001preview.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * Describes a blob input data source that contains stream data.
         */
        export interface BlobStreamInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
             */
            container?: string;
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * The partition count of the blob input data source. Range 1 - 1024.
             */
            sourcePartitionCount?: number;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20211001preview.StorageAccountResponse[];
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/Blob'.
             */
            type: "Microsoft.Storage/Blob";
        }

        /**
         * The binding to a CSharp function.
         */
        export interface CSharpFunctionBindingResponse {
            /**
             * The Csharp code containing a single function definition.
             */
            class?: string;
            /**
             * The Csharp code containing a single function definition.
             */
            dllPath?: string;
            /**
             * The Csharp code containing a single function definition.
             */
            method?: string;
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.StreamAnalytics/CLRUdf'.
             */
            type: "Microsoft.StreamAnalytics/CLRUdf";
            /**
             * Refresh modes for Stream Analytics functions.
             */
            updateMode?: string;
        }

        /**
         * The properties associated with a Stream Analytics cluster.
         */
        export interface ClusterInfoResponse {
            /**
             * The resource id of cluster.
             */
            id?: string;
        }

        /**
         * Describes how input data is compressed
         */
        export interface CompressionResponse {
            /**
             * Indicates the type of compression that the input uses. Required on PUT (CreateOrReplace) requests.
             */
            type: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in CSV format.
         */
        export interface CsvSerializationResponse {
            /**
             * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
             */
            encoding?: string;
            /**
             * Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests.
             */
            fieldDelimiter?: string;
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Csv'.
             */
            type: "Csv";
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in custom format.
         */
        export interface CustomClrSerializationResponse {
            /**
             * The serialization class name.
             */
            serializationClassName?: string;
            /**
             * The serialization library path.
             */
            serializationDllPath?: string;
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'CustomClr'.
             */
            type: "CustomClr";
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in Delta Lake format.
         */
        export interface DeltaSerializationResponse {
            /**
             * Specifies the path of the Delta Lake table that the output will be written to.
             */
            deltaTablePath: string;
            /**
             * Specifies the names of the columns for which the Delta Lake table will be partitioned. We are only supporting 1 partition column, but keeping it as an array for extensibility.
             */
            partitionColumns?: string[];
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Delta'.
             */
            type: "Delta";
        }

        /**
         * Condition applicable to the resource, or to the job overall, that warrant customer attention.
         */
        export interface DiagnosticConditionResponse {
            /**
             * The opaque diagnostic code.
             */
            code: string;
            /**
             * The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request.
             */
            message: string;
            /**
             * The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time.
             */
            since: string;
        }

        /**
         * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
         */
        export interface DiagnosticsResponse {
            /**
             * A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.
             */
            conditions: v20211001preview.DiagnosticConditionResponse[];
        }

        /**
         * Describes a DocumentDB output data source.
         */
        export interface DocumentDbOutputDataSourceResponse {
            /**
             * The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
             */
            accountId?: string;
            /**
             * The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests.
             */
            collectionNamePattern?: string;
            /**
             * The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * The name of the field in output events used to specify the primary key which insert or update operations are based on.
             */
            documentId?: string;
            /**
             * The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.
             */
            partitionKey?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Storage/DocumentDB'.
             */
            type: "Microsoft.Storage/DocumentDB";
        }

        /**
         * Describes an event grid input data source that contains stream data.
         */
        export interface EventGridStreamInputDataSourceResponse {
            /**
             * List of Event Types that are supported by the Event Grid adapter.
             */
            eventTypes?: string[];
            /**
             * Indicates the Event Grid schema type.
             */
            schema?: string;
            /**
             * A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
             */
            storageAccounts?: v20211001preview.StorageAccountResponse[];
            /**
             * Subscribers for the Event Grid. Currently only EventHub Subscriber is supported.
             */
            subscriber?: v20211001preview.EventHubV2StreamInputDataSourceResponse;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.EventGrid/EventSubscriptions'.
             */
            type: "Microsoft.EventGrid/EventSubscriptions";
        }

        /**
         * Describes an Event Hub output data source.
         */
        export interface EventHubOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The partition count of the event hub data source. Range 1 - 256.
             */
            partitionCount?: number;
            /**
             * The key/column that is used to determine to which partition to send event data.
             */
            partitionKey?: string;
            /**
             * The properties associated with this Event Hub output.
             */
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/EventHub'.
             */
            type: "Microsoft.ServiceBus/EventHub";
        }

        /**
         * Describes an Event Hub input data source that contains stream data.
         */
        export interface EventHubStreamInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The partition count of the event hub data source. Range 1 - 256.
             */
            partitionCount?: number;
            /**
             * The number of messages that the message receiver can simultaneously request.
             */
            prefetchCount?: number;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/EventHub'.
             */
            type: "Microsoft.ServiceBus/EventHub";
        }

        /**
         * Describes an Event Hub output data source.
         */
        export interface EventHubV2OutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The partition count of the event hub data source. Range 1 - 256.
             */
            partitionCount?: number;
            /**
             * The key/column that is used to determine to which partition to send event data.
             */
            partitionKey?: string;
            /**
             * The properties associated with this Event Hub output.
             */
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.EventHub/EventHub'.
             */
            type: "Microsoft.EventHub/EventHub";
        }

        /**
         * Describes an Event Hub input data source that contains stream data.
         */
        export interface EventHubV2StreamInputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
             */
            eventHubName?: string;
            /**
             * The partition count of the event hub data source. Range 1 - 256.
             */
            partitionCount?: number;
            /**
             * The number of messages that the message receiver can simultaneously request.
             */
            prefetchCount?: number;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.EventHub/EventHub'.
             */
            type: "Microsoft.EventHub/EventHub";
        }

        /**
         * The storage account where the custom code artifacts are located.
         */
        export interface ExternalResponse {
            /**
             * The UserCustomCode container.
             */
            container?: string;
            /**
             * The UserCustomCode path.
             */
            path?: string;
            /**
             * The refresh parameters for any/all updatable user defined functions present in the job config.
             */
            refreshConfiguration?: v20211001preview.RefreshConfigurationResponse;
            /**
             * The properties that are associated with an Azure Storage account
             */
            storageAccount?: v20211001preview.StorageAccountResponse;
        }

        /**
         * Describes a file input data source that contains reference data.
         */
        export interface FileReferenceInputDataSourceResponse {
            /**
             * The path of the file.
             */
            path?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'File'.
             */
            type: "File";
        }

        /**
         * Describes one input parameter of a function.
         */
        export interface FunctionInputResponse {
            /**
             * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
             */
            dataType?: string;
            /**
             * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
             */
            isConfigurationParameter?: boolean;
        }

        /**
         * Describes the output of a function.
         */
        export interface FunctionOutputResponse {
            /**
             * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
             */
            dataType?: string;
        }

        /**
         * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
         */
        export interface FunctionResponse {
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * The properties that are associated with a function.
             */
            properties?: v20211001preview.AggregateFunctionPropertiesResponse | v20211001preview.ScalarFunctionPropertiesResponse;
            /**
             * Resource type
             */
            type: string;
        }

        /**
         * Describes a Gateway Message Bus output data source.
         */
        export interface GatewayMessageBusOutputDataSourceResponse {
            /**
             * The name of the Service Bus topic.
             */
            topic?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'GatewayMessageBus'.
             */
            type: "GatewayMessageBus";
        }

        /**
         * Describes a blob input data source that contains stream data.
         */
        export interface GatewayMessageBusStreamInputDataSourceResponse {
            /**
             * The name of the Service Bus topic.
             */
            topic?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'GatewayMessageBus'.
             */
            type: "GatewayMessageBus";
        }

        /**
         * Describes how identity is verified
         */
        export interface IdentityResponse {
            /**
             * The principalId of the identity.
             */
            principalId: string;
            /**
             * The tenantId of the identity.
             */
            tenantId: string;
            /**
             * The type of identity, can be SystemAssigned or UserAssigned.
             */
            type?: string;
            /**
             * The user assigned identities associated with the streaming job resource.
             */
            userAssignedIdentities?: {[key: string]: any};
        }

        /**
         * An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
         */
        export interface InputResponse {
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
             */
            properties?: v20211001preview.ReferenceInputPropertiesResponse | v20211001preview.StreamInputPropertiesResponse;
            /**
             * Resource type
             */
            type: string;
        }

        /**
         * Settings which determine whether to read watermark events.
         */
        export interface InputWatermarkPropertiesResponse {
            /**
             * The input watermark mode.
             */
            watermarkMode?: string;
        }

        /**
         * Describes an IoT Hub input data source that contains stream data.
         */
        export interface IoTHubStreamInputDataSourceResponse {
            /**
             * The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group.
             */
            consumerGroupName?: string;
            /**
             * The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.).
             */
            endpoint?: string;
            /**
             * The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests.
             */
            iotHubNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.Devices/IotHubs'.
             */
            type: "Microsoft.Devices/IotHubs";
        }

        /**
         * The binding to a JavaScript function.
         */
        export interface JavaScriptFunctionBindingResponse {
            /**
             * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
             */
            script?: string;
            /**
             * Indicates the function binding type.
             * Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
             */
            type: "Microsoft.StreamAnalytics/JavascriptUdf";
        }

        /**
         * The properties that are associated with an Azure Storage account with MSI
         */
        export interface JobStorageAccountResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in JSON format.
         */
        export interface JsonSerializationResponse {
            /**
             * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
             */
            encoding?: string;
            /**
             * This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
             */
            format?: string;
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Json'.
             */
            type: "Json";
        }

        /**
         * An output event timestamp.
         */
        export interface LastOutputEventTimestampResponse {
            /**
             * The last output event time.
             */
            lastOutputEventTime?: string;
            /**
             * The time that the last update happened.
             */
            lastUpdateTime?: string;
        }

        /**
         * An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
         */
        export interface OutputResponse {
            /**
             * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20211001preview.AzureDataExplorerOutputDataSourceResponse | v20211001preview.AzureDataLakeStoreOutputDataSourceResponse | v20211001preview.AzureFunctionOutputDataSourceResponse | v20211001preview.AzureSqlDatabaseOutputDataSourceResponse | v20211001preview.AzureSynapseOutputDataSourceResponse | v20211001preview.AzureTableOutputDataSourceResponse | v20211001preview.BlobOutputDataSourceResponse | v20211001preview.DocumentDbOutputDataSourceResponse | v20211001preview.EventHubOutputDataSourceResponse | v20211001preview.EventHubV2OutputDataSourceResponse | v20211001preview.GatewayMessageBusOutputDataSourceResponse | v20211001preview.PostgreSQLOutputDataSourceResponse | v20211001preview.PowerBIOutputDataSourceResponse | v20211001preview.RawOutputDatasourceResponse | v20211001preview.ServiceBusQueueOutputDataSourceResponse | v20211001preview.ServiceBusTopicOutputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20211001preview.DiagnosticsResponse;
            /**
             * The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * Resource Id
             */
            id: string;
            /**
             * A list of the last output event times for each output partition. The index of the array corresponds to the partition number.
             */
            lastOutputEventTimestamps: v20211001preview.LastOutputEventTimestampResponse[];
            /**
             * Resource name
             */
            name?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20211001preview.AvroSerializationResponse | v20211001preview.CsvSerializationResponse | v20211001preview.CustomClrSerializationResponse | v20211001preview.DeltaSerializationResponse | v20211001preview.JsonSerializationResponse | v20211001preview.ParquetSerializationResponse;
            /**
             * The size window to constrain a Stream Analytics output to.
             */
            sizeWindow?: number;
            /**
             * The time frame for filtering Stream Analytics job outputs.
             */
            timeWindow?: string;
            /**
             * Resource type
             */
            type: string;
            /**
             * Settings which determine whether to send watermarks to downstream.
             */
            watermarkSettings?: v20211001preview.OutputWatermarkPropertiesResponse;
        }

        /**
         * Settings which determine whether to send watermarks to downstream.
         */
        export interface OutputWatermarkPropertiesResponse {
            /**
             * Describes the maximal delta between the fastest and slowest partitions, so the out of order window that catches all necessary events in downstream jobs is well defined.
             */
            maxWatermarkDifferenceAcrossPartitions?: string;
            /**
             * The output watermark mode.
             */
            watermarkMode?: string;
        }

        /**
         * Describes how data from an input is serialized or how data is serialized when written to an output in Parquet format.
         */
        export interface ParquetSerializationResponse {
            /**
             * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Parquet'.
             */
            type: "Parquet";
        }

        /**
         * Describes a PostgreSQL output data source.
         */
        export interface PostgreSQLOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            database?: string;
            /**
             * Max Writer count, currently only 1(single writer) and 0(based on query partition) are available. Optional on PUT requests.
             */
            maxWriterCount?: number;
            /**
             * The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            password?: string;
            /**
             * The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            server?: string;
            /**
             * The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.DBForPostgreSQL/servers/databases'.
             */
            type: "Microsoft.DBForPostgreSQL/servers/databases";
            /**
             * The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
             */
            user?: string;
        }

        /**
         * Describes a Power BI output data source.
         */
        export interface PowerBIOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests.
             */
            dataset?: string;
            /**
             * The ID of the Power BI group.
             */
            groupId?: string;
            /**
             * The name of the Power BI group. Use this property to help remember which specific Power BI group id was used.
             */
            groupName?: string;
            /**
             * A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
             */
            refreshToken?: string;
            /**
             * The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests.
             */
            table?: string;
            /**
             * The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserDisplayName?: string;
            /**
             * The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
             */
            tokenUserPrincipalName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'PowerBI'.
             */
            type: "PowerBI";
        }

        /**
         * Describes a raw output data source. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an output of this data source type to an existing job.
         */
        export interface RawOutputDatasourceResponse {
            /**
             * The SAS URL to a blob where the output should be written. If this property is not set, output data will be written into a temporary storage, and a SAS URL to that temporary storage will be included in the result.
             */
            payloadUri?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Raw'.
             */
            type: "Raw";
        }

        /**
         * Describes a raw input data source that contains reference data. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an input of this data source type to an existing job.
         */
        export interface RawReferenceInputDataSourceResponse {
            /**
             * The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both. 
             */
            payload?: string;
            /**
             * The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
             */
            payloadUri?: string;
            /**
             * Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Raw'.
             */
            type: "Raw";
        }

        /**
         * Describes a raw input data source that contains stream data. This data source type is only applicable/usable when using the query testing API. You cannot create a job with this data source type or add an input of this data source type to an existing job.
         */
        export interface RawStreamInputDataSourceResponse {
            /**
             * The JSON serialized content of the input data. Either payload or payloadUri must be set, but not both. 
             */
            payload?: string;
            /**
             * The SAS URL to a blob containing the JSON serialized content of the input data. Either payload or payloadUri must be set, but not both.
             */
            payloadUri?: string;
            /**
             * Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Raw'.
             */
            type: "Raw";
        }

        /**
         * The properties that are associated with an input containing reference data.
         */
        export interface ReferenceInputPropertiesResponse {
            /**
             * Describes how input data is compressed
             */
            compression?: v20211001preview.CompressionResponse;
            /**
             * Describes an input data source that contains reference data. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20211001preview.AzureSqlReferenceInputDataSourceResponse | v20211001preview.BlobReferenceInputDataSourceResponse | v20211001preview.FileReferenceInputDataSourceResponse | v20211001preview.RawReferenceInputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20211001preview.DiagnosticsResponse;
            /**
             * The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * partitionKey Describes a key in the input data which is used for partitioning the input data
             */
            partitionKey?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20211001preview.AvroSerializationResponse | v20211001preview.CsvSerializationResponse | v20211001preview.CustomClrSerializationResponse | v20211001preview.DeltaSerializationResponse | v20211001preview.JsonSerializationResponse | v20211001preview.ParquetSerializationResponse;
            /**
             * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Reference'.
             */
            type: "Reference";
            /**
             * Settings which determine whether to read watermark events.
             */
            watermarkSettings?: v20211001preview.InputWatermarkPropertiesResponse;
        }

        /**
         * The refresh parameters for any/all updatable user defined functions present in the job config.
         */
        export interface RefreshConfigurationResponse {
            /**
             * The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
             */
            dateFormat?: string;
            /**
             * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
             */
            pathPattern?: string;
            /**
             * The refresh interval.
             */
            refreshInterval?: string;
            /**
             * This property indicates which data refresh option to use, Blocking or Nonblocking.
             */
            refreshType?: string;
            /**
             * The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.
             */
            timeFormat?: string;
        }

        /**
         * The properties that are associated with a scalar function.
         */
        export interface ScalarFunctionPropertiesResponse {
            /**
             * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
             */
            binding?: v20211001preview.AzureMachineLearningServiceFunctionBindingResponse | v20211001preview.AzureMachineLearningStudioFunctionBindingResponse | v20211001preview.CSharpFunctionBindingResponse | v20211001preview.JavaScriptFunctionBindingResponse;
            /**
             * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            inputs?: v20211001preview.FunctionInputResponse[];
            /**
             * Describes the output of a function.
             */
            output?: v20211001preview.FunctionOutputResponse;
            /**
             * Indicates the type of function.
             * Expected value is 'Scalar'.
             */
            type: "Scalar";
        }

        /**
         * Describes a Service Bus Queue output data source.
         */
        export interface ServiceBusQueueOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
             */
            propertyColumns?: string[];
            /**
             * The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests.
             */
            queueName?: string;
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * The system properties associated with the Service Bus Queue. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
             */
            systemPropertyColumns?: any;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/Queue'.
             */
            type: "Microsoft.ServiceBus/Queue";
        }

        /**
         * Describes a Service Bus Topic output data source.
         */
        export interface ServiceBusTopicOutputDataSourceResponse {
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
            /**
             * A string array of the names of output columns to be attached to Service Bus messages as custom properties.
             */
            propertyColumns?: string[];
            /**
             * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            serviceBusNamespace?: string;
            /**
             * The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyKey?: string;
            /**
             * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
             */
            sharedAccessPolicyName?: string;
            /**
             * The system properties associated with the Service Bus Topic Output. The following system properties are supported: ReplyToSessionId, ContentType, To, Subject, CorrelationId, TimeToLive, PartitionKey, SessionId, ScheduledEnqueueTime, MessageId, ReplyTo, Label, ScheduledEnqueueTimeUtc.
             */
            systemPropertyColumns?: {[key: string]: string};
            /**
             * The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.
             */
            topicName?: string;
            /**
             * Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Microsoft.ServiceBus/Topic'.
             */
            type: "Microsoft.ServiceBus/Topic";
        }

        /**
         * The properties that are associated with a SKU.
         */
        export interface SkuResponse {
            /**
             * The capacity of the SKU.
             */
            capacity?: number;
            /**
             * The name of the SKU. Required on PUT (CreateOrReplace) requests.
             */
            name?: string;
        }

        /**
         * The properties that are associated with an Azure Storage account
         */
        export interface StorageAccountResponse {
            /**
             * The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountKey?: string;
            /**
             * The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
             */
            accountName?: string;
            /**
             * Authentication Mode.
             */
            authenticationMode?: string;
        }

        /**
         * The properties that are associated with an input containing stream data.
         */
        export interface StreamInputPropertiesResponse {
            /**
             * Describes how input data is compressed
             */
            compression?: v20211001preview.CompressionResponse;
            /**
             * Describes an input data source that contains stream data. Required on PUT (CreateOrReplace) requests.
             */
            datasource?: v20211001preview.BlobStreamInputDataSourceResponse | v20211001preview.EventGridStreamInputDataSourceResponse | v20211001preview.EventHubStreamInputDataSourceResponse | v20211001preview.EventHubV2StreamInputDataSourceResponse | v20211001preview.GatewayMessageBusStreamInputDataSourceResponse | v20211001preview.IoTHubStreamInputDataSourceResponse | v20211001preview.RawStreamInputDataSourceResponse;
            /**
             * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
             */
            diagnostics: v20211001preview.DiagnosticsResponse;
            /**
             * The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * partitionKey Describes a key in the input data which is used for partitioning the input data
             */
            partitionKey?: string;
            /**
             * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
             */
            serialization?: v20211001preview.AvroSerializationResponse | v20211001preview.CsvSerializationResponse | v20211001preview.CustomClrSerializationResponse | v20211001preview.DeltaSerializationResponse | v20211001preview.JsonSerializationResponse | v20211001preview.ParquetSerializationResponse;
            /**
             * Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
             * Expected value is 'Stream'.
             */
            type: "Stream";
            /**
             * Settings which determine whether to read watermark events.
             */
            watermarkSettings?: v20211001preview.InputWatermarkPropertiesResponse;
        }

        /**
         * A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.
         */
        export interface TransformationResponse {
            /**
             * The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
             */
            etag: string;
            /**
             * Resource Id
             */
            id: string;
            /**
             * Resource name
             */
            name?: string;
            /**
             * Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests.
             */
            query?: string;
            /**
             * Specifies the number of streaming units that the streaming job uses.
             */
            streamingUnits?: number;
            /**
             * Resource type
             */
            type: string;
            /**
             * Specifies the valid streaming units a streaming job can scale to.
             */
            validStreamingUnits?: number[];
        }
        /**
         * transformationResponseProvideDefaults sets the appropriate defaults for TransformationResponse
         */
        export function transformationResponseProvideDefaults(val: TransformationResponse): TransformationResponse {
            return {
                ...val,
                streamingUnits: (val.streamingUnits) ?? 3,
            };
        }

    }
}
