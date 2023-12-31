import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
     */
    export interface ApplicationDeltaHealthPolicyArgs {
        /**
         * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
         */
        defaultServiceTypeDeltaHealthPolicy?: pulumi.Input<ServiceTypeDeltaHealthPolicyArgs>;
        /**
         * The map with service type delta health policy per service type name. The map is empty by default.
         */
        serviceTypeDeltaHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<ServiceTypeDeltaHealthPolicyArgs>}>;
    }
    /**
     * applicationDeltaHealthPolicyArgsProvideDefaults sets the appropriate defaults for ApplicationDeltaHealthPolicyArgs
     */
    export function applicationDeltaHealthPolicyArgsProvideDefaults(val: ApplicationDeltaHealthPolicyArgs): ApplicationDeltaHealthPolicyArgs {
        return {
            ...val,
            defaultServiceTypeDeltaHealthPolicy: (val.defaultServiceTypeDeltaHealthPolicy ? pulumi.output(val.defaultServiceTypeDeltaHealthPolicy).apply(serviceTypeDeltaHealthPolicyArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Defines a health policy used to evaluate the health of an application or one of its children entities.
     */
    export interface ApplicationHealthPolicyArgs {
        /**
         * The health policy used by default to evaluate the health of a service type.
         */
        defaultServiceTypeHealthPolicy?: pulumi.Input<ServiceTypeHealthPolicyArgs>;
        /**
         * The map with service type health policy per service type name. The map is empty by default.
         */
        serviceTypeHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<ServiceTypeHealthPolicyArgs>}>;
    }
    /**
     * applicationHealthPolicyArgsProvideDefaults sets the appropriate defaults for ApplicationHealthPolicyArgs
     */
    export function applicationHealthPolicyArgsProvideDefaults(val: ApplicationHealthPolicyArgs): ApplicationHealthPolicyArgs {
        return {
            ...val,
            defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? pulumi.output(val.defaultServiceTypeHealthPolicy).apply(serviceTypeHealthPolicyArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Describes capacity information for a custom resource balancing metric. This can be used to limit the total consumption of this metric by the services of this application.
     */
    export interface ApplicationMetricDescriptionArgs {
        /**
         * The maximum node capacity for Service Fabric application.
         * This is the maximum Load for an instance of this application on a single node. Even if the capacity of node is greater than this value, Service Fabric will limit the total load of services within the application on each node to this value.
         * If set to zero, capacity for this metric is unlimited on each node.
         * When creating a new application with application capacity defined, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
         * When updating existing application with application capacity, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
         */
        maximumCapacity?: pulumi.Input<number>;
        /**
         * The name of the metric.
         */
        name?: pulumi.Input<string>;
        /**
         * The node reservation capacity for Service Fabric application.
         * This is the amount of load which is reserved on nodes which have instances of this application.
         * If MinimumNodes is specified, then the product of these values will be the capacity reserved in the cluster for the application.
         * If set to zero, no capacity is reserved for this metric.
         * When setting application capacity or when updating application capacity; this value must be smaller than or equal to MaximumCapacity for each metric.
         */
        reservationCapacity?: pulumi.Input<number>;
        /**
         * The total metric capacity for Service Fabric application.
         * This is the total metric capacity for this application in the cluster. Service Fabric will try to limit the sum of loads of services within the application to this value.
         * When creating a new application with application capacity defined, the product of MaximumNodes and MaximumCapacity must always be smaller than or equal to this value.
         */
        totalApplicationCapacity?: pulumi.Input<number>;
    }

    export interface ApplicationTypeVersionsCleanupPolicyArgs {
        /**
         * Number of unused versions per application type to keep.
         */
        maxUnusedVersionsToKeep: pulumi.Input<number>;
    }

    /**
     * Describes the policy for a monitored application upgrade.
     */
    export interface ApplicationUpgradePolicyArgs {
        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        applicationHealthPolicy?: pulumi.Input<ArmApplicationHealthPolicyArgs>;
        /**
         * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
         */
        forceRestart?: pulumi.Input<boolean>;
        /**
         * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed and it will result in availability loss.
         */
        recreateApplication?: pulumi.Input<boolean>;
        /**
         * The policy used for monitoring the application upgrade
         */
        rollingUpgradeMonitoringPolicy?: pulumi.Input<ArmRollingUpgradeMonitoringPolicyArgs>;
        /**
         * The mode used to monitor health during a rolling upgrade. The values are UnmonitoredAuto, UnmonitoredManual, and Monitored.
         */
        upgradeMode?: pulumi.Input<string | enums.RollingUpgradeMode>;
        /**
         * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
         */
        upgradeReplicaSetCheckTimeout?: pulumi.Input<string>;
    }
    /**
     * applicationUpgradePolicyArgsProvideDefaults sets the appropriate defaults for ApplicationUpgradePolicyArgs
     */
    export function applicationUpgradePolicyArgsProvideDefaults(val: ApplicationUpgradePolicyArgs): ApplicationUpgradePolicyArgs {
        return {
            ...val,
            applicationHealthPolicy: (val.applicationHealthPolicy ? pulumi.output(val.applicationHealthPolicy).apply(armApplicationHealthPolicyArgsProvideDefaults) : undefined),
        };
    }

    export interface ApplicationUserAssignedIdentityArgs {
        /**
         * The friendly name of user assigned identity.
         */
        name: pulumi.Input<string>;
        /**
         * The principal id of user assigned identity.
         */
        principalId: pulumi.Input<string>;
    }

    /**
     * Defines a health policy used to evaluate the health of an application or one of its children entities.
     */
    export interface ArmApplicationHealthPolicyArgs {
        /**
         * Indicates whether warnings are treated with the same severity as errors.
         */
        considerWarningAsError?: pulumi.Input<boolean>;
        /**
         * The health policy used by default to evaluate the health of a service type.
         */
        defaultServiceTypeHealthPolicy?: pulumi.Input<ArmServiceTypeHealthPolicyArgs>;
        /**
         * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
         * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
         * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
         * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
         */
        maxPercentUnhealthyDeployedApplications?: pulumi.Input<number>;
        /**
         * The map with service type health policy per service type name. The map is empty by default.
         */
        serviceTypeHealthPolicyMap?: pulumi.Input<{[key: string]: pulumi.Input<ArmServiceTypeHealthPolicyArgs>}>;
    }
    /**
     * armApplicationHealthPolicyArgsProvideDefaults sets the appropriate defaults for ArmApplicationHealthPolicyArgs
     */
    export function armApplicationHealthPolicyArgsProvideDefaults(val: ArmApplicationHealthPolicyArgs): ArmApplicationHealthPolicyArgs {
        return {
            ...val,
            considerWarningAsError: (val.considerWarningAsError) ?? false,
            defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? pulumi.output(val.defaultServiceTypeHealthPolicy).apply(armServiceTypeHealthPolicyArgsProvideDefaults) : undefined),
            maxPercentUnhealthyDeployedApplications: (val.maxPercentUnhealthyDeployedApplications) ?? 0,
        };
    }

    /**
     * The policy used for monitoring the application upgrade
     */
    export interface ArmRollingUpgradeMonitoringPolicyArgs {
        /**
         * The activation Mode of the service package
         */
        failureAction?: pulumi.Input<string | enums.ArmUpgradeFailureAction>;
        /**
         * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        healthCheckRetryTimeout?: pulumi.Input<string>;
        /**
         * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        healthCheckStableDuration?: pulumi.Input<string>;
        /**
         * The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        healthCheckWaitDuration?: pulumi.Input<string>;
        /**
         * The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        upgradeDomainTimeout?: pulumi.Input<string>;
        /**
         * The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
         */
        upgradeTimeout?: pulumi.Input<string>;
    }

    /**
     * Represents the health policy used to evaluate the health of services belonging to a service type.
     */
    export interface ArmServiceTypeHealthPolicyArgs {
        /**
         * The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyPartitionsPerService?: pulumi.Input<number>;
        /**
         * The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyReplicasPerPartition?: pulumi.Input<number>;
        /**
         * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyServices?: pulumi.Input<number>;
    }
    /**
     * armServiceTypeHealthPolicyArgsProvideDefaults sets the appropriate defaults for ArmServiceTypeHealthPolicyArgs
     */
    export function armServiceTypeHealthPolicyArgsProvideDefaults(val: ArmServiceTypeHealthPolicyArgs): ArmServiceTypeHealthPolicyArgs {
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
    export interface AzureActiveDirectoryArgs {
        /**
         * Azure active directory client application id.
         */
        clientApplication?: pulumi.Input<string>;
        /**
         * Azure active directory cluster application id.
         */
        clusterApplication?: pulumi.Input<string>;
        /**
         * Azure active directory tenant id.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Describes the certificate details.
     */
    export interface CertificateDescriptionArgs {
        /**
         * Thumbprint of the primary certificate.
         */
        thumbprint: pulumi.Input<string>;
        /**
         * Thumbprint of the secondary certificate.
         */
        thumbprintSecondary?: pulumi.Input<string>;
        /**
         * The local certificate store location.
         */
        x509StoreName?: pulumi.Input<string>;
    }

    /**
     * Describes the client certificate details using common name.
     */
    export interface ClientCertificateCommonNameArgs {
        /**
         * The common name of the client certificate.
         */
        certificateCommonName: pulumi.Input<string>;
        /**
         * The issuer thumbprint of the client certificate.
         */
        certificateIssuerThumbprint: pulumi.Input<string>;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: pulumi.Input<boolean>;
    }

    /**
     * Describes the client certificate details using thumbprint.
     */
    export interface ClientCertificateThumbprintArgs {
        /**
         * The thumbprint of the client certificate.
         */
        certificateThumbprint: pulumi.Input<string>;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: pulumi.Input<boolean>;
    }

    /**
     * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
     */
    export interface ClusterHealthPolicyArgs {
        /**
         * Defines the application health policy map used to evaluate the health of an application or one of its children entities.
         */
        applicationHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<ApplicationHealthPolicyArgs>}>;
        /**
         * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
         *
         * The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
         * If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
         * This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
         * The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
         */
        maxPercentUnhealthyApplications?: pulumi.Input<number>;
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
        maxPercentUnhealthyNodes?: pulumi.Input<number>;
    }
    /**
     * clusterHealthPolicyArgsProvideDefaults sets the appropriate defaults for ClusterHealthPolicyArgs
     */
    export function clusterHealthPolicyArgsProvideDefaults(val: ClusterHealthPolicyArgs): ClusterHealthPolicyArgs {
        return {
            ...val,
            maxPercentUnhealthyApplications: (val.maxPercentUnhealthyApplications) ?? 0,
            maxPercentUnhealthyNodes: (val.maxPercentUnhealthyNodes) ?? 0,
        };
    }

    /**
     * Describes the delta health policies for the cluster upgrade.
     */
    export interface ClusterUpgradeDeltaHealthPolicyArgs {
        /**
         * Defines the application delta health policy map used to evaluate the health of an application or one of its child entities when upgrading the cluster.
         */
        applicationDeltaHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<ApplicationDeltaHealthPolicyArgs>}>;
        /**
         * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
         */
        maxPercentDeltaUnhealthyApplications: pulumi.Input<number>;
        /**
         * The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
         */
        maxPercentDeltaUnhealthyNodes: pulumi.Input<number>;
        /**
         * The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.
         */
        maxPercentUpgradeDomainDeltaUnhealthyNodes: pulumi.Input<number>;
    }

    /**
     * Describes the policy used when upgrading the cluster.
     */
    export interface ClusterUpgradePolicyArgs {
        /**
         * The cluster delta health policy used when upgrading the cluster.
         */
        deltaHealthPolicy?: pulumi.Input<ClusterUpgradeDeltaHealthPolicyArgs>;
        /**
         * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
         */
        forceRestart?: pulumi.Input<boolean>;
        /**
         * The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckRetryTimeout: pulumi.Input<string>;
        /**
         * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckStableDuration: pulumi.Input<string>;
        /**
         * The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckWaitDuration: pulumi.Input<string>;
        /**
         * The cluster health policy used when upgrading the cluster.
         */
        healthPolicy: pulumi.Input<ClusterHealthPolicyArgs>;
        /**
         * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeDomainTimeout: pulumi.Input<string>;
        /**
         * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeReplicaSetCheckTimeout: pulumi.Input<string>;
        /**
         * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeTimeout: pulumi.Input<string>;
    }
    /**
     * clusterUpgradePolicyArgsProvideDefaults sets the appropriate defaults for ClusterUpgradePolicyArgs
     */
    export function clusterUpgradePolicyArgsProvideDefaults(val: ClusterUpgradePolicyArgs): ClusterUpgradePolicyArgs {
        return {
            ...val,
            healthPolicy: pulumi.output(val.healthPolicy).apply(clusterHealthPolicyArgsProvideDefaults),
        };
    }

    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    export interface DiagnosticsStorageAccountConfigArgs {
        /**
         * The blob endpoint of the azure storage account.
         */
        blobEndpoint: pulumi.Input<string>;
        /**
         * The protected diagnostics storage key name.
         */
        protectedAccountKeyName: pulumi.Input<string>;
        /**
         * The secondary protected diagnostics storage key name. If one of the storage account keys is rotated the cluster will fallback to using the other.
         */
        protectedAccountKeyName2?: pulumi.Input<string>;
        /**
         * The queue endpoint of the azure storage account.
         */
        queueEndpoint: pulumi.Input<string>;
        /**
         * The Azure storage account name.
         */
        storageAccountName: pulumi.Input<string>;
        /**
         * The table endpoint of the azure storage account.
         */
        tableEndpoint: pulumi.Input<string>;
    }

    /**
     * Port range details
     */
    export interface EndpointRangeDescriptionArgs {
        /**
         * End port of a range of ports
         */
        endPort: pulumi.Input<number>;
        /**
         * Starting port of a range of ports
         */
        startPort: pulumi.Input<number>;
    }

    /**
     * Describes the managed identities for an Azure resource.
     */
    export interface ManagedIdentityArgs {
        /**
         * The type of managed identity for the resource.
         */
        type?: pulumi.Input<enums.ManagedIdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Describes the named partition scheme of the service.
     */
    export interface NamedPartitionSchemeDescriptionArgs {
        /**
         * The number of partitions.
         */
        count: pulumi.Input<number>;
        /**
         * Array of size specified by the ‘count’ parameter, for the names of the partitions.
         */
        names: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'Named'.
         */
        partitionScheme: pulumi.Input<"Named">;
    }

    /**
     * Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
     */
    export interface NodeTypeDescriptionArgs {
        /**
         * The range of ports from which cluster assigned port to Service Fabric applications.
         */
        applicationPorts?: pulumi.Input<EndpointRangeDescriptionArgs>;
        /**
         * The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
         */
        capacities?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The TCP cluster management endpoint port.
         */
        clientConnectionEndpointPort: pulumi.Input<number>;
        /**
         * The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
         *
         *   - Bronze - No privileges. This is the default.
         *   - Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.
         *   - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
         */
        durabilityLevel?: pulumi.Input<string>;
        /**
         * The range of ephemeral ports that nodes in this node type should be configured with.
         */
        ephemeralPorts?: pulumi.Input<EndpointRangeDescriptionArgs>;
        /**
         * The HTTP cluster management endpoint port.
         */
        httpGatewayEndpointPort: pulumi.Input<number>;
        /**
         * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
         */
        isPrimary: pulumi.Input<boolean>;
        /**
         * Indicates if the node type can only host Stateless workloads.
         */
        isStateless?: pulumi.Input<boolean>;
        /**
         * Indicates if the node type is enabled to support multiple zones.
         */
        multipleAvailabilityZones?: pulumi.Input<boolean>;
        /**
         * The name of the node type.
         */
        name: pulumi.Input<string>;
        /**
         * The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
         */
        placementProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The endpoint used by reverse proxy.
         */
        reverseProxyEndpointPort?: pulumi.Input<number>;
        /**
         * VMInstanceCount should be 1 to n, where n indicates the number of VM instances corresponding to this nodeType. VMInstanceCount = 0 can be done only in these scenarios: NodeType is a secondary nodeType. Durability = Bronze or Durability >= Bronze and InfrastructureServiceManager = true. If VMInstanceCount = 0, implies the VMs for this nodeType will not be used for the initial cluster size computation.
         */
        vmInstanceCount: pulumi.Input<number>;
    }

    /**
     * Describes the notification channel for cluster events.
     */
    export interface NotificationArgs {
        /**
         * Indicates if the notification is enabled.
         */
        isEnabled: pulumi.Input<boolean>;
        /**
         * The category of notification.
         */
        notificationCategory: pulumi.Input<string | enums.NotificationCategory>;
        /**
         * The level of notification.
         */
        notificationLevel: pulumi.Input<string | enums.NotificationLevel>;
        /**
         * List of targets that subscribe to the notification.
         */
        notificationTargets: pulumi.Input<pulumi.Input<NotificationTargetArgs>[]>;
    }

    /**
     * Describes the notification target properties.
     */
    export interface NotificationTargetArgs {
        /**
         * The notification channel indicates the type of receivers subscribed to the notification, either user or subscription.
         */
        notificationChannel: pulumi.Input<string | enums.NotificationChannel>;
        /**
         * List of targets that subscribe to the notification.
         */
        receivers: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Describes the server certificate details using common name.
     */
    export interface ServerCertificateCommonNameArgs {
        /**
         * The common name of the server certificate.
         */
        certificateCommonName: pulumi.Input<string>;
        /**
         * The issuer thumbprint of the server certificate.
         */
        certificateIssuerThumbprint: pulumi.Input<string>;
    }

    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    export interface ServerCertificateCommonNamesArgs {
        /**
         * The list of server certificates referenced by common name that are used to secure the cluster.
         */
        commonNames?: pulumi.Input<pulumi.Input<ServerCertificateCommonNameArgs>[]>;
        /**
         * The local certificate store location.
         */
        x509StoreName?: pulumi.Input<string>;
    }

    /**
     * Creates a particular correlation between services.
     */
    export interface ServiceCorrelationDescriptionArgs {
        /**
         * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
         */
        scheme: pulumi.Input<string | enums.ServiceCorrelationScheme>;
        /**
         * The name of the service that the correlation relationship is established with.
         */
        serviceName: pulumi.Input<string>;
    }

    /**
     * Specifies a metric to load balance a service during runtime.
     */
    export interface ServiceLoadMetricDescriptionArgs {
        /**
         * Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
         */
        defaultLoad?: pulumi.Input<number>;
        /**
         * The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive.
         */
        name: pulumi.Input<string>;
        /**
         * Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
         */
        primaryDefaultLoad?: pulumi.Input<number>;
        /**
         * Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
         */
        secondaryDefaultLoad?: pulumi.Input<number>;
        /**
         * The service load metric relative weight, compared to other metrics configured for this service, as a number.
         */
        weight?: pulumi.Input<string | enums.ServiceLoadMetricWeight>;
    }

    /**
     * Describes the policy to be used for placement of a Service Fabric service.
     */
    export interface ServicePlacementPolicyDescriptionArgs {
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         */
        type: pulumi.Input<string | enums.ServicePlacementPolicyType>;
    }

    /**
     * Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
     */
    export interface ServiceTypeDeltaHealthPolicyArgs {
        /**
         * The maximum allowed percentage of services health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
         */
        maxPercentDeltaUnhealthyServices?: pulumi.Input<number>;
    }
    /**
     * serviceTypeDeltaHealthPolicyArgsProvideDefaults sets the appropriate defaults for ServiceTypeDeltaHealthPolicyArgs
     */
    export function serviceTypeDeltaHealthPolicyArgsProvideDefaults(val: ServiceTypeDeltaHealthPolicyArgs): ServiceTypeDeltaHealthPolicyArgs {
        return {
            ...val,
            maxPercentDeltaUnhealthyServices: (val.maxPercentDeltaUnhealthyServices) ?? 0,
        };
    }

    /**
     * Represents the health policy used to evaluate the health of services belonging to a service type.
     */
    export interface ServiceTypeHealthPolicyArgs {
        /**
         * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyServices?: pulumi.Input<number>;
    }
    /**
     * serviceTypeHealthPolicyArgsProvideDefaults sets the appropriate defaults for ServiceTypeHealthPolicyArgs
     */
    export function serviceTypeHealthPolicyArgsProvideDefaults(val: ServiceTypeHealthPolicyArgs): ServiceTypeHealthPolicyArgs {
        return {
            ...val,
            maxPercentUnhealthyServices: (val.maxPercentUnhealthyServices) ?? 0,
        };
    }

    /**
     * Describes a parameter in fabric settings of the cluster.
     */
    export interface SettingsParameterDescriptionArgs {
        /**
         * The parameter name of fabric setting.
         */
        name: pulumi.Input<string>;
        /**
         * The parameter value of fabric setting.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Describes a section in the fabric settings of the cluster.
     */
    export interface SettingsSectionDescriptionArgs {
        /**
         * The section name of the fabric settings.
         */
        name: pulumi.Input<string>;
        /**
         * The collection of parameters in the section.
         */
        parameters: pulumi.Input<pulumi.Input<SettingsParameterDescriptionArgs>[]>;
    }

    /**
     * Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
     */
    export interface SingletonPartitionSchemeDescriptionArgs {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'Singleton'.
         */
        partitionScheme: pulumi.Input<"Singleton">;
    }

    /**
     * Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.
     */
    export interface UniformInt64RangePartitionSchemeDescriptionArgs {
        /**
         * The number of partitions.
         */
        count: pulumi.Input<number>;
        /**
         * String indicating the upper bound of the partition key range that
         * should be split between the partition ‘count’
         */
        highKey: pulumi.Input<string>;
        /**
         * String indicating the lower bound of the partition key range that
         * should be split between the partition ‘count’
         */
        lowKey: pulumi.Input<string>;
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'UniformInt64Range'.
         */
        partitionScheme: pulumi.Input<"UniformInt64Range">;
    }
