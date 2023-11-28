import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * BasicRules of AuthorizationConfig Polar rules are not supported
 */
export interface AuthorizationBasicRuleArgs {
    /**
     * This subfield defines the broker resources that the Basic Rule is applied on.
     */
    brokerResources: pulumi.Input<pulumi.Input<ResourceInfoDefinitionArgs>[]>;
    /**
     * This subfield defines the identities that represent the clients.
     */
    principals: pulumi.Input<PrincipalDefinitionArgs>;
}

/**
 * Broker AuthorizationConfig properties
 */
export interface AuthorizationConfigArgs {
    /**
     * Enable caching of the authorization rules.
     */
    enableCache?: pulumi.Input<boolean>;
    /**
     * Authorization Rules to be used. If no rule is set, but Authorization Resource is used that would mean DenyAll.
     */
    rules?: pulumi.Input<pulumi.Input<AuthorizationBasicRuleArgs>[]>;
}
/**
 * authorizationConfigArgsProvideDefaults sets the appropriate defaults for AuthorizationConfigArgs
 */
export function authorizationConfigArgsProvideDefaults(val: AuthorizationConfigArgs): AuthorizationConfigArgs {
    return {
        ...val,
        enableCache: (val.enableCache) ?? true,
    };
}

/**
 * Automatic TLS server certificate management with cert-manager
 */
export interface AutomaticCertMethodArgs {
    /**
     * Lifetime of automatically-managed certificate.
     */
    duration?: pulumi.Input<string>;
    /**
     * cert-manager issuerRef.
     */
    issuerRef: pulumi.Input<CertManagerIssuerRefArgs>;
    /**
     * Cert Manager private key.
     */
    privateKey?: pulumi.Input<CertManagerPrivateKeyArgs>;
    /**
     * When to begin renewing automatically-managed certificate.
     */
    renewBefore?: pulumi.Input<string>;
    /**
     * Additional SANs to include in the certificate.
     */
    san?: pulumi.Input<SanForCertArgs>;
    /**
     * Secret for storing server certificate. Any existing data will be overwritten.
     */
    secretName?: pulumi.Input<string>;
    /**
     * Certificate K8S namespace. Omit to use default namespace.
     */
    secretNamespace?: pulumi.Input<string>;
}
/**
 * automaticCertMethodArgsProvideDefaults sets the appropriate defaults for AutomaticCertMethodArgs
 */
export function automaticCertMethodArgsProvideDefaults(val: AutomaticCertMethodArgs): AutomaticCertMethodArgs {
    return {
        ...val,
        duration: (val.duration) ?? "720h",
        issuerRef: pulumi.output(val.issuerRef).apply(certManagerIssuerRefArgsProvideDefaults),
        privateKey: (val.privateKey ? pulumi.output(val.privateKey).apply(certManagerPrivateKeyArgsProvideDefaults) : undefined),
        renewBefore: (val.renewBefore) ?? "240h",
    };
}

/**
 * Desired properties of the Frontend Instances of the DMQTT Broker
 */
export interface BackendChainArgs {
    /**
     * Partitions is desired number of physical backend chains of the given distributed MQTT broker.
     */
    partitions: pulumi.Input<number>;
    /**
     * Redundancy Factor is desired numbers of broker instances in one chain.
     */
    redundancyFactor: pulumi.Input<number>;
    /**
     * Defines whether disk transfer is enabled or not.
     */
    temporaryDiskTransferEnabled?: pulumi.Input<boolean>;
    /**
     * Defines the percentage usage of buffer pool above which disk transfer will start.
     */
    temporaryDiskTransferHighWatermarkPercent?: pulumi.Input<number>;
    /**
     * Defines the percentage usage of buffer pool below which disk transfer will stop.
     */
    temporaryDiskTransferLowWatermarkPercent?: pulumi.Input<number>;
    /**
     * Defines the limits for memory usage percent of the backend instances of the MQTT broker.
     */
    temporaryMaxBackendMemUsagePercent?: pulumi.Input<number>;
    /**
     * Defines the limits for resources of the backend instances of the MQTT broker.
     */
    temporaryResourceLimits?: pulumi.Input<TemporaryResourceLimitsConfigArgs>;
    /**
     * Number of logical backend workers per pod.
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
 * Custom Authentication properties
 */
export interface BrokerAuthenticatorCustomAuthArgs {
    /**
     * X509 Custom Auth type details.
     */
    x509: pulumi.Input<BrokerAuthenticatorCustomAuthX509Args>;
}

/**
 * X509 Custom Authentication properties. NOTE - Enum only authenticator type supported at a time.
 */
export interface BrokerAuthenticatorCustomAuthX509Args {
    /**
     * Keyvault X509 secret properties.
     */
    keyVault?: pulumi.Input<KeyVaultCertificatePropertiesArgs>;
    /**
     * Secret where cert details are stored.
     */
    secretName?: pulumi.Input<string>;
}

/**
 * Custom method for BrokerAuthentication
 */
export interface BrokerAuthenticatorMethodCustomArgs {
    /**
     * Custom Broker Authentication Method.
     */
    auth?: pulumi.Input<BrokerAuthenticatorCustomAuthArgs>;
    /**
     * CA cert config map to use.
     */
    caCertConfigMap?: pulumi.Input<string>;
    /**
     * Endpoint to connect to.
     */
    endpoint: pulumi.Input<string>;
    /**
     * Configuration Headers to use.
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
 * SVID for BrokerAuthentication
 */
export interface BrokerAuthenticatorMethodSvidArgs {
    /**
     * Mounted socket path for spiffe agent.
     */
    agentSocketPath: pulumi.Input<string>;
    /**
     * Maximum number of re-tries to fetch identity.
     */
    identityMaxRetry?: pulumi.Input<number>;
    /**
     * Maximum time to wait before fetching identity again.
     */
    identityWaitRetryMs?: pulumi.Input<number>;
}
/**
 * brokerAuthenticatorMethodSvidArgsProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodSvidArgs
 */
export function brokerAuthenticatorMethodSvidArgsProvideDefaults(val: BrokerAuthenticatorMethodSvidArgs): BrokerAuthenticatorMethodSvidArgs {
    return {
        ...val,
        identityMaxRetry: (val.identityMaxRetry) ?? 3,
        identityWaitRetryMs: (val.identityWaitRetryMs) ?? 5000,
    };
}

/**
 * UsernamePassword for BrokerAuthentication
 */
export interface BrokerAuthenticatorMethodUsernamePasswordArgs {
    /**
     * Keyvault username password secret properties.
     */
    keyVault?: pulumi.Input<KeyVaultSecretPropertiesArgs>;
    /**
     * Secret where username and password are stored.
     */
    secretName?: pulumi.Input<string>;
}

/**
 * X509 for BrokerAuthentication.
 */
export interface BrokerAuthenticatorMethodX509Args {
    /**
     * K8S Secret name to mount for username and password.
     */
    attributes?: pulumi.Input<BrokerAuthenticatorMethodX509AttributesArgs>;
    /**
     * Trusted client ca cert config map.
     */
    trustedClientCaCertConfigMap?: pulumi.Input<string>;
}
/**
 * brokerAuthenticatorMethodX509ArgsProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodX509Args
 */
export function brokerAuthenticatorMethodX509ArgsProvideDefaults(val: BrokerAuthenticatorMethodX509Args): BrokerAuthenticatorMethodX509Args {
    return {
        ...val,
        trustedClientCaCertConfigMap: (val.trustedClientCaCertConfigMap) ?? "client-ca",
    };
}

/**
 * BrokerAuthenticatorMethodX509Attributes properties. NOTE - Enum only type supported at a time.
 */
export interface BrokerAuthenticatorMethodX509AttributesArgs {
    /**
     * Keyvault x509 attributes secret properties.
     */
    keyVault?: pulumi.Input<KeyVaultSecretPropertiesArgs>;
    /**
     * Secret where x509 attributes are stored.
     */
    secretName?: pulumi.Input<string>;
}

/**
 * Collection of different CrdAuthenticator methods of Broker Resource. NOTE Enum - Only one method is supported for each entry.
 */
export interface BrokerAuthenticatorMethodsArgs {
    /**
     * Custom Authentication Method.
     */
    custom?: pulumi.Input<BrokerAuthenticatorMethodCustomArgs>;
    /**
     * Service Account Token Method.
     */
    sat?: pulumi.Input<BrokerAuthenticatorMethodSatArgs>;
    /**
     * Service Account Token Method.
     */
    svid?: pulumi.Input<BrokerAuthenticatorMethodSvidArgs>;
    /**
     * UsernamePassword Method.
     */
    usernamePassword?: pulumi.Input<BrokerAuthenticatorMethodUsernamePasswordArgs>;
    /**
     * X509 Method.
     */
    x509?: pulumi.Input<BrokerAuthenticatorMethodX509Args>;
}
/**
 * brokerAuthenticatorMethodsArgsProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodsArgs
 */
export function brokerAuthenticatorMethodsArgsProvideDefaults(val: BrokerAuthenticatorMethodsArgs): BrokerAuthenticatorMethodsArgs {
    return {
        ...val,
        svid: (val.svid ? pulumi.output(val.svid).apply(brokerAuthenticatorMethodSvidArgsProvideDefaults) : undefined),
        x509: (val.x509 ? pulumi.output(val.x509).apply(brokerAuthenticatorMethodX509ArgsProvideDefaults) : undefined),
    };
}

/**
 * Diagnostics setting specific to Broker
 */
export interface BrokerDiagnosticsArgs {
    /**
     * Diagnostic Service endpoint
     */
    diagnosticServiceEndpoint?: pulumi.Input<string>;
    /**
     * Knob to enable/disable metrics. Default = true
     */
    enableMetrics?: pulumi.Input<boolean>;
    /**
     * Enable self check on Broker via Probe.
     */
    enableSelfCheck?: pulumi.Input<boolean>;
    /**
     * Enable self tracing on the Broker so that every selfCheckFrequencySeconds a random message is traced even if it didn't have trace context.
     */
    enableSelfTracing?: pulumi.Input<boolean>;
    /**
     * Knob to enable/disable entire tracing infrastructure.
     */
    enableTracing?: pulumi.Input<boolean>;
    /**
     * Format for the logs generated.
     */
    logFormat?: pulumi.Input<string>;
    /**
     * Log level for the Broker.
     */
    logLevel?: pulumi.Input<string>;
    /**
     * Maximum time for the CellMap to live.
     */
    maxCellMapLifetime?: pulumi.Input<number>;
    /**
     * Metric update frequency in seconds.
     */
    metricUpdateFrequencySeconds?: pulumi.Input<number>;
    /**
     * Probe Image to run.
     */
    probeImage?: pulumi.Input<string>;
    /**
     * Frequency for the self check to run.
     */
    selfCheckFrequencySeconds?: pulumi.Input<number>;
    /**
     * Time out period of the self check.
     */
    selfCheckTimeoutSeconds?: pulumi.Input<number>;
    /**
     * The frequency at which selfTrace should run.
     */
    selfTraceFrequencySeconds?: pulumi.Input<number>;
    /**
     * The number of the spans generated by the Tracing.
     */
    spanChannelCapacity?: pulumi.Input<number>;
}
/**
 * brokerDiagnosticsArgsProvideDefaults sets the appropriate defaults for BrokerDiagnosticsArgs
 */
export function brokerDiagnosticsArgsProvideDefaults(val: BrokerDiagnosticsArgs): BrokerDiagnosticsArgs {
    return {
        ...val,
        enableMetrics: (val.enableMetrics) ?? true,
        enableSelfCheck: (val.enableSelfCheck) ?? true,
        enableSelfTracing: (val.enableSelfTracing) ?? true,
        enableTracing: (val.enableTracing) ?? true,
        logFormat: (val.logFormat) ?? "text",
        logLevel: (val.logLevel) ?? "info,hyper=off,kube_client=off,tower=off,conhash=off,h2=off",
        maxCellMapLifetime: (val.maxCellMapLifetime) ?? 60,
        metricUpdateFrequencySeconds: (val.metricUpdateFrequencySeconds) ?? 30,
        probeImage: (val.probeImage) ?? "sample.azurecr.io/diagnostics-probe:0.5.0",
        selfCheckFrequencySeconds: (val.selfCheckFrequencySeconds) ?? 30,
        selfCheckTimeoutSeconds: (val.selfCheckTimeoutSeconds) ?? 15,
        selfTraceFrequencySeconds: (val.selfTraceFrequencySeconds) ?? 30,
        spanChannelCapacity: (val.spanChannelCapacity) ?? 1000,
    };
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
     * The frontend broker desired properties
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
 * Cert Manager CA Cert properties
 */
export interface CertManagerCertOptionsArgs {
    /**
     * Duration of CA cert.
     */
    duration: pulumi.Input<string>;
    /**
     * Cert Manager private key.
     */
    privateKey: pulumi.Input<CertManagerPrivateKeyArgs>;
    /**
     * Renew before time of CA cert.
     */
    renewBefore: pulumi.Input<string>;
}
/**
 * certManagerCertOptionsArgsProvideDefaults sets the appropriate defaults for CertManagerCertOptionsArgs
 */
export function certManagerCertOptionsArgsProvideDefaults(val: CertManagerCertOptionsArgs): CertManagerCertOptionsArgs {
    return {
        ...val,
        duration: (val.duration) ?? "720h",
        privateKey: pulumi.output(val.privateKey).apply(certManagerPrivateKeyArgsProvideDefaults),
        renewBefore: (val.renewBefore) ?? "240h",
    };
}

/**
 * Cert-Manager issuerRef properties
 */
export interface CertManagerIssuerRefArgs {
    /**
     * group of issuer.
     */
    group: pulumi.Input<string>;
    /**
     * kind of issuer (Issuer or ClusterIssuer).
     */
    kind: pulumi.Input<string>;
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
        group: (val.group) ?? "cert-manager.io",
    };
}

/**
 * Cert Manager private key properties
 */
export interface CertManagerPrivateKeyArgs {
    /**
     * algorithm for private key.
     */
    algorithm: pulumi.Input<string>;
    /**
     * cert-manager rotationPolicy.
     */
    rotationPolicy: pulumi.Input<string>;
    /**
     * size of private key.
     */
    size: pulumi.Input<number>;
}
/**
 * certManagerPrivateKeyArgsProvideDefaults sets the appropriate defaults for CertManagerPrivateKeyArgs
 */
export function certManagerPrivateKeyArgsProvideDefaults(val: CertManagerPrivateKeyArgs): CertManagerPrivateKeyArgs {
    return {
        ...val,
        algorithm: (val.algorithm) ?? "ECDSA",
        rotationPolicy: (val.rotationPolicy) ?? "Always",
        size: (val.size) ?? 256,
    };
}

/**
 * Defines the Docker image details
 */
export interface ContainerImageArgs {
    /**
     * Image pull policy.
     */
    pullPolicy?: pulumi.Input<string>;
    /**
     * Image pull secrets.
     */
    pullSecrets?: pulumi.Input<string>;
    /**
     * The Docker image name.
     */
    repository: pulumi.Input<string>;
    /**
     * The Docker  image tag.
     */
    tag: pulumi.Input<string>;
}

/**
 * DataLake connector map route properties
 */
export interface DataLakeConnectorMapArgs {
    /**
     * Allowed latency for transferring data.
     */
    allowedLatencySecs: pulumi.Input<number>;
    /**
     * Client Id to use.
     */
    clientId: pulumi.Input<string>;
    /**
     * Maximum messages to send per Batch.
     */
    maxMessagesPerBatch: pulumi.Input<number>;
    /**
     * Message payload type.
     */
    messagePayloadType: pulumi.Input<string>;
    /**
     * Mqtt source topic.
     */
    mqttSourceTopic: pulumi.Input<string>;
    /**
     * Quality of Service.
     */
    qos?: pulumi.Input<number>;
    /**
     * Delta table properties to use.
     */
    table: pulumi.Input<DeltaTableArgs>;
}
/**
 * dataLakeConnectorMapArgsProvideDefaults sets the appropriate defaults for DataLakeConnectorMapArgs
 */
export function dataLakeConnectorMapArgsProvideDefaults(val: DataLakeConnectorMapArgs): DataLakeConnectorMapArgs {
    return {
        ...val,
        qos: (val.qos) ?? 1,
    };
}

/**
 * DataLake Fabric Storage details.
 */
export interface DataLakeFabricStorageArgs {
    /**
     * DataLake fabric storage authentication details.
     */
    authentication: pulumi.Input<DataLakeFabricStorageAuthenticationArgs>;
    /**
     * DataLake fabric storage endpoint to use.
     */
    endpoint: pulumi.Input<string>;
    /**
     * Fabric path type to use.
     */
    fabricPath: pulumi.Input<string | enums.FabricPathType>;
    /**
     * Fabric one lake Guids.
     */
    guids?: pulumi.Input<FabricGuidsArgs>;
    /**
     * Fabric one lake Names.
     */
    names?: pulumi.Input<FabricNamesArgs>;
}

/**
 * DataLake Fabric Storage authentication details.
 */
export interface DataLakeFabricStorageAuthenticationArgs {
    /**
     * Configuration for managed identity authentication.
     */
    systemAssignedManagedIdentity: pulumi.Input<ManagedIdentityAuthenticationArgs>;
}

/**
 * DataLake Local Storage details.
 */
export interface DataLakeLocalStorageArgs {
    /**
     * Volume name to write to.
     */
    volumeName: pulumi.Input<string>;
}

/**
 * DataLake Service Storage details.
 */
export interface DataLakeServiceStorageArgs {
    /**
     * DataLake service storage authentication details. NOTE - Enum only one method is supported.
     */
    authentication: pulumi.Input<DataLakeServiceStorageAuthenticationArgs>;
    /**
     * DataLake service storage endpoint to use.
     */
    endpoint: pulumi.Input<string>;
}

/**
 * DataLake Service Storage authentication details. NOTE - Enum only one method is supported.
 */
export interface DataLakeServiceStorageAuthenticationArgs {
    /**
     * Access token secret name.
     */
    accessTokenSecretName?: pulumi.Input<string>;
    /**
     * Configuration for managed identity authentication.
     */
    systemAssignedManagedIdentity?: pulumi.Input<ManagedIdentityAuthenticationArgs>;
}

/**
 * Target storage for the DataLake. NOTE - Enum only storage is supported at a time.
 */
export interface DataLakeTargetStorageArgs {
    /**
     * DataLake service storage details.
     */
    datalakeStorage?: pulumi.Input<DataLakeServiceStorageArgs>;
    /**
     * Fabric one lake storage details.
     */
    fabricOneLake?: pulumi.Input<DataLakeFabricStorageArgs>;
    /**
     * Local storage details.
     */
    localStorage?: pulumi.Input<DataLakeLocalStorageArgs>;
}

/**
 * Delta table properties
 */
export interface DeltaTableArgs {
    /**
     * Schema list supported.
     */
    schema: pulumi.Input<pulumi.Input<DeltaTableSchemaArgs>[]>;
    /**
     * Delta table name.
     */
    tableName: pulumi.Input<string>;
    /**
     * Delta table path.
     */
    tablePath?: pulumi.Input<string>;
}

/**
 * Delta table schema properties
 */
export interface DeltaTableSchemaArgs {
    /**
     * Delta table format supported.
     */
    format: pulumi.Input<string | enums.DeltaTableFormatEnum>;
    /**
     * Delta table schema mapping.
     */
    mapping: pulumi.Input<string>;
    /**
     * Delta table schema name.
     */
    name: pulumi.Input<string>;
    /**
     * Delta table schema optional.
     */
    optional: pulumi.Input<boolean>;
}

/**
 * DiskBackedMessageBufferSettings properties
 */
export interface DiskBackedMessageBufferSettingsArgs {
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
 * ExtendedLocation properties
 */
export interface ExtendedLocationPropertyArgs {
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
 * Fabric one lake guids.
 */
export interface FabricGuidsArgs {
    /**
     * Fabric one lake house guid.
     */
    lakehouseGuid: pulumi.Input<string>;
    /**
     * Fabric one lake workspace guid.
     */
    workspaceGuid: pulumi.Input<string>;
}

/**
 * Fabric one lake names.
 */
export interface FabricNamesArgs {
    /**
     * Fabric one lake house name.
     */
    lakehouseName: pulumi.Input<string>;
    /**
     * Fabric one lake workspace name.
     */
    workspaceName: pulumi.Input<string>;
}

/**
 * Desired properties of the Frontend Instances of the DMQTT Broker
 */
export interface FrontendArgs {
    /**
     * Replicas is desired number of frontend replicas of the given distributed MQTT broker.
     */
    replicas: pulumi.Input<number>;
    /**
     * Defines the limits for resources of the frontend instances of the MQTT broker.
     */
    temporaryResourceLimits?: pulumi.Input<TemporaryResourceLimitsConfigArgs>;
    /**
     * Number of logical frontend workers per pod.
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
 * Kafka RemoteBrokerConnection Authentication methods
 */
export interface KafkaRemoteBrokerAuthenticationPropertiesArgs {
    /**
     * The type of authentication to use for Kafka remote broker.
     */
    authType?: pulumi.Input<KafkaRemoteBrokerAuthenticationTypesArgs>;
    /**
     * If authentication is enabled for Kafka remote broker.
     */
    enabled: pulumi.Input<boolean>;
}

/**
 * Kafka RemoteBrokerConnection Authentication types. NOTE - Enum only one method is allowed to be passed.
 */
export interface KafkaRemoteBrokerAuthenticationTypesArgs {
    /**
     * Sasl remote broker authentication method.
     */
    sasl?: pulumi.Input<SaslRemoteBrokerBasicAuthenticationArgs>;
    /**
     * Managed identity remote broker authentication method.
     */
    systemAssignedManagedIdentity?: pulumi.Input<ManagedIdentityAuthenticationArgs>;
    /**
     * X509 remote broker authentication method.
     */
    x509?: pulumi.Input<KafkaX509AuthenticationArgs>;
}

/**
 * Kafka RemoteBrokerConnectionSpec details
 */
export interface KafkaRemoteBrokerConnectionSpecArgs {
    /**
     * The remote broker authentication methods.
     */
    authentication: pulumi.Input<KafkaRemoteBrokerAuthenticationPropertiesArgs>;
    /**
     * The endpoint of remote broker to connect to.
     */
    endpoint: pulumi.Input<string>;
    /**
     * TLS details for Remote broker Connection.
     */
    tls: pulumi.Input<KafkaRemoteBrokerConnectionTlsArgs>;
}

/**
 * Kafka RemoteBrokerConnection TLS details
 */
export interface KafkaRemoteBrokerConnectionTlsArgs {
    /**
     * Tls Enabled on Remote Broker Connection.
     */
    tlsEnabled: pulumi.Input<boolean>;
    /**
     * Trusted CA certificate name for Remote Broker.
     */
    trustedCaCertificateConfigMap?: pulumi.Input<string>;
}

/**
 * Kafka Routes properties. NOTE - Enum only one method is allowed to be passed.
 */
export interface KafkaRoutesArgs {
    /**
     * Kafka to Mqtt route.
     */
    kafkaToMqtt?: pulumi.Input<KafkaToMqttRoutesArgs>;
    /**
     * Mqtt to Kafka route.
     */
    mqttToKafka?: pulumi.Input<MqttToKafkaRoutesArgs>;
}
/**
 * kafkaRoutesArgsProvideDefaults sets the appropriate defaults for KafkaRoutesArgs
 */
export function kafkaRoutesArgsProvideDefaults(val: KafkaRoutesArgs): KafkaRoutesArgs {
    return {
        ...val,
        kafkaToMqtt: (val.kafkaToMqtt ? pulumi.output(val.kafkaToMqtt).apply(kafkaToMqttRoutesArgsProvideDefaults) : undefined),
        mqttToKafka: (val.mqttToKafka ? pulumi.output(val.mqttToKafka).apply(mqttToKafkaRoutesArgsProvideDefaults) : undefined),
    };
}

/**
 * Kafka Shared Subscription properties
 */
export interface KafkaSharedSubscriptionPropertiesArgs {
    /**
     * The minimum number to use in a group for subscription.
     */
    groupMinimumShareNumber: pulumi.Input<number>;
    /**
     * The name of the shared subscription.
     */
    groupName: pulumi.Input<string>;
}

/**
 * Kafka to Mqtt route properties
 */
export interface KafkaToMqttRoutesArgs {
    /**
     * The consumer group id to use.
     */
    consumerGroupId?: pulumi.Input<string>;
    /**
     * The kafka topic to pull from.
     */
    kafkaTopic: pulumi.Input<string>;
    /**
     * The mqtt topic to publish to.
     */
    mqttTopic: pulumi.Input<string>;
    /**
     * The name of the route.
     */
    name: pulumi.Input<string>;
    /**
     * The qos to use for mqtt.
     */
    qos?: pulumi.Input<number>;
}
/**
 * kafkaToMqttRoutesArgsProvideDefaults sets the appropriate defaults for KafkaToMqttRoutesArgs
 */
export function kafkaToMqttRoutesArgsProvideDefaults(val: KafkaToMqttRoutesArgs): KafkaToMqttRoutesArgs {
    return {
        ...val,
        qos: (val.qos) ?? 1,
    };
}

/**
 * Kafka Token KeyVault properties.
 */
export interface KafkaTokenKeyVaultPropertiesArgs {
    /**
     * Username to connect with.
     */
    username?: pulumi.Input<string>;
    /**
     * KeyVault properties.
     */
    vault: pulumi.Input<KeyVaultConnectionPropertiesArgs>;
    /**
     * KeyVault secret details.
     */
    vaultSecret: pulumi.Input<KeyVaultSecretObjectArgs>;
}

/**
 * Kafka TopicMap Batching properties
 */
export interface KafkaTopicMapBatchingArgs {
    /**
     * The setting to enable or disable batching.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The latency of message batching.
     */
    latencyMs?: pulumi.Input<number>;
    /**
     * The maximum bytes to send in a batch.
     */
    maxBytes?: pulumi.Input<number>;
    /**
     * The maximum messages to send in a batch.
     */
    maxMessages?: pulumi.Input<number>;
}
/**
 * kafkaTopicMapBatchingArgsProvideDefaults sets the appropriate defaults for KafkaTopicMapBatchingArgs
 */
export function kafkaTopicMapBatchingArgsProvideDefaults(val: KafkaTopicMapBatchingArgs): KafkaTopicMapBatchingArgs {
    return {
        ...val,
        enabled: (val.enabled) ?? false,
        latencyMs: (val.latencyMs) ?? 5,
        maxBytes: (val.maxBytes) ?? 1000000,
        maxMessages: (val.maxMessages) ?? 100000,
    };
}

/**
 * Kafka RemoteBrokerConnection X509 Authentication properties.
 */
export interface KafkaX509AuthenticationArgs {
    /**
     * Keyvault X509 secret properties.
     */
    keyVault?: pulumi.Input<KeyVaultCertificatePropertiesArgs>;
    /**
     * Secret where cert details are stored.
     */
    secretName?: pulumi.Input<string>;
}

/**
 * KeyVault certificate properties
 */
export interface KeyVaultCertificatePropertiesArgs {
    /**
     * KeyVault properties.
     */
    vault: pulumi.Input<KeyVaultConnectionPropertiesArgs>;
    /**
     * KeyVault CA chain secret details.
     */
    vaultCaChainSecret?: pulumi.Input<KeyVaultSecretObjectArgs>;
    /**
     * KeyVault Cert secret details.
     */
    vaultCert: pulumi.Input<KeyVaultSecretObjectArgs>;
}

/**
 * KeyVault properties
 */
export interface KeyVaultConnectionPropertiesArgs {
    /**
     * KeyVault credentials.
     */
    credentials: pulumi.Input<KeyVaultCredentialsPropertiesArgs>;
    /**
     * KeyVault directoryId.
     */
    directoryId: pulumi.Input<string>;
    /**
     * KeyVault name.
     */
    name: pulumi.Input<string>;
}

/**
 * KeyVault credentials properties. NOTE - Future this will be ENUM.
 */
export interface KeyVaultCredentialsPropertiesArgs {
    /**
     * KeyVault service principal local secret name.
     */
    servicePrincipalLocalSecretName: pulumi.Input<string>;
}

/**
 * KeyVault secret object properties
 */
export interface KeyVaultSecretObjectArgs {
    /**
     * KeyVault secret name.
     */
    name: pulumi.Input<string>;
    /**
     * KeyVault secret version.
     */
    version?: pulumi.Input<string>;
}

/**
 * KeyVault secret properties
 */
export interface KeyVaultSecretPropertiesArgs {
    /**
     * KeyVault properties.
     */
    vault: pulumi.Input<KeyVaultConnectionPropertiesArgs>;
    /**
     * KeyVault secret details.
     */
    vaultSecret: pulumi.Input<KeyVaultSecretObjectArgs>;
}

/**
 * Mqtt Local Broker Authentication details. Only one method at a time is supported. Default - kubernetes authentication
 */
export interface LocalBrokerAuthenticationMethodsArgs {
    /**
     * Kubernetes local broker authentication method.
     */
    kubernetes: pulumi.Input<LocalBrokerKubernetesAuthenticationArgs>;
}
/**
 * localBrokerAuthenticationMethodsArgsProvideDefaults sets the appropriate defaults for LocalBrokerAuthenticationMethodsArgs
 */
export function localBrokerAuthenticationMethodsArgsProvideDefaults(val: LocalBrokerAuthenticationMethodsArgs): LocalBrokerAuthenticationMethodsArgs {
    return {
        ...val,
        kubernetes: pulumi.output(val.kubernetes).apply(localBrokerKubernetesAuthenticationArgsProvideDefaults),
    };
}

/**
 * Mqtt Local Broker ConnectionSpec details
 */
export interface LocalBrokerConnectionSpecArgs {
    /**
     * The authentication methods for LocalBroker connection. NOTE - Enum only one method at a time is supported.
     */
    authentication?: pulumi.Input<LocalBrokerAuthenticationMethodsArgs>;
    /**
     * The endpoint of local broker to connect to.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * TLS details for Local broker Connection.
     */
    tls?: pulumi.Input<LocalBrokerConnectionTlsArgs>;
}
/**
 * localBrokerConnectionSpecArgsProvideDefaults sets the appropriate defaults for LocalBrokerConnectionSpecArgs
 */
export function localBrokerConnectionSpecArgsProvideDefaults(val: LocalBrokerConnectionSpecArgs): LocalBrokerConnectionSpecArgs {
    return {
        ...val,
        authentication: (val.authentication ? pulumi.output(val.authentication).apply(localBrokerAuthenticationMethodsArgsProvideDefaults) : undefined),
        endpoint: (val.endpoint) ?? "aio-mq-dmqtt-frontend:1883",
        tls: (val.tls ? pulumi.output(val.tls).apply(localBrokerConnectionTlsArgsProvideDefaults) : undefined),
    };
}

/**
 * Mqtt Local Broker Connection TLS details
 */
export interface LocalBrokerConnectionTlsArgs {
    /**
     * Tls Enabled on Local Broker Connection.
     */
    tlsEnabled?: pulumi.Input<boolean>;
    /**
     * Trusted CA certificate config map name for Local Broker.
     */
    trustedCaCertificateConfigMap?: pulumi.Input<string>;
}
/**
 * localBrokerConnectionTlsArgsProvideDefaults sets the appropriate defaults for LocalBrokerConnectionTlsArgs
 */
export function localBrokerConnectionTlsArgsProvideDefaults(val: LocalBrokerConnectionTlsArgs): LocalBrokerConnectionTlsArgs {
    return {
        ...val,
        tlsEnabled: (val.tlsEnabled) ?? false,
    };
}

/**
 * Local Broker Kubernetes Authentication
 */
export interface LocalBrokerKubernetesAuthenticationArgs {
    /**
     * Secret Path where SAT is mounted.
     */
    secretPath?: pulumi.Input<string>;
    /**
     * Token name where SAT is mounted on secret path.
     */
    serviceAccountTokenName?: pulumi.Input<string>;
}
/**
 * localBrokerKubernetesAuthenticationArgsProvideDefaults sets the appropriate defaults for LocalBrokerKubernetesAuthenticationArgs
 */
export function localBrokerKubernetesAuthenticationArgsProvideDefaults(val: LocalBrokerKubernetesAuthenticationArgs): LocalBrokerKubernetesAuthenticationArgs {
    return {
        ...val,
        secretPath: (val.secretPath) ?? "/var/run/serviceaccount/localbroker",
        serviceAccountTokenName: (val.serviceAccountTokenName) ?? "sat",
    };
}

/**
 * Managed identity authentication details.
 */
export interface ManagedIdentityAuthenticationArgs {
    /**
     * Token audience.
     */
    audience: pulumi.Input<string>;
    /**
     * Arc Extension name.
     */
    extensionName?: pulumi.Input<string>;
}

/**
 * Manual TLS server certificate management through a defined secret
 */
export interface ManualCertMethodArgs {
    /**
     * secret containing TLS cert.
     */
    secretName: pulumi.Input<string>;
    /**
     * namespace of secret; omit to use default namespace.
     */
    secretNamespace?: pulumi.Input<string>;
}

/**
 * MqttBridge RemoteBrokerConnection Authentication methods. NOTE - Enum only one is allowed to be passed.
 */
export interface MqttBridgeRemoteBrokerAuthenticationMethodsArgs {
    /**
     * Managed identity remote broker authentication method.
     */
    systemAssignedManagedIdentity?: pulumi.Input<ManagedIdentityAuthenticationArgs>;
    /**
     * X509 remote broker authentication method.
     */
    x509?: pulumi.Input<MqttBridgeRemoteBrokerX509AuthenticationArgs>;
}

/**
 * MqttBridge RemoteBrokerConnectionSpec details
 */
export interface MqttBridgeRemoteBrokerConnectionSpecArgs {
    /**
     * The remote broker authentication methods. NOTE - Enum only one method is allowed to be passed.
     */
    authentication: pulumi.Input<MqttBridgeRemoteBrokerAuthenticationMethodsArgs>;
    /**
     * The endpoint of remote broker to connect to.
     */
    endpoint: pulumi.Input<string>;
    /**
     * Protocol for remote connection.
     */
    protocol?: pulumi.Input<string | enums.MqttBridgeRemoteBrokerProtocol>;
    /**
     * TLS details for Remote broker Connection.
     */
    tls: pulumi.Input<MqttBridgeRemoteBrokerConnectionTlsArgs>;
}
/**
 * mqttBridgeRemoteBrokerConnectionSpecArgsProvideDefaults sets the appropriate defaults for MqttBridgeRemoteBrokerConnectionSpecArgs
 */
export function mqttBridgeRemoteBrokerConnectionSpecArgsProvideDefaults(val: MqttBridgeRemoteBrokerConnectionSpecArgs): MqttBridgeRemoteBrokerConnectionSpecArgs {
    return {
        ...val,
        protocol: (val.protocol) ?? "mqtt",
    };
}

/**
 * MqttBridge RemoteBrokerConnection TLS details
 */
export interface MqttBridgeRemoteBrokerConnectionTlsArgs {
    /**
     * Tls Enabled on Remote Broker Connection.
     */
    tlsEnabled: pulumi.Input<boolean>;
    /**
     * Trusted CA certificate name for Remote Broker.
     */
    trustedCaCertificateConfigMap?: pulumi.Input<string>;
}

/**
 * MqttBridge RemoteBroker X509 Authentication properties.
 */
export interface MqttBridgeRemoteBrokerX509AuthenticationArgs {
    /**
     * Keyvault X509 secret properties.
     */
    keyVault?: pulumi.Input<KeyVaultCertificatePropertiesArgs>;
    /**
     * Secret where cert details are stored.
     */
    secretName?: pulumi.Input<string>;
}

/**
 * MqttBridgeRoute Shared subscription properties
 */
export interface MqttBridgeRouteSharedSubscriptionArgs {
    /**
     * The group shared subscription minimum share number.
     */
    groupMinimumShareNumber: pulumi.Input<number>;
    /**
     * The group name for Shared subscription.
     */
    groupName: pulumi.Input<string>;
}

/**
 * MqttBridgeTopicMap route properties
 */
export interface MqttBridgeRoutesArgs {
    /**
     * Direction of the route.
     */
    direction: pulumi.Input<string | enums.MqttBridgeRouteDirection>;
    /**
     * Name of the route.
     */
    name: pulumi.Input<string>;
    /**
     * Qos for MQTT connection.
     */
    qos?: pulumi.Input<number>;
    /**
     * Shared subscription topic details.
     */
    sharedSubscription?: pulumi.Input<MqttBridgeRouteSharedSubscriptionArgs>;
    /**
     * Source topic of the route.
     */
    source: pulumi.Input<string>;
    /**
     * Target topic of the route. Ignore if same as source
     */
    target?: pulumi.Input<string>;
}
/**
 * mqttBridgeRoutesArgsProvideDefaults sets the appropriate defaults for MqttBridgeRoutesArgs
 */
export function mqttBridgeRoutesArgsProvideDefaults(val: MqttBridgeRoutesArgs): MqttBridgeRoutesArgs {
    return {
        ...val,
        qos: (val.qos) ?? 1,
    };
}

/**
 * Mqtt to Kafka route properties
 */
export interface MqttToKafkaRoutesArgs {
    /**
     * The kafka acks to use.
     */
    kafkaAcks: pulumi.Input<string | enums.KafkaAcks>;
    /**
     * The kafka topic to publish to.
     */
    kafkaTopic: pulumi.Input<string>;
    /**
     * The mqtt topic to pull from.
     */
    mqttTopic: pulumi.Input<string>;
    /**
     * The name of the route.
     */
    name: pulumi.Input<string>;
    /**
     * The qos to use for mqtt.
     */
    qos?: pulumi.Input<number>;
    /**
     * The properties for shared subscription.
     */
    sharedSubscription?: pulumi.Input<KafkaSharedSubscriptionPropertiesArgs>;
}
/**
 * mqttToKafkaRoutesArgsProvideDefaults sets the appropriate defaults for MqttToKafkaRoutesArgs
 */
export function mqttToKafkaRoutesArgsProvideDefaults(val: MqttToKafkaRoutesArgs): MqttToKafkaRoutesArgs {
    return {
        ...val,
        qos: (val.qos) ?? 1,
    };
}

/**
 * Defines the Node Tolerations details
 */
export interface NodeTolerationsArgs {
    /**
     * Toleration effect.
     */
    effect: pulumi.Input<string>;
    /**
     * Toleration key.
     */
    key: pulumi.Input<string>;
    /**
     * Toleration operator like 'Exists', 'Equal' etc.
     */
    operator: pulumi.Input<string>;
    /**
     * Toleration Value.
     */
    value: pulumi.Input<string>;
}

/**
 * PrincipalDefinition properties of Basic Rule
 */
export interface PrincipalDefinitionArgs {
    /**
     * A list of key-value pairs that match the attributes of the clients. The attributes are case-sensitive and must match the attributes provided by the clients during authentication.
     */
    attributes?: pulumi.Input<pulumi.Input<{[key: string]: pulumi.Input<string>}>[]>;
    /**
     * A list of client IDs that match the clients. The client IDs are case-sensitive and must match the client IDs provided by the clients during connection.
     */
    clientids?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of usernames that match the clients. The usernames are case-sensitive and must match the usernames provided by the clients during authentication.
     */
    usernames?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * ResourceInfoDefinition properties of Basic Rule. This defines the objects that represent the actions or topics, such as - method.Connect, method.Publish, etc.
 */
export interface ResourceInfoDefinitionArgs {
    /**
     * The type of action that the clients can perform on the broker: Connect, Publish or Subscribe.
     */
    method: pulumi.Input<string | enums.ResourceInfoDefinitionMethods>;
    /**
     * A list of topics or topic patterns that match the topics that the clients can publish or subscribe to. This subfield is required if the method is Publish or Subscribe.
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * SANs for certificate.
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
 * Kafka RemoteBrokerConnection Sasl Authentication properties.
 */
export interface SaslRemoteBrokerBasicAuthenticationArgs {
    /**
     * Sasl Mechanism for remote broker authentication.
     */
    saslType: pulumi.Input<string | enums.KafkaSaslType>;
    /**
     * Sasl token for remote broker authentication.
     */
    token: pulumi.Input<SaslRemoteBrokerBasicAuthenticationTokenArgs>;
}

/**
 * Kafka RemoteBrokerConnection Sasl Authentication token properties. NOTE - Enum only one method is allowed to be passed.
 */
export interface SaslRemoteBrokerBasicAuthenticationTokenArgs {
    /**
     * Keyvault token keyvault secret properties.
     */
    keyVault?: pulumi.Input<KafkaTokenKeyVaultPropertiesArgs>;
    /**
     * Secret where cert details are stored.
     */
    secretName?: pulumi.Input<string>;
}

/**
 * Internal knobs of Resource Limits for FE and BE
 */
export interface TemporaryResourceLimitsConfigArgs {
    /**
     * Maximum number of messages a client can have inflight.
     */
    maxInflightMessages: pulumi.Input<number>;
    /**
     * Maximum number of patch inflight per node.
     */
    maxInflightPatches: pulumi.Input<number>;
    /**
     * Maximum number of patch a client can have in flight.
     */
    maxInflightPatchesPerClient: pulumi.Input<number>;
    /**
     * Maximum message expiry interval, in seconds.
     */
    maxMessageExpirySecs?: pulumi.Input<number>;
    /**
     * Maximum receive for external clients.
     */
    maxQueuedMessages: pulumi.Input<number>;
    /**
     * Maximum receive QoS0 for external clients.
     */
    maxQueuedQos0Messages: pulumi.Input<number>;
    /**
     * Maximum session expiry interval, in seconds.
     */
    maxSessionExpirySecs: pulumi.Input<number>;
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
     * Option 3 - TLS server certificate retrieved from Key Vault..
     */
    keyVault?: pulumi.Input<KeyVaultCertificatePropertiesArgs>;
    /**
     * Option 2 - Manual TLS server certificate management through a defined secret.
     */
    manual?: pulumi.Input<ManualCertMethodArgs>;
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
 * VolumeClaimDataSource properties
 */
export interface VolumeClaimDataSourceArgs {
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
 * VolumeClaimDataSourceRef properties
 */
export interface VolumeClaimDataSourceRefArgs {
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
    dataSource?: pulumi.Input<VolumeClaimDataSourceArgs>;
    /**
     * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Alpha) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
     */
    dataSourceRef?: pulumi.Input<VolumeClaimDataSourceRefArgs>;
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
    operator: pulumi.Input<string>;
    /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}
