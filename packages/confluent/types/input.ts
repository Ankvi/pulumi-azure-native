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
    storageAccountKey?: pulumi.Input<string | undefined>;
    /**
     * Azure Blob Storage Account Name
     */
    storageAccountName?: pulumi.Input<string | undefined>;
    /**
     * Azure Blob Storage Account Container Name
     */
    storageContainerName?: pulumi.Input<string | undefined>;
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
    storageAccountKey?: pulumi.Input<string | undefined>;
    /**
     * Azure Blob Storage Account Name
     */
    storageAccountName?: pulumi.Input<string | undefined>;
    /**
     * Azure Blob Storage Account Container Name
     */
    storageContainerName?: pulumi.Input<string | undefined>;
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
    cosmosConnectionEndpoint?: pulumi.Input<string | undefined>;
    /**
     * Azure Cosmos Database Containers Topic Mapping
     */
    cosmosContainersTopicMapping?: pulumi.Input<string | undefined>;
    /**
     * Azure Cosmos Database Name
     */
    cosmosDatabaseName?: pulumi.Input<string | undefined>;
    /**
     * Azure Cosmos Database Id Strategy
     */
    cosmosIdStrategy?: pulumi.Input<string | undefined>;
    /**
     * Azure Cosmos Database Master Key
     */
    cosmosMasterKey?: pulumi.Input<string | undefined>;
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
    cosmosConnectionEndpoint?: pulumi.Input<string | undefined>;
    /**
     * Azure Cosmos Database Containers Topic Mapping
     */
    cosmosContainersTopicMapping?: pulumi.Input<string | undefined>;
    /**
     * Azure Cosmos Database Name
     */
    cosmosDatabaseName?: pulumi.Input<string | undefined>;
    /**
     * Azure Cosmos Database Master Key
     */
    cosmosMasterKey?: pulumi.Input<string | undefined>;
    /**
     * Azure Cosmos Database Message Key Enabled
     */
    cosmosMessageKeyEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Azure Cosmos Database Message Key Field
     */
    cosmosMessageKeyField?: pulumi.Input<string | undefined>;
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
    synapseSqlDatabaseName?: pulumi.Input<string | undefined>;
    /**
     * Azure Synapse SQL login details
     */
    synapseSqlPassword?: pulumi.Input<string | undefined>;
    /**
     * Azure Synapse Analytics SQL Server Name
     */
    synapseSqlServerName?: pulumi.Input<string | undefined>;
    /**
     * Azure Synapse SQL login details
     */
    synapseSqlUser?: pulumi.Input<string | undefined>;
}

/**
 * The configuration of the Kafka cluster
 */
export interface ClusterConfigEntityArgs {
    /**
     * The lifecycle phase of the cluster
     */
    kind?: pulumi.Input<string | undefined>;
}

/**
 * Status of the cluster record
 */
export interface ClusterStatusEntityArgs {
    /**
     * The number of Confluent Kafka Units
     */
    cku?: pulumi.Input<number | undefined>;
    /**
     * The lifecycle phase of the cluster
     */
    phase?: pulumi.Input<string | undefined>;
}

/**
 * Connector Info Base properties
 */
export interface ConnectorInfoBaseArgs {
    /**
     * Connector Class
     */
    connectorClass?: pulumi.Input<string | enums.ConnectorClass | undefined>;
    /**
     * Connector Id
     */
    connectorId?: pulumi.Input<string | undefined>;
    /**
     * Connector Name
     */
    connectorName?: pulumi.Input<string | undefined>;
    /**
     * Connector Status
     */
    connectorState?: pulumi.Input<string | enums.ConnectorStatus | undefined>;
    /**
     * Connector Type
     */
    connectorType?: pulumi.Input<string | enums.ConnectorType | undefined>;
}

/**
 * The partner connector type is KafkaAzureBlobStorageSink
 */
export interface KafkaAzureBlobStorageSinkConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string | undefined>;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: pulumi.Input<string | undefined>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType | undefined>;
    /**
     * Flush size
     */
    flushSize?: pulumi.Input<string | undefined>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string | undefined>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureBlobStorageSink'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureBlobStorageSink">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string | undefined>;
    /**
     * Time Interval
     */
    timeInterval?: pulumi.Input<string | undefined>;
    /**
     * Kafka topics list
     */
    topics?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string | undefined>;
}

/**
 * The partner connector type is KafkaAzureBlobStorageSource
 */
export interface KafkaAzureBlobStorageSourceConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string | undefined>;
    /**
     * Kafka API Secret
     */
    apiSecret?: pulumi.Input<string | undefined>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType | undefined>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string | undefined>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureBlobStorageSource'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureBlobStorageSource">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string | undefined>;
    /**
     * Kafka topics Regex pattern
     */
    topicRegex?: pulumi.Input<string | undefined>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string | undefined>;
}

/**
 * The partner connector type is KafkaAzureCosmosDBSink
 */
export interface KafkaAzureCosmosDBSinkConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string | undefined>;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: pulumi.Input<string | undefined>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType | undefined>;
    /**
     * Flush size
     */
    flushSize?: pulumi.Input<string | undefined>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string | undefined>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureCosmosDBSink'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureCosmosDBSink">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string | undefined>;
    /**
     * Time Interval
     */
    timeInterval?: pulumi.Input<string | undefined>;
    /**
     * Kafka topics list
     */
    topics?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string | undefined>;
}

/**
 * The partner connector type is KafkaAzureCosmosDBSource
 */
export interface KafkaAzureCosmosDBSourceConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string | undefined>;
    /**
     * Kafka API Secret
     */
    apiSecret?: pulumi.Input<string | undefined>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType | undefined>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string | undefined>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureCosmosDBSource'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureCosmosDBSource">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string | undefined>;
    /**
     * Kafka topics Regex pattern
     */
    topicRegex?: pulumi.Input<string | undefined>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string | undefined>;
}

/**
 * The partner connector type is KafkaAzureSynapseAnalyticsSink
 */
export interface KafkaAzureSynapseAnalyticsSinkConnectorInfoArgs {
    /**
     * Kafka API Key
     */
    apiKey?: pulumi.Input<string | undefined>;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: pulumi.Input<string | undefined>;
    /**
     * Kafka Auth Type
     */
    authType?: pulumi.Input<string | enums.AuthType | undefined>;
    /**
     * Flush size
     */
    flushSize?: pulumi.Input<string | undefined>;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Maximum Tasks
     */
    maxTasks?: pulumi.Input<string | undefined>;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: pulumi.Input<string | enums.DataFormatType | undefined>;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureSynapseAnalyticsSink'.
     */
    partnerConnectorType: pulumi.Input<"KafkaAzureSynapseAnalyticsSink">;
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: pulumi.Input<string | undefined>;
    /**
     * Time Interval
     */
    timeInterval?: pulumi.Input<string | undefined>;
    /**
     * Kafka topics list
     */
    topics?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Kafka topics directory
     */
    topicsDir?: pulumi.Input<string | undefined>;
}

/**
 * Link an existing Confluent organization
 */
export interface LinkOrganizationArgs {
    /**
     * User auth token
     */
    token: pulumi.Input<string>;
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
     * Private Offer Id
     */
    privateOfferId?: pulumi.Input<string | undefined>;
    /**
     * Array of Private Offer Ids
     */
    privateOfferIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Publisher Id
     */
    publisherId: pulumi.Input<string>;
    /**
     * Offer Plan Term Id
     */
    termId?: pulumi.Input<string | undefined>;
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
    id?: pulumi.Input<string | undefined>;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: pulumi.Input<string | undefined>;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: pulumi.Input<string | undefined>;
}

/**
 * The environment or the network to which cluster belongs
 */
export interface SCClusterNetworkEnvironmentEntityArgs {
    /**
     * Environment of the referred resource
     */
    environment?: pulumi.Input<string | undefined>;
    /**
     * ID of the referred resource
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: pulumi.Input<string | undefined>;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: pulumi.Input<string | undefined>;
}

/**
 * Spec of the cluster record
 */
export interface SCClusterSpecEntityArgs {
    /**
     * The Kafka API cluster endpoint
     */
    apiEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The availability zone configuration of the cluster
     */
    availability?: pulumi.Input<string | undefined>;
    /**
     * Specification of the cluster byok
     */
    byok?: pulumi.Input<SCClusterByokEntityArgs | undefined>;
    /**
     * The cloud service provider
     */
    cloud?: pulumi.Input<string | undefined>;
    /**
     * Specification of the cluster configuration
     */
    config?: pulumi.Input<ClusterConfigEntityArgs | undefined>;
    /**
     * Specification of the cluster environment
     */
    environment?: pulumi.Input<SCClusterNetworkEnvironmentEntityArgs | undefined>;
    /**
     * The cluster HTTP request URL.
     */
    httpEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The bootstrap endpoint used by Kafka clients to connect to the cluster
     */
    kafkaBootstrapEndpoint?: pulumi.Input<string | undefined>;
    /**
     * The name of the cluster
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Specification of the cluster network
     */
    network?: pulumi.Input<SCClusterNetworkEnvironmentEntityArgs | undefined>;
    /**
     * Stream governance configuration
     */
    package?: pulumi.Input<string | enums.Package | undefined>;
    /**
     * The cloud service provider region
     */
    region?: pulumi.Input<string | undefined>;
    /**
     * type of zone availability
     */
    zone?: pulumi.Input<string | undefined>;
}

/**
 * Metadata of the data record
 */
export interface SCMetadataEntityArgs {
    /**
     * Created Date Time
     */
    createdTimestamp?: pulumi.Input<string | undefined>;
    /**
     * Deleted Date time
     */
    deletedTimestamp?: pulumi.Input<string | undefined>;
    /**
     * Resource name of the record
     */
    resourceName?: pulumi.Input<string | undefined>;
    /**
     * Self lookup url
     */
    self?: pulumi.Input<string | undefined>;
    /**
     * Updated Date time
     */
    updatedTimestamp?: pulumi.Input<string | undefined>;
}

/**
 * Stream governance configuration
 */
export interface StreamGovernanceConfigArgs {
    /**
     * Stream governance configuration
     */
    package?: pulumi.Input<string | enums.Package | undefined>;
}

/**
 * Metadata of the data record
 */
export interface TopicMetadataEntityArgs {
    /**
     * Resource name of the record
     */
    resourceName?: pulumi.Input<string | undefined>;
    /**
     * Self lookup url
     */
    self?: pulumi.Input<string | undefined>;
}

/**
 * Topics input config
 */
export interface TopicsInputConfigArgs {
    /**
     * Name of the topic input config
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Value of the topic input config
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Partition Config spec of the topic record
 */
export interface TopicsRelatedLinkArgs {
    /**
     * Relationship of the topic
     */
    related?: pulumi.Input<string | undefined>;
}

/**
 * Subscriber detail
 */
export interface UserDetailArgs {
    /**
     * AAD email address
     */
    aadEmail?: pulumi.Input<string | undefined>;
    /**
     * Email address
     */
    emailAddress: pulumi.Input<string>;
    /**
     * First name
     */
    firstName?: pulumi.Input<string | undefined>;
    /**
     * Last name
     */
    lastName?: pulumi.Input<string | undefined>;
    /**
     * User principal name
     */
    userPrincipalName?: pulumi.Input<string | undefined>;
}
