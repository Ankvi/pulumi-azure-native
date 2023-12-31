import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes the horizontal auto scaling mechanism that adds or removes replicas (containers or container groups).
     */
    export interface AddRemoveReplicaScalingMechanismResponse {
        /**
         * Enumerates the mechanisms for auto scaling.
         * Expected value is 'AddRemoveReplica'.
         */
        kind: "AddRemoveReplica";
        /**
         * Maximum number of containers (scale up won't be performed above this number).
         */
        maxCount: number;
        /**
         * Minimum number of containers (scale down won't be performed below this number).
         */
        minCount: number;
        /**
         * Each time auto scaling is performed, this number of containers will be added or removed.
         */
        scaleIncrement: number;
    }

    /**
     * Describes parameters for creating application-scoped volumes provided by Service Fabric Volume Disks
     */
    export interface ApplicationScopedVolumeCreationParametersServiceFabricVolumeDiskResponse {
        /**
         * User readable description of the volume.
         */
        description?: string;
        /**
         * Specifies the application-scoped volume kind.
         * Expected value is 'ServiceFabricVolumeDisk'.
         */
        kind: "ServiceFabricVolumeDisk";
        /**
         * Volume size
         */
        sizeDisk: string;
    }

    /**
     * Describes a volume whose lifetime is scoped to the application's lifetime.
     */
    export interface ApplicationScopedVolumeResponse {
        /**
         * Describes parameters for creating application-scoped volumes.
         */
        creationParameters: ApplicationScopedVolumeCreationParametersServiceFabricVolumeDiskResponse;
        /**
         * The path within the container at which the volume should be mounted. Only valid path characters are allowed.
         */
        destinationPath: string;
        /**
         * Name of the volume being referenced.
         */
        name: string;
        /**
         * The flag indicating whether the volume is read only. Default is 'false'.
         */
        readOnly?: boolean;
    }

    /**
     * Describes the auto scaling policy
     */
    export interface AutoScalingPolicyResponse {
        /**
         * The mechanism that is used to scale when auto scaling operation is invoked.
         */
        mechanism: AddRemoveReplicaScalingMechanismResponse;
        /**
         * The name of the auto scaling policy.
         */
        name: string;
        /**
         * Determines when auto scaling operation will be invoked.
         */
        trigger: AverageLoadScalingTriggerResponse;
    }

    /**
     * Describes the resource that is used for triggering auto scaling.
     */
    export interface AutoScalingResourceMetricResponse {
        /**
         * Enumerates the metrics that are used for triggering auto scaling.
         * Expected value is 'Resource'.
         */
        kind: "Resource";
        /**
         * Name of the resource.
         */
        name: string;
    }

    /**
     * Describes the average load trigger used for auto scaling.
     */
    export interface AverageLoadScalingTriggerResponse {
        /**
         * Enumerates the triggers for auto scaling.
         * Expected value is 'AverageLoad'.
         */
        kind: "AverageLoad";
        /**
         * Lower load threshold (if average load is below this threshold, service will scale down).
         */
        lowerLoadThreshold: number;
        /**
         * Description of the metric that is used for scaling.
         */
        metric: AutoScalingResourceMetricResponse;
        /**
         * Scale interval that indicates how often will this trigger be checked.
         */
        scaleIntervalInSeconds: number;
        /**
         * Upper load threshold (if average load is above this threshold, service will scale up).
         */
        upperLoadThreshold: number;
    }

    /**
     * Diagnostics settings for Geneva.
     */
    export interface AzureInternalMonitoringPipelineSinkDescriptionResponse {
        /**
         * Azure Internal monitoring pipeline account.
         */
        accountName?: string;
        /**
         * Azure Internal monitoring pipeline autokey associated with the certificate.
         */
        autoKeyConfigUrl?: string;
        /**
         * A description of the sink.
         */
        description?: string;
        /**
         * Azure Internal monitoring agent fluentd configuration.
         */
        fluentdConfigUrl?: any;
        /**
         * The kind of DiagnosticsSink.
         * Expected value is 'AzureInternalMonitoringPipeline'.
         */
        kind: "AzureInternalMonitoringPipeline";
        /**
         * Azure Internal monitoring agent configuration.
         */
        maConfigUrl?: string;
        /**
         * Name of the sink. This value is referenced by DiagnosticsReferenceDescription
         */
        name?: string;
        /**
         * Azure Internal monitoring pipeline account namespace.
         */
        namespace?: string;
    }

    /**
     * Describes a container and its runtime properties.
     */
    export interface ContainerCodePackagePropertiesResponse {
        /**
         * Command array to execute within the container in exec form.
         */
        commands?: string[];
        /**
         * Reference to sinks in DiagnosticsDescription.
         */
        diagnostics?: DiagnosticsRefResponse;
        /**
         * The endpoints exposed by this container.
         */
        endpoints?: EndpointPropertiesResponse[];
        /**
         * Override for the default entry point in the container.
         */
        entrypoint?: string;
        /**
         * The environment variables to set in this container
         */
        environmentVariables?: EnvironmentVariableResponse[];
        /**
         * The Container image to use.
         */
        image: string;
        /**
         * Image registry credential.
         */
        imageRegistryCredential?: ImageRegistryCredentialResponse;
        /**
         * Runtime information of a container instance.
         */
        instanceView: ContainerInstanceViewResponse;
        /**
         * The labels to set in this container.
         */
        labels?: ContainerLabelResponse[];
        /**
         * The name of the code package.
         */
        name: string;
        /**
         * A list of ReliableCollection resources used by this particular code package. Please refer to ReliableCollectionsRef for more details.
         */
        reliableCollectionsRefs?: ReliableCollectionsRefResponse[];
        /**
         * The resources required by this container.
         */
        resources: ResourceRequirementsResponse;
        /**
         * The settings to set in this container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
         */
        settings?: SettingResponse[];
        /**
         * Volumes to be attached to the container. The lifetime of these volumes is independent of the application's lifetime.
         */
        volumeRefs?: VolumeReferenceResponse[];
        /**
         * Volumes to be attached to the container. The lifetime of these volumes is scoped to the application's lifetime.
         */
        volumes?: ApplicationScopedVolumeResponse[];
    }

    /**
     * A container event.
     */
    export interface ContainerEventResponse {
        /**
         * The count of the event.
         */
        count?: number;
        /**
         * Date/time of the first event.
         */
        firstTimestamp?: string;
        /**
         * Date/time of the last event.
         */
        lastTimestamp?: string;
        /**
         * The event message
         */
        message?: string;
        /**
         * The name of the container event.
         */
        name?: string;
        /**
         * The event type.
         */
        type?: string;
    }

    /**
     * Runtime information of a container instance.
     */
    export interface ContainerInstanceViewResponse {
        /**
         * Current container instance state.
         */
        currentState?: ContainerStateResponse;
        /**
         * The events of this container instance.
         */
        events?: ContainerEventResponse[];
        /**
         * Previous container instance state.
         */
        previousState?: ContainerStateResponse;
        /**
         * The number of times the container has been restarted.
         */
        restartCount?: number;
    }

    /**
     * Describes a container label.
     */
    export interface ContainerLabelResponse {
        /**
         * The name of the container label.
         */
        name: string;
        /**
         * The value of the container label.
         */
        value: string;
    }

    /**
     * The container state.
     */
    export interface ContainerStateResponse {
        /**
         * Human-readable status of this state.
         */
        detailStatus?: string;
        /**
         * The container exit code.
         */
        exitCode?: string;
        /**
         * Date/time when the container state finished.
         */
        finishTime?: string;
        /**
         * Date/time when the container state started.
         */
        startTime?: string;
        /**
         * The state of this container
         */
        state?: string;
    }

    /**
     * Describes the diagnostics options available
     */
    export interface DiagnosticsDescriptionResponse {
        /**
         * The sinks to be used if diagnostics is enabled. Sink choices can be overridden at the service and code package level.
         */
        defaultSinkRefs?: string[];
        /**
         * Status of whether or not sinks are enabled.
         */
        enabled?: boolean;
        /**
         * List of supported sinks that can be referenced.
         */
        sinks?: AzureInternalMonitoringPipelineSinkDescriptionResponse[];
    }

    /**
     * Reference to sinks in DiagnosticsDescription.
     */
    export interface DiagnosticsRefResponse {
        /**
         * Status of whether or not sinks are enabled.
         */
        enabled?: boolean;
        /**
         * List of sinks to be used if enabled. References the list of sinks in DiagnosticsDescription.
         */
        sinkRefs?: string[];
    }

    /**
     * Describes a container endpoint.
     */
    export interface EndpointPropertiesResponse {
        /**
         * The name of the endpoint.
         */
        name: string;
        /**
         * Port used by the container.
         */
        port?: number;
    }

    /**
     * Describes a reference to a service endpoint.
     */
    export interface EndpointRefResponse {
        /**
         * Name of the endpoint.
         */
        name?: string;
    }

    /**
     * Describes an environment variable for the container.
     */
    export interface EnvironmentVariableResponse {
        /**
         * The name of the environment variable.
         */
        name?: string;
        /**
         * The value of the environment variable.
         */
        value?: string;
    }

    /**
     * Describes destination endpoint for routing traffic.
     */
    export interface GatewayDestinationResponse {
        /**
         * Name of the service fabric Mesh application.
         */
        applicationName: string;
        /**
         * name of the endpoint in the service.
         */
        endpointName: string;
        /**
         * service that contains the endpoint.
         */
        serviceName: string;
    }

    /**
     * Describes the http configuration for external connectivity for this network.
     */
    export interface HttpConfigResponse {
        /**
         * description for routing.
         */
        hosts: HttpHostConfigResponse[];
        /**
         * http gateway config name.
         */
        name: string;
        /**
         * Specifies the port at which the service endpoint below needs to be exposed.
         */
        port: number;
    }

    /**
     * Describes the hostname properties for http routing.
     */
    export interface HttpHostConfigResponse {
        /**
         * http hostname config name.
         */
        name: string;
        /**
         * Route information to use for routing. Routes are processed in the order they are specified. Specify routes that are more specific before routes that can handle general cases.
         */
        routes: HttpRouteConfigResponse[];
    }

    /**
     * Describes the hostname properties for http routing.
     */
    export interface HttpRouteConfigResponse {
        /**
         * Describes destination endpoint for routing traffic.
         */
        destination: GatewayDestinationResponse;
        /**
         * Describes a rule for http route matching.
         */
        match: HttpRouteMatchRuleResponse;
        /**
         * http route name.
         */
        name: string;
    }

    /**
     * Describes header information for http route matching.
     */
    export interface HttpRouteMatchHeaderResponse {
        /**
         * Name of header to match in request.
         */
        name: string;
        /**
         * how to match header value
         */
        type?: string;
        /**
         * Value of header to match in request.
         */
        value?: string;
    }

    /**
     * Path to match for routing.
     */
    export interface HttpRouteMatchPathResponse {
        /**
         * replacement string for matched part of the Uri.
         */
        rewrite?: string;
        /**
         * how to match value in the Uri
         */
        type: string;
        /**
         * Uri path to match for request.
         */
        value: string;
    }

    /**
     * Describes a rule for http route matching.
     */
    export interface HttpRouteMatchRuleResponse {
        /**
         * headers and their values to match in request.
         */
        headers?: HttpRouteMatchHeaderResponse[];
        /**
         * Path to match for routing.
         */
        path: HttpRouteMatchPathResponse;
    }

    /**
     * Image registry credential.
     */
    export interface ImageRegistryCredentialResponse {
        /**
         * The password for the private registry. The password is required for create or update operations, however it is not returned in the get or list operations.
         */
        password?: string;
        /**
         * Docker image registry server, without protocol such as `http` and `https`.
         */
        server: string;
        /**
         * The username for the private registry.
         */
        username: string;
    }

    /**
     * Describes a network reference in a service.
     */
    export interface NetworkRefResponse {
        /**
         * A list of endpoints that are exposed on this network.
         */
        endpointRefs?: EndpointRefResponse[];
        /**
         * Name of the network
         */
        name?: string;
    }

    /**
     * Describes properties of a network resource.
     */
    export interface NetworkResourcePropertiesResponse {
        /**
         * User readable description of the network.
         */
        description?: string;
        /**
         * The type of a Service Fabric container network.
         * Expected value is 'NetworkResourceProperties'.
         */
        kind: "NetworkResourceProperties";
        /**
         * State of the resource.
         */
        provisioningState: string;
        /**
         * Status of the network.
         */
        status: string;
        /**
         * Gives additional information about the current status of the network.
         */
        statusDetails: string;
    }

    /**
     * Specifying this parameter adds support for reliable collections
     */
    export interface ReliableCollectionsRefResponse {
        /**
         * False (the default) if ReliableCollections state is persisted to disk as usual. True if you do not want to persist state, in which case replication is still enabled and you can use ReliableCollections as distributed cache.
         */
        doNotPersistState?: boolean;
        /**
         * Name of ReliableCollection resource. Right now it's not used and you can use any string.
         */
        name: string;
    }

    /**
     * This type describes the resource limits for a given container. It describes the most amount of resources a container is allowed to use before being restarted.
     */
    export interface ResourceLimitsResponse {
        /**
         * CPU limits in cores. At present, only full cores are supported.
         */
        cpu?: number;
        /**
         * The memory limit in GB.
         */
        memoryInGB?: number;
    }

    /**
     * This type describes the requested resources for a given container. It describes the least amount of resources required for the container. A container can consume more than requested resources up to the specified limits before being restarted. Currently, the requested resources are treated as limits.
     */
    export interface ResourceRequestsResponse {
        /**
         * Requested number of CPU cores. At present, only full cores are supported.
         */
        cpu: number;
        /**
         * The memory request in GB for this container.
         */
        memoryInGB: number;
    }

    /**
     * This type describes the resource requirements for a container or a service.
     */
    export interface ResourceRequirementsResponse {
        /**
         * Describes the maximum limits on the resources for a given container.
         */
        limits?: ResourceLimitsResponse;
        /**
         * Describes the requested resources for a given container.
         */
        requests: ResourceRequestsResponse;
    }

    /**
     * Describes the properties of a secret resource.
     */
    export interface SecretResourcePropertiesResponse {
        /**
         * The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed.
         */
        contentType?: string;
        /**
         * User readable description of the secret.
         */
        description?: string;
        /**
         * Describes the kind of secret.
         * Expected value is 'SecretResourceProperties'.
         */
        kind: "SecretResourceProperties";
        /**
         * State of the resource.
         */
        provisioningState: string;
        /**
         * Status of the resource.
         */
        status: string;
        /**
         * Gives additional information about the current status of the secret.
         */
        statusDetails: string;
    }

    /**
     * This type describes a service resource.
     */
    export interface ServiceResourceDescriptionResponse {
        /**
         * Auto scaling policies
         */
        autoScalingPolicies?: AutoScalingPolicyResponse[];
        /**
         * Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
         */
        codePackages: ContainerCodePackagePropertiesResponse[];
        /**
         * User readable description of the service.
         */
        description?: string;
        /**
         * Reference to sinks in DiagnosticsDescription.
         */
        diagnostics?: DiagnosticsRefResponse;
        /**
         * Describes the health state of an application resource.
         */
        healthState: string;
        /**
         * Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name?: string;
        /**
         * The names of the private networks that this service needs to be part of.
         */
        networkRefs?: NetworkRefResponse[];
        /**
         * The operation system required by the code in service.
         */
        osType: string;
        /**
         * State of the resource.
         */
        provisioningState: string;
        /**
         * The number of replicas of the service to create. Defaults to 1 if not specified.
         */
        replicaCount?: number;
        /**
         * Status of the service.
         */
        status: string;
        /**
         * Gives additional information about the current status of the service.
         */
        statusDetails: string;
        /**
         * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
         */
        type: string;
        /**
         * When the service's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy.
         */
        unhealthyEvaluation: string;
    }

    /**
     * Describes a setting for the container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
     */
    export interface SettingResponse {
        /**
         * The name of the setting.
         */
        name?: string;
        /**
         * The value of the setting.
         */
        value?: string;
    }

    /**
     * Describes the tcp configuration for external connectivity for this network.
     */
    export interface TcpConfigResponse {
        /**
         * Describes destination endpoint for routing traffic.
         */
        destination: GatewayDestinationResponse;
        /**
         * tcp gateway config name.
         */
        name: string;
        /**
         * Specifies the port at which the service endpoint below needs to be exposed.
         */
        port: number;
    }

    /**
     * This type describes a volume provided by an Azure Files file share.
     */
    export interface VolumeProviderParametersAzureFileResponse {
        /**
         * Access key of the Azure storage account for the File Share.
         */
        accountKey?: string;
        /**
         * Name of the Azure storage account for the File Share.
         */
        accountName: string;
        /**
         * Name of the Azure Files file share that provides storage for the volume.
         */
        shareName: string;
    }

    /**
     * Describes a reference to a volume resource.
     */
    export interface VolumeReferenceResponse {
        /**
         * The path within the container at which the volume should be mounted. Only valid path characters are allowed.
         */
        destinationPath: string;
        /**
         * Name of the volume being referenced.
         */
        name: string;
        /**
         * The flag indicating whether the volume is read only. Default is 'false'.
         */
        readOnly?: boolean;
    }
