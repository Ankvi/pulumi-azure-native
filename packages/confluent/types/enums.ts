export const AuthType = {
    SERVICE_ACCOUNT: "SERVICE_ACCOUNT",
    KAFKA_API_KEY: "KAFKA_API_KEY",
} as const;

/**
 * Kafka Auth Type
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

export const ConnectorClass = {
    AZUREBLOBSOURCE: "AZUREBLOBSOURCE",
    AZUREBLOBSINK: "AZUREBLOBSINK",
} as const;

/**
 * Connector Class
 */
export type ConnectorClass = (typeof ConnectorClass)[keyof typeof ConnectorClass];

export const ConnectorServiceType = {
    AzureBlobStorageSinkConnector: "AzureBlobStorageSinkConnector",
    AzureBlobStorageSourceConnector: "AzureBlobStorageSourceConnector",
    AzureCosmosDBSinkConnector: "AzureCosmosDBSinkConnector",
    AzureCosmosDBSourceConnector: "AzureCosmosDBSourceConnector",
    AzureSynapseAnalyticsSinkConnector: "AzureSynapseAnalyticsSinkConnector",
} as const;

/**
 * The connector service type.
 */
export type ConnectorServiceType = (typeof ConnectorServiceType)[keyof typeof ConnectorServiceType];

export const ConnectorStatus = {
    PROVISIONING: "PROVISIONING",
    RUNNING: "RUNNING",
    PAUSED: "PAUSED",
    FAILED: "FAILED",
} as const;

/**
 * Connector Status
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

export const ConnectorType = {
    SINK: "SINK",
    SOURCE: "SOURCE",
} as const;

/**
 * Connector Type
 */
export type ConnectorType = (typeof ConnectorType)[keyof typeof ConnectorType];

export const DataFormatType = {
    AVRO: "AVRO",
    JSON: "JSON",
    STRING: "STRING",
    BYTES: "BYTES",
    PROTOBUF: "PROTOBUF",
} as const;

/**
 * Kafka Output Data Format Type
 */
export type DataFormatType = (typeof DataFormatType)[keyof typeof DataFormatType];

export const Package = {
    ESSENTIALS: "ESSENTIALS",
    ADVANCED: "ADVANCED",
} as const;

/**
 * Stream governance configuration
 */
export type Package = (typeof Package)[keyof typeof Package];

export const PartnerConnectorType = {
    KafkaAzureBlobStorageSource: "KafkaAzureBlobStorageSource",
    KafkaAzureBlobStorageSink: "KafkaAzureBlobStorageSink",
    KafkaAzureCosmosDBSource: "KafkaAzureCosmosDBSource",
    KafkaAzureCosmosDBSink: "KafkaAzureCosmosDBSink",
    KafkaAzureSynapseAnalyticsSink: "KafkaAzureSynapseAnalyticsSink",
} as const;

/**
 * The partner connector type.
 */
export type PartnerConnectorType = (typeof PartnerConnectorType)[keyof typeof PartnerConnectorType];

export const SaaSOfferStatus = {
    Started: "Started",
    PendingFulfillmentStart: "PendingFulfillmentStart",
    InProgress: "InProgress",
    Subscribed: "Subscribed",
    Suspended: "Suspended",
    Reinstated: "Reinstated",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Unsubscribed: "Unsubscribed",
    Updating: "Updating",
} as const;

/**
 * SaaS Offer Status
 */
export type SaaSOfferStatus = (typeof SaaSOfferStatus)[keyof typeof SaaSOfferStatus];
