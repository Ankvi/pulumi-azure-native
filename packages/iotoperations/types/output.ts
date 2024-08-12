import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Broker Advanced Settings
 */
export interface AdvancedSettingsResponse {
    /**
     * Configurations related to All Clients.
     */
    clients?: ClientConfigResponse;
    /**
     * The setting to enable or disable encryption of internal Traffic.
     */
    encryptInternalTraffic?: string;
    /**
     * Certificate rotation and private key configuration.
     */
    internalCerts?: CertManagerCertOptionsResponse;
}
/**
 * advancedSettingsResponseProvideDefaults sets the appropriate defaults for AdvancedSettingsResponse
 */
export function advancedSettingsResponseProvideDefaults(val: AdvancedSettingsResponse): AdvancedSettingsResponse {
    return {
        ...val,
        clients: (val.clients ? clientConfigResponseProvideDefaults(val.clients) : undefined),
        encryptInternalTraffic: (val.encryptInternalTraffic) ?? "Enabled",
    };
}

/**
 * Broker AuthorizationConfig properties
 */
export interface AuthorizationConfigResponse {
    /**
     * Enable caching of the authorization rules.
     */
    cache?: string;
    /**
     * The authorization rules to follow. If no rule is set, but Authorization Resource is used that would mean DenyAll.
     */
    rules?: AuthorizationRuleResponse[];
}
/**
 * authorizationConfigResponseProvideDefaults sets the appropriate defaults for AuthorizationConfigResponse
 */
export function authorizationConfigResponseProvideDefaults(val: AuthorizationConfigResponse): AuthorizationConfigResponse {
    return {
        ...val,
        cache: (val.cache) ?? "Enabled",
    };
}

/**
 * AuthorizationConfig Rule Properties
 */
export interface AuthorizationRuleResponse {
    /**
     * Give access to Broker methods and topics.
     */
    brokerResources: BrokerResourceRuleResponse[];
    /**
     * Give access to clients based on the following properties.
     */
    principals: PrincipalDefinitionResponse;
    /**
     * Give access to state store resources.
     */
    stateStoreResources?: StateStoreResourceRuleResponse[];
}

/**
 * Automatic TLS server certificate management with cert-manager
 */
export interface AutomaticCertMethodResponse {
    /**
     * Lifetime of certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
     */
    duration?: string;
    /**
     * cert-manager issuerRef.
     */
    issuerRef: CertManagerIssuerRefResponse;
    /**
     * Type of certificate private key.
     */
    privateKey?: CertManagerPrivateKeyResponse;
    /**
     * When to begin renewing certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
     */
    renewBefore?: string;
    /**
     * Additional Subject Alternative Names (SANs) to include in the certificate.
     */
    san?: SanForCertResponse;
    /**
     * Secret for storing server certificate. Any existing data will be overwritten. This is a reference to the secret through an identifying name, not the secret itself.
     */
    secretRef?: string;
}
/**
 * automaticCertMethodResponseProvideDefaults sets the appropriate defaults for AutomaticCertMethodResponse
 */
export function automaticCertMethodResponseProvideDefaults(val: AutomaticCertMethodResponse): AutomaticCertMethodResponse {
    return {
        ...val,
        issuerRef: certManagerIssuerRefResponseProvideDefaults(val.issuerRef),
    };
}

/**
 * Desired properties of the backend instances of the broker
 */
export interface BackendChainResponse {
    /**
     * The desired number of physical backend partitions.
     */
    partitions: number;
    /**
     * The desired numbers of backend replicas (pods) in a physical partition.
     */
    redundancyFactor: number;
    /**
     * Number of logical backend workers per replica (pod).
     */
    workers?: number;
}
/**
 * backendChainResponseProvideDefaults sets the appropriate defaults for BackendChainResponse
 */
export function backendChainResponseProvideDefaults(val: BackendChainResponse): BackendChainResponse {
    return {
        ...val,
        workers: (val.workers) ?? 1,
    };
}

/**
 * Batching configuration
 */
export interface BatchingConfigurationResponse {
    /**
     * Batching latency in seconds.
     */
    latencySeconds?: number;
    /**
     * Maximum number of messages in a batch.
     */
    maxMessages?: number;
}
/**
 * batchingConfigurationResponseProvideDefaults sets the appropriate defaults for BatchingConfigurationResponse
 */
export function batchingConfigurationResponseProvideDefaults(val: BatchingConfigurationResponse): BatchingConfigurationResponse {
    return {
        ...val,
        latencySeconds: (val.latencySeconds) ?? 60,
        maxMessages: (val.maxMessages) ?? 100000,
    };
}

/**
 * BrokerAuthentication Resource properties
 */
export interface BrokerAuthenticationPropertiesResponse {
    /**
     * Defines a set of Broker authentication methods to be used on `BrokerListeners`. For each array element one authenticator type supported.
     */
    authenticationMethods: BrokerAuthenticatorMethodsResponse[];
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

/**
 * Custom Authentication properties
 */
export interface BrokerAuthenticatorCustomAuthResponse {
    /**
     * X509 Custom Auth type details.
     */
    x509: X509ManualCertificateResponse;
}

/**
 * Custom method for BrokerAuthentication
 */
export interface BrokerAuthenticatorMethodCustomResponse {
    /**
     * Optional authentication needed for authenticating with the custom authentication server.
     */
    auth?: BrokerAuthenticatorCustomAuthResponse;
    /**
     * Optional CA certificate for validating the custom authentication server's certificate.
     */
    caCertConfigMap?: string;
    /**
     * Endpoint of the custom authentication server. Must be an HTTPS endpoint.
     */
    endpoint: string;
    /**
     * Additional HTTP headers to pass to the custom authentication server.
     */
    headers?: {[key: string]: string};
}

/**
 * Service Account Token for BrokerAuthentication
 */
export interface BrokerAuthenticatorMethodSatResponse {
    /**
     * List of allowed audience.
     */
    audiences: string[];
}

/**
 * BrokerAuthenticatorMethodX509Attributes properties.
 */
export interface BrokerAuthenticatorMethodX509AttributesResponse {
    /**
     * Attributes object.
     */
    attributes: {[key: string]: string};
    /**
     * Subject of the X509 attribute.
     */
    subject: string;
}

/**
 * X509 for BrokerAuthentication.
 */
export interface BrokerAuthenticatorMethodX509Response {
    /**
     * X509 authorization attributes properties.
     */
    authorizationAttributes?: {[key: string]: BrokerAuthenticatorMethodX509AttributesResponse};
    /**
     * Name of the trusted client ca cert resource.
     */
    trustedClientCaCert?: string;
}
/**
 * brokerAuthenticatorMethodX509ResponseProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodX509Response
 */
export function brokerAuthenticatorMethodX509ResponseProvideDefaults(val: BrokerAuthenticatorMethodX509Response): BrokerAuthenticatorMethodX509Response {
    return {
        ...val,
        trustedClientCaCert: (val.trustedClientCaCert) ?? "client-ca",
    };
}

/**
 * Set of broker authentication policies. Only one method is supported for each entry.
 */
export interface BrokerAuthenticatorMethodsResponse {
    /**
     * Custom authentication configuration.
     */
    custom?: BrokerAuthenticatorMethodCustomResponse;
    /**
     * Custom authentication configuration.
     */
    method: string;
    /**
     * ServiceAccountToken authentication configuration.
     */
    serviceAccountToken?: BrokerAuthenticatorMethodSatResponse;
    /**
     * X.509 authentication configuration.
     */
    x509Credentials?: BrokerAuthenticatorMethodX509Response;
}
/**
 * brokerAuthenticatorMethodsResponseProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodsResponse
 */
export function brokerAuthenticatorMethodsResponseProvideDefaults(val: BrokerAuthenticatorMethodsResponse): BrokerAuthenticatorMethodsResponse {
    return {
        ...val,
        x509Credentials: (val.x509Credentials ? brokerAuthenticatorMethodX509ResponseProvideDefaults(val.x509Credentials) : undefined),
    };
}

/**
 * BrokerAuthorization Resource properties
 */
export interface BrokerAuthorizationPropertiesResponse {
    /**
     * The list of authorization policies supported by the Authorization Resource.
     */
    authorizationPolicies: AuthorizationConfigResponse;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}
/**
 * brokerAuthorizationPropertiesResponseProvideDefaults sets the appropriate defaults for BrokerAuthorizationPropertiesResponse
 */
export function brokerAuthorizationPropertiesResponseProvideDefaults(val: BrokerAuthorizationPropertiesResponse): BrokerAuthorizationPropertiesResponse {
    return {
        ...val,
        authorizationPolicies: authorizationConfigResponseProvideDefaults(val.authorizationPolicies),
    };
}

/**
 * Broker Diagnostic Setting properties
 */
export interface BrokerDiagnosticsResponse {
    /**
     * Diagnostic log settings for the resource.
     */
    logs?: DiagnosticsLogsResponse;
    /**
     * The metrics settings for the resource.
     */
    metrics?: MetricsResponse;
    /**
     * The self check properties.
     */
    selfCheck?: SelfCheckResponse;
    /**
     * The trace properties.
     */
    traces?: TracesResponse;
}
/**
 * brokerDiagnosticsResponseProvideDefaults sets the appropriate defaults for BrokerDiagnosticsResponse
 */
export function brokerDiagnosticsResponseProvideDefaults(val: BrokerDiagnosticsResponse): BrokerDiagnosticsResponse {
    return {
        ...val,
        logs: (val.logs ? diagnosticsLogsResponseProvideDefaults(val.logs) : undefined),
        metrics: (val.metrics ? metricsResponseProvideDefaults(val.metrics) : undefined),
        selfCheck: (val.selfCheck ? selfCheckResponseProvideDefaults(val.selfCheck) : undefined),
        traces: (val.traces ? tracesResponseProvideDefaults(val.traces) : undefined),
    };
}

/**
 * Defines a Broker listener. A listener is a collection of ports on which the broker accepts connections from clients.
 */
export interface BrokerListenerPropertiesResponse {
    /**
     * Broker associated with this listener.
     */
    brokerRef: string;
    /**
     * Ports on which this listener accepts client connections.
     */
    ports: ListenerPortResponse[];
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * Kubernetes Service name of this listener.
     */
    serviceName?: string;
    /**
     * Kubernetes Service type of this listener.
     */
    serviceType?: string;
}
/**
 * brokerListenerPropertiesResponseProvideDefaults sets the appropriate defaults for BrokerListenerPropertiesResponse
 */
export function brokerListenerPropertiesResponseProvideDefaults(val: BrokerListenerPropertiesResponse): BrokerListenerPropertiesResponse {
    return {
        ...val,
        serviceName: (val.serviceName) ?? "aio-mq-dmqtt-frontend",
        serviceType: (val.serviceType) ?? "ClusterIp",
    };
}

/**
 * Broker Resource properties
 */
export interface BrokerPropertiesResponse {
    /**
     * Advanced settings of Broker.
     */
    advanced?: AdvancedSettingsResponse;
    /**
     * The cardinality details of the broker.
     */
    cardinality?: CardinalityResponse;
    /**
     * Spec defines the desired identities of Broker diagnostics settings.
     */
    diagnostics?: BrokerDiagnosticsResponse;
    /**
     * Settings of Disk Backed Message Buffer.
     */
    diskBackedMessageBuffer?: DiskBackedMessageBufferResponse;
    /**
     * This setting controls whether Kubernetes CPU resource limits are requested. Increasing the number of replicas or workers proportionally increases the amount of CPU resources requested. If this setting is enabled and there are insufficient CPU resources, an error will be emitted.
     */
    generateResourceLimits?: GenerateResourceLimitsResponse;
    /**
     * Memory profile of Broker.
     */
    memoryProfile?: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}
/**
 * brokerPropertiesResponseProvideDefaults sets the appropriate defaults for BrokerPropertiesResponse
 */
export function brokerPropertiesResponseProvideDefaults(val: BrokerPropertiesResponse): BrokerPropertiesResponse {
    return {
        ...val,
        advanced: (val.advanced ? advancedSettingsResponseProvideDefaults(val.advanced) : undefined),
        cardinality: (val.cardinality ? cardinalityResponseProvideDefaults(val.cardinality) : undefined),
        diagnostics: (val.diagnostics ? brokerDiagnosticsResponseProvideDefaults(val.diagnostics) : undefined),
        generateResourceLimits: (val.generateResourceLimits ? generateResourceLimitsResponseProvideDefaults(val.generateResourceLimits) : undefined),
        memoryProfile: (val.memoryProfile) ?? "Medium",
    };
}

/**
 * Broker Resource Rule properties. This defines the objects that represent the actions or topics, such as - method.Connect, method.Publish, etc.
 */
export interface BrokerResourceRuleResponse {
    /**
     * Give access for a Broker method (i.e., Connect, Subscribe, or Publish).
     */
    method: string;
    /**
     * A list of topics or topic patterns that match the topics that the clients can publish or subscribe to. This subfield is required if the method is Publish or Subscribe.
     */
    topics?: string[];
}

/**
 * Cardinality properties
 */
export interface CardinalityResponse {
    /**
     * The backend broker desired properties
     */
    backendChain: BackendChainResponse;
    /**
     * The frontend desired properties
     */
    frontend: FrontendResponse;
}
/**
 * cardinalityResponseProvideDefaults sets the appropriate defaults for CardinalityResponse
 */
export function cardinalityResponseProvideDefaults(val: CardinalityResponse): CardinalityResponse {
    return {
        ...val,
        backendChain: backendChainResponseProvideDefaults(val.backendChain),
        frontend: frontendResponseProvideDefaults(val.frontend),
    };
}

/**
 * Cert Manager Cert properties
 */
export interface CertManagerCertOptionsResponse {
    /**
     * Lifetime of certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
     */
    duration: string;
    /**
     * Configuration of certificate private key.
     */
    privateKey: CertManagerPrivateKeyResponse;
    /**
     * When to begin renewing certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
     */
    renewBefore: string;
}

/**
 * Cert-Manager issuerRef properties
 */
export interface CertManagerIssuerRefResponse {
    /**
     * group of issuer.
     */
    apiGroup: string;
    /**
     * kind of issuer (Issuer or ClusterIssuer).
     */
    kind: string;
    /**
     * name of issuer.
     */
    name: string;
}
/**
 * certManagerIssuerRefResponseProvideDefaults sets the appropriate defaults for CertManagerIssuerRefResponse
 */
export function certManagerIssuerRefResponseProvideDefaults(val: CertManagerIssuerRefResponse): CertManagerIssuerRefResponse {
    return {
        ...val,
        apiGroup: (val.apiGroup) ?? "cert-manager.io",
    };
}

/**
 * Cert Manager private key properties
 */
export interface CertManagerPrivateKeyResponse {
    /**
     * algorithm for private key.
     */
    algorithm: string;
    /**
     * cert-manager private key rotationPolicy.
     */
    rotationPolicy: string;
}

/**
 * The settings of Client Config.
 */
export interface ClientConfigResponse {
    /**
     * Upper bound of a client's Keep Alive, in seconds.
     */
    maxKeepAliveSeconds?: number;
    /**
     * Upper bound of Message Expiry Interval, in seconds.
     */
    maxMessageExpirySeconds?: number;
    /**
     * Max message size for a packet in Bytes.
     */
    maxPacketSizeBytes?: number;
    /**
     * Upper bound of Receive Maximum that a client can request in the CONNECT packet.
     */
    maxReceiveMaximum?: number;
    /**
     * Upper bound of Session Expiry Interval, in seconds.
     */
    maxSessionExpirySeconds?: number;
    /**
     * The limit on the number of queued messages for a subscriber.
     */
    subscriberQueueLimit?: SubscriberQueueLimitResponse;
}
/**
 * clientConfigResponseProvideDefaults sets the appropriate defaults for ClientConfigResponse
 */
export function clientConfigResponseProvideDefaults(val: ClientConfigResponse): ClientConfigResponse {
    return {
        ...val,
        subscriberQueueLimit: (val.subscriberQueueLimit ? subscriberQueueLimitResponseProvideDefaults(val.subscriberQueueLimit) : undefined),
    };
}

/**
 * DataFlow BuiltIn Transformation dataset properties
 */
export interface DataFlowBuiltInTransformationDatasetResponse {
    /**
     * A user provided optional description of the dataset.
     */
    description?: string;
    /**
     * Condition to enrich data from Broker State Store. Example: $1 < 0 || $1 > $2 (Assuming inputs section $1 and $2 are provided)
     */
    expression?: string;
    /**
     * List of fields for enriching from the Broker State Store.
     */
    inputs: string[];
    /**
     * The key of the dataset.
     */
    key: string;
    /**
     * The reference to the schema that describes the dataset. Allowed: JSON Schema/draft-7.
     */
    schemaRef?: string;
}

/**
 * DataFlow BuiltIn Transformation filter properties
 */
export interface DataFlowBuiltInTransformationFilterResponse {
    /**
     * A user provided optional description of the filter.
     */
    description?: string;
    /**
     * Condition to filter data. Can reference input fields with {n} where n is the index of the input field starting from 1. Example: $1 < 0 || $1 > $2 (Assuming inputs section $1 and $2 are provided)
     */
    expression: string;
    /**
     * List of fields for filtering in JSON path expression.
     */
    inputs: string[];
    /**
     * The type of dataflow operation.
     */
    type?: string;
}
/**
 * dataFlowBuiltInTransformationFilterResponseProvideDefaults sets the appropriate defaults for DataFlowBuiltInTransformationFilterResponse
 */
export function dataFlowBuiltInTransformationFilterResponseProvideDefaults(val: DataFlowBuiltInTransformationFilterResponse): DataFlowBuiltInTransformationFilterResponse {
    return {
        ...val,
        type: (val.type) ?? "Filter",
    };
}

/**
 * DataFlow BuiltIn Transformation map properties
 */
export interface DataFlowBuiltInTransformationMapResponse {
    /**
     * A user provided optional description of the mapping function.
     */
    description?: string;
    /**
     * Modify the inputs field(s) to the final output field. Example: $1 * 2.2 (Assuming inputs section $1 is provided)
     */
    expression?: string;
    /**
     * List of fields for mapping in JSON path expression.
     */
    inputs: string[];
    /**
     * Where and how the input fields to be organized in the output record.
     */
    output: string;
    /**
     * Type of transformation.
     */
    type?: string;
}

/**
 * DataFlow BuiltIn Transformation properties
 */
export interface DataFlowBuiltInTransformationResponse {
    /**
     * Enrich data from Broker State Store. Dataset references a key in Broker State Store.
     */
    datasets?: DataFlowBuiltInTransformationDatasetResponse[];
    /**
     * Filters input record or datapoints based on condition.
     */
    filter?: DataFlowBuiltInTransformationFilterResponse[];
    /**
     * Maps input to output message.
     */
    map?: DataFlowBuiltInTransformationMapResponse[];
    /**
     * Reference to the schema that describes the output of the transformation.
     */
    schemaRef?: string;
    /**
     * Serialization format. Optional; defaults to JSON. Allowed value JSON Schema/draft-7, Parquet. Default: Json
     */
    serializationFormat?: string;
}
/**
 * dataFlowBuiltInTransformationResponseProvideDefaults sets the appropriate defaults for DataFlowBuiltInTransformationResponse
 */
export function dataFlowBuiltInTransformationResponseProvideDefaults(val: DataFlowBuiltInTransformationResponse): DataFlowBuiltInTransformationResponse {
    return {
        ...val,
        serializationFormat: (val.serializationFormat) ?? "Json",
    };
}

/**
 * DataFlow Destination Operation properties
 */
export interface DataFlowDestinationOperationResponse {
    /**
     * Destination location, can be a topic or table name. Supports dynamic values with $topic, $systemProperties, $userProperties, $payload, $context, and $subscription.
     */
    dataDestination: string;
    /**
     * Reference to the Endpoint CR. Can be of Broker, Kafka, Fabric, ADLS, ADX type.
     */
    endpointRef: string;
}

/**
 * Azure Data Explorer Authentication properties. NOTE - only authentication property is allowed per entry.
 */
export interface DataFlowEndpointAuthenticationResponse {
    /**
     * SAS token authentication.
     */
    accessTokenSecretRef?: string;
    /**
     * Mode of Authentication.
     */
    method: string;
    /**
     * SASL authentication.
     */
    saslSettings?: DataFlowEndpointAuthenticationSaslResponse;
    /**
     * Service Account Token authentication.
     */
    serviceAccountTokenSettings?: DataFlowEndpointAuthenticationServiceAccountTokenResponse;
    /**
     * System-assigned managed identity authentication.
     */
    systemAssignedManagedIdentitySettings?: DataFlowEndpointAuthenticationSystemAssignedManagedIdentityResponse;
    /**
     * User-assigned managed identity authentication.
     */
    userAssignedManagedIdentitySettings?: DataFlowEndpointAuthenticationUserAssignedManagedIdentityResponse;
    /**
     * X.509 certificate authentication.
     */
    x509CredentialsSettings?: DataFlowEndpointAuthenticationX509Response;
}

/**
 * DataFlowEndpoint Authentication Sasl properties
 */
export interface DataFlowEndpointAuthenticationSaslResponse {
    /**
     * Type of SASL authentication. Can be PLAIN, SCRAM-SHA-256, or SCRAM-SHA-512.
     */
    saslType: string;
    /**
     * Token secret name.
     */
    tokenSecretRef: string;
}

/**
 * Service Account Token for BrokerAuthentication
 */
export interface DataFlowEndpointAuthenticationServiceAccountTokenResponse {
    /**
     * Audience of the service account. Optional, defaults to the broker internal service account audience.
     */
    audience: string;
}

/**
 * DataFlowEndpoint Authentication SystemAssignedManagedIdentity properties
 */
export interface DataFlowEndpointAuthenticationSystemAssignedManagedIdentityResponse {
    /**
     * Audience of the service to authenticate against. Optional; defaults to the audience for Service host configuration.
     */
    audience: string;
}

/**
 * DataFlowEndpoint Authentication UserAssignedManagedIdentity properties
 */
export interface DataFlowEndpointAuthenticationUserAssignedManagedIdentityResponse {
    /**
     * Resource identifier (application ID URI) of the resource, affixed with the .default suffix.
     */
    audience: string;
    /**
     * Client ID for the user-assigned managed identity.
     */
    clientId: string;
    /**
     * Tenant ID.
     */
    tenantId: string;
}

/**
 * DataFlowEndpoint Authentication X509 properties
 */
export interface DataFlowEndpointAuthenticationX509Response {
    /**
     * Secret reference of the X.509 certificate.
     */
    secretRef: string;
}

/**
 * Azure Data Explorer endpoint properties
 */
export interface DataFlowEndpointDataExplorerResponse {
    /**
     * Azure Data Explorer endpoint batching configuration.
     */
    batching?: BatchingConfigurationResponse;
    /**
     * Database name.
     */
    database: string;
    /**
     * Host of the Azure Data Explorer in the form of <cluster>.<region>.kusto.windows.net .
     */
    host: string;
}
/**
 * dataFlowEndpointDataExplorerResponseProvideDefaults sets the appropriate defaults for DataFlowEndpointDataExplorerResponse
 */
export function dataFlowEndpointDataExplorerResponseProvideDefaults(val: DataFlowEndpointDataExplorerResponse): DataFlowEndpointDataExplorerResponse {
    return {
        ...val,
        batching: (val.batching ? batchingConfigurationResponseProvideDefaults(val.batching) : undefined),
    };
}

/**
 * Azure Data Lake endpoint properties
 */
export interface DataFlowEndpointDataLakeStorageResponse {
    /**
     * Azure Data Lake endpoint batching configuration.
     */
    batching?: BatchingConfigurationResponse;
    /**
     * Host of the Azure Data Lake in the form of <account>.blob.core.windows.net .
     */
    host: string;
}
/**
 * dataFlowEndpointDataLakeStorageResponseProvideDefaults sets the appropriate defaults for DataFlowEndpointDataLakeStorageResponse
 */
export function dataFlowEndpointDataLakeStorageResponseProvideDefaults(val: DataFlowEndpointDataLakeStorageResponse): DataFlowEndpointDataLakeStorageResponse {
    return {
        ...val,
        batching: (val.batching ? batchingConfigurationResponseProvideDefaults(val.batching) : undefined),
    };
}

/**
 * Microsoft Fabric endpoint Names properties
 */
export interface DataFlowEndpointFabricOneLakeNamesResponse {
    /**
     * Lakehouse name.
     */
    lakehouseName: string;
    /**
     * Workspace name.
     */
    workspaceName: string;
}

/**
 * Microsoft Fabric endpoint properties
 */
export interface DataFlowEndpointFabricOneLakeResponse {
    /**
     * Batching configuration.
     */
    batching?: BatchingConfigurationResponse;
    /**
     * Host of the Microsoft Fabric in the form of https://<host>.fabric.microsoft.com.
     */
    host: string;
    /**
     * Names of the workspace and lakehouse.
     */
    names: DataFlowEndpointFabricOneLakeNamesResponse;
    /**
     * Type of location of the data in the workspace. Can be either tables or files.
     */
    oneLakePathType: string;
}
/**
 * dataFlowEndpointFabricOneLakeResponseProvideDefaults sets the appropriate defaults for DataFlowEndpointFabricOneLakeResponse
 */
export function dataFlowEndpointFabricOneLakeResponseProvideDefaults(val: DataFlowEndpointFabricOneLakeResponse): DataFlowEndpointFabricOneLakeResponse {
    return {
        ...val,
        batching: (val.batching ? batchingConfigurationResponseProvideDefaults(val.batching) : undefined),
    };
}

/**
 * Kafka endpoint Batching properties
 */
export interface DataFlowEndpointKafkaBatchingResponse {
    /**
     * Batching latency in milliseconds.
     */
    latencyMs?: number;
    /**
     * Maximum number of bytes in a batch.
     */
    maxBytes?: number;
    /**
     * Maximum number of messages in a batch.
     */
    maxMessages?: number;
    /**
     * Mode for batching.
     */
    mode?: string;
}
/**
 * dataFlowEndpointKafkaBatchingResponseProvideDefaults sets the appropriate defaults for DataFlowEndpointKafkaBatchingResponse
 */
export function dataFlowEndpointKafkaBatchingResponseProvideDefaults(val: DataFlowEndpointKafkaBatchingResponse): DataFlowEndpointKafkaBatchingResponse {
    return {
        ...val,
        latencyMs: (val.latencyMs) ?? 5,
        maxBytes: (val.maxBytes) ?? 1000000,
        maxMessages: (val.maxMessages) ?? 100000,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * Kafka endpoint properties
 */
export interface DataFlowEndpointKafkaResponse {
    /**
     * Batching configuration.
     */
    batching?: DataFlowEndpointKafkaBatchingResponse;
    /**
     * Compression. Can be none, gzip, lz4, or snappy. No effect if the endpoint is used as a source.
     */
    compression?: string;
    /**
     * Consumer group ID.
     */
    consumerGroupId?: string;
    /**
     * Copy Broker properties. No effect if the endpoint is used as a source or if the dataflow doesn't have an Broker source.
     */
    copyMqttProperties?: string;
    /**
     * Kafka endpoint host.
     */
    host?: string;
    /**
     * Kafka acks. Can be all, one, or zero. No effect if the endpoint is used as a source.
     */
    kafkaAcks?: string;
    /**
     * Partition handling strategy. Can be default or static. No effect if the endpoint is used as a source.
     */
    partitionStrategy?: string;
    /**
     * TLS configuration.
     */
    tls: TlsPropertiesResponse;
}
/**
 * dataFlowEndpointKafkaResponseProvideDefaults sets the appropriate defaults for DataFlowEndpointKafkaResponse
 */
export function dataFlowEndpointKafkaResponseProvideDefaults(val: DataFlowEndpointKafkaResponse): DataFlowEndpointKafkaResponse {
    return {
        ...val,
        batching: (val.batching ? dataFlowEndpointKafkaBatchingResponseProvideDefaults(val.batching) : undefined),
        compression: (val.compression) ?? "None",
        copyMqttProperties: (val.copyMqttProperties) ?? "Disabled",
        kafkaAcks: (val.kafkaAcks) ?? "All",
        partitionStrategy: (val.partitionStrategy) ?? "Default",
        tls: tlsPropertiesResponseProvideDefaults(val.tls),
    };
}

/**
 * Local persistent volume endpoint properties
 */
export interface DataFlowEndpointLocalStorageResponse {
    /**
     * Persistent volume claim name.
     */
    persistentVolumeClaimRef: string;
}

/**
 * Broker endpoint properties
 */
export interface DataFlowEndpointMqttResponse {
    /**
     * Client ID prefix. Client ID generated by the dataflow is <prefix>-TBD. Optional; no prefix if omitted.
     */
    clientIdPrefix?: string;
    /**
     * Host of the Broker in the form of <hostname>:<port>. Optional; connects to Broker if omitted.
     */
    host?: string;
    /**
     * Broker KeepAlive for connection in seconds.
     */
    keepAliveSeconds?: number;
    /**
     * The max number of messages to keep in flight. For subscribe, this is the receive maximum. For publish, this is the maximum number of messages to send before waiting for an ack.
     */
    maxInflightMessages?: number;
    /**
     * Enable or disable websockets.
     */
    protocol?: string;
    /**
     * Qos for Broker connection.
     */
    qos?: number;
    /**
     * Whether or not to keep the retain setting.
     */
    retain?: string;
    /**
     * Session expiry in seconds.
     */
    sessionExpirySeconds?: number;
    /**
     * TLS configuration.
     */
    tls?: TlsPropertiesResponse;
}
/**
 * dataFlowEndpointMqttResponseProvideDefaults sets the appropriate defaults for DataFlowEndpointMqttResponse
 */
export function dataFlowEndpointMqttResponseProvideDefaults(val: DataFlowEndpointMqttResponse): DataFlowEndpointMqttResponse {
    return {
        ...val,
        host: (val.host) ?? "aio-mq-dmqtt-frontend:1883",
        keepAliveSeconds: (val.keepAliveSeconds) ?? 60,
        maxInflightMessages: (val.maxInflightMessages) ?? 100,
        protocol: (val.protocol) ?? "Mqtt",
        qos: (val.qos) ?? 1,
        retain: (val.retain) ?? "Keep",
        sessionExpirySeconds: (val.sessionExpirySeconds) ?? 3600,
        tls: (val.tls ? tlsPropertiesResponseProvideDefaults(val.tls) : undefined),
    };
}

/**
 * DataFlowEndpoint Resource properties. NOTE - Only one type of endpoint is supported for one Resource
 */
export interface DataFlowEndpointPropertiesResponse {
    /**
     * Authentication configuration.
     */
    authentication: DataFlowEndpointAuthenticationResponse;
    /**
     * Azure Data Explorer endpoint.
     */
    dataExplorerSettings?: DataFlowEndpointDataExplorerResponse;
    /**
     * Azure Data Lake endpoint.
     */
    dataLakeStorageSettings?: DataFlowEndpointDataLakeStorageResponse;
    /**
     * Endpoint Type.
     */
    endpointType: string;
    /**
     * Microsoft Fabric endpoint.
     */
    fabricOneLakeSettings?: DataFlowEndpointFabricOneLakeResponse;
    /**
     * Kafka endpoint.
     */
    kafkaSettings?: DataFlowEndpointKafkaResponse;
    /**
     * Local persistent volume endpoint.
     */
    localStorageSettings?: DataFlowEndpointLocalStorageResponse;
    /**
     * Broker endpoint.
     */
    mqttSettings?: DataFlowEndpointMqttResponse;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}
/**
 * dataFlowEndpointPropertiesResponseProvideDefaults sets the appropriate defaults for DataFlowEndpointPropertiesResponse
 */
export function dataFlowEndpointPropertiesResponseProvideDefaults(val: DataFlowEndpointPropertiesResponse): DataFlowEndpointPropertiesResponse {
    return {
        ...val,
        dataExplorerSettings: (val.dataExplorerSettings ? dataFlowEndpointDataExplorerResponseProvideDefaults(val.dataExplorerSettings) : undefined),
        dataLakeStorageSettings: (val.dataLakeStorageSettings ? dataFlowEndpointDataLakeStorageResponseProvideDefaults(val.dataLakeStorageSettings) : undefined),
        fabricOneLakeSettings: (val.fabricOneLakeSettings ? dataFlowEndpointFabricOneLakeResponseProvideDefaults(val.fabricOneLakeSettings) : undefined),
        kafkaSettings: (val.kafkaSettings ? dataFlowEndpointKafkaResponseProvideDefaults(val.kafkaSettings) : undefined),
        mqttSettings: (val.mqttSettings ? dataFlowEndpointMqttResponseProvideDefaults(val.mqttSettings) : undefined),
    };
}

/**
 * DataFlow Operation properties. NOTE - One only method is allowed to be used for one entry.
 */
export interface DataFlowOperationResponse {
    /**
     * Transformation configuration.
     */
    builtInTransformationSettings?: DataFlowBuiltInTransformationResponse;
    /**
     * Destination configuration.
     */
    destinationSettings: DataFlowDestinationOperationResponse;
    /**
     * Optional user provided name of the transformation.
     */
    name?: string;
    /**
     * Type of operation.
     */
    operationType: string;
    /**
     * Source configuration.
     */
    sourceSettings: DataFlowSourceOperationResponse;
}
/**
 * dataFlowOperationResponseProvideDefaults sets the appropriate defaults for DataFlowOperationResponse
 */
export function dataFlowOperationResponseProvideDefaults(val: DataFlowOperationResponse): DataFlowOperationResponse {
    return {
        ...val,
        builtInTransformationSettings: (val.builtInTransformationSettings ? dataFlowBuiltInTransformationResponseProvideDefaults(val.builtInTransformationSettings) : undefined),
        sourceSettings: dataFlowSourceOperationResponseProvideDefaults(val.sourceSettings),
    };
}

/**
 * DataFlowProfile Resource properties
 */
export interface DataFlowProfilePropertiesResponse {
    /**
     * Spec defines the desired identities of NBC diagnostics settings.
     */
    diagnostics?: ProfileDiagnosticsResponse;
    /**
     * To manually scale the dataflow profile, specify the maximum number of instances you want to run.
     */
    instanceCount?: number;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}
/**
 * dataFlowProfilePropertiesResponseProvideDefaults sets the appropriate defaults for DataFlowProfilePropertiesResponse
 */
export function dataFlowProfilePropertiesResponseProvideDefaults(val: DataFlowProfilePropertiesResponse): DataFlowProfilePropertiesResponse {
    return {
        ...val,
        diagnostics: (val.diagnostics ? profileDiagnosticsResponseProvideDefaults(val.diagnostics) : undefined),
    };
}

/**
 * DataFlow Resource properties
 */
export interface DataFlowPropertiesResponse {
    /**
     * Mode for DataFlow. Optional; defaults to Enabled.
     */
    mode?: string;
    /**
     * List of operations including source and destination references as well as transformation.
     */
    operations: DataFlowOperationResponse[];
    /**
     * Reference to the DataflowProfile CR.
     */
    profileRef: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}
/**
 * dataFlowPropertiesResponseProvideDefaults sets the appropriate defaults for DataFlowPropertiesResponse
 */
export function dataFlowPropertiesResponseProvideDefaults(val: DataFlowPropertiesResponse): DataFlowPropertiesResponse {
    return {
        ...val,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * DataFlow Source Operation properties
 */
export interface DataFlowSourceOperationResponse {
    /**
     * Reference to the resource in Azure Device Registry where the data in the endpoint originates from.
     */
    assetRef?: string;
    /**
     * List of source locations. Can be Broker or Kafka topics. Supports wildcards # and +.
     */
    dataSources: string[];
    /**
     * Reference to the Dataflow Endpoint resource. Can only be of Broker and Kafka type.
     */
    endpointRef: string;
    /**
     * Schema CR reference. Data will be deserialized according to the schema, and dropped if it doesn't match.
     */
    schemaRef?: string;
    /**
     * Content is a JSON Schema. Allowed: JSON Schema/draft-7.
     */
    serializationFormat?: string;
}
/**
 * dataFlowSourceOperationResponseProvideDefaults sets the appropriate defaults for DataFlowSourceOperationResponse
 */
export function dataFlowSourceOperationResponseProvideDefaults(val: DataFlowSourceOperationResponse): DataFlowSourceOperationResponse {
    return {
        ...val,
        serializationFormat: (val.serializationFormat) ?? "Json",
    };
}

/**
 * Diagnostic Log properties
 */
export interface DiagnosticsLogsResponse {
    /**
     * The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.
     */
    level?: string;
    /**
     * The open telemetry export configuration.
     */
    opentelemetryExportConfig?: OpenTelemetryLogExportConfigResponse;
}
/**
 * diagnosticsLogsResponseProvideDefaults sets the appropriate defaults for DiagnosticsLogsResponse
 */
export function diagnosticsLogsResponseProvideDefaults(val: DiagnosticsLogsResponse): DiagnosticsLogsResponse {
    return {
        ...val,
        level: (val.level) ?? "info",
        opentelemetryExportConfig: (val.opentelemetryExportConfig ? openTelemetryLogExportConfigResponseProvideDefaults(val.opentelemetryExportConfig) : undefined),
    };
}

/**
 * DiskBackedMessageBuffer properties
 */
export interface DiskBackedMessageBufferResponse {
    /**
     * Use the specified persistent volume claim template to mount a "generic ephemeral volume" for the message buffer. See <https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/#generic-ephemeral-volumes> for details.
     */
    ephemeralVolumeClaimSpec?: VolumeClaimSpecResponse;
    /**
     * The max size of the message buffer on disk. If a PVC template is specified using one of ephemeralVolumeClaimSpec or persistentVolumeClaimSpec, then this size is used as the request and limit sizes of that template. If neither ephemeralVolumeClaimSpec nor persistentVolumeClaimSpec are specified, then an emptyDir volume is mounted with this size as its limit. See <https://kubernetes.io/docs/concepts/storage/volumes/#emptydir> for details.
     */
    maxSize: string;
    /**
     * Use the specified persistent volume claim template to mount a persistent volume for the message buffer.
     */
    persistentVolumeClaimSpec?: VolumeClaimSpecResponse;
}

/**
 * Extended location is an extension of Azure locations. They provide a way to use their Azure ARC enabled Kubernetes clusters as target locations for deploying Azure services instances.
 */
export interface ExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name: string;
    /**
     * Type of ExtendedLocation.
     */
    type: string;
}

/**
 * The desired properties of the frontend instances of the Broker
 */
export interface FrontendResponse {
    /**
     * The desired number of frontend instances (pods).
     */
    replicas: number;
    /**
     * Number of logical frontend workers per instance (pod).
     */
    workers?: number;
}
/**
 * frontendResponseProvideDefaults sets the appropriate defaults for FrontendResponse
 */
export function frontendResponseProvideDefaults(val: FrontendResponse): FrontendResponse {
    return {
        ...val,
        workers: (val.workers) ?? 2,
    };
}

/**
 * GenerateResourceLimits properties
 */
export interface GenerateResourceLimitsResponse {
    /**
     * The toggle to enable/disable cpu resource limits.
     */
    cpu?: string;
}
/**
 * generateResourceLimitsResponseProvideDefaults sets the appropriate defaults for GenerateResourceLimitsResponse
 */
export function generateResourceLimitsResponseProvideDefaults(val: GenerateResourceLimitsResponse): GenerateResourceLimitsResponse {
    return {
        ...val,
        cpu: (val.cpu) ?? "Enabled",
    };
}

/**
 * The properties of a Instance resource.
 */
export interface InstancePropertiesResponse {
    /**
     * Detailed description of the Instance.
     */
    description?: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * The Azure IoT Operations version.
     */
    version: string;
}

/**
 * Kubernetes reference
 */
export interface KubernetesReferenceResponse {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced
     */
    kind: string;
    /**
     * Name is the name of resource being referenced
     */
    name: string;
    /**
     * Namespace is the namespace of the resource being referenced. This field is required when the resource has a namespace.
     */
    namespace?: string;
}

/**
 * Defines a TCP port on which a `BrokerListener` listens.
 */
export interface ListenerPortResponse {
    /**
     * Reference to client authentication settings. Omit to disable authentication.
     */
    authenticationRef?: string;
    /**
     * Reference to client authorization settings. Omit to disable authorization.
     */
    authorizationRef?: string;
    /**
     * Kubernetes node port. Only relevant when this port is associated with a `NodePort` listener.
     */
    nodePort?: number;
    /**
     * TCP port for accepting client connections.
     */
    port: number;
    /**
     * Protocol to use for client connections.
     */
    protocol?: string;
    /**
     * TLS server certificate settings for this port. Omit to disable TLS.
     */
    tls?: TlsCertMethodResponse;
}
/**
 * listenerPortResponseProvideDefaults sets the appropriate defaults for ListenerPortResponse
 */
export function listenerPortResponseProvideDefaults(val: ListenerPortResponse): ListenerPortResponse {
    return {
        ...val,
        protocol: (val.protocol) ?? "Mqtt",
        tls: (val.tls ? tlsCertMethodResponseProvideDefaults(val.tls) : undefined),
    };
}

/**
 * Kubernetes reference
 */
export interface LocalKubernetesReferenceResponse {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced
     */
    kind: string;
    /**
     * Name is the name of resource being referenced
     */
    name: string;
}

/**
 * Diagnostic Metrics properties
 */
export interface MetricsResponse {
    /**
     * The open telemetry export configuration.
     */
    opentelemetryExportConfig?: OpenTelemetryExportConfigResponse;
    /**
     * The prometheus port to expose the metrics.
     */
    prometheusPort?: number;
}
/**
 * metricsResponseProvideDefaults sets the appropriate defaults for MetricsResponse
 */
export function metricsResponseProvideDefaults(val: MetricsResponse): MetricsResponse {
    return {
        ...val,
        opentelemetryExportConfig: (val.opentelemetryExportConfig ? openTelemetryExportConfigResponseProvideDefaults(val.opentelemetryExportConfig) : undefined),
        prometheusPort: (val.prometheusPort) ?? 9600,
    };
}

/**
 * OpenTelemetry Export Configuration properties
 */
export interface OpenTelemetryExportConfigResponse {
    /**
     * How often to export the metrics to the open telemetry collector.
     */
    intervalSeconds?: number;
    /**
     * The open telemetry collector endpoint to export to.
     */
    otlpGrpcEndpoint: string;
}
/**
 * openTelemetryExportConfigResponseProvideDefaults sets the appropriate defaults for OpenTelemetryExportConfigResponse
 */
export function openTelemetryExportConfigResponseProvideDefaults(val: OpenTelemetryExportConfigResponse): OpenTelemetryExportConfigResponse {
    return {
        ...val,
        intervalSeconds: (val.intervalSeconds) ?? 30,
    };
}

/**
 * OpenTelemetry Log Export Configuration properties
 */
export interface OpenTelemetryLogExportConfigResponse {
    /**
     * How often to export the metrics to the open telemetry collector.
     */
    intervalSeconds?: number;
    /**
     * The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.
     */
    level?: string;
    /**
     * The open telemetry collector endpoint to export to.
     */
    otlpGrpcEndpoint: string;
}
/**
 * openTelemetryLogExportConfigResponseProvideDefaults sets the appropriate defaults for OpenTelemetryLogExportConfigResponse
 */
export function openTelemetryLogExportConfigResponseProvideDefaults(val: OpenTelemetryLogExportConfigResponse): OpenTelemetryLogExportConfigResponse {
    return {
        ...val,
        intervalSeconds: (val.intervalSeconds) ?? 30,
        level: (val.level) ?? "error",
    };
}

/**
 * PrincipalDefinition properties of Rule
 */
export interface PrincipalDefinitionResponse {
    /**
     * A list of key-value pairs that match the attributes of the clients. The attributes are case-sensitive and must match the attributes provided by the clients during authentication.
     */
    attributes?: {[key: string]: string}[];
    /**
     * A list of client IDs that match the clients. The client IDs are case-sensitive and must match the client IDs provided by the clients during connection.
     */
    clientIds?: string[];
    /**
     * A list of usernames that match the clients. The usernames are case-sensitive and must match the usernames provided by the clients during authentication.
     */
    usernames?: string[];
}

/**
 * DataFlowProfile Diagnostics properties
 */
export interface ProfileDiagnosticsResponse {
    /**
     * Diagnostic log settings for the resource.
     */
    logs?: DiagnosticsLogsResponse;
    /**
     * The metrics settings for the resource.
     */
    metrics?: MetricsResponse;
}
/**
 * profileDiagnosticsResponseProvideDefaults sets the appropriate defaults for ProfileDiagnosticsResponse
 */
export function profileDiagnosticsResponseProvideDefaults(val: ProfileDiagnosticsResponse): ProfileDiagnosticsResponse {
    return {
        ...val,
        logs: (val.logs ? diagnosticsLogsResponseProvideDefaults(val.logs) : undefined),
        metrics: (val.metrics ? metricsResponseProvideDefaults(val.metrics) : undefined),
    };
}

/**
 * Subject Alternative Names (SANs) for certificate.
 */
export interface SanForCertResponse {
    /**
     * DNS SANs.
     */
    dns: string[];
    /**
     * IP address SANs.
     */
    ip: string[];
}

/**
 * Broker Diagnostic Self check properties
 */
export interface SelfCheckResponse {
    /**
     * The self check interval.
     */
    intervalSeconds?: number;
    /**
     * The toggle to enable/disable self check.
     */
    mode?: string;
    /**
     * The timeout for self check.
     */
    timeoutSeconds?: number;
}
/**
 * selfCheckResponseProvideDefaults sets the appropriate defaults for SelfCheckResponse
 */
export function selfCheckResponseProvideDefaults(val: SelfCheckResponse): SelfCheckResponse {
    return {
        ...val,
        intervalSeconds: (val.intervalSeconds) ?? 30,
        mode: (val.mode) ?? "Enabled",
        timeoutSeconds: (val.timeoutSeconds) ?? 15,
    };
}

/**
 * Diagnostic Self tracing properties
 */
export interface SelfTracingResponse {
    /**
     * The self tracing interval.
     */
    intervalSeconds?: number;
    /**
     * The toggle to enable/disable self tracing.
     */
    mode?: string;
}
/**
 * selfTracingResponseProvideDefaults sets the appropriate defaults for SelfTracingResponse
 */
export function selfTracingResponseProvideDefaults(val: SelfTracingResponse): SelfTracingResponse {
    return {
        ...val,
        intervalSeconds: (val.intervalSeconds) ?? 30,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * State Store Resource Rule properties.
 */
export interface StateStoreResourceRuleResponse {
    /**
     * Allowed keyTypes pattern, string, binary. The key type used for matching, for example pattern tries to match the key to a glob-style pattern and string checks key is equal to value provided in keys.
     */
    keyType: string;
    /**
     * Give access to state store keys for the corresponding principals defined. When key type is pattern set glob-style pattern (e.g., '*', 'clients/*').
     */
    keys: string[];
    /**
     * Give access for `Read`, `Write` and `ReadWrite` access level.
     */
    method: string;
}

/**
 * The settings of Subscriber Queue Limit.
 */
export interface SubscriberQueueLimitResponse {
    /**
     * The maximum length of the queue before messages start getting dropped.
     */
    length?: number;
    /**
     * The strategy to use for dropping messages from the queue.
     */
    strategy?: string;
}
/**
 * subscriberQueueLimitResponseProvideDefaults sets the appropriate defaults for SubscriberQueueLimitResponse
 */
export function subscriberQueueLimitResponseProvideDefaults(val: SubscriberQueueLimitResponse): SubscriberQueueLimitResponse {
    return {
        ...val,
        strategy: (val.strategy) ?? "None",
    };
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
 * Collection of different TLS types, NOTE- Enum at a time only one of them needs to be supported
 */
export interface TlsCertMethodResponse {
    /**
     * Option 1 - Automatic TLS server certificate management with cert-manager.
     */
    automatic?: AutomaticCertMethodResponse;
    /**
     * Option 2 - Manual TLS server certificate management through a defined secret.
     */
    manual?: X509ManualCertificateResponse;
    /**
     * Mode of TLS server certificate management.
     */
    mode: string;
}
/**
 * tlsCertMethodResponseProvideDefaults sets the appropriate defaults for TlsCertMethodResponse
 */
export function tlsCertMethodResponseProvideDefaults(val: TlsCertMethodResponse): TlsCertMethodResponse {
    return {
        ...val,
        automatic: (val.automatic ? automaticCertMethodResponseProvideDefaults(val.automatic) : undefined),
    };
}

/**
 * Tls properties
 */
export interface TlsPropertiesResponse {
    /**
     * Mode for TLS.
     */
    mode?: string;
    /**
     * Trusted CA certificate config map.
     */
    trustedCaCertificateConfigMapRef?: string;
}
/**
 * tlsPropertiesResponseProvideDefaults sets the appropriate defaults for TlsPropertiesResponse
 */
export function tlsPropertiesResponseProvideDefaults(val: TlsPropertiesResponse): TlsPropertiesResponse {
    return {
        ...val,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * Broker Diagnostic Trace properties
 */
export interface TracesResponse {
    /**
     * The cache size in megabytes.
     */
    cacheSizeMegabytes?: number;
    /**
     * The toggle to enable/disable traces.
     */
    mode?: string;
    /**
     * The open telemetry export configuration.
     */
    opentelemetryExportConfig?: OpenTelemetryExportConfigResponse;
    /**
     * The self tracing properties.
     */
    selfTracing?: SelfTracingResponse;
    /**
     * The span channel capacity.
     */
    spanChannelCapacity?: number;
}
/**
 * tracesResponseProvideDefaults sets the appropriate defaults for TracesResponse
 */
export function tracesResponseProvideDefaults(val: TracesResponse): TracesResponse {
    return {
        ...val,
        cacheSizeMegabytes: (val.cacheSizeMegabytes) ?? 16,
        mode: (val.mode) ?? "Enabled",
        opentelemetryExportConfig: (val.opentelemetryExportConfig ? openTelemetryExportConfigResponseProvideDefaults(val.opentelemetryExportConfig) : undefined),
        selfTracing: (val.selfTracing ? selfTracingResponseProvideDefaults(val.selfTracing) : undefined),
        spanChannelCapacity: (val.spanChannelCapacity) ?? 1000,
    };
}

/**
 * VolumeClaimResourceRequirements properties
 */
export interface VolumeClaimResourceRequirementsResponse {
    /**
     * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: {[key: string]: string};
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: {[key: string]: string};
}

/**
 * VolumeClaimSpec properties
 */
export interface VolumeClaimSpecResponse {
    /**
     * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     */
    accessModes?: string[];
    /**
     * This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
     */
    dataSource?: LocalKubernetesReferenceResponse;
    /**
     * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
     */
    dataSourceRef?: KubernetesReferenceResponse;
    /**
     * Resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
     */
    resources?: VolumeClaimResourceRequirementsResponse;
    /**
     * A label query over volumes to consider for binding.
     */
    selector?: VolumeClaimSpecSelectorResponse;
    /**
     * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
     */
    storageClassName?: string;
    /**
     * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. This is a beta feature.
     */
    volumeMode?: string;
    /**
     * VolumeName is the binding reference to the PersistentVolume backing this claim.
     */
    volumeName?: string;
}

/**
 * VolumeClaimSpecSelectorMatchExpressions properties
 */
export interface VolumeClaimSpecSelectorMatchExpressionsResponse {
    /**
     * key is the label key that the selector applies to.
     */
    key: string;
    /**
     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
     */
    operator: string;
    /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     */
    values?: string[];
}

/**
 * VolumeClaimSpecSelector properties
 */
export interface VolumeClaimSpecSelectorResponse {
    /**
     * MatchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    matchExpressions?: VolumeClaimSpecSelectorMatchExpressionsResponse[];
    /**
     * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
     */
    matchLabels?: {[key: string]: string};
}

/**
 * X509 Certificate Authentication properties.
 */
export interface X509ManualCertificateResponse {
    /**
     * Kubernetes secret containing an X.509 client certificate. This is a reference to the secret through an identifying name, not the secret itself.
     */
    secretRef: string;
}
