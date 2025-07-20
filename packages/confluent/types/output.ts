import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The authentication info when auth_type is azureBlobStorageSinkConnector
 */
export interface AzureBlobStorageSinkConnectorServiceInfoResponse {
    /**
     * The connector service type.
     * Expected value is 'AzureBlobStorageSinkConnector'.
     */
    connectorServiceType: "AzureBlobStorageSinkConnector";
    /**
     * Azure Blob Storage Account Key
     */
    storageAccountKey?: string;
    /**
     * Azure Blob Storage Account Name
     */
    storageAccountName?: string;
    /**
     * Azure Blob Storage Account Container Name
     */
    storageContainerName?: string;
}

/**
 * The connector service type is AzureBlobStorageSourceConnector
 */
export interface AzureBlobStorageSourceConnectorServiceInfoResponse {
    /**
     * The connector service type.
     * Expected value is 'AzureBlobStorageSourceConnector'.
     */
    connectorServiceType: "AzureBlobStorageSourceConnector";
    /**
     * Azure Blob Storage Account Key
     */
    storageAccountKey?: string;
    /**
     * Azure Blob Storage Account Name
     */
    storageAccountName?: string;
    /**
     * Azure Blob Storage Account Container Name
     */
    storageContainerName?: string;
}

/**
 * The authentication info when auth_type is AzureCosmosDBSinkConnector
 */
export interface AzureCosmosDBSinkConnectorServiceInfoResponse {
    /**
     * The connector service type.
     * Expected value is 'AzureCosmosDBSinkConnector'.
     */
    connectorServiceType: "AzureCosmosDBSinkConnector";
    /**
     * Azure Cosmos Database Connection Endpoint
     */
    cosmosConnectionEndpoint?: string;
    /**
     * Azure Cosmos Database Containers Topic Mapping
     */
    cosmosContainersTopicMapping?: string;
    /**
     * Azure Cosmos Database Name
     */
    cosmosDatabaseName?: string;
    /**
     * Azure Cosmos Database Id Strategy
     */
    cosmosIdStrategy?: string;
    /**
     * Azure Cosmos Database Master Key
     */
    cosmosMasterKey?: string;
}

/**
 * The authentication info when auth_type is AzureCosmosDBSourceConnector
 */
export interface AzureCosmosDBSourceConnectorServiceInfoResponse {
    /**
     * The connector service type.
     * Expected value is 'AzureCosmosDBSourceConnector'.
     */
    connectorServiceType: "AzureCosmosDBSourceConnector";
    /**
     * Azure Cosmos Database Connection Endpoint
     */
    cosmosConnectionEndpoint?: string;
    /**
     * Azure Cosmos Database Containers Topic Mapping
     */
    cosmosContainersTopicMapping?: string;
    /**
     * Azure Cosmos Database Name
     */
    cosmosDatabaseName?: string;
    /**
     * Azure Cosmos Database Master Key
     */
    cosmosMasterKey?: string;
    /**
     * Azure Cosmos Database Message Key Enabled
     */
    cosmosMessageKeyEnabled?: boolean;
    /**
     * Azure Cosmos Database Message Key Field
     */
    cosmosMessageKeyField?: string;
}

/**
 * The authentication info when auth_type is AzureSynapseAnalyticsSinkConnector
 */
export interface AzureSynapseAnalyticsSinkConnectorServiceInfoResponse {
    /**
     * The connector service type.
     * Expected value is 'AzureSynapseAnalyticsSinkConnector'.
     */
    connectorServiceType: "AzureSynapseAnalyticsSinkConnector";
    /**
     * Azure Synapse Dedicated SQL Pool Database Name
     */
    synapseSqlDatabaseName?: string;
    /**
     * Azure Synapse SQL login details
     */
    synapseSqlPassword?: string;
    /**
     * Azure Synapse Analytics SQL Server Name
     */
    synapseSqlServerName?: string;
    /**
     * Azure Synapse SQL login details
     */
    synapseSqlUser?: string;
}

/**
 * The network associated with this object
 */
export interface ClusterByokEntityResponse {
    /**
     * ID of the referred resource
     */
    id?: string;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: string;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: string;
}

/**
 * The configuration of the Kafka cluster
 */
export interface ClusterConfigEntityResponse {
    /**
     * The lifecycle phase of the cluster
     */
    kind?: string;
}

/**
 * The environment to which cluster belongs
 */
export interface ClusterEnvironmentEntityResponse {
    /**
     * Environment of the referred resource
     */
    environment?: string;
    /**
     * ID of the referred resource
     */
    id?: string;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: string;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: string;
}

/**
 * The network associated with this object
 */
export interface ClusterNetworkEntityResponse {
    /**
     * Environment of the referred resource
     */
    environment?: string;
    /**
     * ID of the referred resource
     */
    id?: string;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: string;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: string;
}

/**
 * Details of cluster record
 */
export interface ClusterRecordResponse {
    /**
     * Display name of the cluster
     */
    displayName?: string;
    /**
     * Id of the cluster
     */
    id?: string;
    /**
     * Type of cluster
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
    /**
     * Specification of the cluster
     */
    spec?: ClusterSpecEntityResponse;
    /**
     * Specification of the cluster
     */
    status?: ClusterStatusEntityResponse;
}

/**
 * Spec of the cluster record
 */
export interface ClusterSpecEntityResponse {
    /**
     * The Kafka API cluster endpoint
     */
    apiEndpoint?: string;
    /**
     * The availability zone configuration of the cluster
     */
    availability?: string;
    /**
     * Specification of the cluster
     */
    byok?: ClusterByokEntityResponse;
    /**
     * The cloud service provider
     */
    cloud?: string;
    /**
     * Specification of the cluster
     */
    config?: ClusterConfigEntityResponse;
    /**
     * The name of the cluster
     */
    displayName?: string;
    /**
     * Specification of the cluster
     */
    environment?: ClusterEnvironmentEntityResponse;
    /**
     * The cluster HTTP request URL.
     */
    httpEndpoint?: string;
    /**
     * The bootstrap endpoint used by Kafka clients to connect to the cluster
     */
    kafkaBootstrapEndpoint?: string;
    /**
     * Specification of the cluster
     */
    network?: ClusterNetworkEntityResponse;
    /**
     * The cloud service provider region
     */
    region?: string;
    /**
     * type of zone availability
     */
    zone?: string;
}

/**
 * Status of the cluster record
 */
export interface ClusterStatusEntityResponse {
    /**
     * The number of Confluent Kafka Units
     */
    cku?: number;
    /**
     * The lifecycle phase of the cluster
     */
    phase?: string;
}

/**
 * Metadata of the list
 */
export interface ConfluentListMetadataResponse {
    /**
     * First page of the list
     */
    first?: string;
    /**
     * Last page of the list
     */
    last?: string;
    /**
     * Next page of the list
     */
    next?: string;
    /**
     * Previous page of the list
     */
    prev?: string;
    /**
     * Total size of the list
     */
    totalSize?: number;
}

/**
 * Connector Info Base properties
 */
export interface ConnectorInfoBaseResponse {
    /**
     * Connector Class
     */
    connectorClass?: string;
    /**
     * Connector Id
     */
    connectorId?: string;
    /**
     * Connector Name
     */
    connectorName?: string;
    /**
     * Connector Status
     */
    connectorState?: string;
    /**
     * Connector Type
     */
    connectorType?: string;
}

/**
 * Details about environment name, metadata and environment id of an environment
 */
export interface EnvironmentRecordResponse {
    /**
     * Display name of the user
     */
    displayName?: string;
    /**
     * Id of the environment
     */
    id?: string;
    /**
     * Type of environment
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
}

/**
 * Record of the invitation
 */
export interface InvitationRecordResponse {
    /**
     * Accepted date time of the invitation
     */
    acceptedAt?: string;
    /**
     * Auth type of the user
     */
    authType?: string;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Expiration date time of the invitation
     */
    expiresAt?: string;
    /**
     * Id of the invitation
     */
    id?: string;
    /**
     * Type of account
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
    /**
     * Status of the invitation
     */
    status?: string;
}

/**
 * The partner connector type is KafkaAzureBlobStorageSink
 */
export interface KafkaAzureBlobStorageSinkConnectorInfoResponse {
    /**
     * Kafka API Key
     */
    apiKey?: string;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: string;
    /**
     * Kafka Auth Type
     */
    authType?: string;
    /**
     * Flush size
     */
    flushSize?: string;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: string;
    /**
     * Maximum Tasks
     */
    maxTasks?: string;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: string;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureBlobStorageSink'.
     */
    partnerConnectorType: "KafkaAzureBlobStorageSink";
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: string;
    /**
     * Time Interval
     */
    timeInterval?: string;
    /**
     * Kafka topics list
     */
    topics?: string[];
    /**
     * Kafka topics directory
     */
    topicsDir?: string;
}

/**
 * The partner connector type is KafkaAzureBlobStorageSource
 */
export interface KafkaAzureBlobStorageSourceConnectorInfoResponse {
    /**
     * Kafka API Key
     */
    apiKey?: string;
    /**
     * Kafka API Secret
     */
    apiSecret?: string;
    /**
     * Kafka Auth Type
     */
    authType?: string;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: string;
    /**
     * Maximum Tasks
     */
    maxTasks?: string;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: string;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureBlobStorageSource'.
     */
    partnerConnectorType: "KafkaAzureBlobStorageSource";
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: string;
    /**
     * Kafka topics Regex pattern
     */
    topicRegex?: string;
    /**
     * Kafka topics directory
     */
    topicsDir?: string;
}

/**
 * The partner connector type is KafkaAzureCosmosDBSink
 */
export interface KafkaAzureCosmosDBSinkConnectorInfoResponse {
    /**
     * Kafka API Key
     */
    apiKey?: string;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: string;
    /**
     * Kafka Auth Type
     */
    authType?: string;
    /**
     * Flush size
     */
    flushSize?: string;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: string;
    /**
     * Maximum Tasks
     */
    maxTasks?: string;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: string;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureCosmosDBSink'.
     */
    partnerConnectorType: "KafkaAzureCosmosDBSink";
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: string;
    /**
     * Time Interval
     */
    timeInterval?: string;
    /**
     * Kafka topics list
     */
    topics?: string[];
    /**
     * Kafka topics directory
     */
    topicsDir?: string;
}

/**
 * The partner connector type is KafkaAzureCosmosDBSource
 */
export interface KafkaAzureCosmosDBSourceConnectorInfoResponse {
    /**
     * Kafka API Key
     */
    apiKey?: string;
    /**
     * Kafka API Secret
     */
    apiSecret?: string;
    /**
     * Kafka Auth Type
     */
    authType?: string;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: string;
    /**
     * Maximum Tasks
     */
    maxTasks?: string;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: string;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureCosmosDBSource'.
     */
    partnerConnectorType: "KafkaAzureCosmosDBSource";
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: string;
    /**
     * Kafka topics Regex pattern
     */
    topicRegex?: string;
    /**
     * Kafka topics directory
     */
    topicsDir?: string;
}

/**
 * The partner connector type is KafkaAzureSynapseAnalyticsSink
 */
export interface KafkaAzureSynapseAnalyticsSinkConnectorInfoResponse {
    /**
     * Kafka API Key
     */
    apiKey?: string;
    /**
     * Kafka API Key Secret
     */
    apiSecret?: string;
    /**
     * Kafka Auth Type
     */
    authType?: string;
    /**
     * Flush size
     */
    flushSize?: string;
    /**
     * Kafka Input Data Format Type
     */
    inputFormat?: string;
    /**
     * Maximum Tasks
     */
    maxTasks?: string;
    /**
     * Kafka Output Data Format Type
     */
    outputFormat?: string;
    /**
     * Partner Connector type.
     * Expected value is 'KafkaAzureSynapseAnalyticsSink'.
     */
    partnerConnectorType: "KafkaAzureSynapseAnalyticsSink";
    /**
     * Kafka Service Account Id
     */
    serviceAccountId?: string;
    /**
     * Time Interval
     */
    timeInterval?: string;
    /**
     * Kafka topics list
     */
    topics?: string[];
    /**
     * Kafka topics directory
     */
    topicsDir?: string;
}

/**
 * Metadata of the data record
 */
export interface MetadataEntityResponse {
    /**
     * Created Date Time
     */
    createdAt?: string;
    /**
     * Deleted Date time
     */
    deletedAt?: string;
    /**
     * Resource name of the record
     */
    resourceName?: string;
    /**
     * Self lookup url
     */
    self?: string;
    /**
     * Updated Date time
     */
    updatedAt?: string;
}

/**
 * Confluent Offer detail
 */
export interface OfferDetailResponse {
    /**
     * Offer Id
     */
    id: string;
    /**
     * Offer Plan Id
     */
    planId: string;
    /**
     * Offer Plan Name
     */
    planName: string;
    /**
     * Private Offer Id
     */
    privateOfferId?: string;
    /**
     * Array of Private Offer Ids
     */
    privateOfferIds?: string[];
    /**
     * Publisher Id
     */
    publisherId: string;
    /**
     * SaaS Offer Status
     */
    status?: string;
    /**
     * Offer Plan Term Id
     */
    termId?: string;
    /**
     * Offer Plan Term unit
     */
    termUnit: string;
}

/**
 * Details of region record
 */
export interface RegionRecordResponse {
    /**
     * Id of the cluster
     */
    id?: string;
    /**
     * Kind of the cluster
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: SCMetadataEntityResponse;
    /**
     * Specification of the region
     */
    spec?: RegionSpecEntityResponse;
}

/**
 * Region spec details
 */
export interface RegionSpecEntityResponse {
    /**
     * Cloud provider name
     */
    cloud?: string;
    /**
     * Display Name of the region
     */
    name?: string;
    packages?: string[];
    /**
     * Region name
     */
    regionName?: string;
}

/**
 * Details on principal, role name and crn pattern of a role binding
 */
export interface RoleBindingRecordResponse {
    /**
     * A CRN that specifies the scope and resource patterns necessary for the role to bind
     */
    crnPattern?: string;
    /**
     * Id of the role binding
     */
    id?: string;
    /**
     * The type of the resource.
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
    /**
     * The principal User or Group to bind the role to
     */
    principal?: string;
    /**
     * The name of the role to bind to the principal
     */
    roleName?: string;
}

/**
 * The network associated with this object
 */
export interface SCClusterByokEntityResponse {
    /**
     * ID of the referred resource
     */
    id?: string;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: string;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: string;
}

/**
 * The environment or the network to which cluster belongs
 */
export interface SCClusterNetworkEnvironmentEntityResponse {
    /**
     * Environment of the referred resource
     */
    environment?: string;
    /**
     * ID of the referred resource
     */
    id?: string;
    /**
     * API URL for accessing or modifying the referred object
     */
    related?: string;
    /**
     * CRN reference to the referred resource
     */
    resourceName?: string;
}

/**
 * Spec of the cluster record
 */
export interface SCClusterSpecEntityResponse {
    /**
     * The Kafka API cluster endpoint
     */
    apiEndpoint?: string;
    /**
     * The availability zone configuration of the cluster
     */
    availability?: string;
    /**
     * Specification of the cluster byok
     */
    byok?: SCClusterByokEntityResponse;
    /**
     * The cloud service provider
     */
    cloud?: string;
    /**
     * Specification of the cluster configuration
     */
    config?: ClusterConfigEntityResponse;
    /**
     * Specification of the cluster environment
     */
    environment?: SCClusterNetworkEnvironmentEntityResponse;
    /**
     * The cluster HTTP request URL.
     */
    httpEndpoint?: string;
    /**
     * The bootstrap endpoint used by Kafka clients to connect to the cluster
     */
    kafkaBootstrapEndpoint?: string;
    /**
     * The name of the cluster
     */
    name?: string;
    /**
     * Specification of the cluster network
     */
    network?: SCClusterNetworkEnvironmentEntityResponse;
    /**
     * Stream governance configuration
     */
    package?: string;
    /**
     * The cloud service provider region
     */
    region?: string;
    /**
     * type of zone availability
     */
    zone?: string;
}

/**
 * Metadata of the data record
 */
export interface SCMetadataEntityResponse {
    /**
     * Created Date Time
     */
    createdTimestamp?: string;
    /**
     * Deleted Date time
     */
    deletedTimestamp?: string;
    /**
     * Resource name of the record
     */
    resourceName?: string;
    /**
     * Self lookup url
     */
    self?: string;
    /**
     * Updated Date time
     */
    updatedTimestamp?: string;
}

/**
 * Record of the service account
 */
export interface ServiceAccountRecordResponse {
    /**
     * Description of the service account
     */
    description?: string;
    /**
     * Name of the service account
     */
    displayName?: string;
    /**
     * Id of the service account
     */
    id?: string;
    /**
     * Type of account
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
}

/**
 * Stream governance configuration
 */
export interface StreamGovernanceConfigResponse {
    /**
     * Stream governance configuration
     */
    package?: string;
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
 * Metadata of the data record
 */
export interface TopicMetadataEntityResponse {
    /**
     * Resource name of the record
     */
    resourceName?: string;
    /**
     * Self lookup url
     */
    self?: string;
}

/**
 * Topics input config
 */
export interface TopicsInputConfigResponse {
    /**
     * Name of the topic input config
     */
    name?: string;
    /**
     * Value of the topic input config
     */
    value?: string;
}

/**
 * Partition Config spec of the topic record
 */
export interface TopicsRelatedLinkResponse {
    /**
     * Relationship of the topic
     */
    related?: string;
}

/**
 * Subscriber detail
 */
export interface UserDetailResponse {
    /**
     * AAD email address
     */
    aadEmail?: string;
    /**
     * Email address
     */
    emailAddress: string;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Last name
     */
    lastName?: string;
    /**
     * User principal name
     */
    userPrincipalName?: string;
}

/**
 * Record of the user
 */
export interface UserRecordResponse {
    /**
     * Auth type of the user
     */
    authType?: string;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Name of the user
     */
    fullName?: string;
    /**
     * Id of the user
     */
    id?: string;
    /**
     * Type of account
     */
    kind?: string;
    /**
     * Metadata of the record
     */
    metadata?: MetadataEntityResponse;
}
