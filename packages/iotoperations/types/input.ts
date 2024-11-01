import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Broker Advanced Settings
 */
export interface AdvancedSettingsArgs {
    /**
     * Configurations related to All Clients.
     */
    clients?: pulumi.Input<ClientConfigArgs>;
    /**
     * The setting to enable or disable encryption of internal Traffic.
     */
    encryptInternalTraffic?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * Certificate rotation and private key configuration.
     */
    internalCerts?: pulumi.Input<CertManagerCertOptionsArgs>;
}
/**
 * advancedSettingsArgsProvideDefaults sets the appropriate defaults for AdvancedSettingsArgs
 */
export function advancedSettingsArgsProvideDefaults(val: AdvancedSettingsArgs): AdvancedSettingsArgs {
    return {
        ...val,
        clients: (val.clients ? pulumi.output(val.clients).apply(clientConfigArgsProvideDefaults) : undefined),
        encryptInternalTraffic: (val.encryptInternalTraffic) ?? "Enabled",
    };
}

/**
 * Broker AuthorizationConfig properties
 */
export interface AuthorizationConfigArgs {
    /**
     * Enable caching of the authorization rules.
     */
    cache?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * The authorization rules to follow. If no rule is set, but Authorization Resource is used that would mean DenyAll.
     */
    rules?: pulumi.Input<pulumi.Input<AuthorizationRuleArgs>[]>;
}
/**
 * authorizationConfigArgsProvideDefaults sets the appropriate defaults for AuthorizationConfigArgs
 */
export function authorizationConfigArgsProvideDefaults(val: AuthorizationConfigArgs): AuthorizationConfigArgs {
    return {
        ...val,
        cache: (val.cache) ?? "Enabled",
    };
}

/**
 * AuthorizationConfig Rule Properties
 */
export interface AuthorizationRuleArgs {
    /**
     * Give access to Broker methods and topics.
     */
    brokerResources: pulumi.Input<pulumi.Input<BrokerResourceRuleArgs>[]>;
    /**
     * Give access to clients based on the following properties.
     */
    principals: pulumi.Input<PrincipalDefinitionArgs>;
    /**
     * Give access to state store resources.
     */
    stateStoreResources?: pulumi.Input<pulumi.Input<StateStoreResourceRuleArgs>[]>;
}

/**
 * Automatic TLS server certificate management with cert-manager
 */
export interface AutomaticCertMethodArgs {
    /**
     * Lifetime of certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
     */
    duration?: pulumi.Input<string>;
    /**
     * cert-manager issuerRef.
     */
    issuerRef: pulumi.Input<CertManagerIssuerRefArgs>;
    /**
     * Type of certificate private key.
     */
    privateKey?: pulumi.Input<CertManagerPrivateKeyArgs>;
    /**
     * When to begin renewing certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
     */
    renewBefore?: pulumi.Input<string>;
    /**
     * Additional Subject Alternative Names (SANs) to include in the certificate.
     */
    san?: pulumi.Input<SanForCertArgs>;
    /**
     * Secret for storing server certificate. Any existing data will be overwritten. This is a reference to the secret through an identifying name, not the secret itself.
     */
    secretRef?: pulumi.Input<string>;
}
/**
 * automaticCertMethodArgsProvideDefaults sets the appropriate defaults for AutomaticCertMethodArgs
 */
export function automaticCertMethodArgsProvideDefaults(val: AutomaticCertMethodArgs): AutomaticCertMethodArgs {
    return {
        ...val,
        issuerRef: pulumi.output(val.issuerRef).apply(certManagerIssuerRefArgsProvideDefaults),
    };
}

/**
 * Desired properties of the backend instances of the broker
 */
export interface BackendChainArgs {
    /**
     * The desired number of physical backend partitions.
     */
    partitions: pulumi.Input<number>;
    /**
     * The desired numbers of backend replicas (pods) in a physical partition.
     */
    redundancyFactor: pulumi.Input<number>;
    /**
     * Number of logical backend workers per replica (pod).
     */
    workers?: pulumi.Input<number>;
}
/**
 * backendChainArgsProvideDefaults sets the appropriate defaults for BackendChainArgs
 */
export function backendChainArgsProvideDefaults(val: BackendChainArgs): BackendChainArgs {
    return {
        ...val,
        workers: (val.workers) ?? 1,
    };
}

/**
 * Batching configuration
 */
export interface BatchingConfigurationArgs {
    /**
     * Batching latency in seconds.
     */
    latencySeconds?: pulumi.Input<number>;
    /**
     * Maximum number of messages in a batch.
     */
    maxMessages?: pulumi.Input<number>;
}
/**
 * batchingConfigurationArgsProvideDefaults sets the appropriate defaults for BatchingConfigurationArgs
 */
export function batchingConfigurationArgsProvideDefaults(val: BatchingConfigurationArgs): BatchingConfigurationArgs {
    return {
        ...val,
        latencySeconds: (val.latencySeconds) ?? 60,
        maxMessages: (val.maxMessages) ?? 100000,
    };
}

/**
 * BrokerAuthentication Resource properties
 */
export interface BrokerAuthenticationPropertiesArgs {
    /**
     * Defines a set of Broker authentication methods to be used on `BrokerListeners`. For each array element one authenticator type supported.
     */
    authenticationMethods: pulumi.Input<pulumi.Input<BrokerAuthenticatorMethodsArgs>[]>;
}

/**
 * Custom Authentication properties
 */
export interface BrokerAuthenticatorCustomAuthArgs {
    /**
     * X509 Custom Auth type details.
     */
    x509: pulumi.Input<X509ManualCertificateArgs>;
}

/**
 * Custom method for BrokerAuthentication
 */
export interface BrokerAuthenticatorMethodCustomArgs {
    /**
     * Optional authentication needed for authenticating with the custom authentication server.
     */
    auth?: pulumi.Input<BrokerAuthenticatorCustomAuthArgs>;
    /**
     * Optional CA certificate for validating the custom authentication server's certificate.
     */
    caCertConfigMap?: pulumi.Input<string>;
    /**
     * Endpoint of the custom authentication server. Must be an HTTPS endpoint.
     */
    endpoint: pulumi.Input<string>;
    /**
     * Additional HTTP headers to pass to the custom authentication server.
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Service Account Token for BrokerAuthentication
 */
export interface BrokerAuthenticatorMethodSatArgs {
    /**
     * List of allowed audience.
     */
    audiences: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * X509 for BrokerAuthentication.
 */
export interface BrokerAuthenticatorMethodX509Args {
    /**
     * X509 authorization attributes properties.
     */
    authorizationAttributes?: pulumi.Input<{[key: string]: pulumi.Input<BrokerAuthenticatorMethodX509AttributesArgs>}>;
    /**
     * Name of the trusted client ca cert resource.
     */
    trustedClientCaCert?: pulumi.Input<string>;
}
/**
 * brokerAuthenticatorMethodX509ArgsProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodX509Args
 */
export function brokerAuthenticatorMethodX509ArgsProvideDefaults(val: BrokerAuthenticatorMethodX509Args): BrokerAuthenticatorMethodX509Args {
    return {
        ...val,
        trustedClientCaCert: (val.trustedClientCaCert) ?? "client-ca",
    };
}

/**
 * BrokerAuthenticatorMethodX509Attributes properties.
 */
export interface BrokerAuthenticatorMethodX509AttributesArgs {
    /**
     * Attributes object.
     */
    attributes: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Subject of the X509 attribute.
     */
    subject: pulumi.Input<string>;
}

/**
 * Set of broker authentication policies. Only one method is supported for each entry.
 */
export interface BrokerAuthenticatorMethodsArgs {
    /**
     * Custom authentication configuration.
     */
    custom?: pulumi.Input<BrokerAuthenticatorMethodCustomArgs>;
    /**
     * Custom authentication configuration.
     */
    method: pulumi.Input<string | enums.BrokerAuthenticationMethod>;
    /**
     * ServiceAccountToken authentication configuration.
     */
    serviceAccountToken?: pulumi.Input<BrokerAuthenticatorMethodSatArgs>;
    /**
     * X.509 authentication configuration.
     */
    x509Credentials?: pulumi.Input<BrokerAuthenticatorMethodX509Args>;
}
/**
 * brokerAuthenticatorMethodsArgsProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodsArgs
 */
export function brokerAuthenticatorMethodsArgsProvideDefaults(val: BrokerAuthenticatorMethodsArgs): BrokerAuthenticatorMethodsArgs {
    return {
        ...val,
        x509Credentials: (val.x509Credentials ? pulumi.output(val.x509Credentials).apply(brokerAuthenticatorMethodX509ArgsProvideDefaults) : undefined),
    };
}

/**
 * BrokerAuthorization Resource properties
 */
export interface BrokerAuthorizationPropertiesArgs {
    /**
     * The list of authorization policies supported by the Authorization Resource.
     */
    authorizationPolicies: pulumi.Input<AuthorizationConfigArgs>;
}
/**
 * brokerAuthorizationPropertiesArgsProvideDefaults sets the appropriate defaults for BrokerAuthorizationPropertiesArgs
 */
export function brokerAuthorizationPropertiesArgsProvideDefaults(val: BrokerAuthorizationPropertiesArgs): BrokerAuthorizationPropertiesArgs {
    return {
        ...val,
        authorizationPolicies: pulumi.output(val.authorizationPolicies).apply(authorizationConfigArgsProvideDefaults),
    };
}

/**
 * Broker Diagnostic Setting properties
 */
export interface BrokerDiagnosticsArgs {
    /**
     * Diagnostic log settings for the resource.
     */
    logs?: pulumi.Input<DiagnosticsLogsArgs>;
    /**
     * The metrics settings for the resource.
     */
    metrics?: pulumi.Input<MetricsArgs>;
    /**
     * The self check properties.
     */
    selfCheck?: pulumi.Input<SelfCheckArgs>;
    /**
     * The trace properties.
     */
    traces?: pulumi.Input<TracesArgs>;
}
/**
 * brokerDiagnosticsArgsProvideDefaults sets the appropriate defaults for BrokerDiagnosticsArgs
 */
export function brokerDiagnosticsArgsProvideDefaults(val: BrokerDiagnosticsArgs): BrokerDiagnosticsArgs {
    return {
        ...val,
        logs: (val.logs ? pulumi.output(val.logs).apply(diagnosticsLogsArgsProvideDefaults) : undefined),
        metrics: (val.metrics ? pulumi.output(val.metrics).apply(metricsArgsProvideDefaults) : undefined),
        selfCheck: (val.selfCheck ? pulumi.output(val.selfCheck).apply(selfCheckArgsProvideDefaults) : undefined),
        traces: (val.traces ? pulumi.output(val.traces).apply(tracesArgsProvideDefaults) : undefined),
    };
}

/**
 * Defines a Broker listener. A listener is a collection of ports on which the broker accepts connections from clients.
 */
export interface BrokerListenerPropertiesArgs {
    /**
     * Broker associated with this listener.
     */
    brokerRef: pulumi.Input<string>;
    /**
     * Ports on which this listener accepts client connections.
     */
    ports: pulumi.Input<pulumi.Input<ListenerPortArgs>[]>;
    /**
     * Kubernetes Service name of this listener.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Kubernetes Service type of this listener.
     */
    serviceType?: pulumi.Input<string | enums.ServiceType>;
}
/**
 * brokerListenerPropertiesArgsProvideDefaults sets the appropriate defaults for BrokerListenerPropertiesArgs
 */
export function brokerListenerPropertiesArgsProvideDefaults(val: BrokerListenerPropertiesArgs): BrokerListenerPropertiesArgs {
    return {
        ...val,
        serviceName: (val.serviceName) ?? "aio-mq-dmqtt-frontend",
        serviceType: (val.serviceType) ?? "ClusterIp",
    };
}

/**
 * Broker Resource properties
 */
export interface BrokerPropertiesArgs {
    /**
     * Advanced settings of Broker.
     */
    advanced?: pulumi.Input<AdvancedSettingsArgs>;
    /**
     * The cardinality details of the broker.
     */
    cardinality?: pulumi.Input<CardinalityArgs>;
    /**
     * Spec defines the desired identities of Broker diagnostics settings.
     */
    diagnostics?: pulumi.Input<BrokerDiagnosticsArgs>;
    /**
     * Settings of Disk Backed Message Buffer.
     */
    diskBackedMessageBuffer?: pulumi.Input<DiskBackedMessageBufferArgs>;
    /**
     * This setting controls whether Kubernetes CPU resource limits are requested. Increasing the number of replicas or workers proportionally increases the amount of CPU resources requested. If this setting is enabled and there are insufficient CPU resources, an error will be emitted.
     */
    generateResourceLimits?: pulumi.Input<GenerateResourceLimitsArgs>;
    /**
     * Memory profile of Broker.
     */
    memoryProfile?: pulumi.Input<string | enums.BrokerMemoryProfile>;
}
/**
 * brokerPropertiesArgsProvideDefaults sets the appropriate defaults for BrokerPropertiesArgs
 */
export function brokerPropertiesArgsProvideDefaults(val: BrokerPropertiesArgs): BrokerPropertiesArgs {
    return {
        ...val,
        advanced: (val.advanced ? pulumi.output(val.advanced).apply(advancedSettingsArgsProvideDefaults) : undefined),
        cardinality: (val.cardinality ? pulumi.output(val.cardinality).apply(cardinalityArgsProvideDefaults) : undefined),
        diagnostics: (val.diagnostics ? pulumi.output(val.diagnostics).apply(brokerDiagnosticsArgsProvideDefaults) : undefined),
        generateResourceLimits: (val.generateResourceLimits ? pulumi.output(val.generateResourceLimits).apply(generateResourceLimitsArgsProvideDefaults) : undefined),
        memoryProfile: (val.memoryProfile) ?? "Medium",
    };
}

/**
 * Broker Resource Rule properties. This defines the objects that represent the actions or topics, such as - method.Connect, method.Publish, etc.
 */
export interface BrokerResourceRuleArgs {
    /**
     * Give access for a Broker method (i.e., Connect, Subscribe, or Publish).
     */
    method: pulumi.Input<string | enums.BrokerResourceDefinitionMethods>;
    /**
     * A list of topics or topic patterns that match the topics that the clients can publish or subscribe to. This subfield is required if the method is Publish or Subscribe.
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Cardinality properties
 */
export interface CardinalityArgs {
    /**
     * The backend broker desired properties
     */
    backendChain: pulumi.Input<BackendChainArgs>;
    /**
     * The frontend desired properties
     */
    frontend: pulumi.Input<FrontendArgs>;
}
/**
 * cardinalityArgsProvideDefaults sets the appropriate defaults for CardinalityArgs
 */
export function cardinalityArgsProvideDefaults(val: CardinalityArgs): CardinalityArgs {
    return {
        ...val,
        backendChain: pulumi.output(val.backendChain).apply(backendChainArgsProvideDefaults),
        frontend: pulumi.output(val.frontend).apply(frontendArgsProvideDefaults),
    };
}

/**
 * Cert Manager Cert properties
 */
export interface CertManagerCertOptionsArgs {
    /**
     * Lifetime of certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
     */
    duration: pulumi.Input<string>;
    /**
     * Configuration of certificate private key.
     */
    privateKey: pulumi.Input<CertManagerPrivateKeyArgs>;
    /**
     * When to begin renewing certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
     */
    renewBefore: pulumi.Input<string>;
}

/**
 * Cert-Manager issuerRef properties
 */
export interface CertManagerIssuerRefArgs {
    /**
     * group of issuer.
     */
    apiGroup: pulumi.Input<string>;
    /**
     * kind of issuer (Issuer or ClusterIssuer).
     */
    kind: pulumi.Input<string | enums.CertManagerIssuerKind>;
    /**
     * name of issuer.
     */
    name: pulumi.Input<string>;
}
/**
 * certManagerIssuerRefArgsProvideDefaults sets the appropriate defaults for CertManagerIssuerRefArgs
 */
export function certManagerIssuerRefArgsProvideDefaults(val: CertManagerIssuerRefArgs): CertManagerIssuerRefArgs {
    return {
        ...val,
        apiGroup: (val.apiGroup) ?? "cert-manager.io",
    };
}

/**
 * Cert Manager private key properties
 */
export interface CertManagerPrivateKeyArgs {
    /**
     * algorithm for private key.
     */
    algorithm: pulumi.Input<string | enums.PrivateKeyAlgorithm>;
    /**
     * cert-manager private key rotationPolicy.
     */
    rotationPolicy: pulumi.Input<string | enums.PrivateKeyRotationPolicy>;
}

/**
 * The settings of Client Config.
 */
export interface ClientConfigArgs {
    /**
     * Upper bound of a client's Keep Alive, in seconds.
     */
    maxKeepAliveSeconds?: pulumi.Input<number>;
    /**
     * Upper bound of Message Expiry Interval, in seconds.
     */
    maxMessageExpirySeconds?: pulumi.Input<number>;
    /**
     * Max message size for a packet in Bytes.
     */
    maxPacketSizeBytes?: pulumi.Input<number>;
    /**
     * Upper bound of Receive Maximum that a client can request in the CONNECT packet.
     */
    maxReceiveMaximum?: pulumi.Input<number>;
    /**
     * Upper bound of Session Expiry Interval, in seconds.
     */
    maxSessionExpirySeconds?: pulumi.Input<number>;
    /**
     * The limit on the number of queued messages for a subscriber.
     */
    subscriberQueueLimit?: pulumi.Input<SubscriberQueueLimitArgs>;
}
/**
 * clientConfigArgsProvideDefaults sets the appropriate defaults for ClientConfigArgs
 */
export function clientConfigArgsProvideDefaults(val: ClientConfigArgs): ClientConfigArgs {
    return {
        ...val,
        subscriberQueueLimit: (val.subscriberQueueLimit ? pulumi.output(val.subscriberQueueLimit).apply(subscriberQueueLimitArgsProvideDefaults) : undefined),
    };
}

/**
 * DataFlow BuiltIn Transformation properties
 */
export interface DataFlowBuiltInTransformationArgs {
    /**
     * Enrich data from Broker State Store. Dataset references a key in Broker State Store.
     */
    datasets?: pulumi.Input<pulumi.Input<DataFlowBuiltInTransformationDatasetArgs>[]>;
    /**
     * Filters input record or datapoints based on condition.
     */
    filter?: pulumi.Input<pulumi.Input<DataFlowBuiltInTransformationFilterArgs>[]>;
    /**
     * Maps input to output message.
     */
    map?: pulumi.Input<pulumi.Input<DataFlowBuiltInTransformationMapArgs>[]>;
    /**
     * Reference to the schema that describes the output of the transformation.
     */
    schemaRef?: pulumi.Input<string>;
    /**
     * Serialization format. Optional; defaults to JSON. Allowed value JSON Schema/draft-7, Parquet. Default: Json
     */
    serializationFormat?: pulumi.Input<string | enums.TransformationSerializationFormat>;
}
/**
 * dataFlowBuiltInTransformationArgsProvideDefaults sets the appropriate defaults for DataFlowBuiltInTransformationArgs
 */
export function dataFlowBuiltInTransformationArgsProvideDefaults(val: DataFlowBuiltInTransformationArgs): DataFlowBuiltInTransformationArgs {
    return {
        ...val,
        serializationFormat: (val.serializationFormat) ?? "Json",
    };
}

/**
 * DataFlow BuiltIn Transformation dataset properties
 */
export interface DataFlowBuiltInTransformationDatasetArgs {
    /**
     * A user provided optional description of the dataset.
     */
    description?: pulumi.Input<string>;
    /**
     * Condition to enrich data from Broker State Store. Example: $1 < 0 || $1 > $2 (Assuming inputs section $1 and $2 are provided)
     */
    expression?: pulumi.Input<string>;
    /**
     * List of fields for enriching from the Broker State Store.
     */
    inputs: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The key of the dataset.
     */
    key: pulumi.Input<string>;
    /**
     * The reference to the schema that describes the dataset. Allowed: JSON Schema/draft-7.
     */
    schemaRef?: pulumi.Input<string>;
}

/**
 * DataFlow BuiltIn Transformation filter properties
 */
export interface DataFlowBuiltInTransformationFilterArgs {
    /**
     * A user provided optional description of the filter.
     */
    description?: pulumi.Input<string>;
    /**
     * Condition to filter data. Can reference input fields with {n} where n is the index of the input field starting from 1. Example: $1 < 0 || $1 > $2 (Assuming inputs section $1 and $2 are provided)
     */
    expression: pulumi.Input<string>;
    /**
     * List of fields for filtering in JSON path expression.
     */
    inputs: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of dataflow operation.
     */
    type?: pulumi.Input<string | enums.FilterType>;
}
/**
 * dataFlowBuiltInTransformationFilterArgsProvideDefaults sets the appropriate defaults for DataFlowBuiltInTransformationFilterArgs
 */
export function dataFlowBuiltInTransformationFilterArgsProvideDefaults(val: DataFlowBuiltInTransformationFilterArgs): DataFlowBuiltInTransformationFilterArgs {
    return {
        ...val,
        type: (val.type) ?? "Filter",
    };
}

/**
 * DataFlow BuiltIn Transformation map properties
 */
export interface DataFlowBuiltInTransformationMapArgs {
    /**
     * A user provided optional description of the mapping function.
     */
    description?: pulumi.Input<string>;
    /**
     * Modify the inputs field(s) to the final output field. Example: $1 * 2.2 (Assuming inputs section $1 is provided)
     */
    expression?: pulumi.Input<string>;
    /**
     * List of fields for mapping in JSON path expression.
     */
    inputs: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Where and how the input fields to be organized in the output record.
     */
    output: pulumi.Input<string>;
    /**
     * Type of transformation.
     */
    type?: pulumi.Input<string | enums.DataFlowMappingType>;
}

/**
 * DataFlow Destination Operation properties
 */
export interface DataFlowDestinationOperationArgs {
    /**
     * Destination location, can be a topic or table name. Supports dynamic values with $topic, $systemProperties, $userProperties, $payload, $context, and $subscription.
     */
    dataDestination: pulumi.Input<string>;
    /**
     * Reference to the Endpoint CR. Can be of Broker, Kafka, Fabric, ADLS, ADX type.
     */
    endpointRef: pulumi.Input<string>;
}

/**
 * Azure Data Explorer Authentication properties. NOTE - only authentication property is allowed per entry.
 */
export interface DataFlowEndpointAuthenticationArgs {
    /**
     * SAS token authentication.
     */
    accessTokenSecretRef?: pulumi.Input<string>;
    /**
     * Mode of Authentication.
     */
    method: pulumi.Input<string | enums.AuthenticationMethod>;
    /**
     * SASL authentication.
     */
    saslSettings?: pulumi.Input<DataFlowEndpointAuthenticationSaslArgs>;
    /**
     * Service Account Token authentication.
     */
    serviceAccountTokenSettings?: pulumi.Input<DataFlowEndpointAuthenticationServiceAccountTokenArgs>;
    /**
     * System-assigned managed identity authentication.
     */
    systemAssignedManagedIdentitySettings?: pulumi.Input<DataFlowEndpointAuthenticationSystemAssignedManagedIdentityArgs>;
    /**
     * User-assigned managed identity authentication.
     */
    userAssignedManagedIdentitySettings?: pulumi.Input<DataFlowEndpointAuthenticationUserAssignedManagedIdentityArgs>;
    /**
     * X.509 certificate authentication.
     */
    x509CredentialsSettings?: pulumi.Input<DataFlowEndpointAuthenticationX509Args>;
}

/**
 * DataFlowEndpoint Authentication Sasl properties
 */
export interface DataFlowEndpointAuthenticationSaslArgs {
    /**
     * Type of SASL authentication. Can be PLAIN, SCRAM-SHA-256, or SCRAM-SHA-512.
     */
    saslType: pulumi.Input<string | enums.DataFlowEndpointAuthenticationSaslType>;
    /**
     * Token secret name.
     */
    tokenSecretRef: pulumi.Input<string>;
}

/**
 * Service Account Token for BrokerAuthentication
 */
export interface DataFlowEndpointAuthenticationServiceAccountTokenArgs {
    /**
     * Audience of the service account. Optional, defaults to the broker internal service account audience.
     */
    audience: pulumi.Input<string>;
}

/**
 * DataFlowEndpoint Authentication SystemAssignedManagedIdentity properties
 */
export interface DataFlowEndpointAuthenticationSystemAssignedManagedIdentityArgs {
    /**
     * Audience of the service to authenticate against. Optional; defaults to the audience for Service host configuration.
     */
    audience: pulumi.Input<string>;
}

/**
 * DataFlowEndpoint Authentication UserAssignedManagedIdentity properties
 */
export interface DataFlowEndpointAuthenticationUserAssignedManagedIdentityArgs {
    /**
     * Resource identifier (application ID URI) of the resource, affixed with the .default suffix.
     */
    audience: pulumi.Input<string>;
    /**
     * Client ID for the user-assigned managed identity.
     */
    clientId: pulumi.Input<string>;
    /**
     * Tenant ID.
     */
    tenantId: pulumi.Input<string>;
}

/**
 * DataFlowEndpoint Authentication X509 properties
 */
export interface DataFlowEndpointAuthenticationX509Args {
    /**
     * Secret reference of the X.509 certificate.
     */
    secretRef: pulumi.Input<string>;
}

/**
 * Azure Data Explorer endpoint properties
 */
export interface DataFlowEndpointDataExplorerArgs {
    /**
     * Azure Data Explorer endpoint batching configuration.
     */
    batching?: pulumi.Input<BatchingConfigurationArgs>;
    /**
     * Database name.
     */
    database: pulumi.Input<string>;
    /**
     * Host of the Azure Data Explorer in the form of <cluster>.<region>.kusto.windows.net .
     */
    host: pulumi.Input<string>;
}
/**
 * dataFlowEndpointDataExplorerArgsProvideDefaults sets the appropriate defaults for DataFlowEndpointDataExplorerArgs
 */
export function dataFlowEndpointDataExplorerArgsProvideDefaults(val: DataFlowEndpointDataExplorerArgs): DataFlowEndpointDataExplorerArgs {
    return {
        ...val,
        batching: (val.batching ? pulumi.output(val.batching).apply(batchingConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * Azure Data Lake endpoint properties
 */
export interface DataFlowEndpointDataLakeStorageArgs {
    /**
     * Azure Data Lake endpoint batching configuration.
     */
    batching?: pulumi.Input<BatchingConfigurationArgs>;
    /**
     * Host of the Azure Data Lake in the form of <account>.blob.core.windows.net .
     */
    host: pulumi.Input<string>;
}
/**
 * dataFlowEndpointDataLakeStorageArgsProvideDefaults sets the appropriate defaults for DataFlowEndpointDataLakeStorageArgs
 */
export function dataFlowEndpointDataLakeStorageArgsProvideDefaults(val: DataFlowEndpointDataLakeStorageArgs): DataFlowEndpointDataLakeStorageArgs {
    return {
        ...val,
        batching: (val.batching ? pulumi.output(val.batching).apply(batchingConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * Microsoft Fabric endpoint properties
 */
export interface DataFlowEndpointFabricOneLakeArgs {
    /**
     * Batching configuration.
     */
    batching?: pulumi.Input<BatchingConfigurationArgs>;
    /**
     * Host of the Microsoft Fabric in the form of https://<host>.fabric.microsoft.com.
     */
    host: pulumi.Input<string>;
    /**
     * Names of the workspace and lakehouse.
     */
    names: pulumi.Input<DataFlowEndpointFabricOneLakeNamesArgs>;
    /**
     * Type of location of the data in the workspace. Can be either tables or files.
     */
    oneLakePathType: pulumi.Input<string | enums.DataFlowEndpointFabricPathType>;
}
/**
 * dataFlowEndpointFabricOneLakeArgsProvideDefaults sets the appropriate defaults for DataFlowEndpointFabricOneLakeArgs
 */
export function dataFlowEndpointFabricOneLakeArgsProvideDefaults(val: DataFlowEndpointFabricOneLakeArgs): DataFlowEndpointFabricOneLakeArgs {
    return {
        ...val,
        batching: (val.batching ? pulumi.output(val.batching).apply(batchingConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * Microsoft Fabric endpoint Names properties
 */
export interface DataFlowEndpointFabricOneLakeNamesArgs {
    /**
     * Lakehouse name.
     */
    lakehouseName: pulumi.Input<string>;
    /**
     * Workspace name.
     */
    workspaceName: pulumi.Input<string>;
}

/**
 * Kafka endpoint properties
 */
export interface DataFlowEndpointKafkaArgs {
    /**
     * Batching configuration.
     */
    batching?: pulumi.Input<DataFlowEndpointKafkaBatchingArgs>;
    /**
     * Compression. Can be none, gzip, lz4, or snappy. No effect if the endpoint is used as a source.
     */
    compression?: pulumi.Input<string | enums.DataFlowEndpointKafkaCompression>;
    /**
     * Consumer group ID.
     */
    consumerGroupId?: pulumi.Input<string>;
    /**
     * Copy Broker properties. No effect if the endpoint is used as a source or if the dataflow doesn't have an Broker source.
     */
    copyMqttProperties?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * Kafka endpoint host.
     */
    host?: pulumi.Input<string>;
    /**
     * Kafka acks. Can be all, one, or zero. No effect if the endpoint is used as a source.
     */
    kafkaAcks?: pulumi.Input<string | enums.DataFlowEndpointKafkaAcks>;
    /**
     * Partition handling strategy. Can be default or static. No effect if the endpoint is used as a source.
     */
    partitionStrategy?: pulumi.Input<string | enums.DataFlowEndpointKafkaPartitionStrategy>;
    /**
     * TLS configuration.
     */
    tls: pulumi.Input<TlsPropertiesArgs>;
}
/**
 * dataFlowEndpointKafkaArgsProvideDefaults sets the appropriate defaults for DataFlowEndpointKafkaArgs
 */
export function dataFlowEndpointKafkaArgsProvideDefaults(val: DataFlowEndpointKafkaArgs): DataFlowEndpointKafkaArgs {
    return {
        ...val,
        batching: (val.batching ? pulumi.output(val.batching).apply(dataFlowEndpointKafkaBatchingArgsProvideDefaults) : undefined),
        compression: (val.compression) ?? "None",
        copyMqttProperties: (val.copyMqttProperties) ?? "Disabled",
        kafkaAcks: (val.kafkaAcks) ?? "All",
        partitionStrategy: (val.partitionStrategy) ?? "Default",
        tls: pulumi.output(val.tls).apply(tlsPropertiesArgsProvideDefaults),
    };
}

/**
 * Kafka endpoint Batching properties
 */
export interface DataFlowEndpointKafkaBatchingArgs {
    /**
     * Batching latency in milliseconds.
     */
    latencyMs?: pulumi.Input<number>;
    /**
     * Maximum number of bytes in a batch.
     */
    maxBytes?: pulumi.Input<number>;
    /**
     * Maximum number of messages in a batch.
     */
    maxMessages?: pulumi.Input<number>;
    /**
     * Mode for batching.
     */
    mode?: pulumi.Input<string | enums.OperationalMode>;
}
/**
 * dataFlowEndpointKafkaBatchingArgsProvideDefaults sets the appropriate defaults for DataFlowEndpointKafkaBatchingArgs
 */
export function dataFlowEndpointKafkaBatchingArgsProvideDefaults(val: DataFlowEndpointKafkaBatchingArgs): DataFlowEndpointKafkaBatchingArgs {
    return {
        ...val,
        latencyMs: (val.latencyMs) ?? 5,
        maxBytes: (val.maxBytes) ?? 1000000,
        maxMessages: (val.maxMessages) ?? 100000,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * Local persistent volume endpoint properties
 */
export interface DataFlowEndpointLocalStorageArgs {
    /**
     * Persistent volume claim name.
     */
    persistentVolumeClaimRef: pulumi.Input<string>;
}

/**
 * Broker endpoint properties
 */
export interface DataFlowEndpointMqttArgs {
    /**
     * Client ID prefix. Client ID generated by the dataflow is <prefix>-TBD. Optional; no prefix if omitted.
     */
    clientIdPrefix?: pulumi.Input<string>;
    /**
     * Host of the Broker in the form of <hostname>:<port>. Optional; connects to Broker if omitted.
     */
    host?: pulumi.Input<string>;
    /**
     * Broker KeepAlive for connection in seconds.
     */
    keepAliveSeconds?: pulumi.Input<number>;
    /**
     * The max number of messages to keep in flight. For subscribe, this is the receive maximum. For publish, this is the maximum number of messages to send before waiting for an ack.
     */
    maxInflightMessages?: pulumi.Input<number>;
    /**
     * Enable or disable websockets.
     */
    protocol?: pulumi.Input<string | enums.BrokerProtocolType>;
    /**
     * Qos for Broker connection.
     */
    qos?: pulumi.Input<number>;
    /**
     * Whether or not to keep the retain setting.
     */
    retain?: pulumi.Input<string | enums.MqttRetainType>;
    /**
     * Session expiry in seconds.
     */
    sessionExpirySeconds?: pulumi.Input<number>;
    /**
     * TLS configuration.
     */
    tls?: pulumi.Input<TlsPropertiesArgs>;
}
/**
 * dataFlowEndpointMqttArgsProvideDefaults sets the appropriate defaults for DataFlowEndpointMqttArgs
 */
export function dataFlowEndpointMqttArgsProvideDefaults(val: DataFlowEndpointMqttArgs): DataFlowEndpointMqttArgs {
    return {
        ...val,
        host: (val.host) ?? "aio-mq-dmqtt-frontend:1883",
        keepAliveSeconds: (val.keepAliveSeconds) ?? 60,
        maxInflightMessages: (val.maxInflightMessages) ?? 100,
        protocol: (val.protocol) ?? "Mqtt",
        qos: (val.qos) ?? 1,
        retain: (val.retain) ?? "Keep",
        sessionExpirySeconds: (val.sessionExpirySeconds) ?? 3600,
        tls: (val.tls ? pulumi.output(val.tls).apply(tlsPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * DataFlowEndpoint Resource properties. NOTE - Only one type of endpoint is supported for one Resource
 */
export interface DataFlowEndpointPropertiesArgs {
    /**
     * Authentication configuration.
     */
    authentication: pulumi.Input<DataFlowEndpointAuthenticationArgs>;
    /**
     * Azure Data Explorer endpoint.
     */
    dataExplorerSettings?: pulumi.Input<DataFlowEndpointDataExplorerArgs>;
    /**
     * Azure Data Lake endpoint.
     */
    dataLakeStorageSettings?: pulumi.Input<DataFlowEndpointDataLakeStorageArgs>;
    /**
     * Endpoint Type.
     */
    endpointType: pulumi.Input<string | enums.EndpointType>;
    /**
     * Microsoft Fabric endpoint.
     */
    fabricOneLakeSettings?: pulumi.Input<DataFlowEndpointFabricOneLakeArgs>;
    /**
     * Kafka endpoint.
     */
    kafkaSettings?: pulumi.Input<DataFlowEndpointKafkaArgs>;
    /**
     * Local persistent volume endpoint.
     */
    localStorageSettings?: pulumi.Input<DataFlowEndpointLocalStorageArgs>;
    /**
     * Broker endpoint.
     */
    mqttSettings?: pulumi.Input<DataFlowEndpointMqttArgs>;
}
/**
 * dataFlowEndpointPropertiesArgsProvideDefaults sets the appropriate defaults for DataFlowEndpointPropertiesArgs
 */
export function dataFlowEndpointPropertiesArgsProvideDefaults(val: DataFlowEndpointPropertiesArgs): DataFlowEndpointPropertiesArgs {
    return {
        ...val,
        dataExplorerSettings: (val.dataExplorerSettings ? pulumi.output(val.dataExplorerSettings).apply(dataFlowEndpointDataExplorerArgsProvideDefaults) : undefined),
        dataLakeStorageSettings: (val.dataLakeStorageSettings ? pulumi.output(val.dataLakeStorageSettings).apply(dataFlowEndpointDataLakeStorageArgsProvideDefaults) : undefined),
        fabricOneLakeSettings: (val.fabricOneLakeSettings ? pulumi.output(val.fabricOneLakeSettings).apply(dataFlowEndpointFabricOneLakeArgsProvideDefaults) : undefined),
        kafkaSettings: (val.kafkaSettings ? pulumi.output(val.kafkaSettings).apply(dataFlowEndpointKafkaArgsProvideDefaults) : undefined),
        mqttSettings: (val.mqttSettings ? pulumi.output(val.mqttSettings).apply(dataFlowEndpointMqttArgsProvideDefaults) : undefined),
    };
}

/**
 * DataFlow Operation properties. NOTE - One only method is allowed to be used for one entry.
 */
export interface DataFlowOperationArgs {
    /**
     * Transformation configuration.
     */
    builtInTransformationSettings?: pulumi.Input<DataFlowBuiltInTransformationArgs>;
    /**
     * Destination configuration.
     */
    destinationSettings: pulumi.Input<DataFlowDestinationOperationArgs>;
    /**
     * Optional user provided name of the transformation.
     */
    name?: pulumi.Input<string>;
    /**
     * Type of operation.
     */
    operationType: pulumi.Input<string | enums.OperationType>;
    /**
     * Source configuration.
     */
    sourceSettings: pulumi.Input<DataFlowSourceOperationArgs>;
}
/**
 * dataFlowOperationArgsProvideDefaults sets the appropriate defaults for DataFlowOperationArgs
 */
export function dataFlowOperationArgsProvideDefaults(val: DataFlowOperationArgs): DataFlowOperationArgs {
    return {
        ...val,
        builtInTransformationSettings: (val.builtInTransformationSettings ? pulumi.output(val.builtInTransformationSettings).apply(dataFlowBuiltInTransformationArgsProvideDefaults) : undefined),
        sourceSettings: pulumi.output(val.sourceSettings).apply(dataFlowSourceOperationArgsProvideDefaults),
    };
}

/**
 * DataFlowProfile Resource properties
 */
export interface DataFlowProfilePropertiesArgs {
    /**
     * Spec defines the desired identities of NBC diagnostics settings.
     */
    diagnostics?: pulumi.Input<ProfileDiagnosticsArgs>;
    /**
     * To manually scale the dataflow profile, specify the maximum number of instances you want to run.
     */
    instanceCount?: pulumi.Input<number>;
}
/**
 * dataFlowProfilePropertiesArgsProvideDefaults sets the appropriate defaults for DataFlowProfilePropertiesArgs
 */
export function dataFlowProfilePropertiesArgsProvideDefaults(val: DataFlowProfilePropertiesArgs): DataFlowProfilePropertiesArgs {
    return {
        ...val,
        diagnostics: (val.diagnostics ? pulumi.output(val.diagnostics).apply(profileDiagnosticsArgsProvideDefaults) : undefined),
    };
}

/**
 * DataFlow Resource properties
 */
export interface DataFlowPropertiesArgs {
    /**
     * Mode for DataFlow. Optional; defaults to Enabled.
     */
    mode?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * List of operations including source and destination references as well as transformation.
     */
    operations: pulumi.Input<pulumi.Input<DataFlowOperationArgs>[]>;
    /**
     * Reference to the DataflowProfile CR.
     */
    profileRef: pulumi.Input<string>;
}
/**
 * dataFlowPropertiesArgsProvideDefaults sets the appropriate defaults for DataFlowPropertiesArgs
 */
export function dataFlowPropertiesArgsProvideDefaults(val: DataFlowPropertiesArgs): DataFlowPropertiesArgs {
    return {
        ...val,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * DataFlow Source Operation properties
 */
export interface DataFlowSourceOperationArgs {
    /**
     * Reference to the resource in Azure Device Registry where the data in the endpoint originates from.
     */
    assetRef?: pulumi.Input<string>;
    /**
     * List of source locations. Can be Broker or Kafka topics. Supports wildcards # and +.
     */
    dataSources: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Reference to the Dataflow Endpoint resource. Can only be of Broker and Kafka type.
     */
    endpointRef: pulumi.Input<string>;
    /**
     * Schema CR reference. Data will be deserialized according to the schema, and dropped if it doesn't match.
     */
    schemaRef?: pulumi.Input<string>;
    /**
     * Content is a JSON Schema. Allowed: JSON Schema/draft-7.
     */
    serializationFormat?: pulumi.Input<string | enums.SourceSerializationFormat>;
}
/**
 * dataFlowSourceOperationArgsProvideDefaults sets the appropriate defaults for DataFlowSourceOperationArgs
 */
export function dataFlowSourceOperationArgsProvideDefaults(val: DataFlowSourceOperationArgs): DataFlowSourceOperationArgs {
    return {
        ...val,
        serializationFormat: (val.serializationFormat) ?? "Json",
    };
}

/**
 * Diagnostic Log properties
 */
export interface DiagnosticsLogsArgs {
    /**
     * The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.
     */
    level?: pulumi.Input<string>;
    /**
     * The open telemetry export configuration.
     */
    opentelemetryExportConfig?: pulumi.Input<OpenTelemetryLogExportConfigArgs>;
}
/**
 * diagnosticsLogsArgsProvideDefaults sets the appropriate defaults for DiagnosticsLogsArgs
 */
export function diagnosticsLogsArgsProvideDefaults(val: DiagnosticsLogsArgs): DiagnosticsLogsArgs {
    return {
        ...val,
        level: (val.level) ?? "info",
        opentelemetryExportConfig: (val.opentelemetryExportConfig ? pulumi.output(val.opentelemetryExportConfig).apply(openTelemetryLogExportConfigArgsProvideDefaults) : undefined),
    };
}

/**
 * DiskBackedMessageBuffer properties
 */
export interface DiskBackedMessageBufferArgs {
    /**
     * Use the specified persistent volume claim template to mount a "generic ephemeral volume" for the message buffer. See <https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/#generic-ephemeral-volumes> for details.
     */
    ephemeralVolumeClaimSpec?: pulumi.Input<VolumeClaimSpecArgs>;
    /**
     * The max size of the message buffer on disk. If a PVC template is specified using one of ephemeralVolumeClaimSpec or persistentVolumeClaimSpec, then this size is used as the request and limit sizes of that template. If neither ephemeralVolumeClaimSpec nor persistentVolumeClaimSpec are specified, then an emptyDir volume is mounted with this size as its limit. See <https://kubernetes.io/docs/concepts/storage/volumes/#emptydir> for details.
     */
    maxSize: pulumi.Input<string>;
    /**
     * Use the specified persistent volume claim template to mount a persistent volume for the message buffer.
     */
    persistentVolumeClaimSpec?: pulumi.Input<VolumeClaimSpecArgs>;
}

/**
 * Extended location is an extension of Azure locations. They provide a way to use their Azure ARC enabled Kubernetes clusters as target locations for deploying Azure services instances.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name: pulumi.Input<string>;
    /**
     * Type of ExtendedLocation.
     */
    type: pulumi.Input<string | enums.ExtendedLocationType>;
}

/**
 * The desired properties of the frontend instances of the Broker
 */
export interface FrontendArgs {
    /**
     * The desired number of frontend instances (pods).
     */
    replicas: pulumi.Input<number>;
    /**
     * Number of logical frontend workers per instance (pod).
     */
    workers?: pulumi.Input<number>;
}
/**
 * frontendArgsProvideDefaults sets the appropriate defaults for FrontendArgs
 */
export function frontendArgsProvideDefaults(val: FrontendArgs): FrontendArgs {
    return {
        ...val,
        workers: (val.workers) ?? 2,
    };
}

/**
 * GenerateResourceLimits properties
 */
export interface GenerateResourceLimitsArgs {
    /**
     * The toggle to enable/disable cpu resource limits.
     */
    cpu?: pulumi.Input<string | enums.OperationalMode>;
}
/**
 * generateResourceLimitsArgsProvideDefaults sets the appropriate defaults for GenerateResourceLimitsArgs
 */
export function generateResourceLimitsArgsProvideDefaults(val: GenerateResourceLimitsArgs): GenerateResourceLimitsArgs {
    return {
        ...val,
        cpu: (val.cpu) ?? "Enabled",
    };
}

/**
 * The properties of a Instance resource.
 */
export interface InstancePropertiesArgs {
    /**
     * Detailed description of the Instance.
     */
    description?: pulumi.Input<string>;
}

/**
 * Kubernetes reference
 */
export interface KubernetesReferenceArgs {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     */
    apiGroup?: pulumi.Input<string>;
    /**
     * Kind is the type of resource being referenced
     */
    kind: pulumi.Input<string>;
    /**
     * Name is the name of resource being referenced
     */
    name: pulumi.Input<string>;
    /**
     * Namespace is the namespace of the resource being referenced. This field is required when the resource has a namespace.
     */
    namespace?: pulumi.Input<string>;
}

/**
 * Defines a TCP port on which a `BrokerListener` listens.
 */
export interface ListenerPortArgs {
    /**
     * Reference to client authentication settings. Omit to disable authentication.
     */
    authenticationRef?: pulumi.Input<string>;
    /**
     * Reference to client authorization settings. Omit to disable authorization.
     */
    authorizationRef?: pulumi.Input<string>;
    /**
     * Kubernetes node port. Only relevant when this port is associated with a `NodePort` listener.
     */
    nodePort?: pulumi.Input<number>;
    /**
     * TCP port for accepting client connections.
     */
    port: pulumi.Input<number>;
    /**
     * Protocol to use for client connections.
     */
    protocol?: pulumi.Input<string | enums.BrokerProtocolType>;
    /**
     * TLS server certificate settings for this port. Omit to disable TLS.
     */
    tls?: pulumi.Input<TlsCertMethodArgs>;
}
/**
 * listenerPortArgsProvideDefaults sets the appropriate defaults for ListenerPortArgs
 */
export function listenerPortArgsProvideDefaults(val: ListenerPortArgs): ListenerPortArgs {
    return {
        ...val,
        protocol: (val.protocol) ?? "Mqtt",
        tls: (val.tls ? pulumi.output(val.tls).apply(tlsCertMethodArgsProvideDefaults) : undefined),
    };
}

/**
 * Kubernetes reference
 */
export interface LocalKubernetesReferenceArgs {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     */
    apiGroup?: pulumi.Input<string>;
    /**
     * Kind is the type of resource being referenced
     */
    kind: pulumi.Input<string>;
    /**
     * Name is the name of resource being referenced
     */
    name: pulumi.Input<string>;
}

/**
 * Diagnostic Metrics properties
 */
export interface MetricsArgs {
    /**
     * The open telemetry export configuration.
     */
    opentelemetryExportConfig?: pulumi.Input<OpenTelemetryExportConfigArgs>;
    /**
     * The prometheus port to expose the metrics.
     */
    prometheusPort?: pulumi.Input<number>;
}
/**
 * metricsArgsProvideDefaults sets the appropriate defaults for MetricsArgs
 */
export function metricsArgsProvideDefaults(val: MetricsArgs): MetricsArgs {
    return {
        ...val,
        opentelemetryExportConfig: (val.opentelemetryExportConfig ? pulumi.output(val.opentelemetryExportConfig).apply(openTelemetryExportConfigArgsProvideDefaults) : undefined),
        prometheusPort: (val.prometheusPort) ?? 9600,
    };
}

/**
 * OpenTelemetry Export Configuration properties
 */
export interface OpenTelemetryExportConfigArgs {
    /**
     * How often to export the metrics to the open telemetry collector.
     */
    intervalSeconds?: pulumi.Input<number>;
    /**
     * The open telemetry collector endpoint to export to.
     */
    otlpGrpcEndpoint: pulumi.Input<string>;
}
/**
 * openTelemetryExportConfigArgsProvideDefaults sets the appropriate defaults for OpenTelemetryExportConfigArgs
 */
export function openTelemetryExportConfigArgsProvideDefaults(val: OpenTelemetryExportConfigArgs): OpenTelemetryExportConfigArgs {
    return {
        ...val,
        intervalSeconds: (val.intervalSeconds) ?? 30,
    };
}

/**
 * OpenTelemetry Log Export Configuration properties
 */
export interface OpenTelemetryLogExportConfigArgs {
    /**
     * How often to export the metrics to the open telemetry collector.
     */
    intervalSeconds?: pulumi.Input<number>;
    /**
     * The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.
     */
    level?: pulumi.Input<string>;
    /**
     * The open telemetry collector endpoint to export to.
     */
    otlpGrpcEndpoint: pulumi.Input<string>;
}
/**
 * openTelemetryLogExportConfigArgsProvideDefaults sets the appropriate defaults for OpenTelemetryLogExportConfigArgs
 */
export function openTelemetryLogExportConfigArgsProvideDefaults(val: OpenTelemetryLogExportConfigArgs): OpenTelemetryLogExportConfigArgs {
    return {
        ...val,
        intervalSeconds: (val.intervalSeconds) ?? 30,
        level: (val.level) ?? "error",
    };
}

/**
 * PrincipalDefinition properties of Rule
 */
export interface PrincipalDefinitionArgs {
    /**
     * A list of key-value pairs that match the attributes of the clients. The attributes are case-sensitive and must match the attributes provided by the clients during authentication.
     */
    attributes?: pulumi.Input<pulumi.Input<{[key: string]: pulumi.Input<string>}>[]>;
    /**
     * A list of client IDs that match the clients. The client IDs are case-sensitive and must match the client IDs provided by the clients during connection.
     */
    clientIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of usernames that match the clients. The usernames are case-sensitive and must match the usernames provided by the clients during authentication.
     */
    usernames?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * DataFlowProfile Diagnostics properties
 */
export interface ProfileDiagnosticsArgs {
    /**
     * Diagnostic log settings for the resource.
     */
    logs?: pulumi.Input<DiagnosticsLogsArgs>;
    /**
     * The metrics settings for the resource.
     */
    metrics?: pulumi.Input<MetricsArgs>;
}
/**
 * profileDiagnosticsArgsProvideDefaults sets the appropriate defaults for ProfileDiagnosticsArgs
 */
export function profileDiagnosticsArgsProvideDefaults(val: ProfileDiagnosticsArgs): ProfileDiagnosticsArgs {
    return {
        ...val,
        logs: (val.logs ? pulumi.output(val.logs).apply(diagnosticsLogsArgsProvideDefaults) : undefined),
        metrics: (val.metrics ? pulumi.output(val.metrics).apply(metricsArgsProvideDefaults) : undefined),
    };
}

/**
 * Subject Alternative Names (SANs) for certificate.
 */
export interface SanForCertArgs {
    /**
     * DNS SANs.
     */
    dns: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address SANs.
     */
    ip: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Broker Diagnostic Self check properties
 */
export interface SelfCheckArgs {
    /**
     * The self check interval.
     */
    intervalSeconds?: pulumi.Input<number>;
    /**
     * The toggle to enable/disable self check.
     */
    mode?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * The timeout for self check.
     */
    timeoutSeconds?: pulumi.Input<number>;
}
/**
 * selfCheckArgsProvideDefaults sets the appropriate defaults for SelfCheckArgs
 */
export function selfCheckArgsProvideDefaults(val: SelfCheckArgs): SelfCheckArgs {
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
export interface SelfTracingArgs {
    /**
     * The self tracing interval.
     */
    intervalSeconds?: pulumi.Input<number>;
    /**
     * The toggle to enable/disable self tracing.
     */
    mode?: pulumi.Input<string | enums.OperationalMode>;
}
/**
 * selfTracingArgsProvideDefaults sets the appropriate defaults for SelfTracingArgs
 */
export function selfTracingArgsProvideDefaults(val: SelfTracingArgs): SelfTracingArgs {
    return {
        ...val,
        intervalSeconds: (val.intervalSeconds) ?? 30,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * State Store Resource Rule properties.
 */
export interface StateStoreResourceRuleArgs {
    /**
     * Allowed keyTypes pattern, string, binary. The key type used for matching, for example pattern tries to match the key to a glob-style pattern and string checks key is equal to value provided in keys.
     */
    keyType: pulumi.Input<string | enums.StateStoreResourceKeyTypes>;
    /**
     * Give access to state store keys for the corresponding principals defined. When key type is pattern set glob-style pattern (e.g., '*', 'clients/*').
     */
    keys: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Give access for `Read`, `Write` and `ReadWrite` access level.
     */
    method: pulumi.Input<string | enums.StateStoreResourceDefinitionMethods>;
}

/**
 * The settings of Subscriber Queue Limit.
 */
export interface SubscriberQueueLimitArgs {
    /**
     * The maximum length of the queue before messages start getting dropped.
     */
    length?: pulumi.Input<number>;
    /**
     * The strategy to use for dropping messages from the queue.
     */
    strategy?: pulumi.Input<string | enums.SubscriberMessageDropStrategy>;
}
/**
 * subscriberQueueLimitArgsProvideDefaults sets the appropriate defaults for SubscriberQueueLimitArgs
 */
export function subscriberQueueLimitArgsProvideDefaults(val: SubscriberQueueLimitArgs): SubscriberQueueLimitArgs {
    return {
        ...val,
        strategy: (val.strategy) ?? "None",
    };
}

/**
 * Collection of different TLS types, NOTE- Enum at a time only one of them needs to be supported
 */
export interface TlsCertMethodArgs {
    /**
     * Option 1 - Automatic TLS server certificate management with cert-manager.
     */
    automatic?: pulumi.Input<AutomaticCertMethodArgs>;
    /**
     * Option 2 - Manual TLS server certificate management through a defined secret.
     */
    manual?: pulumi.Input<X509ManualCertificateArgs>;
    /**
     * Mode of TLS server certificate management.
     */
    mode: pulumi.Input<string | enums.TlsCertMethodMode>;
}
/**
 * tlsCertMethodArgsProvideDefaults sets the appropriate defaults for TlsCertMethodArgs
 */
export function tlsCertMethodArgsProvideDefaults(val: TlsCertMethodArgs): TlsCertMethodArgs {
    return {
        ...val,
        automatic: (val.automatic ? pulumi.output(val.automatic).apply(automaticCertMethodArgsProvideDefaults) : undefined),
    };
}

/**
 * Tls properties
 */
export interface TlsPropertiesArgs {
    /**
     * Mode for TLS.
     */
    mode?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * Trusted CA certificate config map.
     */
    trustedCaCertificateConfigMapRef?: pulumi.Input<string>;
}
/**
 * tlsPropertiesArgsProvideDefaults sets the appropriate defaults for TlsPropertiesArgs
 */
export function tlsPropertiesArgsProvideDefaults(val: TlsPropertiesArgs): TlsPropertiesArgs {
    return {
        ...val,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * Broker Diagnostic Trace properties
 */
export interface TracesArgs {
    /**
     * The cache size in megabytes.
     */
    cacheSizeMegabytes?: pulumi.Input<number>;
    /**
     * The toggle to enable/disable traces.
     */
    mode?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * The open telemetry export configuration.
     */
    opentelemetryExportConfig?: pulumi.Input<OpenTelemetryExportConfigArgs>;
    /**
     * The self tracing properties.
     */
    selfTracing?: pulumi.Input<SelfTracingArgs>;
    /**
     * The span channel capacity.
     */
    spanChannelCapacity?: pulumi.Input<number>;
}
/**
 * tracesArgsProvideDefaults sets the appropriate defaults for TracesArgs
 */
export function tracesArgsProvideDefaults(val: TracesArgs): TracesArgs {
    return {
        ...val,
        cacheSizeMegabytes: (val.cacheSizeMegabytes) ?? 16,
        mode: (val.mode) ?? "Enabled",
        opentelemetryExportConfig: (val.opentelemetryExportConfig ? pulumi.output(val.opentelemetryExportConfig).apply(openTelemetryExportConfigArgsProvideDefaults) : undefined),
        selfTracing: (val.selfTracing ? pulumi.output(val.selfTracing).apply(selfTracingArgsProvideDefaults) : undefined),
        spanChannelCapacity: (val.spanChannelCapacity) ?? 1000,
    };
}

/**
 * VolumeClaimResourceRequirements properties
 */
export interface VolumeClaimResourceRequirementsArgs {
    /**
     * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * VolumeClaimSpec properties
 */
export interface VolumeClaimSpecArgs {
    /**
     * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     */
    accessModes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
     */
    dataSource?: pulumi.Input<LocalKubernetesReferenceArgs>;
    /**
     * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
     */
    dataSourceRef?: pulumi.Input<KubernetesReferenceArgs>;
    /**
     * Resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
     */
    resources?: pulumi.Input<VolumeClaimResourceRequirementsArgs>;
    /**
     * A label query over volumes to consider for binding.
     */
    selector?: pulumi.Input<VolumeClaimSpecSelectorArgs>;
    /**
     * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
     */
    storageClassName?: pulumi.Input<string>;
    /**
     * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. This is a beta feature.
     */
    volumeMode?: pulumi.Input<string>;
    /**
     * VolumeName is the binding reference to the PersistentVolume backing this claim.
     */
    volumeName?: pulumi.Input<string>;
}

/**
 * VolumeClaimSpecSelector properties
 */
export interface VolumeClaimSpecSelectorArgs {
    /**
     * MatchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    matchExpressions?: pulumi.Input<pulumi.Input<VolumeClaimSpecSelectorMatchExpressionsArgs>[]>;
    /**
     * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
     */
    matchLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * VolumeClaimSpecSelectorMatchExpressions properties
 */
export interface VolumeClaimSpecSelectorMatchExpressionsArgs {
    /**
     * key is the label key that the selector applies to.
     */
    key: pulumi.Input<string>;
    /**
     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
     */
    operator: pulumi.Input<string | enums.OperatorValues>;
    /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * X509 Certificate Authentication properties.
 */
export interface X509ManualCertificateArgs {
    /**
     * Kubernetes secret containing an X.509 client certificate. This is a reference to the secret through an identifying name, not the secret itself.
     */
    secretRef: pulumi.Input<string>;
}



