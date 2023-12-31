import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Describes the horizontal auto scaling mechanism that adds or removes replicas (containers or container groups).
 */
export interface AddRemoveReplicaScalingMechanismArgs {
    /**
     * Enumerates the mechanisms for auto scaling.
     * Expected value is 'AddRemoveReplica'.
     */
    kind: pulumi.Input<"AddRemoveReplica">;
    /**
     * Maximum number of containers (scale up won't be performed above this number).
     */
    maxCount: pulumi.Input<number>;
    /**
     * Minimum number of containers (scale down won't be performed below this number).
     */
    minCount: pulumi.Input<number>;
    /**
     * Each time auto scaling is performed, this number of containers will be added or removed.
     */
    scaleIncrement: pulumi.Input<number>;
}

/**
 * Describes a volume whose lifetime is scoped to the application's lifetime.
 */
export interface ApplicationScopedVolumeArgs {
    /**
     * Describes parameters for creating application-scoped volumes.
     */
    creationParameters: pulumi.Input<ApplicationScopedVolumeCreationParametersServiceFabricVolumeDiskArgs>;
    /**
     * The path within the container at which the volume should be mounted. Only valid path characters are allowed.
     */
    destinationPath: pulumi.Input<string>;
    /**
     * Name of the volume being referenced.
     */
    name: pulumi.Input<string>;
    /**
     * The flag indicating whether the volume is read only. Default is 'false'.
     */
    readOnly?: pulumi.Input<boolean>;
}

/**
 * Describes parameters for creating application-scoped volumes provided by Service Fabric Volume Disks
 */
export interface ApplicationScopedVolumeCreationParametersServiceFabricVolumeDiskArgs {
    /**
     * User readable description of the volume.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the application-scoped volume kind.
     * Expected value is 'ServiceFabricVolumeDisk'.
     */
    kind: pulumi.Input<"ServiceFabricVolumeDisk">;
    /**
     * Volume size
     */
    sizeDisk: pulumi.Input<string | enums.SizeTypes>;
}

/**
 * Describes the auto scaling policy
 */
export interface AutoScalingPolicyArgs {
    /**
     * The mechanism that is used to scale when auto scaling operation is invoked.
     */
    mechanism: pulumi.Input<AddRemoveReplicaScalingMechanismArgs>;
    /**
     * The name of the auto scaling policy.
     */
    name: pulumi.Input<string>;
    /**
     * Determines when auto scaling operation will be invoked.
     */
    trigger: pulumi.Input<AverageLoadScalingTriggerArgs>;
}

/**
 * Describes the resource that is used for triggering auto scaling.
 */
export interface AutoScalingResourceMetricArgs {
    /**
     * Enumerates the metrics that are used for triggering auto scaling.
     * Expected value is 'Resource'.
     */
    kind: pulumi.Input<"Resource">;
    /**
     * Name of the resource.
     */
    name: pulumi.Input<string | enums.AutoScalingResourceMetricName>;
}

/**
 * Describes the average load trigger used for auto scaling.
 */
export interface AverageLoadScalingTriggerArgs {
    /**
     * Enumerates the triggers for auto scaling.
     * Expected value is 'AverageLoad'.
     */
    kind: pulumi.Input<"AverageLoad">;
    /**
     * Lower load threshold (if average load is below this threshold, service will scale down).
     */
    lowerLoadThreshold: pulumi.Input<number>;
    /**
     * Description of the metric that is used for scaling.
     */
    metric: pulumi.Input<AutoScalingResourceMetricArgs>;
    /**
     * Scale interval that indicates how often will this trigger be checked.
     */
    scaleIntervalInSeconds: pulumi.Input<number>;
    /**
     * Upper load threshold (if average load is above this threshold, service will scale up).
     */
    upperLoadThreshold: pulumi.Input<number>;
}

/**
 * Diagnostics settings for Geneva.
 */
export interface AzureInternalMonitoringPipelineSinkDescriptionArgs {
    /**
     * Azure Internal monitoring pipeline account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * Azure Internal monitoring pipeline autokey associated with the certificate.
     */
    autoKeyConfigUrl?: pulumi.Input<string>;
    /**
     * A description of the sink.
     */
    description?: pulumi.Input<string>;
    /**
     * Azure Internal monitoring agent fluentd configuration.
     */
    fluentdConfigUrl?: any;
    /**
     * The kind of DiagnosticsSink.
     * Expected value is 'AzureInternalMonitoringPipeline'.
     */
    kind: pulumi.Input<"AzureInternalMonitoringPipeline">;
    /**
     * Azure Internal monitoring agent configuration.
     */
    maConfigUrl?: pulumi.Input<string>;
    /**
     * Name of the sink. This value is referenced by DiagnosticsReferenceDescription
     */
    name?: pulumi.Input<string>;
    /**
     * Azure Internal monitoring pipeline account namespace.
     */
    namespace?: pulumi.Input<string>;
}

/**
 * Describes a container and its runtime properties.
 */
export interface ContainerCodePackagePropertiesArgs {
    /**
     * Command array to execute within the container in exec form.
     */
    commands?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Reference to sinks in DiagnosticsDescription.
     */
    diagnostics?: pulumi.Input<DiagnosticsRefArgs>;
    /**
     * The endpoints exposed by this container.
     */
    endpoints?: pulumi.Input<pulumi.Input<EndpointPropertiesArgs>[]>;
    /**
     * Override for the default entry point in the container.
     */
    entrypoint?: pulumi.Input<string>;
    /**
     * The environment variables to set in this container
     */
    environmentVariables?: pulumi.Input<pulumi.Input<EnvironmentVariableArgs>[]>;
    /**
     * The Container image to use.
     */
    image: pulumi.Input<string>;
    /**
     * Image registry credential.
     */
    imageRegistryCredential?: pulumi.Input<ImageRegistryCredentialArgs>;
    /**
     * The labels to set in this container.
     */
    labels?: pulumi.Input<pulumi.Input<ContainerLabelArgs>[]>;
    /**
     * The name of the code package.
     */
    name: pulumi.Input<string>;
    /**
     * A list of ReliableCollection resources used by this particular code package. Please refer to ReliableCollectionsRef for more details.
     */
    reliableCollectionsRefs?: pulumi.Input<pulumi.Input<ReliableCollectionsRefArgs>[]>;
    /**
     * The resources required by this container.
     */
    resources: pulumi.Input<ResourceRequirementsArgs>;
    /**
     * The settings to set in this container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
     */
    settings?: pulumi.Input<pulumi.Input<SettingArgs>[]>;
    /**
     * Volumes to be attached to the container. The lifetime of these volumes is independent of the application's lifetime.
     */
    volumeRefs?: pulumi.Input<pulumi.Input<VolumeReferenceArgs>[]>;
    /**
     * Volumes to be attached to the container. The lifetime of these volumes is scoped to the application's lifetime.
     */
    volumes?: pulumi.Input<pulumi.Input<ApplicationScopedVolumeArgs>[]>;
}

/**
 * Describes a container label.
 */
export interface ContainerLabelArgs {
    /**
     * The name of the container label.
     */
    name: pulumi.Input<string>;
    /**
     * The value of the container label.
     */
    value: pulumi.Input<string>;
}

/**
 * Describes the diagnostics options available
 */
export interface DiagnosticsDescriptionArgs {
    /**
     * The sinks to be used if diagnostics is enabled. Sink choices can be overridden at the service and code package level.
     */
    defaultSinkRefs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Status of whether or not sinks are enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List of supported sinks that can be referenced.
     */
    sinks?: pulumi.Input<pulumi.Input<AzureInternalMonitoringPipelineSinkDescriptionArgs>[]>;
}

/**
 * Reference to sinks in DiagnosticsDescription.
 */
export interface DiagnosticsRefArgs {
    /**
     * Status of whether or not sinks are enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List of sinks to be used if enabled. References the list of sinks in DiagnosticsDescription.
     */
    sinkRefs?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Describes a container endpoint.
 */
export interface EndpointPropertiesArgs {
    /**
     * The name of the endpoint.
     */
    name: pulumi.Input<string>;
    /**
     * Port used by the container.
     */
    port?: pulumi.Input<number>;
}

/**
 * Describes a reference to a service endpoint.
 */
export interface EndpointRefArgs {
    /**
     * Name of the endpoint.
     */
    name?: pulumi.Input<string>;
}

/**
 * Describes an environment variable for the container.
 */
export interface EnvironmentVariableArgs {
    /**
     * The name of the environment variable.
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the environment variable.
     */
    value?: pulumi.Input<string>;
}

/**
 * Describes destination endpoint for routing traffic.
 */
export interface GatewayDestinationArgs {
    /**
     * Name of the service fabric Mesh application.
     */
    applicationName: pulumi.Input<string>;
    /**
     * name of the endpoint in the service.
     */
    endpointName: pulumi.Input<string>;
    /**
     * service that contains the endpoint.
     */
    serviceName: pulumi.Input<string>;
}

/**
 * Describes the http configuration for external connectivity for this network.
 */
export interface HttpConfigArgs {
    /**
     * description for routing.
     */
    hosts: pulumi.Input<pulumi.Input<HttpHostConfigArgs>[]>;
    /**
     * http gateway config name.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the port at which the service endpoint below needs to be exposed.
     */
    port: pulumi.Input<number>;
}

/**
 * Describes the hostname properties for http routing.
 */
export interface HttpHostConfigArgs {
    /**
     * http hostname config name.
     */
    name: pulumi.Input<string>;
    /**
     * Route information to use for routing. Routes are processed in the order they are specified. Specify routes that are more specific before routes that can handle general cases.
     */
    routes: pulumi.Input<pulumi.Input<HttpRouteConfigArgs>[]>;
}

/**
 * Describes the hostname properties for http routing.
 */
export interface HttpRouteConfigArgs {
    /**
     * Describes destination endpoint for routing traffic.
     */
    destination: pulumi.Input<GatewayDestinationArgs>;
    /**
     * Describes a rule for http route matching.
     */
    match: pulumi.Input<HttpRouteMatchRuleArgs>;
    /**
     * http route name.
     */
    name: pulumi.Input<string>;
}

/**
 * Describes header information for http route matching.
 */
export interface HttpRouteMatchHeaderArgs {
    /**
     * Name of header to match in request.
     */
    name: pulumi.Input<string>;
    /**
     * how to match header value
     */
    type?: pulumi.Input<string | enums.HeaderMatchType>;
    /**
     * Value of header to match in request.
     */
    value?: pulumi.Input<string>;
}

/**
 * Path to match for routing.
 */
export interface HttpRouteMatchPathArgs {
    /**
     * replacement string for matched part of the Uri.
     */
    rewrite?: pulumi.Input<string>;
    /**
     * how to match value in the Uri
     */
    type: pulumi.Input<string | enums.PathMatchType>;
    /**
     * Uri path to match for request.
     */
    value: pulumi.Input<string>;
}

/**
 * Describes a rule for http route matching.
 */
export interface HttpRouteMatchRuleArgs {
    /**
     * headers and their values to match in request.
     */
    headers?: pulumi.Input<pulumi.Input<HttpRouteMatchHeaderArgs>[]>;
    /**
     * Path to match for routing.
     */
    path: pulumi.Input<HttpRouteMatchPathArgs>;
}

/**
 * Image registry credential.
 */
export interface ImageRegistryCredentialArgs {
    /**
     * The password for the private registry. The password is required for create or update operations, however it is not returned in the get or list operations.
     */
    password?: pulumi.Input<string>;
    /**
     * Docker image registry server, without protocol such as `http` and `https`.
     */
    server: pulumi.Input<string>;
    /**
     * The username for the private registry.
     */
    username: pulumi.Input<string>;
}

/**
 * Describes a network reference in a service.
 */
export interface NetworkRefArgs {
    /**
     * A list of endpoints that are exposed on this network.
     */
    endpointRefs?: pulumi.Input<pulumi.Input<EndpointRefArgs>[]>;
    /**
     * Name of the network
     */
    name?: pulumi.Input<string>;
}

/**
 * Describes properties of a network resource.
 */
export interface NetworkResourcePropertiesArgs {
    /**
     * User readable description of the network.
     */
    description?: pulumi.Input<string>;
    /**
     * The type of a Service Fabric container network.
     * Expected value is 'NetworkResourceProperties'.
     */
    kind: pulumi.Input<"NetworkResourceProperties">;
}

/**
 * Specifying this parameter adds support for reliable collections
 */
export interface ReliableCollectionsRefArgs {
    /**
     * False (the default) if ReliableCollections state is persisted to disk as usual. True if you do not want to persist state, in which case replication is still enabled and you can use ReliableCollections as distributed cache.
     */
    doNotPersistState?: pulumi.Input<boolean>;
    /**
     * Name of ReliableCollection resource. Right now it's not used and you can use any string.
     */
    name: pulumi.Input<string>;
}

/**
 * This type describes the resource limits for a given container. It describes the most amount of resources a container is allowed to use before being restarted.
 */
export interface ResourceLimitsArgs {
    /**
     * CPU limits in cores. At present, only full cores are supported.
     */
    cpu?: pulumi.Input<number>;
    /**
     * The memory limit in GB.
     */
    memoryInGB?: pulumi.Input<number>;
}

/**
 * This type describes the requested resources for a given container. It describes the least amount of resources required for the container. A container can consume more than requested resources up to the specified limits before being restarted. Currently, the requested resources are treated as limits.
 */
export interface ResourceRequestsArgs {
    /**
     * Requested number of CPU cores. At present, only full cores are supported.
     */
    cpu: pulumi.Input<number>;
    /**
     * The memory request in GB for this container.
     */
    memoryInGB: pulumi.Input<number>;
}

/**
 * This type describes the resource requirements for a container or a service.
 */
export interface ResourceRequirementsArgs {
    /**
     * Describes the maximum limits on the resources for a given container.
     */
    limits?: pulumi.Input<ResourceLimitsArgs>;
    /**
     * Describes the requested resources for a given container.
     */
    requests: pulumi.Input<ResourceRequestsArgs>;
}

/**
 * Describes the properties of a secret resource.
 */
export interface SecretResourcePropertiesArgs {
    /**
     * The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed.
     */
    contentType?: pulumi.Input<string>;
    /**
     * User readable description of the secret.
     */
    description?: pulumi.Input<string>;
    /**
     * Describes the kind of secret.
     * Expected value is 'SecretResourceProperties'.
     */
    kind: pulumi.Input<"SecretResourceProperties">;
}

/**
 * This type describes a service resource.
 */
export interface ServiceResourceDescriptionArgs {
    /**
     * Auto scaling policies
     */
    autoScalingPolicies?: pulumi.Input<pulumi.Input<AutoScalingPolicyArgs>[]>;
    /**
     * Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
     */
    codePackages: pulumi.Input<pulumi.Input<ContainerCodePackagePropertiesArgs>[]>;
    /**
     * User readable description of the service.
     */
    description?: pulumi.Input<string>;
    /**
     * Reference to sinks in DiagnosticsDescription.
     */
    diagnostics?: pulumi.Input<DiagnosticsRefArgs>;
    /**
     * The name of the resource
     */
    name?: pulumi.Input<string>;
    /**
     * The names of the private networks that this service needs to be part of.
     */
    networkRefs?: pulumi.Input<pulumi.Input<NetworkRefArgs>[]>;
    /**
     * The operation system required by the code in service.
     */
    osType: pulumi.Input<string | enums.OperatingSystemType>;
    /**
     * The number of replicas of the service to create. Defaults to 1 if not specified.
     */
    replicaCount?: pulumi.Input<number>;
}

/**
 * Describes a setting for the container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
 */
export interface SettingArgs {
    /**
     * The name of the setting.
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the setting.
     */
    value?: pulumi.Input<string>;
}

/**
 * Describes the tcp configuration for external connectivity for this network.
 */
export interface TcpConfigArgs {
    /**
     * Describes destination endpoint for routing traffic.
     */
    destination: pulumi.Input<GatewayDestinationArgs>;
    /**
     * tcp gateway config name.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the port at which the service endpoint below needs to be exposed.
     */
    port: pulumi.Input<number>;
}

/**
 * This type describes a volume provided by an Azure Files file share.
 */
export interface VolumeProviderParametersAzureFileArgs {
    /**
     * Access key of the Azure storage account for the File Share.
     */
    accountKey?: pulumi.Input<string>;
    /**
     * Name of the Azure storage account for the File Share.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of the Azure Files file share that provides storage for the volume.
     */
    shareName: pulumi.Input<string>;
}

/**
 * Describes a reference to a volume resource.
 */
export interface VolumeReferenceArgs {
    /**
     * The path within the container at which the volume should be mounted. Only valid path characters are allowed.
     */
    destinationPath: pulumi.Input<string>;
    /**
     * Name of the volume being referenced.
     */
    name: pulumi.Input<string>;
    /**
     * The flag indicating whether the volume is read only. Default is 'false'.
     */
    readOnly?: pulumi.Input<boolean>;
}
