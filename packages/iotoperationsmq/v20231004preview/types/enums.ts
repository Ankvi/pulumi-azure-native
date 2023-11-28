export const BrokerMemoryProfile = {
    /**
     * Tiny memory profile.
     */
    Tiny: "tiny",
    /**
     * Low memory profile.
     */
    Low: "low",
    /**
     * Medium memory profile.
     */
    Medium: "medium",
    /**
     * High memory profile.
     */
    High: "high",
} as const;

/**
 * Memory profile of broker.
 */
export type BrokerMemoryProfile = (typeof BrokerMemoryProfile)[keyof typeof BrokerMemoryProfile];

export const DataLakeDatabaseFormat = {
    /**
     * Delta format.
     */
    Delta: "delta",
    /**
     * Parquet format.
     */
    Parquet: "parquet",
} as const;

/**
 * DataLake database format to use.
 */
export type DataLakeDatabaseFormat = (typeof DataLakeDatabaseFormat)[keyof typeof DataLakeDatabaseFormat];

export const DeltaTableFormatEnum = {
    /**
     * Bool format
     */
    Boolean: "boolean",
    /**
     * Signed integer 8
     */
    Int8: "int8",
    /**
     * Signed integer 16
     */
    Int16: "int16",
    /**
     * Signed integer 32
     */
    Int32: "int32",
    /**
     * Unsigned integer 8
     */
    UInt8: "uInt8",
    /**
     * Unsigned integer 16
     */
    UInt16: "uInt16",
    /**
     * Unsigned integer 32
     */
    UInt32: "uInt32",
    /**
     * Unsigned integer 64
     */
    UInt64: "uInt64",
    /**
     * Float 16
     */
    Float16: "float16",
    /**
     * Float 32
     */
    Float32: "float32",
    /**
     * Float 64
     */
    Float64: "float64",
    /**
     * Date 32
     */
    Date32: "date32",
    /**
     * Date 64
     */
    Date64: "date64",
    /**
     * Binary data
     */
    Binary: "binary",
    /**
     * UTF8 format
     */
    Utf8: "utf8",
} as const;

/**
 * Delta table format supported.
 */
export type DeltaTableFormatEnum = (typeof DeltaTableFormatEnum)[keyof typeof DeltaTableFormatEnum];

export const ExtendedLocationType = {
    /**
     * CustomLocation type
     */
    CustomLocation: "CustomLocation",
} as const;

/**
 * Type of ExtendedLocation.
 */
export type ExtendedLocationType = (typeof ExtendedLocationType)[keyof typeof ExtendedLocationType];

export const FabricPathType = {
    /**
     * Fabric path type is Files.
     */
    Files: "files",
    /**
     * Fabric path type is Tables.
     */
    Tables: "tables",
} as const;

/**
 * Fabric path type to use.
 */
export type FabricPathType = (typeof FabricPathType)[keyof typeof FabricPathType];

export const KafkaAcks = {
    /**
     * Kafka acks zero.
     */
    Zero: "zero",
    /**
     * Kafka acks one.
     */
    One: "one",
    /**
     * Kafka acks all.
     */
    All: "all",
} as const;

/**
 * The kafka acks to use.
 */
export type KafkaAcks = (typeof KafkaAcks)[keyof typeof KafkaAcks];

export const KafkaMessageCompressionType = {
    /**
     * No Kafka message compression.
     */
    None: "none",
    /**
     * Gzip Kafka message compression.
     */
    Gzip: "gzip",
    /**
     * Snappy Kafka message compression.
     */
    Snappy: "snappy",
    /**
     * Lz4 Kafka message compression.
     */
    Lz4: "lz4",
} as const;

/**
 * The compression to use for kafka messages.
 */
export type KafkaMessageCompressionType = (typeof KafkaMessageCompressionType)[keyof typeof KafkaMessageCompressionType];

export const KafkaPartitionStrategy = {
    /**
     * Default partition strategy.
     */
    Default: "default",
    /**
     * Static partition strategy.
     */
    Static: "static",
    /**
     * Topic partition strategy.
     */
    Topic: "topic",
    /**
     * Property partition strategy.
     */
    Property: "property",
} as const;

/**
 * The partition strategy to use for Kafka.
 */
export type KafkaPartitionStrategy = (typeof KafkaPartitionStrategy)[keyof typeof KafkaPartitionStrategy];

export const KafkaSaslType = {
    /**
     * Sasl Plain authentication.
     */
    Plain: "plain",
    /**
     * Sasl ScramSha256 authentication.
     */
    ScramSha256: "scramSha256",
    /**
     * Sasl ScramSha512 authentication.
     */
    ScramSha512: "scramSha512",
} as const;

/**
 * Sasl Mechanism for remote broker authentication.
 */
export type KafkaSaslType = (typeof KafkaSaslType)[keyof typeof KafkaSaslType];

export const MqttBridgeRemoteBrokerProtocol = {
    /**
     * MQTT protocol.
     */
    Mqtt: "mqtt",
    /**
     * MQTT over WebSocket protocol.
     */
    WebSocket: "webSocket",
} as const;

/**
 * Protocol for remote connection.
 */
export type MqttBridgeRemoteBrokerProtocol = (typeof MqttBridgeRemoteBrokerProtocol)[keyof typeof MqttBridgeRemoteBrokerProtocol];

export const MqttBridgeRouteDirection = {
    /**
     * Remote to Local Broker.
     */
    RemoteToLocal: "remote-to-local",
    /**
     * Local to Remote Broker.
     */
    LocalToRemote: "local-to-remote",
} as const;

/**
 * Direction of the route.
 */
export type MqttBridgeRouteDirection = (typeof MqttBridgeRouteDirection)[keyof typeof MqttBridgeRouteDirection];

export const MqttProtocol = {
    /**
     * Mqttv3
     */
    V3: "v3",
    /**
     * Mqttv5
     */
    V5: "v5",
} as const;

/**
 * The protocol to use for connecting with Brokers.
 */
export type MqttProtocol = (typeof MqttProtocol)[keyof typeof MqttProtocol];

export const ResourceInfoDefinitionMethods = {
    /**
     * Allowed Connecting to Broker
     */
    Connect: "Connect",
    /**
     * Allowed Publishing to Broker
     */
    Publish: "Publish",
    /**
     * Allowed Subscribing to Broker
     */
    Subscribe: "Subscribe",
} as const;

/**
 * The type of action that the clients can perform on the broker: Connect, Publish or Subscribe.
 */
export type ResourceInfoDefinitionMethods = (typeof ResourceInfoDefinitionMethods)[keyof typeof ResourceInfoDefinitionMethods];

export const RunMode = {
    /**
     * Automatically provision Frontend and Backend pods.
     */
    Auto: "auto",
    /**
     * Use Cardinality to set Frontend and Backend pods.
     */
    Distributed: "distributed",
} as const;

/**
 * The Running Mode of the Broker Deployment.
 */
export type RunMode = (typeof RunMode)[keyof typeof RunMode];

export const ServiceType = {
    /**
     * Cluster IP Service.
     */
    ClusterIp: "clusterIp",
    /**
     * Load Balancer Service.
     */
    LoadBalancer: "loadBalancer",
    /**
     * Node Port Service.
     */
    NodePort: "nodePort",
} as const;

/**
 * The Kubernetes Service type to deploy for Listener.
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];
