import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The authentication info when auth_type is azureBlobStorageSinkConnector
 */
export interface AzureBlobStorageSinkConnectorServiceInfoArgs {
    /**
     * The connector service type.
     * Expected value is 'AzureBlobStorageSinkConnector'.
     */
    connectorServiceType: pulumi.Input<"AzureBlobStorageSinkConnector">;
    /**
     * Azure Blob Storage Account Key
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * Azure Blob Storage Account Name
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * Azure Blob Storage Account Container Name
     */
    storageContainerName?: pulumi.Input<string>;
}

/**
 * The connector service type is AzureBlobStorageSourceConnector
 */
export interface AzureBlobStorageSourceConnectorServiceInfoArgs {
    /**
     * The connector service type.
     * Expected value is 'AzureBlobStorageSourceConnector'.
     */
    connectorServiceType: pulumi.Input<"AzureBlobStorageSourceConnector">;
    /**
     * Azure Blob Storage Account Key
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * Azure Blob Storage Account Name
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * Azure Blob Storage Account Container Name
     */
    storageContainerName?: pulumi.Input<string>;
}

/**
 * The authentication info when auth_type is AzureCosmosDBSinkConnector
 */
export interface AzureCosmosDBSinkConnectorServiceInfoArgs {
    /**
     * The connector service type.
     * Expected value is 'AzureCosmosDBSinkConnector'.
     */
    connectorServiceType: pulumi.Input<"AzureCosmosDBSinkConnector">;
    /**
     * Azure Cosmos Database Connection Endpoint
     */
    cosmosConnectionEndpoint?: pulumi.Input<string>;
    /**
     * Azure Cosmos Database Containers Topic Mapping
     */
    cosmosContainersTopicMapping?: pulumi.Input<string>;
    /**
     * Azure Cosmos Database Name
     */
    cosmosDatabaseName?: pulumi.Input<string>;
    /**
     * Azure Cosmos Database Id Strategy
     */
    cosmosIdStrategy?: pulumi.Input<string>;
    /**
     * Azure Cosmos Database Master Key
     */
    cosmosMasterKey?: pulumi.Input<string>;
}

/**
 * The authentication info when auth_type is AzureCosmosDBSourceConnector
 */
export interface AzureCosmosDBSourceConnectorServiceInfoArgs {
    /**
     * The connector service type.
     * Expected value is 'AzureCosmosDBSourceConnector'.
     */
    connectorServiceType: pulumi.Input<"AzureCosmosDBSourceConnector">;
    /**
     * Azure Cosmos Database Connection Endpoint
     */
    cosmosConnectionEndpoint?: pulumi.Input<string>;
    /**
     * Azure Cosmos Database Containers Topic Mapping
     */
    cosmosContainersTopicMapping?: pulumi.Input<string>;
    /**
     * Azure Cosmos Database Name
     */
    cosmosDatabaseName?: pulumi.Input<string>;
    /**
     * Azure Cosmos Database Master Key
     */
    cosmosMasterKey?: pulumi.Input<string>;
    /**
     * Azure Cosmos Database Message Key Enabled
     */
    cosmosMessageKeyEnabled?: pulumi.Input<boolean>;
    /**
     * Azure Cosmos Database Message Key Field
     */
    cosmosMessageKeyField?: pulumi.Input<string>;
}

/**
 * The authentication info when auth_type is AzureSynapseAnalyticsSinkConnector
 */
export interface AzureSynapseAnalyticsSinkConnectorServiceInfoArgs {
    /**
     * The connector service type.
     * Expected value is 'AzureSynapseAnalyticsSinkConnector'.
     */
    connectorServiceType: pulumi.Input<"AzureSynapseAnalyticsSinkConnector">;
    /**
     * Azure Synapse Dedicated SQL Pool Database Name
     */
    synapseSqlDatabaseName?: pulumi.Input<string>;
    /**
     * Azure Synapse SQL login details
     */
    synapseSqlPassword?: pulumi.Input<string>;
    /**
     * Azure Synapse Analytics SQL Server Name
     */
    synapseSqlServerName?: pulumi.Input<string>;
    /**
     * Azure Synapse SQL login details
     */
    synapseSqlUser?: pulumi.Input<string>;
}

/**
 * The configuration of the Kafka cluster
 */
export interface ClusterConfigEntityArgs {
    /**
     * The lifecycle phase of the cluster
     */
    kind?: pulumi.Input<string>;
}

/**
 * Status of the cluster record
 */
export interface ClusterStatusEntityArgs {
    /**
     * The number of Confluent Kafka Units 
     */
    cku?: pulumi.Input<number>;
    /**
     * The lifecycle phase of the cluster
     */
    phase?: pulumi.Input<string>;
}

/**
 * Connector Info Base properties
 */
export interface ConnectorInfoBaseArgs {
    /**
     * Connector Class
     */
    connectorClass?: pulumi.Input<string | enums.ConnectorClass>;
    /**
     * Connector Id
     */
    connectorId?: pulumi.Input<string>;
    /**
     * Connector Name
     */
    connectorName?: pulumi.Input<string>;
    /**
     * Connector Status
     */
    connectorState?: pulumi.Input<string | enums.ConnectorStatus>;
    /**
     * Connector Type
     */
    connectorType?: pulumi.Input<string | enums.ConnectorType>;
}

/**
 * The partner connector type is KafkaAzureBlobStorageSink
 */
export interface KafkaAzureBlobStorageSinkConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: pulumi.Input<string>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType>;
    /**
     * Flush size
     */
    flushSize?: pulumi.Input<string>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureBlobStorageSink'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureBlobStorageSink">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string>;
    /**
     * Time Interval
     */
    timeInterval?: pulumi.Input<string>;
    /**
     * Kafka topics list
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string>;
}

/**
 * The partner connector type is KafkaAzureBlobStorageSource
 */
export interface KafkaAzureBlobStorageSourceConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Kafka API Secret
     */
    apiSecret?: pulumi.Input<string>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureBlobStorageSource'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureBlobStorageSource">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string>;
    /**
     * Kafka topics Regex pattern
     */
    topicRegex?: pulumi.Input<string>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string>;
}

/**
 * The partner connector type is KafkaAzureCosmosDBSink
 */
export interface KafkaAzureCosmosDBSinkConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: pulumi.Input<string>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType>;
    /**
     * Flush size
     */
    flushSize?: pulumi.Input<string>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureCosmosDBSink'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureCosmosDBSink">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string>;
    /**
     * Time Interval
     */
    timeInterval?: pulumi.Input<string>;
    /**
     * Kafka topics list
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string>;
}

/**
 * The partner connector type is KafkaAzureCosmosDBSource
 */
export interface KafkaAzureCosmosDBSourceConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Kafka API Secret
     */
    apiSecret?: pulumi.Input<string>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureCosmosDBSource'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureCosmosDBSource">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string>;
    /**
     * Kafka topics Regex pattern
     */
    topicRegex?: pulumi.Input<string>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string>;
}

/**
 * The partner connector type is KafkaAzureSynapseAnalyticsSink
 */
export interface KafkaAzureSynapseAnalyticsSinkConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: pulumi.Input<string>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType>;
    /**
     * Flush size
     */
    flushSize?: pulumi.Input<string>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureSynapseAnalyticsSink'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureSynapseAnalyticsSink">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string>;
    /**
     * Time Interval
     */
    timeInterval?: pulumi.Input<string>;
    /**
     * Kafka topics list
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string>;
}

/**
 * Confluent Offer detail
 */
export interface OfferDetailArgs {
    /**
     * Offer Id
     */
    id: pulumi.Input<string>;
    /**
     * Offer Plan Id
     */
    planId: pulumi.Input<string>;
    /**
     * Offer Plan Name
     */
    planName: pulumi.Input<string>;
    /**
     * Publisher Id
     */
    publisherId: pulumi.Input<string>;
    /**
     * Offer Plan Term unit
     */
    termUnit: pulumi.Input<string>;
}

/**
 * The network associated with this object
 */
export interface SCClusterByokEntityArgs {
    /**
     * ID of the referred resource
     */
    id?: pulumi.Input<string>;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: pulumi.Input<string>;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: pulumi.Input<string>;
}

/**
 * The environment or the network to which cluster belongs
 */
export interface SCClusterNetworkEnvironmentEntityArgs {
    /**
     * Environment of the referred resource
     */
    environment?: pulumi.Input<string>;
    /**
     * ID of the referred resource
     */
    id?: pulumi.Input<string>;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: pulumi.Input<string>;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: pulumi.Input<string>;
}

/**
 * Spec of the cluster record
 */
export interface SCClusterSpecEntityArgs {
    /**
     * The Kafka API cluster endpoint
     */
    apiEndpoint?: pulumi.Input<string>;
    /**
     * The availability zone configuration of the cluster
     */
    availability?: pulumi.Input<string>;
    /**
     * Specification of the cluster byok
     */
    byok?: pulumi.Input<SCClusterByokEntityArgs>;
    /**
     * The cloud service provider 
     */
    cloud?: pulumi.Input<string>;
    /**
     * Specification of the cluster configuration
     */
    config?: pulumi.Input<ClusterConfigEntityArgs>;
    /**
     * Specification of the cluster environment
     */
    environment?: pulumi.Input<SCClusterNetworkEnvironmentEntityArgs>;
    /**
     * The cluster HTTP request URL.
     */
    httpEndpoint?: pulumi.Input<string>;
    /**
     * The bootstrap endpoint used by Kafka clients to connect to the cluster
     */
    kafkaBootstrapEndpoint?: pulumi.Input<string>;
    /**
     * The name of the cluster
     */
    name?: pulumi.Input<string>;
    /**
     * Specification of the cluster network
     */
    network?: pulumi.Input<SCClusterNetworkEnvironmentEntityArgs>;
    /**
     * Stream governance configuration
     */
    package?: pulumi.Input<string | enums.Package>;
    /**
     * The cloud service provider region
     */
    region?: pulumi.Input<string>;
    /**
     * type of zone availability
     */
    zone?: pulumi.Input<string>;
}

/**
 * Metadata of the data record
 */
export interface SCMetadataEntityArgs {
    /**
     * Created Date Time
     */
    createdTimestamp?: pulumi.Input<string>;
    /**
     * Deleted Date time
     */
    deletedTimestamp?: pulumi.Input<string>;
    /**
     * Resource name of the record
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Self lookup url
     */
    self?: pulumi.Input<string>;
    /**
     * Updated Date time
     */
    updatedTimestamp?: pulumi.Input<string>;
}

/**
 * Stream governance configuration
 */
export interface StreamGovernanceConfigArgs {
    /**
     * Stream governance configuration
     */
    package?: pulumi.Input<string | enums.Package>;
}

/**
 * Metadata of the data record
 */
export interface TopicMetadataEntityArgs {
    /**
     * Resource name of the record
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Self lookup url
     */
    self?: pulumi.Input<string>;
}

/**
 * Topics input config
 */
export interface TopicsInputConfigArgs {
    /**
     * Name of the topic input config
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the topic input config
     */
    value?: pulumi.Input<string>;
}

/**
 * Partition Config spec of the topic record
 */
export interface TopicsRelatedLinkArgs {
    /**
     * Relationship of the topic
     */
    related?: pulumi.Input<string>;
}

/**
 * Subscriber detail
 */
export interface UserDetailArgs {
    /**
     * Email address
     */
    emailAddress: pulumi.Input<string>;
    /**
     * First name
     */
    firstName?: pulumi.Input<string>;
    /**
     * Last name
     */
    lastName?: pulumi.Input<string>;
}




