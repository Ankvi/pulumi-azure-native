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
 * AkriConnectorTemplateAioMetadata properties.
 */
export interface AkriConnectorTemplateAioMetadataArgs {
    /**
     * The maximum version of AIO required for the connector.
     */
    aioMaxVersion?: pulumi.Input<string>;
    /**
     * The minimum version of AIO required for the connector.
     */
    aioMinVersion?: pulumi.Input<string>;
}

/**
 * AkriConnectorTemplateBucketizedAllocation properties.
 */
export interface AkriConnectorTemplateBucketizedAllocationArgs {
    /**
     * The bucketized allocation of AEPs for connectors.
     */
    bucketSize: pulumi.Input<number>;
    /**
     * AkriConnectorTemplateAllocationPolicy properties.
     * Expected value is 'Bucketized'.
     */
    policy: pulumi.Input<"Bucketized">;
}

/**
 * AkriConnectorTemplateDeviceInboundEndpointConfigurationSchemaRefs properties.
 */
export interface AkriConnectorTemplateDeviceInboundEndpointConfigurationSchemaRefsArgs {
    /**
     * The additional configuration schema reference.
     */
    additionalConfigSchemaRef?: pulumi.Input<string>;
    /**
     * The default configuration schema reference for datasets.
     */
    defaultDatasetConfigSchemaRef?: pulumi.Input<string>;
    /**
     * The default configuration schema reference for events.
     */
    defaultEventsConfigSchemaRef?: pulumi.Input<string>;
    /**
     * The default configuration schema reference for process control.
     */
    defaultProcessControlConfigSchemaRef?: pulumi.Input<string>;
    /**
     * The default configuration schema reference for streams.
     */
    defaultStreamsConfigSchemaRef?: pulumi.Input<string>;
}

/**
 * AkriConnectorTemplateDeviceInboundEndpointType properties.
 */
export interface AkriConnectorTemplateDeviceInboundEndpointTypeArgs {
    /**
     * The configuration schema references for the device inbound endpoint.
     */
    configurationSchemaRefs?: pulumi.Input<AkriConnectorTemplateDeviceInboundEndpointConfigurationSchemaRefsArgs>;
    /**
     * A description of the device inbound endpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * The type of the device inbound endpoint.
     */
    endpointType: pulumi.Input<string>;
    /**
     * The version of the device inbound endpoint.
     */
    version?: pulumi.Input<string>;
}

/**
 * AkriConnectorTemplateDiagnostics properties.
 */
export interface AkriConnectorTemplateDiagnosticsArgs {
    /**
     * The log settings for the Connector template.
     */
    logs: pulumi.Input<AkriConnectorsDiagnosticsLogsArgs>;
}
/**
 * akriConnectorTemplateDiagnosticsArgsProvideDefaults sets the appropriate defaults for AkriConnectorTemplateDiagnosticsArgs
 */
export function akriConnectorTemplateDiagnosticsArgsProvideDefaults(val: AkriConnectorTemplateDiagnosticsArgs): AkriConnectorTemplateDiagnosticsArgs {
    return {
        ...val,
        logs: pulumi.output(val.logs).apply(akriConnectorsDiagnosticsLogsArgsProvideDefaults),
    };
}

/**
 * AkriConnectorTemplateHelmAdvancedConfiguration properties.
 */
export interface AkriConnectorTemplateHelmAdvancedConfigurationArgs {
    /**
     * Delete operation configuration for the Helm chart.
     */
    delete?: pulumi.Input<AkriConnectorTemplateHelmDeleteConfigurationArgs>;
    /**
     * Install operation configuration for the Helm chart.
     */
    install?: pulumi.Input<AkriConnectorTemplateHelmInstallConfigurationArgs>;
    /**
     * Upgrade operation configuration for the Helm chart.
     */
    upgrade?: pulumi.Input<AkriConnectorTemplateHelmUpgradeConfigurationArgs>;
}

/**
 * AkriConnectorTemplateHelmAuthSecretRef properties.
 */
export interface AkriConnectorTemplateHelmAuthSecretRefArgs {
    /**
     * The key of the password in the secret.
     */
    passwordKey: pulumi.Input<string>;
    /**
     * The name of the secret.
     */
    secretRef: pulumi.Input<string>;
    /**
     * The key of the username in the secret.
     */
    usernameKey: pulumi.Input<string>;
}

/**
 * AkriConnectorTemplateHelmConfiguration properties.
 */
export interface AkriConnectorTemplateHelmConfigurationArgs {
    /**
     * The Helm configuration settings.
     */
    helmConfigurationSettings: pulumi.Input<AkriConnectorTemplateHelmConfigurationSettingsArgs>;
    /**
     * Runtime configuration types.
     * Expected value is 'HelmConfiguration'.
     */
    runtimeConfigurationType: pulumi.Input<"HelmConfiguration">;
}

/**
 * AkriConnectorTemplateHelmConfiguration properties.
 */
export interface AkriConnectorTemplateHelmConfigurationSettingsArgs {
    /**
     * Advanced configuration for the Helm chart.
     * Install, upgrade, and uninstall options for the helm chart such as atomic, wait, timeout, `wait_for_jobs`, and `disable_hooks`.
     */
    advancedConfiguration?: pulumi.Input<AkriConnectorTemplateHelmAdvancedConfigurationArgs>;
    /**
     * The registry settings for the helm chart to be used.
     */
    registrySettings?: pulumi.Input<AkriConnectorTemplateHelmContainerRegistryArgs | AkriConnectorTemplateHelmRegistryEndpointRefArgs>;
    /**
     * The release name of the Helm chart.
     */
    releaseName: pulumi.Input<string>;
    /**
     * The name of the repository
     */
    repositoryName: pulumi.Input<string>;
    /**
     * A map of values to pass to the helm chart.
     */
    values?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The version of the Helm chart.
     */
    version: pulumi.Input<string>;
}

/**
 * AkriConnectorTemplateHelmContainerRegistry properties.
 */
export interface AkriConnectorTemplateHelmContainerRegistryArgs {
    /**
     * The registry settings for the container registry.
     */
    containerRegistrySettings: pulumi.Input<AkriConnectorTemplateHelmContainerRegistrySettingsArgs>;
    /**
     * AkriConnectorTemplateHelmRegistrySettingsType values.
     * Expected value is 'ContainerRegistry'.
     */
    registrySettingsType: pulumi.Input<"ContainerRegistry">;
}

/**
 * AkriConnectorTemplateHelmContainerRegistrySettings properties.
 */
export interface AkriConnectorTemplateHelmContainerRegistrySettingsArgs {
    /**
     * Optional reference to a secret in the same namespace to use for pulling the Helm chart.
     */
    authSecretRef?: pulumi.Input<AkriConnectorTemplateHelmAuthSecretRefArgs>;
    /**
     * The registry to use for the Helm chart.
     */
    registry: pulumi.Input<string>;
}

/**
 * AkriConnectorTemplateHelmDeleteConfiguration properties.
 */
export interface AkriConnectorTemplateHelmDeleteConfigurationArgs {
    /**
     * If set, the operation will be atomic. If the operation fails, all changes will be rolled back.
     */
    atomic?: pulumi.Input<boolean>;
    /**
     * Disable pre/post upgrade hooks for the operation.
     */
    disableHooks?: pulumi.Input<boolean>;
    /**
     * Time to wait for any individual Kubernetes operation (like `Jobs` for hooks).
     */
    timeout?: pulumi.Input<number>;
    /**
     * If set, the operation will wait until all Pods, PVCs, Services, and minimum number of Pods of a `Deployment`, `StatefulSet`, or `ReplicaSet` are in a ready state before marking the release as successful.
     */
    wait?: pulumi.Input<boolean>;
    /**
     * If set, the operation will wait for jobs to complete before marking the release as successful.
     */
    waitForJobs?: pulumi.Input<boolean>;
}

/**
 * AkriConnectorTemplateHelmInstallConfiguration properties.
 */
export interface AkriConnectorTemplateHelmInstallConfigurationArgs {
    /**
     * If set, the operation will be atomic. If the operation fails, all changes will be rolled back.
     */
    atomic?: pulumi.Input<boolean>;
    /**
     * Disable pre/post upgrade hooks for the operation.
     */
    disableHooks?: pulumi.Input<boolean>;
    /**
     * Time to wait for any individual Kubernetes operation (like `Jobs` for hooks).
     */
    timeout?: pulumi.Input<number>;
    /**
     * If set, the operation will wait until all Pods, PVCs, Services, and minimum number of Pods of a `Deployment`, `StatefulSet`, or `ReplicaSet` are in a ready state before marking the release as successful.
     */
    wait?: pulumi.Input<boolean>;
    /**
     * If set, the operation will wait for jobs to complete before marking the release as successful.
     */
    waitForJobs?: pulumi.Input<boolean>;
}

/**
 * AkriConnectorTemplateHelmRegistryEndpointRef properties.
 */
export interface AkriConnectorTemplateHelmRegistryEndpointRefArgs {
    /**
     * The name of the registry endpoint.
     */
    registryEndpointRef: pulumi.Input<string>;
    /**
     * AkriConnectorTemplateHelmRegistrySettingsType values.
     * Expected value is 'RegistryEndpointRef'.
     */
    registrySettingsType: pulumi.Input<"RegistryEndpointRef">;
}

/**
 * AkriConnectorTemplateHelmUpgradeConfiguration properties.
 */
export interface AkriConnectorTemplateHelmUpgradeConfigurationArgs {
    /**
     * If set, the operation will be atomic. If the operation fails, all changes will be rolled back.
     */
    atomic?: pulumi.Input<boolean>;
    /**
     * Disable pre/post upgrade hooks for the operation.
     */
    disableHooks?: pulumi.Input<boolean>;
    /**
     * Time to wait for any individual Kubernetes operation (like `Jobs` for hooks).
     */
    timeout?: pulumi.Input<number>;
    /**
     * If set, the operation will wait until all Pods, PVCs, Services, and minimum number of Pods of a `Deployment`, `StatefulSet`, or `ReplicaSet` are in a ready state before marking the release as successful.
     */
    wait?: pulumi.Input<boolean>;
    /**
     * If set, the operation will wait for jobs to complete before marking the release as successful.
     */
    waitForJobs?: pulumi.Input<boolean>;
}

/**
 * AkriConnectorTemplateManagedConfiguration properties.
 */
export interface AkriConnectorTemplateManagedConfigurationArgs {
    /**
     * The managed configuration settings.
     */
    managedConfigurationSettings: pulumi.Input<AkriConnectorTemplateRuntimeImageConfigurationArgs | AkriConnectorTemplateRuntimeStatefulSetConfigurationArgs>;
    /**
     * Runtime configuration types.
     * Expected value is 'ManagedConfiguration'.
     */
    runtimeConfigurationType: pulumi.Input<"ManagedConfiguration">;
}

/**
 * AkriConnectorTemplatePersistentVolumeClaim properties.
 */
export interface AkriConnectorTemplatePersistentVolumeClaimArgs {
    /**
     * The name of the persistent volume claim.
     */
    claimName: pulumi.Input<string>;
    /**
     * The mount path for the persistent volume claim.
     */
    mountPath: pulumi.Input<string>;
}

/**
 * AkriConnectorTemplate properties.
 */
export interface AkriConnectorTemplatePropertiesArgs {
    /**
     * Metadata about AIO.
     */
    aioMetadata?: pulumi.Input<AkriConnectorTemplateAioMetadataArgs>;
    /**
     * Device inbound endpoint types.
     */
    deviceInboundEndpointTypes: pulumi.Input<pulumi.Input<AkriConnectorTemplateDeviceInboundEndpointTypeArgs>[]>;
    /**
     * Diagnostics settings for the Connector template.
     */
    diagnostics?: pulumi.Input<AkriConnectorTemplateDiagnosticsArgs>;
    /**
     * Mqtt connection configuration settings.
     */
    mqttConnectionConfiguration?: pulumi.Input<AkriConnectorsMqttConnectionConfigurationArgs>;
    /**
     * The runtime configuration for the Connector template.
     */
    runtimeConfiguration: pulumi.Input<AkriConnectorTemplateHelmConfigurationArgs | AkriConnectorTemplateManagedConfigurationArgs>;
}
/**
 * akriConnectorTemplatePropertiesArgsProvideDefaults sets the appropriate defaults for AkriConnectorTemplatePropertiesArgs
 */
export function akriConnectorTemplatePropertiesArgsProvideDefaults(val: AkriConnectorTemplatePropertiesArgs): AkriConnectorTemplatePropertiesArgs {
    return {
        ...val,
        diagnostics: (val.diagnostics ? pulumi.output(val.diagnostics).apply(akriConnectorTemplateDiagnosticsArgsProvideDefaults) : undefined),
        mqttConnectionConfiguration: (val.mqttConnectionConfiguration ? pulumi.output(val.mqttConnectionConfiguration).apply(akriConnectorsMqttConnectionConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * AkriConnectorTemplateRuntimeImageConfiguration properties.
 */
export interface AkriConnectorTemplateRuntimeImageConfigurationArgs {
    /**
     * Additional configuration for the image of the managed configuration.
     */
    additionalConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Allocation settings for the managed configuration.
     */
    allocation?: pulumi.Input<AkriConnectorTemplateBucketizedAllocationArgs>;
    /**
     * The image configuration settings.
     */
    imageConfigurationSettings: pulumi.Input<AkriConnectorTemplateRuntimeImageConfigurationSettingsArgs>;
    /**
     * Managed configuration types.
     * Expected value is 'ImageConfiguration'.
     */
    managedConfigurationType: pulumi.Input<"ImageConfiguration">;
    /**
     * The persistent volume claim templates for the managed configuration.
     * See https://raw.githubusercontent.com/kubernetes/kubernetes/refs/heads/master/api/openapi-spec/v3/apis__apps__v1_openapi.json.
     */
    persistentVolumeClaimTemplates?: pulumi.Input<any[]>;
    /**
     * The persistent volume claims for the managed configuration.
     */
    persistentVolumeClaims?: pulumi.Input<pulumi.Input<AkriConnectorTemplatePersistentVolumeClaimArgs>[]>;
    /**
     * Connector secrets that will be mounted onto all connector instances.
     */
    secrets?: pulumi.Input<pulumi.Input<AkriConnectorsSecretArgs>[]>;
    /**
     * Trust list for the connector. This is used to specify the certificates that all connector instances should trust.
     */
    trustSettings?: pulumi.Input<AkriConnectorTemplateTrustListArgs>;
}

/**
 * AkriConnectorTemplateRuntimeImageConfiguration properties.
 */
export interface AkriConnectorTemplateRuntimeImageConfigurationSettingsArgs {
    /**
     * The image name without any registry reference, tag or digest.
     */
    imageName: pulumi.Input<string>;
    /**
     * The pull policy of the image.
     */
    imagePullPolicy?: pulumi.Input<string | enums.AkriConnectorsImagePullPolicy>;
    /**
     * The registry settings for the image. You can omit this field if using the default docker hub repository or using a local image.
     */
    registrySettings?: pulumi.Input<AkriConnectorsContainerRegistryArgs | AkriConnectorsRegistryEndpointRefArgs>;
    /**
     * The number of replicas to be set up.
     */
    replicas?: pulumi.Input<number>;
    /**
     * Optional image tag or digest. If not specified, the default tag is `latest`.
     */
    tagDigestSettings?: pulumi.Input<AkriConnectorsDigestArgs | AkriConnectorsTagArgs>;
}

/**
 * AkriConnectorTemplateRuntimeStatefulSetConfiguration properties.
 */
export interface AkriConnectorTemplateRuntimeStatefulSetConfigurationArgs {
    /**
     * Additional configuration for the image of the managed configuration.
     */
    additionalConfiguration?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Allocation settings for the managed configuration.
     */
    allocation?: pulumi.Input<AkriConnectorTemplateBucketizedAllocationArgs>;
    /**
     * Managed configuration types.
     * Expected value is 'StatefulSetConfiguration'.
     */
    managedConfigurationType: pulumi.Input<"StatefulSetConfiguration">;
    /**
     * The persistent volume claim templates for the managed configuration.
     * See https://raw.githubusercontent.com/kubernetes/kubernetes/refs/heads/master/api/openapi-spec/v3/apis__apps__v1_openapi.json.
     */
    persistentVolumeClaimTemplates?: pulumi.Input<any[]>;
    /**
     * The persistent volume claims for the managed configuration.
     */
    persistentVolumeClaims?: pulumi.Input<pulumi.Input<AkriConnectorTemplatePersistentVolumeClaimArgs>[]>;
    /**
     * Connector secrets that will be mounted onto all connector instances.
     */
    secrets?: pulumi.Input<pulumi.Input<AkriConnectorsSecretArgs>[]>;
    /**
     * The stateful set configuration settings. This corresponds to the Kubernetes StatefulSet resource.
     * See https://raw.githubusercontent.com/kubernetes/kubernetes/refs/heads/master/api/openapi-spec/v3/apis__apps__v1_openapi.json#/components/schemas/io.k8s.api.apps.v1.StatefulSetSpec
     */
    statefulSetConfigurationSettings: any;
    /**
     * Trust list for the connector. This is used to specify the certificates that all connector instances should trust.
     */
    trustSettings?: pulumi.Input<AkriConnectorTemplateTrustListArgs>;
}

/**
 * AkriConnectorTemplateTrustList properties.
 */
export interface AkriConnectorTemplateTrustListArgs {
    /**
     * The secret reference for certificates to trust.
     */
    trustListSecretRef: pulumi.Input<string>;
}

/**
 * AkriConnectorsContainerRegistry properties.
 */
export interface AkriConnectorsContainerRegistryArgs {
    /**
     * The registry settings for the container registry.
     */
    containerRegistrySettings: pulumi.Input<AkriConnectorsContainerRegistrySettingsArgs>;
    /**
     * AkriConnectorsRegistrySettings properties.
     * Expected value is 'ContainerRegistry'.
     */
    registrySettingsType: pulumi.Input<"ContainerRegistry">;
}

/**
 * AkriConnectorsContainerRegistry properties.
 */
export interface AkriConnectorsContainerRegistrySettingsArgs {
    /**
     * Optional list of references to secrets in the same namespace to use for pulling the connector image.
     */
    imagePullSecrets?: pulumi.Input<pulumi.Input<AkriConnectorsImagePullSecretArgs>[]>;
    /**
     * The container registry to use for the artifact.
     */
    registry: pulumi.Input<string>;
}

/**
 * AkriConnectorsDiagnostic Log properties.
 */
export interface AkriConnectorsDiagnosticsLogsArgs {
    /**
     * The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.
     */
    level?: pulumi.Input<string>;
}
/**
 * akriConnectorsDiagnosticsLogsArgsProvideDefaults sets the appropriate defaults for AkriConnectorsDiagnosticsLogsArgs
 */
export function akriConnectorsDiagnosticsLogsArgsProvideDefaults(val: AkriConnectorsDiagnosticsLogsArgs): AkriConnectorsDiagnosticsLogsArgs {
    return {
        ...val,
        level: (val.level) ?? "info",
    };
}

/**
 * AkriConnectorsDigest properties.
 */
export interface AkriConnectorsDigestArgs {
    /**
     * The digest of the image.
     */
    digest: pulumi.Input<string>;
    /**
     * AkriConnectorsTagDigestType values.
     * Expected value is 'Digest'.
     */
    tagDigestType: pulumi.Input<"Digest">;
}

/**
 * AkriConnectorsImagePullSecret properties.
 */
export interface AkriConnectorsImagePullSecretArgs {
    /**
     * The name of the image pull secret.
     */
    secretRef: pulumi.Input<string>;
}

/**
 * AkriConnectorsMqttConnectionConfiguration properties.
 */
export interface AkriConnectorsMqttConnectionConfigurationArgs {
    /**
     * Authentication properties.
     */
    authentication?: pulumi.Input<AkriConnectorsServiceAccountAuthenticationArgs>;
    /**
     * Host of the Broker in the form of <hostname>:<port>.
     */
    host?: pulumi.Input<string>;
    /**
     * KeepAlive for connection in seconds.
     */
    keepAliveSeconds?: pulumi.Input<number>;
    /**
     * The max number of messages to keep in flight. For subscribe, this is the receive maximum. For publish, this is the maximum number of messages to send before waiting for an ack.
     */
    maxInflightMessages?: pulumi.Input<number>;
    /**
     * The protocol to use for the connection. Currently only `mqtt` is supported.
     */
    protocol?: pulumi.Input<string | enums.AkriConnectorsMqttProtocolType>;
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
 * akriConnectorsMqttConnectionConfigurationArgsProvideDefaults sets the appropriate defaults for AkriConnectorsMqttConnectionConfigurationArgs
 */
export function akriConnectorsMqttConnectionConfigurationArgsProvideDefaults(val: AkriConnectorsMqttConnectionConfigurationArgs): AkriConnectorsMqttConnectionConfigurationArgs {
    return {
        ...val,
        tls: (val.tls ? pulumi.output(val.tls).apply(tlsPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * AkriConnectorsRegistryEndpointRef properties.
 */
export interface AkriConnectorsRegistryEndpointRefArgs {
    /**
     * The name of the registry endpoint.
     */
    registryEndpointRef: pulumi.Input<string>;
    /**
     * AkriConnectorsRegistrySettings properties.
     * Expected value is 'RegistryEndpointRef'.
     */
    registrySettingsType: pulumi.Input<"RegistryEndpointRef">;
}

/**
 * AkriConnectorsSecret properties.
 */
export interface AkriConnectorsSecretArgs {
    /**
     * The application-defined alias for the secret.
     */
    secretAlias: pulumi.Input<string>;
    /**
     * The key in the secret to be mounted.
     */
    secretKey: pulumi.Input<string>;
    /**
     * The name of the secret to be mounted.
     */
    secretRef: pulumi.Input<string>;
}

/**
 * AkriConnectorsServiceAccountAuthentication properties.
 */
export interface AkriConnectorsServiceAccountAuthenticationArgs {
    /**
     * AkriConnectorsMqttAuthenticationMethod properties.
     * Expected value is 'ServiceAccountToken'.
     */
    method: pulumi.Input<"ServiceAccountToken">;
    /**
     * The service account token for the MQTT connection.
     */
    serviceAccountTokenSettings: pulumi.Input<AkriConnectorsServiceAccountTokenSettingsArgs>;
}

/**
 * AkriConnectorsServiceAccountTokenSettings properties.
 */
export interface AkriConnectorsServiceAccountTokenSettingsArgs {
    /**
     * The audience for the service account token.
     */
    audience: pulumi.Input<string>;
}

/**
 * AkriConnectorsTag properties.
 */
export interface AkriConnectorsTagArgs {
    /**
     * The tag of the image.
     */
    tag: pulumi.Input<string>;
    /**
     * AkriConnectorsTagDigestType values.
     * Expected value is 'Tag'.
     */
    tagDigestType: pulumi.Input<"Tag">;
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
    customSettings?: pulumi.Input<BrokerAuthenticatorMethodCustomArgs>;
    /**
     * Custom authentication configuration.
     */
    method: pulumi.Input<string | enums.BrokerAuthenticationMethod>;
    /**
     * ServiceAccountToken authentication configuration.
     */
    serviceAccountTokenSettings?: pulumi.Input<BrokerAuthenticatorMethodSatArgs>;
    /**
     * X.509 authentication configuration.
     */
    x509Settings?: pulumi.Input<BrokerAuthenticatorMethodX509Args>;
}
/**
 * brokerAuthenticatorMethodsArgsProvideDefaults sets the appropriate defaults for BrokerAuthenticatorMethodsArgs
 */
export function brokerAuthenticatorMethodsArgsProvideDefaults(val: BrokerAuthenticatorMethodsArgs): BrokerAuthenticatorMethodsArgs {
    return {
        ...val,
        x509Settings: (val.x509Settings ? pulumi.output(val.x509Settings).apply(brokerAuthenticatorMethodX509ArgsProvideDefaults) : undefined),
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
     * A list of client IDs that match the clients. The client IDs are case-sensitive and must match the client IDs provided by the clients during connection. This subfield may be set if the method is Connect.
     */
    clientIds?: pulumi.Input<pulumi.Input<string>[]>;
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
 * Automatic TLS server certificate management with cert-manager
 */
export interface CertManagerCertificateSpecArgs {
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
    secretName?: pulumi.Input<string>;
}
/**
 * certManagerCertificateSpecArgsProvideDefaults sets the appropriate defaults for CertManagerCertificateSpecArgs
 */
export function certManagerCertificateSpecArgsProvideDefaults(val: CertManagerCertificateSpecArgs): CertManagerCertificateSpecArgs {
    return {
        ...val,
        issuerRef: pulumi.output(val.issuerRef).apply(certManagerIssuerRefArgsProvideDefaults),
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
 * Dataflow BuiltIn Transformation dataset properties
 */
export interface DataflowBuiltInTransformationDatasetArgs {
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
 * Dataflow BuiltIn Transformation filter properties
 */
export interface DataflowBuiltInTransformationFilterArgs {
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
 * dataflowBuiltInTransformationFilterArgsProvideDefaults sets the appropriate defaults for DataflowBuiltInTransformationFilterArgs
 */
export function dataflowBuiltInTransformationFilterArgsProvideDefaults(val: DataflowBuiltInTransformationFilterArgs): DataflowBuiltInTransformationFilterArgs {
    return {
        ...val,
        type: (val.type) ?? "Filter",
    };
}

/**
 * Dataflow BuiltIn Transformation map properties
 */
export interface DataflowBuiltInTransformationMapArgs {
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
    type?: pulumi.Input<string | enums.DataflowMappingType>;
}

/**
 * Dataflow BuiltIn Transformation properties
 */
export interface DataflowBuiltInTransformationSettingsArgs {
    /**
     * Enrich data from Broker State Store. Dataset references a key in Broker State Store.
     */
    datasets?: pulumi.Input<pulumi.Input<DataflowBuiltInTransformationDatasetArgs>[]>;
    /**
     * Filters input record or datapoints based on condition.
     */
    filter?: pulumi.Input<pulumi.Input<DataflowBuiltInTransformationFilterArgs>[]>;
    /**
     * Maps input to output message.
     */
    map?: pulumi.Input<pulumi.Input<DataflowBuiltInTransformationMapArgs>[]>;
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
 * dataflowBuiltInTransformationSettingsArgsProvideDefaults sets the appropriate defaults for DataflowBuiltInTransformationSettingsArgs
 */
export function dataflowBuiltInTransformationSettingsArgsProvideDefaults(val: DataflowBuiltInTransformationSettingsArgs): DataflowBuiltInTransformationSettingsArgs {
    return {
        ...val,
        serializationFormat: (val.serializationFormat) ?? "Json",
    };
}

/**
 * Dataflow Destination Operation properties
 */
export interface DataflowDestinationOperationSettingsArgs {
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
 * DataflowEndpoint Authentication Access Token properties
 */
export interface DataflowEndpointAuthenticationAccessTokenArgs {
    /**
     * Token secret name.
     */
    secretRef: pulumi.Input<string>;
}

/**
 * DataflowEndpoint Authentication Sasl properties
 */
export interface DataflowEndpointAuthenticationSaslArgs {
    /**
     * Type of SASL authentication. Can be PLAIN, SCRAM-SHA-256, or SCRAM-SHA-512.
     */
    saslType: pulumi.Input<string | enums.DataflowEndpointAuthenticationSaslType>;
    /**
     * Token secret name.
     */
    secretRef: pulumi.Input<string>;
}

/**
 * Service Account Token for BrokerAuthentication
 */
export interface DataflowEndpointAuthenticationServiceAccountTokenArgs {
    /**
     * Audience of the service account. Optional, defaults to the broker internal service account audience.
     */
    audience: pulumi.Input<string>;
}

/**
 * DataflowEndpoint Authentication SystemAssignedManagedIdentity properties
 */
export interface DataflowEndpointAuthenticationSystemAssignedManagedIdentityArgs {
    /**
     * Audience of the service to authenticate against. Optional; defaults to the audience for Service host configuration.
     */
    audience?: pulumi.Input<string>;
}

/**
 * DataflowEndpoint Authentication UserAssignedManagedIdentity properties
 */
export interface DataflowEndpointAuthenticationUserAssignedManagedIdentityArgs {
    /**
     * Client ID for the user-assigned managed identity.
     */
    clientId: pulumi.Input<string>;
    /**
     * Resource identifier (application ID URI) of the resource, affixed with the .default suffix.
     */
    scope?: pulumi.Input<string>;
    /**
     * Tenant ID.
     */
    tenantId: pulumi.Input<string>;
}

/**
 * DataflowEndpoint Authentication X509 properties
 */
export interface DataflowEndpointAuthenticationX509Args {
    /**
     * Secret reference of the X.509 certificate.
     */
    secretRef: pulumi.Input<string>;
}

/**
 * Azure Data Explorer endpoint properties
 */
export interface DataflowEndpointDataExplorerArgs {
    /**
     * Authentication configuration. NOTE - only authentication property is allowed per entry.
     */
    authentication: pulumi.Input<DataflowEndpointDataExplorerAuthenticationArgs>;
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
 * dataflowEndpointDataExplorerArgsProvideDefaults sets the appropriate defaults for DataflowEndpointDataExplorerArgs
 */
export function dataflowEndpointDataExplorerArgsProvideDefaults(val: DataflowEndpointDataExplorerArgs): DataflowEndpointDataExplorerArgs {
    return {
        ...val,
        batching: (val.batching ? pulumi.output(val.batching).apply(batchingConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * Azure Data Explorer Authentication properties. NOTE - only authentication property is allowed per entry.
 */
export interface DataflowEndpointDataExplorerAuthenticationArgs {
    /**
     * Mode of Authentication.
     */
    method: any;
    /**
     * System-assigned managed identity authentication.
     */
    systemAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationSystemAssignedManagedIdentityArgs>;
    /**
     * User-assigned managed identity authentication.
     */
    userAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationUserAssignedManagedIdentityArgs>;
}

/**
 * Azure Data Lake endpoint properties
 */
export interface DataflowEndpointDataLakeStorageArgs {
    /**
     * Authentication configuration. NOTE - only authentication property is allowed per entry.
     */
    authentication: pulumi.Input<DataflowEndpointDataLakeStorageAuthenticationArgs>;
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
 * dataflowEndpointDataLakeStorageArgsProvideDefaults sets the appropriate defaults for DataflowEndpointDataLakeStorageArgs
 */
export function dataflowEndpointDataLakeStorageArgsProvideDefaults(val: DataflowEndpointDataLakeStorageArgs): DataflowEndpointDataLakeStorageArgs {
    return {
        ...val,
        batching: (val.batching ? pulumi.output(val.batching).apply(batchingConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * Azure Data Lake endpoint Authentication properties.  NOTE Enum - Only one method is supported for one entry
 */
export interface DataflowEndpointDataLakeStorageAuthenticationArgs {
    /**
     * SAS token authentication.
     */
    accessTokenSettings?: pulumi.Input<DataflowEndpointAuthenticationAccessTokenArgs>;
    /**
     * Mode of Authentication.
     */
    method: pulumi.Input<string | enums.DataLakeStorageAuthMethod>;
    /**
     * System-assigned managed identity authentication.
     */
    systemAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationSystemAssignedManagedIdentityArgs>;
    /**
     * User-assigned managed identity authentication.
     */
    userAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationUserAssignedManagedIdentityArgs>;
}

/**
 * Microsoft Fabric endpoint properties
 */
export interface DataflowEndpointFabricOneLakeArgs {
    /**
     * Authentication configuration. NOTE - only one authentication property is allowed per entry.
     */
    authentication: pulumi.Input<DataflowEndpointFabricOneLakeAuthenticationArgs>;
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
    names: pulumi.Input<DataflowEndpointFabricOneLakeNamesArgs>;
    /**
     * Type of location of the data in the workspace. Can be either tables or files.
     */
    oneLakePathType: pulumi.Input<string | enums.DataflowEndpointFabricPathType>;
}
/**
 * dataflowEndpointFabricOneLakeArgsProvideDefaults sets the appropriate defaults for DataflowEndpointFabricOneLakeArgs
 */
export function dataflowEndpointFabricOneLakeArgsProvideDefaults(val: DataflowEndpointFabricOneLakeArgs): DataflowEndpointFabricOneLakeArgs {
    return {
        ...val,
        batching: (val.batching ? pulumi.output(val.batching).apply(batchingConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * Microsoft Fabric endpoint. Authentication properties. NOTE - Only one method is supported for one entry
 */
export interface DataflowEndpointFabricOneLakeAuthenticationArgs {
    /**
     * Mode of Authentication.
     */
    method: any;
    /**
     * System-assigned managed identity authentication.
     */
    systemAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationSystemAssignedManagedIdentityArgs>;
    /**
     * User-assigned managed identity authentication.
     */
    userAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationUserAssignedManagedIdentityArgs>;
}

/**
 * Microsoft Fabric endpoint Names properties
 */
export interface DataflowEndpointFabricOneLakeNamesArgs {
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
export interface DataflowEndpointKafkaArgs {
    /**
     * Authentication configuration. NOTE - only authentication property is allowed per entry.
     */
    authentication: pulumi.Input<DataflowEndpointKafkaAuthenticationArgs>;
    /**
     * Batching configuration.
     */
    batching?: pulumi.Input<DataflowEndpointKafkaBatchingArgs>;
    /**
     * Cloud event mapping config.
     */
    cloudEventAttributes?: pulumi.Input<string | enums.CloudEventAttributeType>;
    /**
     * Compression. Can be none, gzip, lz4, or snappy. No effect if the endpoint is used as a source.
     */
    compression?: pulumi.Input<string | enums.DataflowEndpointKafkaCompression>;
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
    host: pulumi.Input<string>;
    /**
     * Kafka acks. Can be all, one, or zero. No effect if the endpoint is used as a source.
     */
    kafkaAcks?: pulumi.Input<string | enums.DataflowEndpointKafkaAcks>;
    /**
     * Partition handling strategy. Can be default or static. No effect if the endpoint is used as a source.
     */
    partitionStrategy?: pulumi.Input<string | enums.DataflowEndpointKafkaPartitionStrategy>;
    /**
     * TLS configuration.
     */
    tls?: pulumi.Input<TlsPropertiesArgs>;
}
/**
 * dataflowEndpointKafkaArgsProvideDefaults sets the appropriate defaults for DataflowEndpointKafkaArgs
 */
export function dataflowEndpointKafkaArgsProvideDefaults(val: DataflowEndpointKafkaArgs): DataflowEndpointKafkaArgs {
    return {
        ...val,
        batching: (val.batching ? pulumi.output(val.batching).apply(dataflowEndpointKafkaBatchingArgsProvideDefaults) : undefined),
        compression: (val.compression) ?? "None",
        copyMqttProperties: (val.copyMqttProperties) ?? "Enabled",
        kafkaAcks: (val.kafkaAcks) ?? "All",
        partitionStrategy: (val.partitionStrategy) ?? "Default",
        tls: (val.tls ? pulumi.output(val.tls).apply(tlsPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * Kafka endpoint Authentication properties. NOTE - only authentication property is allowed per entry
 */
export interface DataflowEndpointKafkaAuthenticationArgs {
    /**
     * Mode of Authentication.
     */
    method: pulumi.Input<string | enums.KafkaAuthMethod>;
    /**
     * SASL authentication.
     */
    saslSettings?: pulumi.Input<DataflowEndpointAuthenticationSaslArgs>;
    /**
     * System-assigned managed identity authentication.
     */
    systemAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationSystemAssignedManagedIdentityArgs>;
    /**
     * User-assigned managed identity authentication.
     */
    userAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationUserAssignedManagedIdentityArgs>;
    /**
     * X.509 certificate authentication.
     */
    x509CertificateSettings?: pulumi.Input<DataflowEndpointAuthenticationX509Args>;
}

/**
 * Kafka endpoint Batching properties
 */
export interface DataflowEndpointKafkaBatchingArgs {
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
 * dataflowEndpointKafkaBatchingArgsProvideDefaults sets the appropriate defaults for DataflowEndpointKafkaBatchingArgs
 */
export function dataflowEndpointKafkaBatchingArgsProvideDefaults(val: DataflowEndpointKafkaBatchingArgs): DataflowEndpointKafkaBatchingArgs {
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
export interface DataflowEndpointLocalStorageArgs {
    /**
     * Persistent volume claim name.
     */
    persistentVolumeClaimRef: pulumi.Input<string>;
}

/**
 * Broker endpoint properties
 */
export interface DataflowEndpointMqttArgs {
    /**
     * authentication properties. DEFAULT: kubernetes.audience=aio-internal. NOTE - Enum field only property is allowed
     */
    authentication: pulumi.Input<DataflowEndpointMqttAuthenticationArgs>;
    /**
     * Client ID prefix. Client ID generated by the dataflow is <prefix>-TBD. Optional; no prefix if omitted.
     */
    clientIdPrefix?: pulumi.Input<string>;
    /**
     * Cloud event mapping config.
     */
    cloudEventAttributes?: pulumi.Input<string | enums.CloudEventAttributeType>;
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
 * dataflowEndpointMqttArgsProvideDefaults sets the appropriate defaults for DataflowEndpointMqttArgs
 */
export function dataflowEndpointMqttArgsProvideDefaults(val: DataflowEndpointMqttArgs): DataflowEndpointMqttArgs {
    return {
        ...val,
        keepAliveSeconds: (val.keepAliveSeconds) ?? 60,
        maxInflightMessages: (val.maxInflightMessages) ?? 100,
        protocol: (val.protocol) ?? "Mqtt",
        qos: (val.qos) ?? 1,
        retain: (val.retain) ?? "Keep",
        tls: (val.tls ? pulumi.output(val.tls).apply(tlsPropertiesArgsProvideDefaults) : undefined),
    };
}

/**
 * Mqtt endpoint Authentication properties. NOTE - only authentication property is allowed per entry.
 */
export interface DataflowEndpointMqttAuthenticationArgs {
    /**
     * Mode of Authentication.
     */
    method: pulumi.Input<string | enums.MqttAuthMethod>;
    /**
     * Kubernetes service account token authentication. Default audience if not set is aio-internal
     */
    serviceAccountTokenSettings?: pulumi.Input<DataflowEndpointAuthenticationServiceAccountTokenArgs>;
    /**
     * System-assigned managed identity authentication.
     */
    systemAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationSystemAssignedManagedIdentityArgs>;
    /**
     * User-assigned managed identity authentication.
     */
    userAssignedManagedIdentitySettings?: pulumi.Input<DataflowEndpointAuthenticationUserAssignedManagedIdentityArgs>;
    /**
     * X.509 certificate authentication.
     */
    x509CertificateSettings?: pulumi.Input<DataflowEndpointAuthenticationX509Args>;
}

/**
 * DataflowEndpoint Resource properties. NOTE - Only one type of endpoint is supported for one Resource
 */
export interface DataflowEndpointPropertiesArgs {
    /**
     * Azure Data Explorer endpoint.
     */
    dataExplorerSettings?: pulumi.Input<DataflowEndpointDataExplorerArgs>;
    /**
     * Azure Data Lake endpoint.
     */
    dataLakeStorageSettings?: pulumi.Input<DataflowEndpointDataLakeStorageArgs>;
    /**
     * Endpoint Type.
     */
    endpointType: pulumi.Input<string | enums.EndpointType>;
    /**
     * Microsoft Fabric endpoint.
     */
    fabricOneLakeSettings?: pulumi.Input<DataflowEndpointFabricOneLakeArgs>;
    /**
     * Kafka endpoint.
     */
    kafkaSettings?: pulumi.Input<DataflowEndpointKafkaArgs>;
    /**
     * Local persistent volume endpoint.
     */
    localStorageSettings?: pulumi.Input<DataflowEndpointLocalStorageArgs>;
    /**
     * Broker endpoint.
     */
    mqttSettings?: pulumi.Input<DataflowEndpointMqttArgs>;
}
/**
 * dataflowEndpointPropertiesArgsProvideDefaults sets the appropriate defaults for DataflowEndpointPropertiesArgs
 */
export function dataflowEndpointPropertiesArgsProvideDefaults(val: DataflowEndpointPropertiesArgs): DataflowEndpointPropertiesArgs {
    return {
        ...val,
        dataExplorerSettings: (val.dataExplorerSettings ? pulumi.output(val.dataExplorerSettings).apply(dataflowEndpointDataExplorerArgsProvideDefaults) : undefined),
        dataLakeStorageSettings: (val.dataLakeStorageSettings ? pulumi.output(val.dataLakeStorageSettings).apply(dataflowEndpointDataLakeStorageArgsProvideDefaults) : undefined),
        fabricOneLakeSettings: (val.fabricOneLakeSettings ? pulumi.output(val.fabricOneLakeSettings).apply(dataflowEndpointFabricOneLakeArgsProvideDefaults) : undefined),
        kafkaSettings: (val.kafkaSettings ? pulumi.output(val.kafkaSettings).apply(dataflowEndpointKafkaArgsProvideDefaults) : undefined),
        mqttSettings: (val.mqttSettings ? pulumi.output(val.mqttSettings).apply(dataflowEndpointMqttArgsProvideDefaults) : undefined),
    };
}

/**
 * DataflowGraph DataflowGraphNode Connection Input.
 */
export interface DataflowGraphConnectionInputArgs {
    /**
     * Name of the input node.
     */
    name: pulumi.Input<string>;
    /**
     * Schema settings for the input node.
     */
    schema?: pulumi.Input<DataflowGraphConnectionSchemaSettingsArgs>;
}

/**
 * DataflowGraph DataflowGraphNode Connection Output.
 */
export interface DataflowGraphConnectionOutputArgs {
    /**
     * Name of the destination node.
     */
    name: pulumi.Input<string>;
}

/**
 * DataflowGraph connection node output schema settings.
 */
export interface DataflowGraphConnectionSchemaSettingsArgs {
    /**
     * Reference to the schema that describes the output of the transformation.
     */
    schemaRef?: pulumi.Input<string>;
    /**
     * Output serialization format.
     */
    serializationFormat?: pulumi.Input<string | enums.DataflowGraphConnectionSchemaSerializationFormat>;
}

/**
 * DataflowGraph destination node properties.
 */
export interface DataflowGraphDestinationNodeArgs {
    /**
     * Destination configuration.
     */
    destinationSettings: pulumi.Input<DataflowGraphDestinationNodeSettingsArgs>;
    /**
     * Name of the node.
     */
    name: pulumi.Input<string>;
    /**
     * DataflowGraph node types.
     * Expected value is 'Destination'.
     */
    nodeType: pulumi.Input<"Destination">;
}

/**
 * DataflowGraph destination node settings.
 */
export interface DataflowGraphDestinationNodeSettingsArgs {
    /**
     * Data destination at the endpoint.
     */
    dataDestination: pulumi.Input<string>;
    /**
     * The name of the DataflowEndpoint resource .
     */
    endpointRef: pulumi.Input<string>;
    /**
     * Output schema settings.
     */
    outputSchemaSettings?: pulumi.Input<DataflowGraphDestinationSchemaSettingsArgs>;
}

/**
 * DataflowGraph destination node output schema settings.
 */
export interface DataflowGraphDestinationSchemaSettingsArgs {
    /**
     * Reference to the schema that describes the output of the transformation.
     */
    schemaRef?: pulumi.Input<string>;
    /**
     * The format of the output data.
     */
    serializationFormat: pulumi.Input<string | enums.DataflowGraphDestinationSchemaSerializationFormat>;
}

/**
 * DataflowGraph graph node properties.
 */
export interface DataflowGraphGraphNodeArgs {
    /**
     * Graph configuration.
     */
    graphSettings: pulumi.Input<DataflowGraphNodeGraphSettingsArgs>;
    /**
     * Name of the node.
     */
    name: pulumi.Input<string>;
    /**
     * DataflowGraph node types.
     * Expected value is 'Graph'.
     */
    nodeType: pulumi.Input<"Graph">;
}

/**
 * DataflowGraph graph node configuration.
 */
export interface DataflowGraphGraphNodeConfigurationArgs {
    /**
     * Key of the configuration.
     */
    key: pulumi.Input<string>;
    /**
     * Value of the configuration.
     */
    value: pulumi.Input<string>;
}

/**
 * DataflowGraph DataflowGraphNode Connection.
 */
export interface DataflowGraphNodeConnectionArgs {
    /**
     * Information about the source node.
     */
    from: pulumi.Input<DataflowGraphConnectionInputArgs>;
    /**
     * Information about the destination node.
     */
    to: pulumi.Input<DataflowGraphConnectionOutputArgs>;
}

/**
 * DataflowGraph graph node settings.
 */
export interface DataflowGraphNodeGraphSettingsArgs {
    /**
     * The artifact name and version to pull. This should be in the format `<artifact-name>:<version>`.
     */
    artifact: pulumi.Input<string>;
    /**
     * Configuration key-value pairs.
     */
    configuration?: pulumi.Input<pulumi.Input<DataflowGraphGraphNodeConfigurationArgs>[]>;
    /**
     * Reference to the registry endpoint for pulling the artifact.
     */
    registryEndpointRef: pulumi.Input<string>;
}

/**
 * DataflowGraph properties.
 */
export interface DataflowGraphPropertiesArgs {
    /**
     * The mode of the dataflow graph.
     */
    mode?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * List of connections between nodes in the dataflow graph.
     */
    nodeConnections: pulumi.Input<pulumi.Input<DataflowGraphNodeConnectionArgs>[]>;
    /**
     * List of nodes in the dataflow graph.
     */
    nodes: pulumi.Input<pulumi.Input<DataflowGraphDestinationNodeArgs | DataflowGraphGraphNodeArgs | DataflowGraphSourceNodeArgs>[]>;
    /**
     * Disk persistence mode.
     */
    requestDiskPersistence?: pulumi.Input<string | enums.OperationalMode>;
}
/**
 * dataflowGraphPropertiesArgsProvideDefaults sets the appropriate defaults for DataflowGraphPropertiesArgs
 */
export function dataflowGraphPropertiesArgsProvideDefaults(val: DataflowGraphPropertiesArgs): DataflowGraphPropertiesArgs {
    return {
        ...val,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * DataflowGraph source node properties.
 */
export interface DataflowGraphSourceNodeArgs {
    /**
     * Name of the node.
     */
    name: pulumi.Input<string>;
    /**
     * DataflowGraph node types.
     * Expected value is 'Source'.
     */
    nodeType: pulumi.Input<"Source">;
    /**
     * Source configuration.
     */
    sourceSettings: pulumi.Input<DataflowGraphSourceSettingsArgs>;
}

/**
 * DataflowGraph source node settings.
 */
export interface DataflowGraphSourceSettingsArgs {
    /**
     * Reference to the resource in Azure Device Registry where the data in the endpoint originates from.
     */
    assetRef?: pulumi.Input<string>;
    /**
     * List of data sources.
     */
    dataSources: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The endpoint reference for the source.
     */
    endpointRef: pulumi.Input<string>;
}

/**
 * Dataflow Operation properties. NOTE - One only method is allowed to be used for one entry.
 */
export interface DataflowOperationArgs {
    /**
     * Built In Transformation configuration.
     */
    builtInTransformationSettings?: pulumi.Input<DataflowBuiltInTransformationSettingsArgs>;
    /**
     * Destination configuration.
     */
    destinationSettings?: pulumi.Input<DataflowDestinationOperationSettingsArgs>;
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
    sourceSettings?: pulumi.Input<DataflowSourceOperationSettingsArgs>;
}
/**
 * dataflowOperationArgsProvideDefaults sets the appropriate defaults for DataflowOperationArgs
 */
export function dataflowOperationArgsProvideDefaults(val: DataflowOperationArgs): DataflowOperationArgs {
    return {
        ...val,
        builtInTransformationSettings: (val.builtInTransformationSettings ? pulumi.output(val.builtInTransformationSettings).apply(dataflowBuiltInTransformationSettingsArgsProvideDefaults) : undefined),
        sourceSettings: (val.sourceSettings ? pulumi.output(val.sourceSettings).apply(dataflowSourceOperationSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * DataflowProfile Resource properties
 */
export interface DataflowProfilePropertiesArgs {
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
 * dataflowProfilePropertiesArgsProvideDefaults sets the appropriate defaults for DataflowProfilePropertiesArgs
 */
export function dataflowProfilePropertiesArgsProvideDefaults(val: DataflowProfilePropertiesArgs): DataflowProfilePropertiesArgs {
    return {
        ...val,
        diagnostics: (val.diagnostics ? pulumi.output(val.diagnostics).apply(profileDiagnosticsArgsProvideDefaults) : undefined),
        instanceCount: (val.instanceCount) ?? 1,
    };
}

/**
 * Dataflow Resource properties
 */
export interface DataflowPropertiesArgs {
    /**
     * Mode for Dataflow. Optional; defaults to Enabled.
     */
    mode?: pulumi.Input<string | enums.OperationalMode>;
    /**
     * List of operations including source and destination references as well as transformation.
     */
    operations: pulumi.Input<pulumi.Input<DataflowOperationArgs>[]>;
}
/**
 * dataflowPropertiesArgsProvideDefaults sets the appropriate defaults for DataflowPropertiesArgs
 */
export function dataflowPropertiesArgsProvideDefaults(val: DataflowPropertiesArgs): DataflowPropertiesArgs {
    return {
        ...val,
        mode: (val.mode) ?? "Enabled",
    };
}

/**
 * Dataflow Source Operation properties
 */
export interface DataflowSourceOperationSettingsArgs {
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
 * dataflowSourceOperationSettingsArgsProvideDefaults sets the appropriate defaults for DataflowSourceOperationSettingsArgs
 */
export function dataflowSourceOperationSettingsArgsProvideDefaults(val: DataflowSourceOperationSettingsArgs): DataflowSourceOperationSettingsArgs {
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
}
/**
 * diagnosticsLogsArgsProvideDefaults sets the appropriate defaults for DiagnosticsLogsArgs
 */
export function diagnosticsLogsArgsProvideDefaults(val: DiagnosticsLogsArgs): DiagnosticsLogsArgs {
    return {
        ...val,
        level: (val.level) ?? "info",
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
 * The properties of the Instance resource.
 */
export interface InstancePropertiesArgs {
    /**
     * Detailed description of the Instance.
     */
    description?: pulumi.Input<string>;
    /**
     * The reference to the Schema Registry for this AIO Instance.
     */
    schemaRegistryRef: pulumi.Input<SchemaRegistryRefArgs>;
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
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Diagnostic Metrics properties
 */
export interface MetricsArgs {
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
        prometheusPort: (val.prometheusPort) ?? 9600,
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
 * DataflowProfile Diagnostics properties
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
 * Anonymous authentication
 */
export interface RegistryEndpointAnonymousAuthenticationArgs {
    /**
     * Anonymous authentication properties
     */
    anonymousSettings: any;
    /**
     * The authentication method.
     * Expected value is 'Anonymous'.
     */
    method: pulumi.Input<"Anonymous">;
}

/**
 * Artifact Pull Secret authentication
 */
export interface RegistryEndpointArtifactPullSecretAuthenticationArgs {
    /**
     * Artifact Pull Secret authentication properties
     */
    artifactPullSecretSettings: pulumi.Input<RegistryEndpointArtifactPullSecretSettingsArgs>;
    /**
     * The authentication method.
     * Expected value is 'ArtifactPullSecret'.
     */
    method: pulumi.Input<"ArtifactPullSecret">;
}

/**
 * RegistryEndpoint Artifact Pull Secret authentication properties
 */
export interface RegistryEndpointArtifactPullSecretSettingsArgs {
    /**
     * The name of the kubernetes secret that contains the artifact pull secret.
     */
    secretRef: pulumi.Input<string>;
}

/**
 * RegistryEndpoint properties
 */
export interface RegistryEndpointPropertiesArgs {
    /**
     * The authentication settings for the Azure Container Registry.
     */
    authentication: pulumi.Input<RegistryEndpointAnonymousAuthenticationArgs | RegistryEndpointArtifactPullSecretAuthenticationArgs | RegistryEndpointSystemAssignedIdentityAuthenticationArgs | RegistryEndpointUserAssignedIdentityAuthenticationArgs>;
    /**
     * The Container Registry endpoint hostname.
     */
    host: pulumi.Input<string>;
    /**
     * Trust settings for the registry endpoint
     */
    trustSettings?: pulumi.Input<RegistryEndpointTrustedSettingsArgs>;
}

/**
 * System assigned identity authentication
 */
export interface RegistryEndpointSystemAssignedIdentityAuthenticationArgs {
    /**
     * The authentication method.
     * Expected value is 'SystemAssignedManagedIdentity'.
     */
    method: pulumi.Input<"SystemAssignedManagedIdentity">;
    /**
     * System assigned managed identity properties
     */
    systemAssignedManagedIdentitySettings: pulumi.Input<RegistryEndpointSystemAssignedManagedIdentitySettingsArgs>;
}

/**
 * System assigned managed identity properties
 */
export interface RegistryEndpointSystemAssignedManagedIdentitySettingsArgs {
    /**
     * Audience of the service to authenticate against. Optional; defaults to the audience for Service host configuration.
     */
    audience?: pulumi.Input<string>;
}

/**
 * RegistryEndpointTrustedSettings properties
 */
export interface RegistryEndpointTrustedSettingsArgs {
    /**
     * The trust properties for the registry endpoint.
     */
    trustedSigningKeys: pulumi.Input<RegistryEndpointTrustedSigningKeyConfigMapArgs | RegistryEndpointTrustedSigningKeySecretArgs>;
}

/**
 * Settings for RegistryEndpoint trust provided through a configmap.
 */
export interface RegistryEndpointTrustedSigningKeyConfigMapArgs {
    /**
     * The name of the configmap.
     */
    configMapRef: pulumi.Input<string>;
    /**
     * RegistryEndpointTrustedSigningKeyType values
     * Expected value is 'ConfigMap'.
     */
    type: pulumi.Input<"ConfigMap">;
}

/**
 * Settings for RegistryEndpoint trust provided through a secret.
 */
export interface RegistryEndpointTrustedSigningKeySecretArgs {
    /**
     * The name of the secret.
     */
    secretRef: pulumi.Input<string>;
    /**
     * RegistryEndpointTrustedSigningKeyType values
     * Expected value is 'Secret'.
     */
    type: pulumi.Input<"Secret">;
}

/**
 * User assigned identity authentication
 */
export interface RegistryEndpointUserAssignedIdentityAuthenticationArgs {
    /**
     * The authentication method.
     * Expected value is 'UserAssignedManagedIdentity'.
     */
    method: pulumi.Input<"UserAssignedManagedIdentity">;
    /**
     * User assigned managed identity properties
     */
    userAssignedManagedIdentitySettings: pulumi.Input<RegistryEndpointUserAssignedManagedIdentitySettingsArgs>;
}

/**
 * User assigned managed identity properties
 */
export interface RegistryEndpointUserAssignedManagedIdentitySettingsArgs {
    /**
     * Client ID for the user-assigned managed identity.
     */
    clientId: pulumi.Input<string>;
    /**
     * Resource identifier (application ID URI) of the resource, affixed with the .default suffix.
     */
    scope?: pulumi.Input<string>;
    /**
     * Tenant ID.
     */
    tenantId: pulumi.Input<string>;
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
 * The reference to the Schema Registry for this AIO Instance.
 */
export interface SchemaRegistryRefArgs {
    /**
     * The resource ID of the Schema Registry.
     */
    resourceId: pulumi.Input<string>;
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
    certManagerCertificateSpec?: pulumi.Input<CertManagerCertificateSpecArgs>;
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
        certManagerCertificateSpec: (val.certManagerCertificateSpec ? pulumi.output(val.certManagerCertificateSpec).apply(certManagerCertificateSpecArgsProvideDefaults) : undefined),
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
