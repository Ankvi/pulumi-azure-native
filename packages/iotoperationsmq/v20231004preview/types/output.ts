import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * BasicRules of AuthorizationConfig Polar rules are not supported
     */
    export interface AuthorizationBasicRuleResponse {
        /**
         * This subfield defines the broker resources that the Basic Rule is applied on.
         */
        brokerResources: ResourceInfoDefinitionResponse[];
        /**
         * This subfield defines the identities that represent the clients.
         */
        principals: PrincipalDefinitionResponse;
    }

    /**
     * Broker AuthorizationConfig properties
     */
    export interface AuthorizationConfigResponse {
        /**
         * Enable caching of the authorization rules.
         */
        enableCache?: boolean;
        /**
         * Authorization Rules to be used. If no rule is set, but Authorization Resource is used that would mean DenyAll.
         */
        rules?: AuthorizationBasicRuleResponse[];
    }
    /**
     * authorizationConfigResponseProvideDefaults sets the appropriate defaults for AuthorizationConfigResponse
     */
    export function authorizationConfigResponseProvideDefaults(val: AuthorizationConfigResponse): AuthorizationConfigResponse {
        return {
            ...val,
            enableCache: (val.enableCache) ?? true,
        };
    }

    /**
     * Automatic TLS server certificate management with cert-manager
     */
    export interface AutomaticCertMethodResponse {
        /**
         * Lifetime of automatically-managed certificate.
         */
        duration?: string;
        /**
         * cert-manager issuerRef.
         */
        issuerRef: CertManagerIssuerRefResponse;
        /**
         * Cert Manager private key.
         */
        privateKey?: CertManagerPrivateKeyResponse;
        /**
         * When to begin renewing automatically-managed certificate.
         */
        renewBefore?: string;
        /**
         * Additional SANs to include in the certificate.
         */
        san?: SanForCertResponse;
        /**
         * Secret for storing server certificate. Any existing data will be overwritten.
         */
        secretName?: string;
        /**
         * Certificate K8S namespace. Omit to use default namespace.
         */
        secretNamespace?: string;
    }
    /**
     * automaticCertMethodResponseProvideDefaults sets the appropriate defaults for AutomaticCertMethodResponse
     */
    export function automaticCertMethodResponseProvideDefaults(val: AutomaticCertMethodResponse): AutomaticCertMethodResponse {
        return {
            ...val,
            duration: (val.duration) ?? "720h",
            issuerRef: certManagerIssuerRefResponseProvideDefaults(val.issuerRef),
            privateKey: (val.privateKey ? certManagerPrivateKeyResponseProvideDefaults(val.privateKey) : undefined),
            renewBefore: (val.renewBefore) ?? "240h",
        };
    }

    /**
     * Desired properties of the Frontend Instances of the DMQTT Broker
     */
    export interface BackendChainResponse {
        /**
         * Partitions is desired number of physical backend chains of the given distributed MQTT broker.
         */
        partitions: number;
        /**
         * Redundancy Factor is desired numbers of broker instances in one chain.
         */
        redundancyFactor: number;
        /**
         * Defines whether disk transfer is enabled or not.
         */
        temporaryDiskTransferEnabled?: boolean;
        /**
         * Defines the percentage usage of buffer pool above which disk transfer will start.
         */
        temporaryDiskTransferHighWatermarkPercent?: number;
        /**
         * Defines the percentage usage of buffer pool below which disk transfer will stop.
         */
        temporaryDiskTransferLowWatermarkPercent?: number;
        /**
         * Defines the limits for memory usage percent of the backend instances of the MQTT broker.
         */
        temporaryMaxBackendMemUsagePercent?: number;
        /**
         * Defines the limits for resources of the backend instances of the MQTT broker.
         */
        temporaryResourceLimits?: TemporaryResourceLimitsConfigResponse;
        /**
         * Number of logical backend workers per pod.
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
     * Custom Authentication properties
     */
    export interface BrokerAuthenticatorCustomAuthResponse {
        /**
         * X509 Custom Auth type details.
         */
        x509: BrokerAuthenticatorCustomAuthX509Response;
    }

    /**
     * X509 Custom Authentication properties. NOTE - Enum only authenticator type supported at a time.
     */
    export interface BrokerAuthenticatorCustomAuthX509Response {
        /**
         * Keyvault X509 secret properties.
         */
        keyVault?: KeyVaultCertificatePropertiesResponse;
        /**
         * Secret where cert details are stored.
         */
        secretName?: string;
    }

    /**
     * Custom method for BrokerAuthentication
     */
    export interface BrokerAuthenticatorMethodCustomResponse {
        /**
         * Custom Broker Authentication Method.
         */
        auth?: BrokerAuthenticatorCustomAuthResponse;
        /**
         * CA cert config map to use.
         */
        caCertConfigMap?: string;
        /**
         * Endpoint to connect to.
         */
        endpoint: string;
        /**
         * Configuration Headers to use.
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
     * SVID for BrokerAuthentication
     */
    export interface BrokerAuthenticatorMethodSvidResponse {
        /**
         * Mounted socket path for spiffe agent.
         */
        agentSocketPath: string;
        /**
         * Maximum number of re-tries to fetch identity.
         */
        identityMaxRetry?: number;
        /**
         * Maximum time to wait before fetching identity again.
         */
        identityWaitRetryMs?: number;
    }
    /**
     * brokerAuthenticatorMethodSvidResponseProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodSvidResponse
     */
    export function brokerAuthenticatorMethodSvidResponseProvideDefaults(val: BrokerAuthenticatorMethodSvidResponse): BrokerAuthenticatorMethodSvidResponse {
        return {
            ...val,
            identityMaxRetry: (val.identityMaxRetry) ?? 3,
            identityWaitRetryMs: (val.identityWaitRetryMs) ?? 5000,
        };
    }

    /**
     * UsernamePassword for BrokerAuthentication
     */
    export interface BrokerAuthenticatorMethodUsernamePasswordResponse {
        /**
         * Keyvault username password secret properties.
         */
        keyVault?: KeyVaultSecretPropertiesResponse;
        /**
         * Secret where username and password are stored.
         */
        secretName?: string;
    }

    /**
     * BrokerAuthenticatorMethodX509Attributes properties. NOTE - Enum only type supported at a time.
     */
    export interface BrokerAuthenticatorMethodX509AttributesResponse {
        /**
         * Keyvault x509 attributes secret properties.
         */
        keyVault?: KeyVaultSecretPropertiesResponse;
        /**
         * Secret where x509 attributes are stored.
         */
        secretName?: string;
    }

    /**
     * X509 for BrokerAuthentication.
     */
    export interface BrokerAuthenticatorMethodX509Response {
        /**
         * K8S Secret name to mount for username and password.
         */
        attributes?: BrokerAuthenticatorMethodX509AttributesResponse;
        /**
         * Trusted client ca cert config map.
         */
        trustedClientCaCertConfigMap?: string;
    }
    /**
     * brokerAuthenticatorMethodX509ResponseProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodX509Response
     */
    export function brokerAuthenticatorMethodX509ResponseProvideDefaults(val: BrokerAuthenticatorMethodX509Response): BrokerAuthenticatorMethodX509Response {
        return {
            ...val,
            trustedClientCaCertConfigMap: (val.trustedClientCaCertConfigMap) ?? "client-ca",
        };
    }

    /**
     * Collection of different CrdAuthenticator methods of Broker Resource. NOTE Enum - Only one method is supported for each entry.
     */
    export interface BrokerAuthenticatorMethodsResponse {
        /**
         * Custom Authentication Method.
         */
        custom?: BrokerAuthenticatorMethodCustomResponse;
        /**
         * Service Account Token Method.
         */
        sat?: BrokerAuthenticatorMethodSatResponse;
        /**
         * Service Account Token Method.
         */
        svid?: BrokerAuthenticatorMethodSvidResponse;
        /**
         * UsernamePassword Method.
         */
        usernamePassword?: BrokerAuthenticatorMethodUsernamePasswordResponse;
        /**
         * X509 Method.
         */
        x509?: BrokerAuthenticatorMethodX509Response;
    }
    /**
     * brokerAuthenticatorMethodsResponseProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodsResponse
     */
    export function brokerAuthenticatorMethodsResponseProvideDefaults(val: BrokerAuthenticatorMethodsResponse): BrokerAuthenticatorMethodsResponse {
        return {
            ...val,
            svid: (val.svid ? brokerAuthenticatorMethodSvidResponseProvideDefaults(val.svid) : undefined),
            x509: (val.x509 ? brokerAuthenticatorMethodX509ResponseProvideDefaults(val.x509) : undefined),
        };
    }

    /**
     * Diagnostics setting specific to Broker
     */
    export interface BrokerDiagnosticsResponse {
        /**
         * Diagnostic Service endpoint
         */
        diagnosticServiceEndpoint?: string;
        /**
         * Knob to enable/disable metrics. Default = true
         */
        enableMetrics?: boolean;
        /**
         * Enable self check on Broker via Probe.
         */
        enableSelfCheck?: boolean;
        /**
         * Enable self tracing on the Broker so that every selfCheckFrequencySeconds a random message is traced even if it didn't have trace context.
         */
        enableSelfTracing?: boolean;
        /**
         * Knob to enable/disable entire tracing infrastructure.
         */
        enableTracing?: boolean;
        /**
         * Format for the logs generated.
         */
        logFormat?: string;
        /**
         * Log level for the Broker.
         */
        logLevel?: string;
        /**
         * Maximum time for the CellMap to live.
         */
        maxCellMapLifetime?: number;
        /**
         * Metric update frequency in seconds.
         */
        metricUpdateFrequencySeconds?: number;
        /**
         * Probe Image to run.
         */
        probeImage?: string;
        /**
         * Frequency for the self check to run.
         */
        selfCheckFrequencySeconds?: number;
        /**
         * Time out period of the self check.
         */
        selfCheckTimeoutSeconds?: number;
        /**
         * The frequency at which selfTrace should run.
         */
        selfTraceFrequencySeconds?: number;
        /**
         * The number of the spans generated by the Tracing.
         */
        spanChannelCapacity?: number;
    }
    /**
     * brokerDiagnosticsResponseProvideDefaults sets the appropriate defaults for BrokerDiagnosticsResponse
     */
    export function brokerDiagnosticsResponseProvideDefaults(val: BrokerDiagnosticsResponse): BrokerDiagnosticsResponse {
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
    export interface CardinalityResponse {
        /**
         * The backend broker desired properties
         */
        backendChain: BackendChainResponse;
        /**
         * The frontend broker desired properties
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
     * Cert Manager CA Cert properties
     */
    export interface CertManagerCertOptionsResponse {
        /**
         * Duration of CA cert.
         */
        duration: string;
        /**
         * Cert Manager private key.
         */
        privateKey: CertManagerPrivateKeyResponse;
        /**
         * Renew before time of CA cert.
         */
        renewBefore: string;
    }
    /**
     * certManagerCertOptionsResponseProvideDefaults sets the appropriate defaults for CertManagerCertOptionsResponse
     */
    export function certManagerCertOptionsResponseProvideDefaults(val: CertManagerCertOptionsResponse): CertManagerCertOptionsResponse {
        return {
            ...val,
            duration: (val.duration) ?? "720h",
            privateKey: certManagerPrivateKeyResponseProvideDefaults(val.privateKey),
            renewBefore: (val.renewBefore) ?? "240h",
        };
    }

    /**
     * Cert-Manager issuerRef properties
     */
    export interface CertManagerIssuerRefResponse {
        /**
         * group of issuer.
         */
        group: string;
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
            group: (val.group) ?? "cert-manager.io",
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
         * cert-manager rotationPolicy.
         */
        rotationPolicy: string;
        /**
         * size of private key.
         */
        size: number;
    }
    /**
     * certManagerPrivateKeyResponseProvideDefaults sets the appropriate defaults for CertManagerPrivateKeyResponse
     */
    export function certManagerPrivateKeyResponseProvideDefaults(val: CertManagerPrivateKeyResponse): CertManagerPrivateKeyResponse {
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
    export interface ContainerImageResponse {
        /**
         * Image pull policy.
         */
        pullPolicy?: string;
        /**
         * Image pull secrets.
         */
        pullSecrets?: string;
        /**
         * The Docker image name.
         */
        repository: string;
        /**
         * The Docker  image tag.
         */
        tag: string;
    }

    /**
     * DataLake connector map route properties
     */
    export interface DataLakeConnectorMapResponse {
        /**
         * Allowed latency for transferring data.
         */
        allowedLatencySecs: number;
        /**
         * Client Id to use.
         */
        clientId: string;
        /**
         * Maximum messages to send per Batch.
         */
        maxMessagesPerBatch: number;
        /**
         * Message payload type.
         */
        messagePayloadType: string;
        /**
         * Mqtt source topic.
         */
        mqttSourceTopic: string;
        /**
         * Quality of Service.
         */
        qos?: number;
        /**
         * Delta table properties to use.
         */
        table: DeltaTableResponse;
    }
    /**
     * dataLakeConnectorMapResponseProvideDefaults sets the appropriate defaults for DataLakeConnectorMapResponse
     */
    export function dataLakeConnectorMapResponseProvideDefaults(val: DataLakeConnectorMapResponse): DataLakeConnectorMapResponse {
        return {
            ...val,
            qos: (val.qos) ?? 1,
        };
    }

    /**
     * DataLake Fabric Storage authentication details.
     */
    export interface DataLakeFabricStorageAuthenticationResponse {
        /**
         * Configuration for managed identity authentication.
         */
        systemAssignedManagedIdentity: ManagedIdentityAuthenticationResponse;
    }

    /**
     * DataLake Fabric Storage details.
     */
    export interface DataLakeFabricStorageResponse {
        /**
         * DataLake fabric storage authentication details.
         */
        authentication: DataLakeFabricStorageAuthenticationResponse;
        /**
         * DataLake fabric storage endpoint to use.
         */
        endpoint: string;
        /**
         * Fabric path type to use.
         */
        fabricPath: string;
        /**
         * Fabric one lake Guids.
         */
        guids?: FabricGuidsResponse;
        /**
         * Fabric one lake Names.
         */
        names?: FabricNamesResponse;
    }

    /**
     * DataLake Local Storage details.
     */
    export interface DataLakeLocalStorageResponse {
        /**
         * Volume name to write to.
         */
        volumeName: string;
    }

    /**
     * DataLake Service Storage authentication details. NOTE - Enum only one method is supported.
     */
    export interface DataLakeServiceStorageAuthenticationResponse {
        /**
         * Access token secret name.
         */
        accessTokenSecretName?: string;
        /**
         * Configuration for managed identity authentication.
         */
        systemAssignedManagedIdentity?: ManagedIdentityAuthenticationResponse;
    }

    /**
     * DataLake Service Storage details.
     */
    export interface DataLakeServiceStorageResponse {
        /**
         * DataLake service storage authentication details. NOTE - Enum only one method is supported.
         */
        authentication: DataLakeServiceStorageAuthenticationResponse;
        /**
         * DataLake service storage endpoint to use.
         */
        endpoint: string;
    }

    /**
     * Target storage for the DataLake. NOTE - Enum only storage is supported at a time.
     */
    export interface DataLakeTargetStorageResponse {
        /**
         * DataLake service storage details.
         */
        datalakeStorage?: DataLakeServiceStorageResponse;
        /**
         * Fabric one lake storage details.
         */
        fabricOneLake?: DataLakeFabricStorageResponse;
        /**
         * Local storage details.
         */
        localStorage?: DataLakeLocalStorageResponse;
    }

    /**
     * Delta table properties
     */
    export interface DeltaTableResponse {
        /**
         * Schema list supported.
         */
        schema: DeltaTableSchemaResponse[];
        /**
         * Delta table name.
         */
        tableName: string;
        /**
         * Delta table path.
         */
        tablePath?: string;
    }

    /**
     * Delta table schema properties
     */
    export interface DeltaTableSchemaResponse {
        /**
         * Delta table format supported.
         */
        format: string;
        /**
         * Delta table schema mapping.
         */
        mapping: string;
        /**
         * Delta table schema name.
         */
        name: string;
        /**
         * Delta table schema optional.
         */
        optional: boolean;
    }

    /**
     * DiskBackedMessageBufferSettings properties
     */
    export interface DiskBackedMessageBufferSettingsResponse {
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
     * ExtendedLocation properties
     */
    export interface ExtendedLocationPropertyResponse {
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
     * Fabric one lake guids.
     */
    export interface FabricGuidsResponse {
        /**
         * Fabric one lake house guid.
         */
        lakehouseGuid: string;
        /**
         * Fabric one lake workspace guid.
         */
        workspaceGuid: string;
    }

    /**
     * Fabric one lake names.
     */
    export interface FabricNamesResponse {
        /**
         * Fabric one lake house name.
         */
        lakehouseName: string;
        /**
         * Fabric one lake workspace name.
         */
        workspaceName: string;
    }

    /**
     * Desired properties of the Frontend Instances of the DMQTT Broker
     */
    export interface FrontendResponse {
        /**
         * Replicas is desired number of frontend replicas of the given distributed MQTT broker.
         */
        replicas: number;
        /**
         * Defines the limits for resources of the frontend instances of the MQTT broker.
         */
        temporaryResourceLimits?: TemporaryResourceLimitsConfigResponse;
        /**
         * Number of logical frontend workers per pod.
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
     * Kafka RemoteBrokerConnection Authentication methods
     */
    export interface KafkaRemoteBrokerAuthenticationPropertiesResponse {
        /**
         * The type of authentication to use for Kafka remote broker.
         */
        authType?: KafkaRemoteBrokerAuthenticationTypesResponse;
        /**
         * If authentication is enabled for Kafka remote broker.
         */
        enabled: boolean;
    }

    /**
     * Kafka RemoteBrokerConnection Authentication types. NOTE - Enum only one method is allowed to be passed.
     */
    export interface KafkaRemoteBrokerAuthenticationTypesResponse {
        /**
         * Sasl remote broker authentication method.
         */
        sasl?: SaslRemoteBrokerBasicAuthenticationResponse;
        /**
         * Managed identity remote broker authentication method.
         */
        systemAssignedManagedIdentity?: ManagedIdentityAuthenticationResponse;
        /**
         * X509 remote broker authentication method.
         */
        x509?: KafkaX509AuthenticationResponse;
    }

    /**
     * Kafka RemoteBrokerConnectionSpec details
     */
    export interface KafkaRemoteBrokerConnectionSpecResponse {
        /**
         * The remote broker authentication methods.
         */
        authentication: KafkaRemoteBrokerAuthenticationPropertiesResponse;
        /**
         * The endpoint of remote broker to connect to.
         */
        endpoint: string;
        /**
         * TLS details for Remote broker Connection.
         */
        tls: KafkaRemoteBrokerConnectionTlsResponse;
    }

    /**
     * Kafka RemoteBrokerConnection TLS details
     */
    export interface KafkaRemoteBrokerConnectionTlsResponse {
        /**
         * Tls Enabled on Remote Broker Connection.
         */
        tlsEnabled: boolean;
        /**
         * Trusted CA certificate name for Remote Broker.
         */
        trustedCaCertificateConfigMap?: string;
    }

    /**
     * Kafka Routes properties. NOTE - Enum only one method is allowed to be passed.
     */
    export interface KafkaRoutesResponse {
        /**
         * Kafka to Mqtt route.
         */
        kafkaToMqtt?: KafkaToMqttRoutesResponse;
        /**
         * Mqtt to Kafka route.
         */
        mqttToKafka?: MqttToKafkaRoutesResponse;
    }
    /**
     * kafkaRoutesResponseProvideDefaults sets the appropriate defaults for KafkaRoutesResponse
     */
    export function kafkaRoutesResponseProvideDefaults(val: KafkaRoutesResponse): KafkaRoutesResponse {
        return {
            ...val,
            kafkaToMqtt: (val.kafkaToMqtt ? kafkaToMqttRoutesResponseProvideDefaults(val.kafkaToMqtt) : undefined),
            mqttToKafka: (val.mqttToKafka ? mqttToKafkaRoutesResponseProvideDefaults(val.mqttToKafka) : undefined),
        };
    }

    /**
     * Kafka Shared Subscription properties
     */
    export interface KafkaSharedSubscriptionPropertiesResponse {
        /**
         * The minimum number to use in a group for subscription.
         */
        groupMinimumShareNumber: number;
        /**
         * The name of the shared subscription.
         */
        groupName: string;
    }

    /**
     * Kafka to Mqtt route properties
     */
    export interface KafkaToMqttRoutesResponse {
        /**
         * The consumer group id to use.
         */
        consumerGroupId?: string;
        /**
         * The kafka topic to pull from.
         */
        kafkaTopic: string;
        /**
         * The mqtt topic to publish to.
         */
        mqttTopic: string;
        /**
         * The name of the route.
         */
        name: string;
        /**
         * The qos to use for mqtt.
         */
        qos?: number;
    }
    /**
     * kafkaToMqttRoutesResponseProvideDefaults sets the appropriate defaults for KafkaToMqttRoutesResponse
     */
    export function kafkaToMqttRoutesResponseProvideDefaults(val: KafkaToMqttRoutesResponse): KafkaToMqttRoutesResponse {
        return {
            ...val,
            qos: (val.qos) ?? 1,
        };
    }

    /**
     * Kafka Token KeyVault properties.
     */
    export interface KafkaTokenKeyVaultPropertiesResponse {
        /**
         * Username to connect with.
         */
        username?: string;
        /**
         * KeyVault properties.
         */
        vault: KeyVaultConnectionPropertiesResponse;
        /**
         * KeyVault secret details.
         */
        vaultSecret: KeyVaultSecretObjectResponse;
    }

    /**
     * Kafka TopicMap Batching properties
     */
    export interface KafkaTopicMapBatchingResponse {
        /**
         * The setting to enable or disable batching.
         */
        enabled?: boolean;
        /**
         * The latency of message batching.
         */
        latencyMs?: number;
        /**
         * The maximum bytes to send in a batch.
         */
        maxBytes?: number;
        /**
         * The maximum messages to send in a batch.
         */
        maxMessages?: number;
    }
    /**
     * kafkaTopicMapBatchingResponseProvideDefaults sets the appropriate defaults for KafkaTopicMapBatchingResponse
     */
    export function kafkaTopicMapBatchingResponseProvideDefaults(val: KafkaTopicMapBatchingResponse): KafkaTopicMapBatchingResponse {
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
    export interface KafkaX509AuthenticationResponse {
        /**
         * Keyvault X509 secret properties.
         */
        keyVault?: KeyVaultCertificatePropertiesResponse;
        /**
         * Secret where cert details are stored.
         */
        secretName?: string;
    }

    /**
     * KeyVault certificate properties
     */
    export interface KeyVaultCertificatePropertiesResponse {
        /**
         * KeyVault properties.
         */
        vault: KeyVaultConnectionPropertiesResponse;
        /**
         * KeyVault CA chain secret details.
         */
        vaultCaChainSecret?: KeyVaultSecretObjectResponse;
        /**
         * KeyVault Cert secret details.
         */
        vaultCert: KeyVaultSecretObjectResponse;
    }

    /**
     * KeyVault properties
     */
    export interface KeyVaultConnectionPropertiesResponse {
        /**
         * KeyVault credentials.
         */
        credentials: KeyVaultCredentialsPropertiesResponse;
        /**
         * KeyVault directoryId.
         */
        directoryId: string;
        /**
         * KeyVault name.
         */
        name: string;
    }

    /**
     * KeyVault credentials properties. NOTE - Future this will be ENUM.
     */
    export interface KeyVaultCredentialsPropertiesResponse {
        /**
         * KeyVault service principal local secret name.
         */
        servicePrincipalLocalSecretName: string;
    }

    /**
     * KeyVault secret object properties
     */
    export interface KeyVaultSecretObjectResponse {
        /**
         * KeyVault secret name.
         */
        name: string;
        /**
         * KeyVault secret version.
         */
        version?: string;
    }

    /**
     * KeyVault secret properties
     */
    export interface KeyVaultSecretPropertiesResponse {
        /**
         * KeyVault properties.
         */
        vault: KeyVaultConnectionPropertiesResponse;
        /**
         * KeyVault secret details.
         */
        vaultSecret: KeyVaultSecretObjectResponse;
    }

    /**
     * Mqtt Local Broker Authentication details. Only one method at a time is supported. Default - kubernetes authentication
     */
    export interface LocalBrokerAuthenticationMethodsResponse {
        /**
         * Kubernetes local broker authentication method.
         */
        kubernetes: LocalBrokerKubernetesAuthenticationResponse;
    }
    /**
     * localBrokerAuthenticationMethodsResponseProvideDefaults sets the appropriate defaults for LocalBrokerAuthenticationMethodsResponse
     */
    export function localBrokerAuthenticationMethodsResponseProvideDefaults(val: LocalBrokerAuthenticationMethodsResponse): LocalBrokerAuthenticationMethodsResponse {
        return {
            ...val,
            kubernetes: localBrokerKubernetesAuthenticationResponseProvideDefaults(val.kubernetes),
        };
    }

    /**
     * Mqtt Local Broker ConnectionSpec details
     */
    export interface LocalBrokerConnectionSpecResponse {
        /**
         * The authentication methods for LocalBroker connection. NOTE - Enum only one method at a time is supported.
         */
        authentication?: LocalBrokerAuthenticationMethodsResponse;
        /**
         * The endpoint of local broker to connect to.
         */
        endpoint?: string;
        /**
         * TLS details for Local broker Connection.
         */
        tls?: LocalBrokerConnectionTlsResponse;
    }
    /**
     * localBrokerConnectionSpecResponseProvideDefaults sets the appropriate defaults for LocalBrokerConnectionSpecResponse
     */
    export function localBrokerConnectionSpecResponseProvideDefaults(val: LocalBrokerConnectionSpecResponse): LocalBrokerConnectionSpecResponse {
        return {
            ...val,
            authentication: (val.authentication ? localBrokerAuthenticationMethodsResponseProvideDefaults(val.authentication) : undefined),
            endpoint: (val.endpoint) ?? "aio-mq-dmqtt-frontend:1883",
            tls: (val.tls ? localBrokerConnectionTlsResponseProvideDefaults(val.tls) : undefined),
        };
    }

    /**
     * Mqtt Local Broker Connection TLS details
     */
    export interface LocalBrokerConnectionTlsResponse {
        /**
         * Tls Enabled on Local Broker Connection.
         */
        tlsEnabled?: boolean;
        /**
         * Trusted CA certificate config map name for Local Broker.
         */
        trustedCaCertificateConfigMap?: string;
    }
    /**
     * localBrokerConnectionTlsResponseProvideDefaults sets the appropriate defaults for LocalBrokerConnectionTlsResponse
     */
    export function localBrokerConnectionTlsResponseProvideDefaults(val: LocalBrokerConnectionTlsResponse): LocalBrokerConnectionTlsResponse {
        return {
            ...val,
            tlsEnabled: (val.tlsEnabled) ?? false,
        };
    }

    /**
     * Local Broker Kubernetes Authentication
     */
    export interface LocalBrokerKubernetesAuthenticationResponse {
        /**
         * Secret Path where SAT is mounted.
         */
        secretPath?: string;
        /**
         * Token name where SAT is mounted on secret path.
         */
        serviceAccountTokenName?: string;
    }
    /**
     * localBrokerKubernetesAuthenticationResponseProvideDefaults sets the appropriate defaults for LocalBrokerKubernetesAuthenticationResponse
     */
    export function localBrokerKubernetesAuthenticationResponseProvideDefaults(val: LocalBrokerKubernetesAuthenticationResponse): LocalBrokerKubernetesAuthenticationResponse {
        return {
            ...val,
            secretPath: (val.secretPath) ?? "/var/run/serviceaccount/localbroker",
            serviceAccountTokenName: (val.serviceAccountTokenName) ?? "sat",
        };
    }

    /**
     * Managed identity authentication details.
     */
    export interface ManagedIdentityAuthenticationResponse {
        /**
         * Token audience.
         */
        audience: string;
        /**
         * Arc Extension name.
         */
        extensionName?: string;
    }

    /**
     * Manual TLS server certificate management through a defined secret
     */
    export interface ManualCertMethodResponse {
        /**
         * secret containing TLS cert.
         */
        secretName: string;
        /**
         * namespace of secret; omit to use default namespace.
         */
        secretNamespace?: string;
    }

    /**
     * MqttBridge RemoteBrokerConnection Authentication methods. NOTE - Enum only one is allowed to be passed.
     */
    export interface MqttBridgeRemoteBrokerAuthenticationMethodsResponse {
        /**
         * Managed identity remote broker authentication method.
         */
        systemAssignedManagedIdentity?: ManagedIdentityAuthenticationResponse;
        /**
         * X509 remote broker authentication method.
         */
        x509?: MqttBridgeRemoteBrokerX509AuthenticationResponse;
    }

    /**
     * MqttBridge RemoteBrokerConnectionSpec details
     */
    export interface MqttBridgeRemoteBrokerConnectionSpecResponse {
        /**
         * The remote broker authentication methods. NOTE - Enum only one method is allowed to be passed.
         */
        authentication: MqttBridgeRemoteBrokerAuthenticationMethodsResponse;
        /**
         * The endpoint of remote broker to connect to.
         */
        endpoint: string;
        /**
         * Protocol for remote connection.
         */
        protocol?: string;
        /**
         * TLS details for Remote broker Connection.
         */
        tls: MqttBridgeRemoteBrokerConnectionTlsResponse;
    }
    /**
     * mqttBridgeRemoteBrokerConnectionSpecResponseProvideDefaults sets the appropriate defaults for MqttBridgeRemoteBrokerConnectionSpecResponse
     */
    export function mqttBridgeRemoteBrokerConnectionSpecResponseProvideDefaults(val: MqttBridgeRemoteBrokerConnectionSpecResponse): MqttBridgeRemoteBrokerConnectionSpecResponse {
        return {
            ...val,
            protocol: (val.protocol) ?? "mqtt",
        };
    }

    /**
     * MqttBridge RemoteBrokerConnection TLS details
     */
    export interface MqttBridgeRemoteBrokerConnectionTlsResponse {
        /**
         * Tls Enabled on Remote Broker Connection.
         */
        tlsEnabled: boolean;
        /**
         * Trusted CA certificate name for Remote Broker.
         */
        trustedCaCertificateConfigMap?: string;
    }

    /**
     * MqttBridge RemoteBroker X509 Authentication properties.
     */
    export interface MqttBridgeRemoteBrokerX509AuthenticationResponse {
        /**
         * Keyvault X509 secret properties.
         */
        keyVault?: KeyVaultCertificatePropertiesResponse;
        /**
         * Secret where cert details are stored.
         */
        secretName?: string;
    }

    /**
     * MqttBridgeRoute Shared subscription properties
     */
    export interface MqttBridgeRouteSharedSubscriptionResponse {
        /**
         * The group shared subscription minimum share number.
         */
        groupMinimumShareNumber: number;
        /**
         * The group name for Shared subscription.
         */
        groupName: string;
    }

    /**
     * MqttBridgeTopicMap route properties
     */
    export interface MqttBridgeRoutesResponse {
        /**
         * Direction of the route.
         */
        direction: string;
        /**
         * Name of the route.
         */
        name: string;
        /**
         * Qos for MQTT connection.
         */
        qos?: number;
        /**
         * Shared subscription topic details.
         */
        sharedSubscription?: MqttBridgeRouteSharedSubscriptionResponse;
        /**
         * Source topic of the route.
         */
        source: string;
        /**
         * Target topic of the route. Ignore if same as source
         */
        target?: string;
    }
    /**
     * mqttBridgeRoutesResponseProvideDefaults sets the appropriate defaults for MqttBridgeRoutesResponse
     */
    export function mqttBridgeRoutesResponseProvideDefaults(val: MqttBridgeRoutesResponse): MqttBridgeRoutesResponse {
        return {
            ...val,
            qos: (val.qos) ?? 1,
        };
    }

    /**
     * Mqtt to Kafka route properties
     */
    export interface MqttToKafkaRoutesResponse {
        /**
         * The kafka acks to use.
         */
        kafkaAcks: string;
        /**
         * The kafka topic to publish to.
         */
        kafkaTopic: string;
        /**
         * The mqtt topic to pull from.
         */
        mqttTopic: string;
        /**
         * The name of the route.
         */
        name: string;
        /**
         * The qos to use for mqtt.
         */
        qos?: number;
        /**
         * The properties for shared subscription.
         */
        sharedSubscription?: KafkaSharedSubscriptionPropertiesResponse;
    }
    /**
     * mqttToKafkaRoutesResponseProvideDefaults sets the appropriate defaults for MqttToKafkaRoutesResponse
     */
    export function mqttToKafkaRoutesResponseProvideDefaults(val: MqttToKafkaRoutesResponse): MqttToKafkaRoutesResponse {
        return {
            ...val,
            qos: (val.qos) ?? 1,
        };
    }

    /**
     * Defines the Node Tolerations details
     */
    export interface NodeTolerationsResponse {
        /**
         * Toleration effect.
         */
        effect: string;
        /**
         * Toleration key.
         */
        key: string;
        /**
         * Toleration operator like 'Exists', 'Equal' etc.
         */
        operator: string;
        /**
         * Toleration Value.
         */
        value: string;
    }

    /**
     * PrincipalDefinition properties of Basic Rule
     */
    export interface PrincipalDefinitionResponse {
        /**
         * A list of key-value pairs that match the attributes of the clients. The attributes are case-sensitive and must match the attributes provided by the clients during authentication.
         */
        attributes?: {[key: string]: string}[];
        /**
         * A list of client IDs that match the clients. The client IDs are case-sensitive and must match the client IDs provided by the clients during connection.
         */
        clientids?: string[];
        /**
         * A list of usernames that match the clients. The usernames are case-sensitive and must match the usernames provided by the clients during authentication.
         */
        usernames?: string[];
    }

    /**
     * ResourceInfoDefinition properties of Basic Rule. This defines the objects that represent the actions or topics, such as - method.Connect, method.Publish, etc.
     */
    export interface ResourceInfoDefinitionResponse {
        /**
         * The type of action that the clients can perform on the broker: Connect, Publish or Subscribe.
         */
        method: string;
        /**
         * A list of topics or topic patterns that match the topics that the clients can publish or subscribe to. This subfield is required if the method is Publish or Subscribe.
         */
        topics?: string[];
    }

    /**
     * SANs for certificate.
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
     * Kafka RemoteBrokerConnection Sasl Authentication properties.
     */
    export interface SaslRemoteBrokerBasicAuthenticationResponse {
        /**
         * Sasl Mechanism for remote broker authentication.
         */
        saslType: string;
        /**
         * Sasl token for remote broker authentication.
         */
        token: SaslRemoteBrokerBasicAuthenticationTokenResponse;
    }

    /**
     * Kafka RemoteBrokerConnection Sasl Authentication token properties. NOTE - Enum only one method is allowed to be passed.
     */
    export interface SaslRemoteBrokerBasicAuthenticationTokenResponse {
        /**
         * Keyvault token keyvault secret properties.
         */
        keyVault?: KafkaTokenKeyVaultPropertiesResponse;
        /**
         * Secret where cert details are stored.
         */
        secretName?: string;
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
     * Internal knobs of Resource Limits for FE and BE
     */
    export interface TemporaryResourceLimitsConfigResponse {
        /**
         * Maximum number of messages a client can have inflight.
         */
        maxInflightMessages: number;
        /**
         * Maximum number of patch inflight per node.
         */
        maxInflightPatches: number;
        /**
         * Maximum number of patch a client can have in flight.
         */
        maxInflightPatchesPerClient: number;
        /**
         * Maximum message expiry interval, in seconds.
         */
        maxMessageExpirySecs?: number;
        /**
         * Maximum receive for external clients.
         */
        maxQueuedMessages: number;
        /**
         * Maximum receive QoS0 for external clients.
         */
        maxQueuedQos0Messages: number;
        /**
         * Maximum session expiry interval, in seconds.
         */
        maxSessionExpirySecs: number;
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
         * Option 3 - TLS server certificate retrieved from Key Vault..
         */
        keyVault?: KeyVaultCertificatePropertiesResponse;
        /**
         * Option 2 - Manual TLS server certificate management through a defined secret.
         */
        manual?: ManualCertMethodResponse;
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
     * VolumeClaimDataSourceRef properties
     */
    export interface VolumeClaimDataSourceRefResponse {
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
     * VolumeClaimDataSource properties
     */
    export interface VolumeClaimDataSourceResponse {
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
        dataSource?: VolumeClaimDataSourceResponse;
        /**
         * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Alpha) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         */
        dataSourceRef?: VolumeClaimDataSourceRefResponse;
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
