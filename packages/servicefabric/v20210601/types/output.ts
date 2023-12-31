import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
     */
    export interface ApplicationDeltaHealthPolicyResponse {
        /**
         * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
         */
        defaultServiceTypeDeltaHealthPolicy?: ServiceTypeDeltaHealthPolicyResponse;
        /**
         * The map with service type delta health policy per service type name. The map is empty by default.
         */
        serviceTypeDeltaHealthPolicies?: {[key: string]: ServiceTypeDeltaHealthPolicyResponse};
    }
    /**
     * applicationDeltaHealthPolicyResponseProvideDefaults sets the appropriate defaults for ApplicationDeltaHealthPolicyResponse
     */
    export function applicationDeltaHealthPolicyResponseProvideDefaults(val: ApplicationDeltaHealthPolicyResponse): ApplicationDeltaHealthPolicyResponse {
        return {
            ...val,
            defaultServiceTypeDeltaHealthPolicy: (val.defaultServiceTypeDeltaHealthPolicy ? serviceTypeDeltaHealthPolicyResponseProvideDefaults(val.defaultServiceTypeDeltaHealthPolicy) : undefined),
        };
    }

    /**
     * Defines a health policy used to evaluate the health of an application or one of its children entities.
     */
    export interface ApplicationHealthPolicyResponse {
        /**
         * The health policy used by default to evaluate the health of a service type.
         */
        defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicyResponse;
        /**
         * The map with service type health policy per service type name. The map is empty by default.
         */
        serviceTypeHealthPolicies?: {[key: string]: ServiceTypeHealthPolicyResponse};
    }
    /**
     * applicationHealthPolicyResponseProvideDefaults sets the appropriate defaults for ApplicationHealthPolicyResponse
     */
    export function applicationHealthPolicyResponseProvideDefaults(val: ApplicationHealthPolicyResponse): ApplicationHealthPolicyResponse {
        return {
            ...val,
            defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? serviceTypeHealthPolicyResponseProvideDefaults(val.defaultServiceTypeHealthPolicy) : undefined),
        };
    }

    /**
     * Describes capacity information for a custom resource balancing metric. This can be used to limit the total consumption of this metric by the services of this application.
     */
    export interface ApplicationMetricDescriptionResponse {
        /**
         * The maximum node capacity for Service Fabric application.
         * This is the maximum Load for an instance of this application on a single node. Even if the capacity of node is greater than this value, Service Fabric will limit the total load of services within the application on each node to this value.
         * If set to zero, capacity for this metric is unlimited on each node.
         * When creating a new application with application capacity defined, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
         * When updating existing application with application capacity, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
         */
        maximumCapacity?: number;
        /**
         * The name of the metric.
         */
        name?: string;
        /**
         * The node reservation capacity for Service Fabric application.
         * This is the amount of load which is reserved on nodes which have instances of this application.
         * If MinimumNodes is specified, then the product of these values will be the capacity reserved in the cluster for the application.
         * If set to zero, no capacity is reserved for this metric.
         * When setting application capacity or when updating application capacity; this value must be smaller than or equal to MaximumCapacity for each metric.
         */
        reservationCapacity?: number;
        /**
         * The total metric capacity for Service Fabric application.
         * This is the total metric capacity for this application in the cluster. Service Fabric will try to limit the sum of loads of services within the application to this value.
         * When creating a new application with application capacity defined, the product of MaximumNodes and MaximumCapacity must always be smaller than or equal to this value.
         */
        totalApplicationCapacity?: number;
    }

    export interface ApplicationTypeVersionsCleanupPolicyResponse {
        /**
         * Number of unused versions per application type to keep.
         */
        maxUnusedVersionsToKeep: number;
    }

    /**
     * Describes the policy for a monitored application upgrade.
     */
    export interface ApplicationUpgradePolicyResponse {
        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        applicationHealthPolicy?: ArmApplicationHealthPolicyResponse;
        /**
         * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
         */
        forceRestart?: boolean;
        /**
         * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed and it will result in availability loss.
         */
        recreateApplication?: boolean;
        /**
         * The policy used for monitoring the application upgrade
         */
        rollingUpgradeMonitoringPolicy?: ArmRollingUpgradeMonitoringPolicyResponse;
        /**
         * The mode used to monitor health during a rolling upgrade. The values are UnmonitoredAuto, UnmonitoredManual, and Monitored.
         */
        upgradeMode?: string;
        /**
         * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
         */
        upgradeReplicaSetCheckTimeout?: string;
    }
    /**
     * applicationUpgradePolicyResponseProvideDefaults sets the appropriate defaults for ApplicationUpgradePolicyResponse
     */
    export function applicationUpgradePolicyResponseProvideDefaults(val: ApplicationUpgradePolicyResponse): ApplicationUpgradePolicyResponse {
        return {
            ...val,
            applicationHealthPolicy: (val.applicationHealthPolicy ? armApplicationHealthPolicyResponseProvideDefaults(val.applicationHealthPolicy) : undefined),
        };
    }

    export interface ApplicationUserAssignedIdentityResponse {
        /**
         * The friendly name of user assigned identity.
         */
        name: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * Defines a health policy used to evaluate the health of an application or one of its children entities.
     */
    export interface ArmApplicationHealthPolicyResponse {
        /**
         * Indicates whether warnings are treated with the same severity as errors.
         */
        considerWarningAsError?: boolean;
        /**
         * The health policy used by default to evaluate the health of a service type.
         */
        defaultServiceTypeHealthPolicy?: ArmServiceTypeHealthPolicyResponse;
        /**
         * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
         * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
         * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
         * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
         */
        maxPercentUnhealthyDeployedApplications?: number;
        /**
         * The map with service type health policy per service type name. The map is empty by default.
         */
        serviceTypeHealthPolicyMap?: {[key: string]: ArmServiceTypeHealthPolicyResponse};
    }
    /**
     * armApplicationHealthPolicyResponseProvideDefaults sets the appropriate defaults for ArmApplicationHealthPolicyResponse
     */
    export function armApplicationHealthPolicyResponseProvideDefaults(val: ArmApplicationHealthPolicyResponse): ArmApplicationHealthPolicyResponse {
        return {
            ...val,
            considerWarningAsError: (val.considerWarningAsError) ?? false,
            defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? armServiceTypeHealthPolicyResponseProvideDefaults(val.defaultServiceTypeHealthPolicy) : undefined),
            maxPercentUnhealthyDeployedApplications: (val.maxPercentUnhealthyDeployedApplications) ?? 0,
        };
    }

    /**
     * The policy used for monitoring the application upgrade
     */
    export interface ArmRollingUpgradeMonitoringPolicyResponse {
        /**
         * The activation Mode of the service package
         */
        failureAction?: string;
        /**
         * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        healthCheckRetryTimeout?: string;
        /**
         * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        healthCheckStableDuration?: string;
        /**
         * The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        healthCheckWaitDuration?: string;
        /**
         * The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        upgradeDomainTimeout?: string;
        /**
         * The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        upgradeTimeout?: string;
    }

    /**
     * Represents the health policy used to evaluate the health of services belonging to a service type.
     */
    export interface ArmServiceTypeHealthPolicyResponse {
        /**
         * The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyPartitionsPerService?: number;
        /**
         * The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyReplicasPerPartition?: number;
        /**
         * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyServices?: number;
    }
    /**
     * armServiceTypeHealthPolicyResponseProvideDefaults sets the appropriate defaults for ArmServiceTypeHealthPolicyResponse
     */
    export function armServiceTypeHealthPolicyResponseProvideDefaults(val: ArmServiceTypeHealthPolicyResponse): ArmServiceTypeHealthPolicyResponse {
        return {
            ...val,
            maxPercentUnhealthyPartitionsPerService: (val.maxPercentUnhealthyPartitionsPerService) ?? 0,
            maxPercentUnhealthyReplicasPerPartition: (val.maxPercentUnhealthyReplicasPerPartition) ?? 0,
            maxPercentUnhealthyServices: (val.maxPercentUnhealthyServices) ?? 0,
        };
    }

    /**
     * The settings to enable AAD authentication on the cluster.
     */
    export interface AzureActiveDirectoryResponse {
        /**
         * Azure active directory client application id.
         */
        clientApplication?: string;
        /**
         * Azure active directory cluster application id.
         */
        clusterApplication?: string;
        /**
         * Azure active directory tenant id.
         */
        tenantId?: string;
    }

    /**
     * Describes the certificate details.
     */
    export interface CertificateDescriptionResponse {
        /**
         * Thumbprint of the primary certificate.
         */
        thumbprint: string;
        /**
         * Thumbprint of the secondary certificate.
         */
        thumbprintSecondary?: string;
        /**
         * The local certificate store location.
         */
        x509StoreName?: string;
    }

    /**
     * Describes the client certificate details using common name.
     */
    export interface ClientCertificateCommonNameResponse {
        /**
         * The common name of the client certificate.
         */
        certificateCommonName: string;
        /**
         * The issuer thumbprint of the client certificate.
         */
        certificateIssuerThumbprint: string;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: boolean;
    }

    /**
     * Describes the client certificate details using thumbprint.
     */
    export interface ClientCertificateThumbprintResponse {
        /**
         * The thumbprint of the client certificate.
         */
        certificateThumbprint: string;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: boolean;
    }

    /**
     * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
     */
    export interface ClusterHealthPolicyResponse {
        /**
         * Defines the application health policy map used to evaluate the health of an application or one of its children entities.
         */
        applicationHealthPolicies?: {[key: string]: ApplicationHealthPolicyResponse};
        /**
         * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
         *
         * The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
         * If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
         * This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
         * The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
         */
        maxPercentUnhealthyApplications?: number;
        /**
         * The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.
         *
         * The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.
         * If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.
         * The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.
         * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
         *
         * In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.
         */
        maxPercentUnhealthyNodes?: number;
    }
    /**
     * clusterHealthPolicyResponseProvideDefaults sets the appropriate defaults for ClusterHealthPolicyResponse
     */
    export function clusterHealthPolicyResponseProvideDefaults(val: ClusterHealthPolicyResponse): ClusterHealthPolicyResponse {
        return {
            ...val,
            maxPercentUnhealthyApplications: (val.maxPercentUnhealthyApplications) ?? 0,
            maxPercentUnhealthyNodes: (val.maxPercentUnhealthyNodes) ?? 0,
        };
    }

    /**
     * Describes the delta health policies for the cluster upgrade.
     */
    export interface ClusterUpgradeDeltaHealthPolicyResponse {
        /**
         * Defines the application delta health policy map used to evaluate the health of an application or one of its child entities when upgrading the cluster.
         */
        applicationDeltaHealthPolicies?: {[key: string]: ApplicationDeltaHealthPolicyResponse};
        /**
         * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
         */
        maxPercentDeltaUnhealthyApplications: number;
        /**
         * The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
         */
        maxPercentDeltaUnhealthyNodes: number;
        /**
         * The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.
         */
        maxPercentUpgradeDomainDeltaUnhealthyNodes: number;
    }

    /**
     * Describes the policy used when upgrading the cluster.
     */
    export interface ClusterUpgradePolicyResponse {
        /**
         * The cluster delta health policy used when upgrading the cluster.
         */
        deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicyResponse;
        /**
         * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
         */
        forceRestart?: boolean;
        /**
         * The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckRetryTimeout: string;
        /**
         * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckStableDuration: string;
        /**
         * The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckWaitDuration: string;
        /**
         * The cluster health policy used when upgrading the cluster.
         */
        healthPolicy: ClusterHealthPolicyResponse;
        /**
         * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeDomainTimeout: string;
        /**
         * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeReplicaSetCheckTimeout: string;
        /**
         * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeTimeout: string;
    }
    /**
     * clusterUpgradePolicyResponseProvideDefaults sets the appropriate defaults for ClusterUpgradePolicyResponse
     */
    export function clusterUpgradePolicyResponseProvideDefaults(val: ClusterUpgradePolicyResponse): ClusterUpgradePolicyResponse {
        return {
            ...val,
            healthPolicy: clusterHealthPolicyResponseProvideDefaults(val.healthPolicy),
        };
    }

    /**
     * The detail of the Service Fabric runtime version result
     */
    export interface ClusterVersionDetailsResponse {
        /**
         * The Service Fabric runtime version of the cluster.
         */
        codeVersion?: string;
        /**
         * Indicates if this version is for Windows or Linux operating system.
         */
        environment?: string;
        /**
         * The date of expiry of support of the version.
         */
        supportExpiryUtc?: string;
    }

    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    export interface DiagnosticsStorageAccountConfigResponse {
        /**
         * The blob endpoint of the azure storage account.
         */
        blobEndpoint: string;
        /**
         * The protected diagnostics storage key name.
         */
        protectedAccountKeyName: string;
        /**
         * The secondary protected diagnostics storage key name. If one of the storage account keys is rotated the cluster will fallback to using the other.
         */
        protectedAccountKeyName2?: string;
        /**
         * The queue endpoint of the azure storage account.
         */
        queueEndpoint: string;
        /**
         * The Azure storage account name.
         */
        storageAccountName: string;
        /**
         * The table endpoint of the azure storage account.
         */
        tableEndpoint: string;
    }

    /**
     * Port range details
     */
    export interface EndpointRangeDescriptionResponse {
        /**
         * End port of a range of ports
         */
        endPort: number;
        /**
         * Starting port of a range of ports
         */
        startPort: number;
    }

    /**
     * Describes the managed identities for an Azure resource.
     */
    export interface ManagedIdentityResponse {
        /**
         * The principal id of the managed identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant id of the managed identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of managed identity for the resource.
         */
        type?: string;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Describes the named partition scheme of the service.
     */
    export interface NamedPartitionSchemeDescriptionResponse {
        /**
         * The number of partitions.
         */
        count: number;
        /**
         * Array of size specified by the ‘count’ parameter, for the names of the partitions.
         */
        names: string[];
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'Named'.
         */
        partitionScheme: "Named";
    }

    /**
     * Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
     */
    export interface NodeTypeDescriptionResponse {
        /**
         * The range of ports from which cluster assigned port to Service Fabric applications.
         */
        applicationPorts?: EndpointRangeDescriptionResponse;
        /**
         * The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
         */
        capacities?: {[key: string]: string};
        /**
         * The TCP cluster management endpoint port.
         */
        clientConnectionEndpointPort: number;
        /**
         * The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
         *
         *   - Bronze - No privileges. This is the default.
         *   - Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.
         *   - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
         */
        durabilityLevel?: string;
        /**
         * The range of ephemeral ports that nodes in this node type should be configured with.
         */
        ephemeralPorts?: EndpointRangeDescriptionResponse;
        /**
         * The HTTP cluster management endpoint port.
         */
        httpGatewayEndpointPort: number;
        /**
         * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
         */
        isPrimary: boolean;
        /**
         * Indicates if the node type can only host Stateless workloads.
         */
        isStateless?: boolean;
        /**
         * Indicates if the node type is enabled to support multiple zones.
         */
        multipleAvailabilityZones?: boolean;
        /**
         * The name of the node type.
         */
        name: string;
        /**
         * The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
         */
        placementProperties?: {[key: string]: string};
        /**
         * The endpoint used by reverse proxy.
         */
        reverseProxyEndpointPort?: number;
        /**
         * VMInstanceCount should be 1 to n, where n indicates the number of VM instances corresponding to this nodeType. VMInstanceCount = 0 can be done only in these scenarios: NodeType is a secondary nodeType. Durability = Bronze or Durability >= Bronze and InfrastructureServiceManager = true. If VMInstanceCount = 0, implies the VMs for this nodeType will not be used for the initial cluster size computation.
         */
        vmInstanceCount: number;
    }

    /**
     * Describes the notification channel for cluster events.
     */
    export interface NotificationResponse {
        /**
         * Indicates if the notification is enabled.
         */
        isEnabled: boolean;
        /**
         * The category of notification.
         */
        notificationCategory: string;
        /**
         * The level of notification.
         */
        notificationLevel: string;
        /**
         * List of targets that subscribe to the notification.
         */
        notificationTargets: NotificationTargetResponse[];
    }

    /**
     * Describes the notification target properties.
     */
    export interface NotificationTargetResponse {
        /**
         * The notification channel indicates the type of receivers subscribed to the notification, either user or subscription.
         */
        notificationChannel: string;
        /**
         * List of targets that subscribe to the notification.
         */
        receivers: string[];
    }

    /**
     * Describes the server certificate details using common name.
     */
    export interface ServerCertificateCommonNameResponse {
        /**
         * The common name of the server certificate.
         */
        certificateCommonName: string;
        /**
         * The issuer thumbprint of the server certificate.
         */
        certificateIssuerThumbprint: string;
    }

    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    export interface ServerCertificateCommonNamesResponse {
        /**
         * The list of server certificates referenced by common name that are used to secure the cluster.
         */
        commonNames?: ServerCertificateCommonNameResponse[];
        /**
         * The local certificate store location.
         */
        x509StoreName?: string;
    }

    /**
     * Creates a particular correlation between services.
     */
    export interface ServiceCorrelationDescriptionResponse {
        /**
         * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
         */
        scheme: string;
        /**
         * The name of the service that the correlation relationship is established with.
         */
        serviceName: string;
    }

    /**
     * Specifies a metric to load balance a service during runtime.
     */
    export interface ServiceLoadMetricDescriptionResponse {
        /**
         * Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
         */
        defaultLoad?: number;
        /**
         * The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive.
         */
        name: string;
        /**
         * Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
         */
        primaryDefaultLoad?: number;
        /**
         * Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
         */
        secondaryDefaultLoad?: number;
        /**
         * The service load metric relative weight, compared to other metrics configured for this service, as a number.
         */
        weight?: string;
    }

    /**
     * Describes the policy to be used for placement of a Service Fabric service.
     */
    export interface ServicePlacementPolicyDescriptionResponse {
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         */
        type: string;
    }

    /**
     * Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
     */
    export interface ServiceTypeDeltaHealthPolicyResponse {
        /**
         * The maximum allowed percentage of services health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
         */
        maxPercentDeltaUnhealthyServices?: number;
    }
    /**
     * serviceTypeDeltaHealthPolicyResponseProvideDefaults sets the appropriate defaults for ServiceTypeDeltaHealthPolicyResponse
     */
    export function serviceTypeDeltaHealthPolicyResponseProvideDefaults(val: ServiceTypeDeltaHealthPolicyResponse): ServiceTypeDeltaHealthPolicyResponse {
        return {
            ...val,
            maxPercentDeltaUnhealthyServices: (val.maxPercentDeltaUnhealthyServices) ?? 0,
        };
    }

    /**
     * Represents the health policy used to evaluate the health of services belonging to a service type.
     */
    export interface ServiceTypeHealthPolicyResponse {
        /**
         * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyServices?: number;
    }
    /**
     * serviceTypeHealthPolicyResponseProvideDefaults sets the appropriate defaults for ServiceTypeHealthPolicyResponse
     */
    export function serviceTypeHealthPolicyResponseProvideDefaults(val: ServiceTypeHealthPolicyResponse): ServiceTypeHealthPolicyResponse {
        return {
            ...val,
            maxPercentUnhealthyServices: (val.maxPercentUnhealthyServices) ?? 0,
        };
    }

    /**
     * Describes a parameter in fabric settings of the cluster.
     */
    export interface SettingsParameterDescriptionResponse {
        /**
         * The parameter name of fabric setting.
         */
        name: string;
        /**
         * The parameter value of fabric setting.
         */
        value: string;
    }

    /**
     * Describes a section in the fabric settings of the cluster.
     */
    export interface SettingsSectionDescriptionResponse {
        /**
         * The section name of the fabric settings.
         */
        name: string;
        /**
         * The collection of parameters in the section.
         */
        parameters: SettingsParameterDescriptionResponse[];
    }

    /**
     * Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
     */
    export interface SingletonPartitionSchemeDescriptionResponse {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'Singleton'.
         */
        partitionScheme: "Singleton";
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
         * The timestamp of resource last modification (UTC).
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
     * Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.
     */
    export interface UniformInt64RangePartitionSchemeDescriptionResponse {
        /**
         * The number of partitions.
         */
        count: number;
        /**
         * String indicating the upper bound of the partition key range that
         * should be split between the partition ‘count’
         */
        highKey: string;
        /**
         * String indicating the lower bound of the partition key range that
         * should be split between the partition ‘count’
         */
        lowKey: string;
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'UniformInt64Range'.
         */
        partitionScheme: "UniformInt64Range";
    }

    export interface UserAssignedIdentityResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }
