export const BrokerAuthenticationMethod = {
    /**
     * Custom authentication configuration.
     */
    Custom: "Custom",
    /**
     * ServiceAccountToken authentication configuration.
     */
    ServiceAccountToken: "ServiceAccountToken",
    /**
     * X.509 authentication configuration.
     */
    X509: "X509",
} as const;

/**
 * Custom authentication configuration.
 */
export type BrokerAuthenticationMethod = (typeof BrokerAuthenticationMethod)[keyof typeof BrokerAuthenticationMethod];

export const BrokerMemoryProfile = {
    /**
     * Tiny memory profile.
     */
    Tiny: "Tiny",
    /**
     * Low memory profile.
     */
    Low: "Low",
    /**
     * Medium memory profile.
     */
    Medium: "Medium",
    /**
     * High memory profile.
     */
    High: "High",
} as const;

/**
 * Memory profile of Broker.
 */
export type BrokerMemoryProfile = (typeof BrokerMemoryProfile)[keyof typeof BrokerMemoryProfile];

export const BrokerProtocolType = {
    /**
     * protocol broker
     */
    Mqtt: "Mqtt",
    /**
     * protocol websocket
     */
    WebSockets: "WebSockets",
} as const;

/**
 * Enable or disable websockets.
 */
export type BrokerProtocolType = (typeof BrokerProtocolType)[keyof typeof BrokerProtocolType];

export const BrokerResourceDefinitionMethods = {
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
 * Give access for a Broker method (i.e., Connect, Subscribe, or Publish).
 */
export type BrokerResourceDefinitionMethods = (typeof BrokerResourceDefinitionMethods)[keyof typeof BrokerResourceDefinitionMethods];

export const CertManagerIssuerKind = {
    /**
     * Issuer kind.
     */
    Issuer: "Issuer",
    /**
     * ClusterIssuer kind.
     */
    ClusterIssuer: "ClusterIssuer",
} as const;

/**
 * kind of issuer (Issuer or ClusterIssuer).
 */
export type CertManagerIssuerKind = (typeof CertManagerIssuerKind)[keyof typeof CertManagerIssuerKind];

export const CloudEventAttributeType = {
    /**
     * Propagate type
     */
    Propagate: "Propagate",
    /**
     * CreateOrRemap type
     */
    CreateOrRemap: "CreateOrRemap",
} as const;

/**
 * Cloud event mapping config.
 */
export type CloudEventAttributeType = (typeof CloudEventAttributeType)[keyof typeof CloudEventAttributeType];

export const DataLakeStorageAuthMethod = {
    /**
     * SystemAssignedManagedIdentity type
     */
    SystemAssignedManagedIdentity: "SystemAssignedManagedIdentity",
    /**
     * UserAssignedManagedIdentity type
     */
    UserAssignedManagedIdentity: "UserAssignedManagedIdentity",
    /**
     * AccessToken Option
     */
    AccessToken: "AccessToken",
} as const;

/**
 * Mode of Authentication.
 */
export type DataLakeStorageAuthMethod = (typeof DataLakeStorageAuthMethod)[keyof typeof DataLakeStorageAuthMethod];

export const DataflowEndpointAuthenticationSaslType = {
    /**
     * PLAIN Type
     */
    Plain: "Plain",
    /**
     * SCRAM_SHA_256 Type
     */
    ScramSha256: "ScramSha256",
    /**
     * SCRAM_SHA_512 Type
     */
    ScramSha512: "ScramSha512",
} as const;

/**
 * Type of SASL authentication. Can be PLAIN, SCRAM-SHA-256, or SCRAM-SHA-512.
 */
export type DataflowEndpointAuthenticationSaslType = (typeof DataflowEndpointAuthenticationSaslType)[keyof typeof DataflowEndpointAuthenticationSaslType];

export const DataflowEndpointFabricPathType = {
    /**
     * FILES Type
     */
    Files: "Files",
    /**
     * TABLES Type
     */
    Tables: "Tables",
} as const;

/**
 * Type of location of the data in the workspace. Can be either tables or files.
 */
export type DataflowEndpointFabricPathType = (typeof DataflowEndpointFabricPathType)[keyof typeof DataflowEndpointFabricPathType];

export const DataflowEndpointKafkaAcks = {
    /**
     * ZERO Option
     */
    Zero: "Zero",
    /**
     * ONE Option
     */
    One: "One",
    /**
     * ALL Option
     */
    All: "All",
} as const;

/**
 * Kafka acks. Can be all, one, or zero. No effect if the endpoint is used as a source.
 */
export type DataflowEndpointKafkaAcks = (typeof DataflowEndpointKafkaAcks)[keyof typeof DataflowEndpointKafkaAcks];

export const DataflowEndpointKafkaCompression = {
    /**
     * NONE Option
     */
    None: "None",
    /**
     * Gzip Option
     */
    Gzip: "Gzip",
    /**
     * SNAPPY Option
     */
    Snappy: "Snappy",
    /**
     * LZ4 Option
     */
    Lz4: "Lz4",
} as const;

/**
 * Compression. Can be none, gzip, lz4, or snappy. No effect if the endpoint is used as a source.
 */
export type DataflowEndpointKafkaCompression = (typeof DataflowEndpointKafkaCompression)[keyof typeof DataflowEndpointKafkaCompression];

export const DataflowEndpointKafkaPartitionStrategy = {
    /**
     * Default: Assigns messages to random partitions, using a round-robin algorithm.
     */
    Default: "Default",
    /**
     * Static: Assigns messages to a fixed partition number that's derived from the instance ID of the dataflow.
     */
    Static: "Static",
    /**
     * TOPIC Option
     */
    Topic: "Topic",
    /**
     * PROPERTY Option
     */
    Property: "Property",
} as const;

/**
 * Partition handling strategy. Can be default or static. No effect if the endpoint is used as a source.
 */
export type DataflowEndpointKafkaPartitionStrategy = (typeof DataflowEndpointKafkaPartitionStrategy)[keyof typeof DataflowEndpointKafkaPartitionStrategy];

export const DataflowMappingType = {
    /**
     * New Properties type
     */
    NewProperties: "NewProperties",
    /**
     * Rename type
     */
    Rename: "Rename",
    /**
     * Compute type
     */
    Compute: "Compute",
    /**
     * Pass-through type
     */
    PassThrough: "PassThrough",
    /**
     * Built in function type
     */
    BuiltInFunction: "BuiltInFunction",
} as const;

/**
 * Type of transformation.
 */
export type DataflowMappingType = (typeof DataflowMappingType)[keyof typeof DataflowMappingType];

export const EndpointType = {
    /**
     * Azure Data Explorer Type
     */
    DataExplorer: "DataExplorer",
    /**
     * Azure Data Lake Type
     */
    DataLakeStorage: "DataLakeStorage",
    /**
     * Microsoft Fabric Type
     */
    FabricOneLake: "FabricOneLake",
    /**
     * Kafka Type
     */
    Kafka: "Kafka",
    /**
     * Local Storage Type
     */
    LocalStorage: "LocalStorage",
    /**
     * Broker Type
     */
    Mqtt: "Mqtt",
} as const;

/**
 * Endpoint Type.
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

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

export const FilterType = {
    /**
     * Filter type
     */
    Filter: "Filter",
} as const;

/**
 * The type of dataflow operation.
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

export const KafkaAuthMethod = {
    /**
     * SystemAssignedManagedIdentity type
     */
    SystemAssignedManagedIdentity: "SystemAssignedManagedIdentity",
    /**
     * UserAssignedManagedIdentity type
     */
    UserAssignedManagedIdentity: "UserAssignedManagedIdentity",
    /**
     * Sasl Option
     */
    Sasl: "Sasl",
    /**
     * x509Certificate Option
     */
    X509Certificate: "X509Certificate",
    /**
     * Anonymous Option
     */
    Anonymous: "Anonymous",
} as const;

/**
 * Mode of Authentication.
 */
export type KafkaAuthMethod = (typeof KafkaAuthMethod)[keyof typeof KafkaAuthMethod];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MqttAuthMethod = {
    /**
     * SystemAssignedManagedIdentity type
     */
    SystemAssignedManagedIdentity: "SystemAssignedManagedIdentity",
    /**
     * UserAssignedManagedIdentity type
     */
    UserAssignedManagedIdentity: "UserAssignedManagedIdentity",
    /**
     * ServiceAccountToken Option
     */
    ServiceAccountToken: "ServiceAccountToken",
    /**
     * x509Certificate Option
     */
    X509Certificate: "X509Certificate",
    /**
     * Anonymous Option
     */
    Anonymous: "Anonymous",
} as const;

/**
 * Mode of Authentication.
 */
export type MqttAuthMethod = (typeof MqttAuthMethod)[keyof typeof MqttAuthMethod];

export const MqttRetainType = {
    /**
     * Retain the messages.
     */
    Keep: "Keep",
    /**
     * Never retain messages.
     */
    Never: "Never",
} as const;

/**
 * Whether or not to keep the retain setting.
 */
export type MqttRetainType = (typeof MqttRetainType)[keyof typeof MqttRetainType];

export const OperationType = {
    /**
     * Dataflow Source Operation
     */
    Source: "Source",
    /**
     * Dataflow Destination Operation
     */
    Destination: "Destination",
    /**
     * Dataflow BuiltIn Transformation Operation
     */
    BuiltInTransformation: "BuiltInTransformation",
} as const;

/**
 * Type of operation.
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

export const OperationalMode = {
    /**
     * Enabled is equivalent to True
     */
    Enabled: "Enabled",
    /**
     * Disabled is equivalent to False.
     */
    Disabled: "Disabled",
} as const;

/**
 * Mode for TLS.
 */
export type OperationalMode = (typeof OperationalMode)[keyof typeof OperationalMode];

export const OperatorValues = {
    /**
     * In operator.
     */
    In: "In",
    /**
     * NotIn operator.
     */
    NotIn: "NotIn",
    /**
     * Exists operator.
     */
    Exists: "Exists",
    /**
     * DoesNotExist operator.
     */
    DoesNotExist: "DoesNotExist",
} as const;

/**
 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
 */
export type OperatorValues = (typeof OperatorValues)[keyof typeof OperatorValues];

export const PrivateKeyAlgorithm = {
    /**
     * Algorithm - ec256.
     */
    Ec256: "Ec256",
    /**
     * Algorithm - ec384.
     */
    Ec384: "Ec384",
    /**
     * Algorithm - ec521.
     */
    Ec521: "Ec521",
    /**
     * Algorithm - ed25519.
     */
    Ed25519: "Ed25519",
    /**
     * Algorithm - rsa2048.
     */
    Rsa2048: "Rsa2048",
    /**
     * Algorithm - rsa4096.
     */
    Rsa4096: "Rsa4096",
    /**
     * Algorithm - rsa8192.
     */
    Rsa8192: "Rsa8192",
} as const;

/**
 * algorithm for private key.
 */
export type PrivateKeyAlgorithm = (typeof PrivateKeyAlgorithm)[keyof typeof PrivateKeyAlgorithm];

export const PrivateKeyRotationPolicy = {
    /**
     * Rotation Policy - Always.
     */
    Always: "Always",
    /**
     * Rotation Policy - Never.
     */
    Never: "Never",
} as const;

/**
 * cert-manager private key rotationPolicy.
 */
export type PrivateKeyRotationPolicy = (typeof PrivateKeyRotationPolicy)[keyof typeof PrivateKeyRotationPolicy];

export const ServiceType = {
    /**
     * Cluster IP Service.
     */
    ClusterIp: "ClusterIp",
    /**
     * Load Balancer Service.
     */
    LoadBalancer: "LoadBalancer",
    /**
     * Node Port Service.
     */
    NodePort: "NodePort",
} as const;

/**
 * Kubernetes Service type of this listener.
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

export const SourceSerializationFormat = {
    /**
     * JSON Format
     */
    Json: "Json",
} as const;

/**
 * Content is a JSON Schema. Allowed: JSON Schema/draft-7.
 */
export type SourceSerializationFormat = (typeof SourceSerializationFormat)[keyof typeof SourceSerializationFormat];

export const StateStoreResourceDefinitionMethods = {
    /**
     * Get/KeyNotify from Store
     */
    Read: "Read",
    /**
     * Set/Delete in Store
     */
    Write: "Write",
    /**
     * Allowed all operations on Store - Get/KeyNotify/Set/Delete
     */
    ReadWrite: "ReadWrite",
} as const;

/**
 * Give access for `Read`, `Write` and `ReadWrite` access level.
 */
export type StateStoreResourceDefinitionMethods = (typeof StateStoreResourceDefinitionMethods)[keyof typeof StateStoreResourceDefinitionMethods];

export const StateStoreResourceKeyTypes = {
    /**
     * Key type - pattern
     */
    Pattern: "Pattern",
    /**
     * Key type - string
     */
    String: "String",
    /**
     * Key type - binary
     */
    Binary: "Binary",
} as const;

/**
 * Allowed keyTypes pattern, string, binary. The key type used for matching, for example pattern tries to match the key to a glob-style pattern and string checks key is equal to value provided in keys.
 */
export type StateStoreResourceKeyTypes = (typeof StateStoreResourceKeyTypes)[keyof typeof StateStoreResourceKeyTypes];

export const SubscriberMessageDropStrategy = {
    /**
     * Messages are never dropped.
     */
    None: "None",
    /**
     * The oldest message is dropped.
     */
    DropOldest: "DropOldest",
} as const;

/**
 * The strategy to use for dropping messages from the queue.
 */
export type SubscriberMessageDropStrategy = (typeof SubscriberMessageDropStrategy)[keyof typeof SubscriberMessageDropStrategy];

export const TlsCertMethodMode = {
    /**
     * Automatic TLS server certificate configuration.
     */
    Automatic: "Automatic",
    /**
     * Manual TLS server certificate configuration.
     */
    Manual: "Manual",
} as const;

/**
 * Mode of TLS server certificate management.
 */
export type TlsCertMethodMode = (typeof TlsCertMethodMode)[keyof typeof TlsCertMethodMode];

export const TransformationSerializationFormat = {
    /**
     * Delta Format
     */
    Delta: "Delta",
    /**
     * JSON Format
     */
    Json: "Json",
    /**
     * Parquet Format
     */
    Parquet: "Parquet",
} as const;

/**
 * Serialization format. Optional; defaults to JSON. Allowed value JSON Schema/draft-7, Parquet. Default: Json
 */
export type TransformationSerializationFormat = (typeof TransformationSerializationFormat)[keyof typeof TransformationSerializationFormat];
