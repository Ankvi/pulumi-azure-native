import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace servicefabric {
    /**
     * Represents a scaling mechanism for adding or removing named partitions of a stateless service. Partition names are in the format '0','1'...'N-1'.
     */
    export interface AddRemoveIncrementalNamedPartitionScalingMechanismArgs {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'AddRemoveIncrementalNamedPartition'.
         */
        kind: pulumi.Input<"AddRemoveIncrementalNamedPartition">;
        /**
         * Maximum number of named partitions of the service.
         */
        maxPartitionCount: pulumi.Input<number>;
        /**
         * Minimum number of named partitions of the service.
         */
        minPartitionCount: pulumi.Input<number>;
        /**
         * The number of instances to add or remove during a scaling operation.
         */
        scaleIncrement: pulumi.Input<number>;
    }

    /**
     * Defines a health policy used to evaluate the health of an application or one of its children entities.
     */
    export interface ApplicationHealthPolicyArgs {
        /**
         * Indicates whether warnings are treated with the same severity as errors.
         */
        considerWarningAsError: pulumi.Input<boolean>;
        /**
         * The health policy used by default to evaluate the health of a service type.
         */
        defaultServiceTypeHealthPolicy?: pulumi.Input<ServiceTypeHealthPolicyArgs>;
        /**
         * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
         * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
         * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
         * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
         */
        maxPercentUnhealthyDeployedApplications: pulumi.Input<number>;
        /**
         * The map with service type health policy per service type name. The map is empty by default.
         */
        serviceTypeHealthPolicyMap?: pulumi.Input<{[key: string]: pulumi.Input<ServiceTypeHealthPolicyArgs>}>;
    }

    /**
     * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
     */
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
        applicationHealthPolicy?: pulumi.Input<ApplicationHealthPolicyArgs>;
        /**
         * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
         */
        forceRestart?: pulumi.Input<boolean>;
        /**
         * Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description.
         */
        instanceCloseDelayDuration?: pulumi.Input<number>;
        /**
         * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed.
         */
        recreateApplication?: pulumi.Input<boolean>;
        /**
         * The policy used for monitoring the application upgrade
         */
        rollingUpgradeMonitoringPolicy?: pulumi.Input<RollingUpgradeMonitoringPolicyArgs>;
        /**
         * The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
         */
        upgradeMode?: pulumi.Input<string | enums.RollingUpgradeMode>;
        /**
         * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
         */
        upgradeReplicaSetCheckTimeout?: pulumi.Input<number>;
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
     * Represents a scaling trigger related to an average load of a metric/resource of a partition.
     */
    export interface AveragePartitionLoadScalingTriggerArgs {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'AveragePartitionLoadTrigger'.
         */
        kind: pulumi.Input<"AveragePartitionLoadTrigger">;
        /**
         * The lower limit of the load below which a scale in operation should be performed.
         */
        lowerLoadThreshold: pulumi.Input<number>;
        /**
         * The name of the metric for which usage should be tracked.
         */
        metricName: pulumi.Input<string>;
        /**
         * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
         */
        scaleInterval: pulumi.Input<string>;
        /**
         * The upper limit of the load beyond which a scale out operation should be performed.
         */
        upperLoadThreshold: pulumi.Input<number>;
    }

    /**
     * Represents a scaling policy related to an average load of a metric/resource of a service.
     */
    export interface AverageServiceLoadScalingTriggerArgs {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'AverageServiceLoadTrigger'.
         */
        kind: pulumi.Input<"AverageServiceLoadTrigger">;
        /**
         * The lower limit of the load below which a scale in operation should be performed.
         */
        lowerLoadThreshold: pulumi.Input<number>;
        /**
         * The name of the metric for which usage should be tracked.
         */
        metricName: pulumi.Input<string>;
        /**
         * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
         */
        scaleInterval: pulumi.Input<string>;
        /**
         * The upper limit of the load beyond which a scale out operation should be performed.
         */
        upperLoadThreshold: pulumi.Input<number>;
        /**
         * Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service.
         */
        useOnlyPrimaryLoad: pulumi.Input<boolean>;
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
     * Client certificate definition.
     */
    export interface ClientCertificateArgs {
        /**
         * Certificate common name.
         */
        commonName?: pulumi.Input<string>;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: pulumi.Input<boolean>;
        /**
         * Issuer thumbprint for the certificate. Only used together with CommonName.
         */
        issuerThumbprint?: pulumi.Input<string>;
        /**
         * Certificate thumbprint.
         */
        thumbprint?: pulumi.Input<string>;
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
     * Describes the frontend configurations for the node type.
     */
    export interface FrontendConfigurationArgs {
        /**
         * The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/applicationGateways/<applicationGatewayName>/backendAddressPools/<backendAddressPoolName>'.
         */
        applicationGatewayBackendAddressPoolId?: pulumi.Input<string>;
        /**
         * The IP address type of this frontend configuration. If omitted the default value is IPv4.
         */
        ipAddressType?: pulumi.Input<string | enums.IPAddressType>;
        /**
         * The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/backendAddressPools/<backendAddressPoolName>'.
         */
        loadBalancerBackendAddressPoolId?: pulumi.Input<string>;
        /**
         * The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/inboundNatPools/<inboundNatPoolName>'.
         */
        loadBalancerInboundNatPoolId?: pulumi.Input<string>;
    }

    /**
     * IPTag associated with the object.
     */
    export interface IPTagArgs {
        /**
         * The IP tag type.
         */
        ipTagType: pulumi.Input<string>;
        /**
         * The value of the IP tag.
         */
        tag: pulumi.Input<string>;
    }

    /**
     * Describes a load balancing rule.
     */
    export interface LoadBalancingRuleArgs {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: pulumi.Input<number>;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
         */
        frontendPort: pulumi.Input<number>;
        /**
         * The load distribution policy for this rule.
         */
        loadDistribution?: pulumi.Input<string>;
        /**
         * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
         */
        probePort?: pulumi.Input<number>;
        /**
         * the reference to the load balancer probe used by the load balancing rule.
         */
        probeProtocol: pulumi.Input<string | enums.ProbeProtocol>;
        /**
         * The probe request path. Only supported for HTTP/HTTPS probes.
         */
        probeRequestPath?: pulumi.Input<string>;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol: pulumi.Input<string | enums.Protocol>;
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
    export interface NamedPartitionSchemeArgs {
        /**
         * Array for the names of the partitions.
         */
        names: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'Named'.
         */
        partitionScheme: pulumi.Input<"Named">;
    }

    /**
     * Describes a network security rule.
     */
    export interface NetworkSecurityRuleArgs {
        /**
         * The network traffic is allowed or denied.
         */
        access: pulumi.Input<string | enums.Access>;
        /**
         * Network security rule description.
         */
        description?: pulumi.Input<string>;
        /**
         * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
         */
        destinationAddressPrefix?: pulumi.Input<string>;
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        destinationPortRange?: pulumi.Input<string>;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Network security rule direction.
         */
        direction: pulumi.Input<string | enums.Direction>;
        /**
         * Network security rule name.
         */
        name: pulumi.Input<string>;
        /**
         * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority: pulumi.Input<number>;
        /**
         * Network protocol this rule applies to.
         */
        protocol: pulumi.Input<string | enums.NsgProtocol>;
        /**
         * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
         */
        sourceAddressPrefix?: pulumi.Input<string>;
        /**
         * The CIDR or source IP ranges.
         */
        sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        sourcePortRange?: pulumi.Input<string>;
        /**
         * The source port ranges.
         */
        sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Describes a node type sku.
     */
    export interface NodeTypeSkuArgs {
        /**
         * The number of nodes in the node type.<br /><br />If present in request it will override properties.vmInstanceCount.
         */
        capacity: pulumi.Input<number>;
        /**
         * The sku name. <br /><br />Name is internally generated and is used in auto-scale scenarios.<br /> Property does not allow to be changed to other values than generated.<br /> To avoid deployment errors please omit the property.
         */
        name?: pulumi.Input<string>;
        /**
         * Specifies the tier of the node type. <br /><br /> Possible Values:<br /> **Standard**
         */
        tier?: pulumi.Input<string>;
    }

    /**
     * Represents a scaling mechanism for adding or removing instances of stateless service partition.
     */
    export interface PartitionInstanceCountScaleMechanismArgs {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'ScalePartitionInstanceCount'.
         */
        kind: pulumi.Input<"ScalePartitionInstanceCount">;
        /**
         * Maximum number of instances of the partition.
         */
        maxInstanceCount: pulumi.Input<number>;
        /**
         * Minimum number of instances of the partition.
         */
        minInstanceCount: pulumi.Input<number>;
        /**
         * The number of instances to add or remove during a scaling operation.
         */
        scaleIncrement: pulumi.Input<number>;
    }

    /**
     * The policy used for monitoring the application upgrade
     */
    export interface RollingUpgradeMonitoringPolicyArgs {
        /**
         * The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
         */
        failureAction: pulumi.Input<string | enums.FailureAction>;
        /**
         * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        healthCheckRetryTimeout: pulumi.Input<string>;
        /**
         * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        healthCheckStableDuration: pulumi.Input<string>;
        /**
         * The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        healthCheckWaitDuration: pulumi.Input<string>;
        /**
         * The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        upgradeDomainTimeout: pulumi.Input<string>;
        /**
         * The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        upgradeTimeout: pulumi.Input<string>;
    }

    /**
     * Specifies a metric to load balance a service during runtime.
     */
    export interface ScalingPolicyArgs {
        /**
         * Specifies the mechanism associated with this scaling policy
         */
        scalingMechanism: pulumi.Input<AddRemoveIncrementalNamedPartitionScalingMechanismArgs | PartitionInstanceCountScaleMechanismArgs>;
        /**
         * Specifies the trigger associated with this scaling policy.
         */
        scalingTrigger: pulumi.Input<AveragePartitionLoadScalingTriggerArgs | AverageServiceLoadScalingTriggerArgs>;
    }

    /**
     * Creates a particular correlation between services.
     */
    export interface ServiceCorrelationArgs {
        /**
         * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
         */
        scheme: pulumi.Input<string | enums.ServiceCorrelationScheme>;
        /**
         * The Arm Resource ID of the service that the correlation relationship is established with.
         */
        serviceName: pulumi.Input<string>;
    }

    /**
     * The service endpoint properties.
     */
    export interface ServiceEndpointArgs {
        /**
         * A list of locations.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The type of the endpoint service.
         */
        service: pulumi.Input<string>;
    }

    /**
     * Specifies a metric to load balance a service during runtime.
     */
    export interface ServiceLoadMetricArgs {
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
     * Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.
     */
    export interface ServicePlacementInvalidDomainPolicyArgs {
        /**
         * The name of the domain that should not be used for placement.
         */
        domainName: pulumi.Input<string>;
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'InvalidDomain'.
         */
        type: pulumi.Input<"InvalidDomain">;
    }

    /**
     * The name of the domain that should used for placement as per this policy.
     */
    export interface ServicePlacementNonPartiallyPlaceServicePolicyArgs {
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'NonPartiallyPlaceService'.
         */
        type: pulumi.Input<"NonPartiallyPlaceService">;
    }

    /**
     * Describes the policy to be used for placement of a Service Fabric service where the service's 
     * Primary replicas should optimally be placed in a particular domain.
     *
     * This placement policy is usually used with fault domains in scenarios where the Service Fabric
     * cluster is geographically distributed in order to indicate that a service's primary replica should
     * be located in a particular fault domain, which in geo-distributed scenarios usually aligns with regional
     * or datacenter boundaries. Note that since this is an optimization it is possible that the Primary replica
     * may not end up located in this domain due to failures, capacity limits, or other constraints.
     */
    export interface ServicePlacementPreferPrimaryDomainPolicyArgs {
        /**
         * The name of the domain that should used for placement as per this policy.
         */
        domainName: pulumi.Input<string>;
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'PreferredPrimaryDomain'.
         */
        type: pulumi.Input<"PreferredPrimaryDomain">;
    }

    /**
     * Describes the policy to be used for placement of a Service Fabric service where two replicas
     * from the same partition should never be placed in the same fault or upgrade domain.
     *
     * While this is not common it can expose the service to an increased risk of concurrent failures
     * due to unplanned outages or other cases of subsequent/concurrent failures. As an example, consider
     * a case where replicas are deployed across different data center, with one replica per location.
     * In the event that one of the datacenters goes offline, normally the replica that was placed in that
     * datacenter will be packed into one of the remaining datacenters. If this is not desirable then this
     * policy should be set.
     */
    export interface ServicePlacementRequireDomainDistributionPolicyArgs {
        /**
         * The name of the domain that should used for placement as per this policy.
         */
        domainName: pulumi.Input<string>;
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'RequiredDomainDistribution'.
         */
        type: pulumi.Input<"RequiredDomainDistribution">;
    }

    /**
     * Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain.
     */
    export interface ServicePlacementRequiredDomainPolicyArgs {
        /**
         * The name of the domain that should used for placement as per this policy.
         */
        domainName: pulumi.Input<string>;
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'RequiredDomain'.
         */
        type: pulumi.Input<"RequiredDomain">;
    }

    /**
     * Represents the health policy used to evaluate the health of services belonging to a service type.
     */
    export interface ServiceTypeHealthPolicyArgs {
        /**
         * The maximum allowed percentage of unhealthy partitions per service.
         *
         * The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.
         * If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.
         * The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.
         * The computation rounds up to tolerate one failure on small numbers of partitions.
         */
        maxPercentUnhealthyPartitionsPerService: pulumi.Input<number>;
        /**
         * The maximum allowed percentage of unhealthy replicas per partition.
         *
         * The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.
         * If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.
         * The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.
         * The computation rounds up to tolerate one failure on small numbers of replicas.
         */
        maxPercentUnhealthyReplicasPerPartition: pulumi.Input<number>;
        /**
         * The maximum allowed percentage of unhealthy services.
         *
         * The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.
         * If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.
         * This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.
         * The computation rounds up to tolerate one failure on small numbers of services.
         */
        maxPercentUnhealthyServices: pulumi.Input<number>;
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
    export interface SingletonPartitionSchemeArgs {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'Singleton'.
         */
        partitionScheme: pulumi.Input<"Singleton">;
    }

    /**
     * Service Fabric managed cluster Sku definition
     */
    export interface SkuArgs {
        /**
         * Sku Name.
         */
        name: pulumi.Input<string | enums.SkuName>;
    }

    /**
     * The properties of a stateful service resource.
     */
    export interface StatefulServicePropertiesArgs {
        /**
         * A list that describes the correlation of the service with other services.
         */
        correlationScheme?: pulumi.Input<pulumi.Input<ServiceCorrelationArgs>[]>;
        /**
         * Specifies the move cost for the service.
         */
        defaultMoveCost?: pulumi.Input<string | enums.MoveCost>;
        /**
         * A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
         */
        hasPersistedState?: pulumi.Input<boolean>;
        /**
         * The minimum replica set size as a number.
         */
        minReplicaSetSize?: pulumi.Input<number>;
        /**
         * Describes how the service is partitioned.
         */
        partitionDescription: pulumi.Input<NamedPartitionSchemeArgs | SingletonPartitionSchemeArgs | UniformInt64RangePartitionSchemeArgs>;
        /**
         * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
         */
        placementConstraints?: pulumi.Input<string>;
        /**
         * The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss".
         */
        quorumLossWaitDuration?: pulumi.Input<string>;
        /**
         * The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss".
         */
        replicaRestartWaitDuration?: pulumi.Input<string>;
        /**
         * Scaling policies for this service.
         */
        scalingPolicies?: pulumi.Input<pulumi.Input<ScalingPolicyArgs>[]>;
        /**
         * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
         * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
         * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
         */
        serviceDnsName?: pulumi.Input<string>;
        /**
         * The kind of service (Stateless or Stateful).
         * Expected value is 'Stateful'.
         */
        serviceKind: pulumi.Input<"Stateful">;
        /**
         * The service load metrics is given as an array of ServiceLoadMetric objects.
         */
        serviceLoadMetrics?: pulumi.Input<pulumi.Input<ServiceLoadMetricArgs>[]>;
        /**
         * The activation Mode of the service package
         */
        servicePackageActivationMode?: pulumi.Input<string | enums.ServicePackageActivationMode>;
        /**
         * A list that describes the correlation of the service with other services.
         */
        servicePlacementPolicies?: pulumi.Input<pulumi.Input<ServicePlacementInvalidDomainPolicyArgs | ServicePlacementNonPartiallyPlaceServicePolicyArgs | ServicePlacementPreferPrimaryDomainPolicyArgs | ServicePlacementRequireDomainDistributionPolicyArgs | ServicePlacementRequiredDomainPolicyArgs>[]>;
        /**
         * The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss".
         */
        servicePlacementTimeLimit?: pulumi.Input<string>;
        /**
         * The name of the service type
         */
        serviceTypeName: pulumi.Input<string>;
        /**
         * The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss".
         */
        standByReplicaKeepDuration?: pulumi.Input<string>;
        /**
         * The target replica set size as a number.
         */
        targetReplicaSetSize?: pulumi.Input<number>;
    }

    /**
     * The properties of a stateless service resource.
     */
    export interface StatelessServicePropertiesArgs {
        /**
         * A list that describes the correlation of the service with other services.
         */
        correlationScheme?: pulumi.Input<pulumi.Input<ServiceCorrelationArgs>[]>;
        /**
         * Specifies the move cost for the service.
         */
        defaultMoveCost?: pulumi.Input<string | enums.MoveCost>;
        /**
         * The instance count.
         */
        instanceCount: pulumi.Input<number>;
        /**
         * MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
         */
        minInstanceCount?: pulumi.Input<number>;
        /**
         * MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
         */
        minInstancePercentage?: pulumi.Input<number>;
        /**
         * Describes how the service is partitioned.
         */
        partitionDescription: pulumi.Input<NamedPartitionSchemeArgs | SingletonPartitionSchemeArgs | UniformInt64RangePartitionSchemeArgs>;
        /**
         * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
         */
        placementConstraints?: pulumi.Input<string>;
        /**
         * Scaling policies for this service.
         */
        scalingPolicies?: pulumi.Input<pulumi.Input<ScalingPolicyArgs>[]>;
        /**
         * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
         * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
         * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
         */
        serviceDnsName?: pulumi.Input<string>;
        /**
         * The kind of service (Stateless or Stateful).
         * Expected value is 'Stateless'.
         */
        serviceKind: pulumi.Input<"Stateless">;
        /**
         * The service load metrics is given as an array of ServiceLoadMetric objects.
         */
        serviceLoadMetrics?: pulumi.Input<pulumi.Input<ServiceLoadMetricArgs>[]>;
        /**
         * The activation Mode of the service package
         */
        servicePackageActivationMode?: pulumi.Input<string | enums.ServicePackageActivationMode>;
        /**
         * A list that describes the correlation of the service with other services.
         */
        servicePlacementPolicies?: pulumi.Input<pulumi.Input<ServicePlacementInvalidDomainPolicyArgs | ServicePlacementNonPartiallyPlaceServicePolicyArgs | ServicePlacementPreferPrimaryDomainPolicyArgs | ServicePlacementRequireDomainDistributionPolicyArgs | ServicePlacementRequiredDomainPolicyArgs>[]>;
        /**
         * The name of the service type
         */
        serviceTypeName: pulumi.Input<string>;
    }

    /**
     * Azure resource identifier.
     */
    export interface SubResourceArgs {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Describes a Subnet.
     */
    export interface SubnetArgs {
        /**
         * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
         */
        enableIpv6?: pulumi.Input<boolean>;
        /**
         * Subnet name.
         */
        name: pulumi.Input<string>;
        /**
         * Full resource id for the network security group.
         */
        networkSecurityGroupId?: pulumi.Input<string>;
        /**
         * Enable or Disable apply network policies on private end point in the subnet.
         */
        privateEndpointNetworkPolicies?: pulumi.Input<string | enums.PrivateEndpointNetworkPolicies>;
        /**
         * Enable or Disable apply network policies on private link service in the subnet.
         */
        privateLinkServiceNetworkPolicies?: pulumi.Input<string | enums.PrivateLinkServiceNetworkPolicies>;
    }

    /**
     * Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.
     */
    export interface UniformInt64RangePartitionSchemeArgs {
        /**
         * The number of partitions.
         */
        count: pulumi.Input<number>;
        /**
         * The upper bound of the partition key range that
         * should be split between the partition ‘Count’
         */
        highKey: pulumi.Input<number>;
        /**
         * The lower bound of the partition key range that
         * should be split between the partition ‘Count’
         */
        lowKey: pulumi.Input<number>;
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'UniformInt64Range'.
         */
        partitionScheme: pulumi.Input<"UniformInt64Range">;
    }

    /**
     * Specifies set of extensions that should be installed onto the virtual machines.
     */
    export interface VMSSExtensionArgs {
        /**
         * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
         */
        autoUpgradeMinorVersion?: pulumi.Input<boolean>;
        /**
         * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
         */
        enableAutomaticUpgrade?: pulumi.Input<boolean>;
        /**
         * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
         */
        forceUpdateTag?: pulumi.Input<string>;
        /**
         * The name of the extension.
         */
        name: pulumi.Input<string>;
        /**
         * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
         */
        protectedSettings?: any;
        /**
         * Collection of extension names after which this extension needs to be provisioned.
         */
        provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The name of the extension handler publisher.
         */
        publisher: pulumi.Input<string>;
        /**
         * Json formatted public settings for the extension.
         */
        settings?: any;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type: pulumi.Input<string>;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion: pulumi.Input<string>;
    }

    /**
     * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
     */
    export interface VaultCertificateArgs {
        /**
         * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
         */
        certificateStore: pulumi.Input<string>;
        /**
         * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
         */
        certificateUrl: pulumi.Input<string>;
    }

    /**
     * Specifies set of certificates that should be installed onto the virtual machines.
     */
    export interface VaultSecretGroupArgs {
        /**
         * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
         */
        sourceVault: pulumi.Input<SubResourceArgs>;
        /**
         * The list of key vault references in SourceVault which contain certificates.
         */
        vaultCertificates: pulumi.Input<pulumi.Input<VaultCertificateArgs>[]>;
    }

    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save.
     */
    export interface VmImagePlanArgs {
        /**
         * The plan ID.
         */
        name?: pulumi.Input<string>;
        /**
         * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
         */
        product?: pulumi.Input<string>;
        /**
         * The promotion code.
         */
        promotionCode?: pulumi.Input<string>;
        /**
         * The publisher ID.
         */
        publisher?: pulumi.Input<string>;
    }

    /**
     * Identities for the virtual machine scale set under the node type.
     */
    export interface VmManagedIdentityArgs {
        /**
         * The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Managed data disk description.
     */
    export interface VmssDataDiskArgs {
        /**
         * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
         */
        diskLetter: pulumi.Input<string>;
        /**
         * Disk size for each vm in the node type in GBs.
         */
        diskSizeGB: pulumi.Input<number>;
        /**
         * Managed data disk type. Specifies the storage account type for the managed disk
         */
        diskType: pulumi.Input<string | enums.DiskType>;
        /**
         * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk.
         */
        lun: pulumi.Input<number>;
    }

    export namespace v20200101preview {
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
         * Client Certificate definition.
         */
        export interface ClientCertificateArgs {
            /**
             * Certificate Common name.
             */
            commonName?: pulumi.Input<string>;
            /**
             * Whether the certificate is admin or not.
             */
            isAdmin: pulumi.Input<boolean>;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: pulumi.Input<string>;
            /**
             * Certificate Thumbprint.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleArgs {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: pulumi.Input<number>;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: pulumi.Input<number>;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: pulumi.Input<string | enums.v20200101preview.ProbeProtocol>;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: pulumi.Input<string>;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: pulumi.Input<string | enums.v20200101preview.Protocol>;
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
            parameters: pulumi.Input<pulumi.Input<v20200101preview.SettingsParameterDescriptionArgs>[]>;
        }

        /**
         * Sku definition
         */
        export interface SkuArgs {
            /**
             * Sku Name.
             */
            name: pulumi.Input<string>;
        }

    }

    export namespace v20201201preview {
        /**
         * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
         */
        export interface ApplicationDeltaHealthPolicyArgs {
            /**
             * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
             */
            defaultServiceTypeDeltaHealthPolicy?: pulumi.Input<v20201201preview.ServiceTypeDeltaHealthPolicyArgs>;
            /**
             * The map with service type delta health policy per service type name. The map is empty by default.
             */
            serviceTypeDeltaHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<v20201201preview.ServiceTypeDeltaHealthPolicyArgs>}>;
        }
        /**
         * applicationDeltaHealthPolicyArgsProvideDefaults sets the appropriate defaults for ApplicationDeltaHealthPolicyArgs
         */
        export function applicationDeltaHealthPolicyArgsProvideDefaults(val: ApplicationDeltaHealthPolicyArgs): ApplicationDeltaHealthPolicyArgs {
            return {
                ...val,
                defaultServiceTypeDeltaHealthPolicy: (val.defaultServiceTypeDeltaHealthPolicy ? pulumi.output(val.defaultServiceTypeDeltaHealthPolicy).apply(v20201201preview.serviceTypeDeltaHealthPolicyArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        export interface ApplicationHealthPolicyArgs {
            /**
             * The health policy used by default to evaluate the health of a service type.
             */
            defaultServiceTypeHealthPolicy?: pulumi.Input<v20201201preview.ServiceTypeHealthPolicyArgs>;
            /**
             * The map with service type health policy per service type name. The map is empty by default.
             */
            serviceTypeHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<v20201201preview.ServiceTypeHealthPolicyArgs>}>;
        }
        /**
         * applicationHealthPolicyArgsProvideDefaults sets the appropriate defaults for ApplicationHealthPolicyArgs
         */
        export function applicationHealthPolicyArgsProvideDefaults(val: ApplicationHealthPolicyArgs): ApplicationHealthPolicyArgs {
            return {
                ...val,
                defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? pulumi.output(val.defaultServiceTypeHealthPolicy).apply(v20201201preview.serviceTypeHealthPolicyArgsProvideDefaults) : undefined),
            };
        }

        export interface ApplicationTypeVersionsCleanupPolicyArgs {
            /**
             * Number of unused versions per application type to keep.
             */
            maxUnusedVersionsToKeep: pulumi.Input<number>;
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
            applicationHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<v20201201preview.ApplicationHealthPolicyArgs>}>;
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
            applicationDeltaHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<v20201201preview.ApplicationDeltaHealthPolicyArgs>}>;
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
            deltaHealthPolicy?: pulumi.Input<v20201201preview.ClusterUpgradeDeltaHealthPolicyArgs>;
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
            healthPolicy: pulumi.Input<v20201201preview.ClusterHealthPolicyArgs>;
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
                healthPolicy: pulumi.output(val.healthPolicy).apply(v20201201preview.clusterHealthPolicyArgsProvideDefaults),
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
         * Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
         */
        export interface NodeTypeDescriptionArgs {
            /**
             * The range of ports from which cluster assigned port to Service Fabric applications.
             */
            applicationPorts?: pulumi.Input<v20201201preview.EndpointRangeDescriptionArgs>;
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
            ephemeralPorts?: pulumi.Input<v20201201preview.EndpointRangeDescriptionArgs>;
            /**
             * The HTTP cluster management endpoint port.
             */
            httpGatewayEndpointPort: pulumi.Input<number>;
            /**
             * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
             */
            isPrimary: pulumi.Input<boolean>;
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
             * The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.
             */
            vmInstanceCount: pulumi.Input<number>;
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
            commonNames?: pulumi.Input<pulumi.Input<v20201201preview.ServerCertificateCommonNameArgs>[]>;
            /**
             * The local certificate store location.
             */
            x509StoreName?: pulumi.Input<string>;
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
            parameters: pulumi.Input<pulumi.Input<v20201201preview.SettingsParameterDescriptionArgs>[]>;
        }

    }

    export namespace v20210601 {
        /**
         * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
         */
        export interface ApplicationDeltaHealthPolicyArgs {
            /**
             * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
             */
            defaultServiceTypeDeltaHealthPolicy?: pulumi.Input<v20210601.ServiceTypeDeltaHealthPolicyArgs>;
            /**
             * The map with service type delta health policy per service type name. The map is empty by default.
             */
            serviceTypeDeltaHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<v20210601.ServiceTypeDeltaHealthPolicyArgs>}>;
        }
        /**
         * applicationDeltaHealthPolicyArgsProvideDefaults sets the appropriate defaults for ApplicationDeltaHealthPolicyArgs
         */
        export function applicationDeltaHealthPolicyArgsProvideDefaults(val: ApplicationDeltaHealthPolicyArgs): ApplicationDeltaHealthPolicyArgs {
            return {
                ...val,
                defaultServiceTypeDeltaHealthPolicy: (val.defaultServiceTypeDeltaHealthPolicy ? pulumi.output(val.defaultServiceTypeDeltaHealthPolicy).apply(v20210601.serviceTypeDeltaHealthPolicyArgsProvideDefaults) : undefined),
            };
        }

        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        export interface ApplicationHealthPolicyArgs {
            /**
             * The health policy used by default to evaluate the health of a service type.
             */
            defaultServiceTypeHealthPolicy?: pulumi.Input<v20210601.ServiceTypeHealthPolicyArgs>;
            /**
             * The map with service type health policy per service type name. The map is empty by default.
             */
            serviceTypeHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<v20210601.ServiceTypeHealthPolicyArgs>}>;
        }
        /**
         * applicationHealthPolicyArgsProvideDefaults sets the appropriate defaults for ApplicationHealthPolicyArgs
         */
        export function applicationHealthPolicyArgsProvideDefaults(val: ApplicationHealthPolicyArgs): ApplicationHealthPolicyArgs {
            return {
                ...val,
                defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? pulumi.output(val.defaultServiceTypeHealthPolicy).apply(v20210601.serviceTypeHealthPolicyArgsProvideDefaults) : undefined),
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
            applicationHealthPolicy?: pulumi.Input<v20210601.ArmApplicationHealthPolicyArgs>;
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
            rollingUpgradeMonitoringPolicy?: pulumi.Input<v20210601.ArmRollingUpgradeMonitoringPolicyArgs>;
            /**
             * The mode used to monitor health during a rolling upgrade. The values are UnmonitoredAuto, UnmonitoredManual, and Monitored.
             */
            upgradeMode?: pulumi.Input<string | enums.v20210601.RollingUpgradeMode>;
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
                applicationHealthPolicy: (val.applicationHealthPolicy ? pulumi.output(val.applicationHealthPolicy).apply(v20210601.armApplicationHealthPolicyArgsProvideDefaults) : undefined),
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
            defaultServiceTypeHealthPolicy?: pulumi.Input<v20210601.ArmServiceTypeHealthPolicyArgs>;
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
            serviceTypeHealthPolicyMap?: pulumi.Input<{[key: string]: pulumi.Input<v20210601.ArmServiceTypeHealthPolicyArgs>}>;
        }
        /**
         * armApplicationHealthPolicyArgsProvideDefaults sets the appropriate defaults for ArmApplicationHealthPolicyArgs
         */
        export function armApplicationHealthPolicyArgsProvideDefaults(val: ArmApplicationHealthPolicyArgs): ArmApplicationHealthPolicyArgs {
            return {
                ...val,
                considerWarningAsError: (val.considerWarningAsError) ?? false,
                defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? pulumi.output(val.defaultServiceTypeHealthPolicy).apply(v20210601.armServiceTypeHealthPolicyArgsProvideDefaults) : undefined),
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
            failureAction?: pulumi.Input<string | enums.v20210601.ArmUpgradeFailureAction>;
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
            applicationHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<v20210601.ApplicationHealthPolicyArgs>}>;
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
            applicationDeltaHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<v20210601.ApplicationDeltaHealthPolicyArgs>}>;
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
            deltaHealthPolicy?: pulumi.Input<v20210601.ClusterUpgradeDeltaHealthPolicyArgs>;
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
            healthPolicy: pulumi.Input<v20210601.ClusterHealthPolicyArgs>;
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
                healthPolicy: pulumi.output(val.healthPolicy).apply(v20210601.clusterHealthPolicyArgsProvideDefaults),
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
            type?: pulumi.Input<enums.v20210601.ManagedIdentityType>;
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
            applicationPorts?: pulumi.Input<v20210601.EndpointRangeDescriptionArgs>;
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
            ephemeralPorts?: pulumi.Input<v20210601.EndpointRangeDescriptionArgs>;
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
            notificationCategory: pulumi.Input<string | enums.v20210601.NotificationCategory>;
            /**
             * The level of notification.
             */
            notificationLevel: pulumi.Input<string | enums.v20210601.NotificationLevel>;
            /**
             * List of targets that subscribe to the notification.
             */
            notificationTargets: pulumi.Input<pulumi.Input<v20210601.NotificationTargetArgs>[]>;
        }

        /**
         * Describes the notification target properties.
         */
        export interface NotificationTargetArgs {
            /**
             * The notification channel indicates the type of receivers subscribed to the notification, either user or subscription.
             */
            notificationChannel: pulumi.Input<string | enums.v20210601.NotificationChannel>;
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
            commonNames?: pulumi.Input<pulumi.Input<v20210601.ServerCertificateCommonNameArgs>[]>;
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
            scheme: pulumi.Input<string | enums.v20210601.ServiceCorrelationScheme>;
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
            weight?: pulumi.Input<string | enums.v20210601.ServiceLoadMetricWeight>;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service.
         */
        export interface ServicePlacementPolicyDescriptionArgs {
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             */
            type: pulumi.Input<string | enums.v20210601.ServicePlacementPolicyType>;
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
            parameters: pulumi.Input<pulumi.Input<v20210601.SettingsParameterDescriptionArgs>[]>;
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

    }

    export namespace v20220101 {
        /**
         * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
         */
        export interface ApplicationTypeVersionsCleanupPolicyArgs {
            /**
             * Number of unused versions per application type to keep.
             */
            maxUnusedVersionsToKeep: pulumi.Input<number>;
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
         * Client certificate definition.
         */
        export interface ClientCertificateArgs {
            /**
             * Certificate common name.
             */
            commonName?: pulumi.Input<string>;
            /**
             * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
             */
            isAdmin: pulumi.Input<boolean>;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: pulumi.Input<string>;
            /**
             * Certificate thumbprint.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * IPTag associated with the object.
         */
        export interface IPTagArgs {
            /**
             * The IP tag type.
             */
            ipTagType: pulumi.Input<string>;
            /**
             * The value of the IP tag.
             */
            tag: pulumi.Input<string>;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleArgs {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: pulumi.Input<number>;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: pulumi.Input<number>;
            /**
             * The load distribution policy for this rule.
             */
            loadDistribution?: pulumi.Input<string>;
            /**
             * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
             */
            probePort?: pulumi.Input<number>;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: pulumi.Input<string | enums.v20220101.ProbeProtocol>;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: pulumi.Input<string>;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: pulumi.Input<string | enums.v20220101.Protocol>;
        }

        /**
         * Describes a network security rule.
         */
        export interface NetworkSecurityRuleArgs {
            /**
             * The network traffic is allowed or denied.
             */
            access: pulumi.Input<string | enums.v20220101.Access>;
            /**
             * Network security rule description.
             */
            description?: pulumi.Input<string>;
            /**
             * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destinationAddressPrefix?: pulumi.Input<string>;
            /**
             * The destination address prefixes. CIDR or destination IP ranges.
             */
            destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            destinationPortRange?: pulumi.Input<string>;
            /**
             * The destination port ranges.
             */
            destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Network security rule direction.
             */
            direction: pulumi.Input<string | enums.v20220101.Direction>;
            /**
             * Network security rule name.
             */
            name: pulumi.Input<string>;
            /**
             * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
             */
            priority: pulumi.Input<number>;
            /**
             * Network protocol this rule applies to.
             */
            protocol: pulumi.Input<string | enums.v20220101.NsgProtocol>;
            /**
             * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            sourceAddressPrefix?: pulumi.Input<string>;
            /**
             * The CIDR or source IP ranges.
             */
            sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            sourcePortRange?: pulumi.Input<string>;
            /**
             * The source port ranges.
             */
            sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The service endpoint properties.
         */
        export interface ServiceEndpointArgs {
            /**
             * A list of locations.
             */
            locations?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The type of the endpoint service.
             */
            service: pulumi.Input<string>;
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
            parameters: pulumi.Input<pulumi.Input<v20220101.SettingsParameterDescriptionArgs>[]>;
        }

        /**
         * Service Fabric managed cluster Sku definition
         */
        export interface SkuArgs {
            /**
             * Sku Name.
             */
            name: pulumi.Input<string | enums.v20220101.SkuName>;
        }

        /**
         * Describes a Subnet.
         */
        export interface SubnetArgs {
            /**
             * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
             */
            enableIpv6?: pulumi.Input<boolean>;
            /**
             * Subnet name.
             */
            name: pulumi.Input<string>;
            /**
             * Full resource id for the network security group.
             */
            networkSecurityGroupId?: pulumi.Input<string>;
            /**
             * Enable or Disable apply network policies on private end point in the subnet.
             */
            privateEndpointNetworkPolicies?: pulumi.Input<string | enums.v20220101.PrivateEndpointNetworkPolicies>;
            /**
             * Enable or Disable apply network policies on private link service in the subnet.
             */
            privateLinkServiceNetworkPolicies?: pulumi.Input<string | enums.v20220101.PrivateLinkServiceNetworkPolicies>;
        }

    }

    export namespace v20221001preview {
        /**
         * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
         */
        export interface ApplicationTypeVersionsCleanupPolicyArgs {
            /**
             * Number of unused versions per application type to keep.
             */
            maxUnusedVersionsToKeep: pulumi.Input<number>;
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
         * Client certificate definition.
         */
        export interface ClientCertificateArgs {
            /**
             * Certificate common name.
             */
            commonName?: pulumi.Input<string>;
            /**
             * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
             */
            isAdmin: pulumi.Input<boolean>;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: pulumi.Input<string>;
            /**
             * Certificate thumbprint.
             */
            thumbprint?: pulumi.Input<string>;
        }

        /**
         * IPTag associated with the object.
         */
        export interface IPTagArgs {
            /**
             * The IP tag type.
             */
            ipTagType: pulumi.Input<string>;
            /**
             * The value of the IP tag.
             */
            tag: pulumi.Input<string>;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleArgs {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: pulumi.Input<number>;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: pulumi.Input<number>;
            /**
             * The load distribution policy for this rule.
             */
            loadDistribution?: pulumi.Input<string>;
            /**
             * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
             */
            probePort?: pulumi.Input<number>;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: pulumi.Input<string | enums.v20221001preview.ProbeProtocol>;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: pulumi.Input<string>;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: pulumi.Input<string | enums.v20221001preview.Protocol>;
        }

        /**
         * Describes a network security rule.
         */
        export interface NetworkSecurityRuleArgs {
            /**
             * The network traffic is allowed or denied.
             */
            access: pulumi.Input<string | enums.v20221001preview.Access>;
            /**
             * Network security rule description.
             */
            description?: pulumi.Input<string>;
            /**
             * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destinationAddressPrefix?: pulumi.Input<string>;
            /**
             * The destination address prefixes. CIDR or destination IP ranges.
             */
            destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            destinationPortRange?: pulumi.Input<string>;
            /**
             * The destination port ranges.
             */
            destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Network security rule direction.
             */
            direction: pulumi.Input<string | enums.v20221001preview.Direction>;
            /**
             * Network security rule name.
             */
            name: pulumi.Input<string>;
            /**
             * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
             */
            priority: pulumi.Input<number>;
            /**
             * Network protocol this rule applies to.
             */
            protocol: pulumi.Input<string | enums.v20221001preview.NsgProtocol>;
            /**
             * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            sourceAddressPrefix?: pulumi.Input<string>;
            /**
             * The CIDR or source IP ranges.
             */
            sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            sourcePortRange?: pulumi.Input<string>;
            /**
             * The source port ranges.
             */
            sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * The service endpoint properties.
         */
        export interface ServiceEndpointArgs {
            /**
             * A list of locations.
             */
            locations?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The type of the endpoint service.
             */
            service: pulumi.Input<string>;
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
            parameters: pulumi.Input<pulumi.Input<v20221001preview.SettingsParameterDescriptionArgs>[]>;
        }

        /**
         * Service Fabric managed cluster Sku definition
         */
        export interface SkuArgs {
            /**
             * Sku Name.
             */
            name: pulumi.Input<string | enums.v20221001preview.SkuName>;
        }

        /**
         * Describes a Subnet.
         */
        export interface SubnetArgs {
            /**
             * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
             */
            enableIpv6?: pulumi.Input<boolean>;
            /**
             * Subnet name.
             */
            name: pulumi.Input<string>;
            /**
             * Full resource id for the network security group.
             */
            networkSecurityGroupId?: pulumi.Input<string>;
            /**
             * Enable or Disable apply network policies on private end point in the subnet.
             */
            privateEndpointNetworkPolicies?: pulumi.Input<string | enums.v20221001preview.PrivateEndpointNetworkPolicies>;
            /**
             * Enable or Disable apply network policies on private link service in the subnet.
             */
            privateLinkServiceNetworkPolicies?: pulumi.Input<string | enums.v20221001preview.PrivateLinkServiceNetworkPolicies>;
        }

    }

    export namespace v20230301preview {
        /**
         * Represents a scaling mechanism for adding or removing named partitions of a stateless service. Partition names are in the format '0','1'...'N-1'.
         */
        export interface AddRemoveIncrementalNamedPartitionScalingMechanismArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AddRemoveIncrementalNamedPartition'.
             */
            kind: pulumi.Input<"AddRemoveIncrementalNamedPartition">;
            /**
             * Maximum number of named partitions of the service.
             */
            maxPartitionCount: pulumi.Input<number>;
            /**
             * Minimum number of named partitions of the service.
             */
            minPartitionCount: pulumi.Input<number>;
            /**
             * The number of instances to add or remove during a scaling operation.
             */
            scaleIncrement: pulumi.Input<number>;
        }

        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        export interface ApplicationHealthPolicyArgs {
            /**
             * Indicates whether warnings are treated with the same severity as errors.
             */
            considerWarningAsError: pulumi.Input<boolean>;
            /**
             * The health policy used by default to evaluate the health of a service type.
             */
            defaultServiceTypeHealthPolicy?: pulumi.Input<v20230301preview.ServiceTypeHealthPolicyArgs>;
            /**
             * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
             * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
             * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
             * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
             */
            maxPercentUnhealthyDeployedApplications: pulumi.Input<number>;
            /**
             * The map with service type health policy per service type name. The map is empty by default.
             */
            serviceTypeHealthPolicyMap?: pulumi.Input<{[key: string]: pulumi.Input<v20230301preview.ServiceTypeHealthPolicyArgs>}>;
        }

        /**
         * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
         */
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
            applicationHealthPolicy?: pulumi.Input<v20230301preview.ApplicationHealthPolicyArgs>;
            /**
             * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
             */
            forceRestart?: pulumi.Input<boolean>;
            /**
             * Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description.
             */
            instanceCloseDelayDuration?: pulumi.Input<number>;
            /**
             * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed.
             */
            recreateApplication?: pulumi.Input<boolean>;
            /**
             * The policy used for monitoring the application upgrade
             */
            rollingUpgradeMonitoringPolicy?: pulumi.Input<v20230301preview.RollingUpgradeMonitoringPolicyArgs>;
            /**
             * The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
             */
            upgradeMode?: pulumi.Input<string | enums.v20230301preview.RollingUpgradeMode>;
            /**
             * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
             */
            upgradeReplicaSetCheckTimeout?: pulumi.Input<number>;
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
         * Represents a scaling trigger related to an average load of a metric/resource of a partition.
         */
        export interface AveragePartitionLoadScalingTriggerArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AveragePartitionLoadTrigger'.
             */
            kind: pulumi.Input<"AveragePartitionLoadTrigger">;
            /**
             * The lower limit of the load below which a scale in operation should be performed.
             */
            lowerLoadThreshold: pulumi.Input<number>;
            /**
             * The name of the metric for which usage should be tracked.
             */
            metricName: pulumi.Input<string>;
            /**
             * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
             */
            scaleInterval: pulumi.Input<string>;
            /**
             * The upper limit of the load beyond which a scale out operation should be performed.
             */
            upperLoadThreshold: pulumi.Input<number>;
        }

        /**
         * Represents a scaling policy related to an average load of a metric/resource of a service.
         */
        export interface AverageServiceLoadScalingTriggerArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AverageServiceLoadTrigger'.
             */
            kind: pulumi.Input<"AverageServiceLoadTrigger">;
            /**
             * The lower limit of the load below which a scale in operation should be performed.
             */
            lowerLoadThreshold: pulumi.Input<number>;
            /**
             * The name of the metric for which usage should be tracked.
             */
            metricName: pulumi.Input<string>;
            /**
             * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
             */
            scaleInterval: pulumi.Input<string>;
            /**
             * The upper limit of the load beyond which a scale out operation should be performed.
             */
            upperLoadThreshold: pulumi.Input<number>;
            /**
             * Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service.
             */
            useOnlyPrimaryLoad: pulumi.Input<boolean>;
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
         * Client certificate definition.
         */
        export interface ClientCertificateArgs {
            /**
             * Certificate common name.
             */
            commonName?: pulumi.Input<string>;
            /**
             * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
             */
            isAdmin: pulumi.Input<boolean>;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: pulumi.Input<string>;
            /**
             * Certificate thumbprint.
             */
            thumbprint?: pulumi.Input<string>;
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
         * Describes the frontend configurations for the node type.
         */
        export interface FrontendConfigurationArgs {
            /**
             * The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/applicationGateways/<applicationGatewayName>/backendAddressPools/<backendAddressPoolName>'.
             */
            applicationGatewayBackendAddressPoolId?: pulumi.Input<string>;
            /**
             * The IP address type of this frontend configuration. If omitted the default value is IPv4.
             */
            ipAddressType?: pulumi.Input<string | enums.v20230301preview.IPAddressType>;
            /**
             * The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/backendAddressPools/<backendAddressPoolName>'.
             */
            loadBalancerBackendAddressPoolId?: pulumi.Input<string>;
            /**
             * The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/inboundNatPools/<inboundNatPoolName>'.
             */
            loadBalancerInboundNatPoolId?: pulumi.Input<string>;
        }

        /**
         * IPTag associated with the object.
         */
        export interface IPTagArgs {
            /**
             * The IP tag type.
             */
            ipTagType: pulumi.Input<string>;
            /**
             * The value of the IP tag.
             */
            tag: pulumi.Input<string>;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleArgs {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: pulumi.Input<number>;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: pulumi.Input<number>;
            /**
             * The load distribution policy for this rule.
             */
            loadDistribution?: pulumi.Input<string>;
            /**
             * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
             */
            probePort?: pulumi.Input<number>;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: pulumi.Input<string | enums.v20230301preview.ProbeProtocol>;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: pulumi.Input<string>;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: pulumi.Input<string | enums.v20230301preview.Protocol>;
        }

        /**
         * Describes the managed identities for an Azure resource.
         */
        export interface ManagedIdentityArgs {
            /**
             * The type of managed identity for the resource.
             */
            type?: pulumi.Input<enums.v20230301preview.ManagedIdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Describes the named partition scheme of the service.
         */
        export interface NamedPartitionSchemeArgs {
            /**
             * Array for the names of the partitions.
             */
            names: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'Named'.
             */
            partitionScheme: pulumi.Input<"Named">;
        }

        /**
         * Describes a network security rule.
         */
        export interface NetworkSecurityRuleArgs {
            /**
             * The network traffic is allowed or denied.
             */
            access: pulumi.Input<string | enums.v20230301preview.Access>;
            /**
             * Network security rule description.
             */
            description?: pulumi.Input<string>;
            /**
             * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destinationAddressPrefix?: pulumi.Input<string>;
            /**
             * The destination address prefixes. CIDR or destination IP ranges.
             */
            destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            destinationPortRange?: pulumi.Input<string>;
            /**
             * The destination port ranges.
             */
            destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Network security rule direction.
             */
            direction: pulumi.Input<string | enums.v20230301preview.Direction>;
            /**
             * Network security rule name.
             */
            name: pulumi.Input<string>;
            /**
             * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
             */
            priority: pulumi.Input<number>;
            /**
             * Network protocol this rule applies to.
             */
            protocol: pulumi.Input<string | enums.v20230301preview.NsgProtocol>;
            /**
             * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            sourceAddressPrefix?: pulumi.Input<string>;
            /**
             * The CIDR or source IP ranges.
             */
            sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            sourcePortRange?: pulumi.Input<string>;
            /**
             * The source port ranges.
             */
            sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Describes a node type sku.
         */
        export interface NodeTypeSkuArgs {
            /**
             * The number of nodes in the node type.<br /><br />If present in request it will override properties.vmInstanceCount.
             */
            capacity: pulumi.Input<number>;
            /**
             * The sku name. <br /><br />Name is internally generated and is used in auto-scale scenarios.<br /> Property does not allow to be changed to other values than generated.<br /> To avoid deployment errors please omit the property.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the tier of the node type. <br /><br /> Possible Values:<br /> **Standard**
             */
            tier?: pulumi.Input<string>;
        }

        /**
         * Represents a scaling mechanism for adding or removing instances of stateless service partition.
         */
        export interface PartitionInstanceCountScaleMechanismArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'ScalePartitionInstanceCount'.
             */
            kind: pulumi.Input<"ScalePartitionInstanceCount">;
            /**
             * Maximum number of instances of the partition.
             */
            maxInstanceCount: pulumi.Input<number>;
            /**
             * Minimum number of instances of the partition.
             */
            minInstanceCount: pulumi.Input<number>;
            /**
             * The number of instances to add or remove during a scaling operation.
             */
            scaleIncrement: pulumi.Input<number>;
        }

        /**
         * The policy used for monitoring the application upgrade
         */
        export interface RollingUpgradeMonitoringPolicyArgs {
            /**
             * The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
             */
            failureAction: pulumi.Input<string | enums.v20230301preview.FailureAction>;
            /**
             * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckRetryTimeout: pulumi.Input<string>;
            /**
             * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckStableDuration: pulumi.Input<string>;
            /**
             * The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckWaitDuration: pulumi.Input<string>;
            /**
             * The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            upgradeDomainTimeout: pulumi.Input<string>;
            /**
             * The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            upgradeTimeout: pulumi.Input<string>;
        }

        /**
         * Specifies a metric to load balance a service during runtime.
         */
        export interface ScalingPolicyArgs {
            /**
             * Specifies the mechanism associated with this scaling policy
             */
            scalingMechanism: pulumi.Input<v20230301preview.AddRemoveIncrementalNamedPartitionScalingMechanismArgs | v20230301preview.PartitionInstanceCountScaleMechanismArgs>;
            /**
             * Specifies the trigger associated with this scaling policy.
             */
            scalingTrigger: pulumi.Input<v20230301preview.AveragePartitionLoadScalingTriggerArgs | v20230301preview.AverageServiceLoadScalingTriggerArgs>;
        }

        /**
         * Creates a particular correlation between services.
         */
        export interface ServiceCorrelationArgs {
            /**
             * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
             */
            scheme: pulumi.Input<string | enums.v20230301preview.ServiceCorrelationScheme>;
            /**
             * The Arm Resource ID of the service that the correlation relationship is established with.
             */
            serviceName: pulumi.Input<string>;
        }

        /**
         * The service endpoint properties.
         */
        export interface ServiceEndpointArgs {
            /**
             * A list of locations.
             */
            locations?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The type of the endpoint service.
             */
            service: pulumi.Input<string>;
        }

        /**
         * Specifies a metric to load balance a service during runtime.
         */
        export interface ServiceLoadMetricArgs {
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
            weight?: pulumi.Input<string | enums.v20230301preview.ServiceLoadMetricWeight>;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.
         */
        export interface ServicePlacementInvalidDomainPolicyArgs {
            /**
             * The name of the domain that should not be used for placement.
             */
            domainName: pulumi.Input<string>;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'InvalidDomain'.
             */
            type: pulumi.Input<"InvalidDomain">;
        }

        /**
         * The name of the domain that should used for placement as per this policy.
         */
        export interface ServicePlacementNonPartiallyPlaceServicePolicyArgs {
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'NonPartiallyPlaceService'.
             */
            type: pulumi.Input<"NonPartiallyPlaceService">;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where the service's 
         * Primary replicas should optimally be placed in a particular domain.
         *
         * This placement policy is usually used with fault domains in scenarios where the Service Fabric
         * cluster is geographically distributed in order to indicate that a service's primary replica should
         * be located in a particular fault domain, which in geo-distributed scenarios usually aligns with regional
         * or datacenter boundaries. Note that since this is an optimization it is possible that the Primary replica
         * may not end up located in this domain due to failures, capacity limits, or other constraints.
         */
        export interface ServicePlacementPreferPrimaryDomainPolicyArgs {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: pulumi.Input<string>;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'PreferredPrimaryDomain'.
             */
            type: pulumi.Input<"PreferredPrimaryDomain">;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where two replicas
         * from the same partition should never be placed in the same fault or upgrade domain.
         *
         * While this is not common it can expose the service to an increased risk of concurrent failures
         * due to unplanned outages or other cases of subsequent/concurrent failures. As an example, consider
         * a case where replicas are deployed across different data center, with one replica per location.
         * In the event that one of the datacenters goes offline, normally the replica that was placed in that
         * datacenter will be packed into one of the remaining datacenters. If this is not desirable then this
         * policy should be set.
         */
        export interface ServicePlacementRequireDomainDistributionPolicyArgs {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: pulumi.Input<string>;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'RequiredDomainDistribution'.
             */
            type: pulumi.Input<"RequiredDomainDistribution">;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain.
         */
        export interface ServicePlacementRequiredDomainPolicyArgs {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: pulumi.Input<string>;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'RequiredDomain'.
             */
            type: pulumi.Input<"RequiredDomain">;
        }

        /**
         * Represents the health policy used to evaluate the health of services belonging to a service type.
         */
        export interface ServiceTypeHealthPolicyArgs {
            /**
             * The maximum allowed percentage of unhealthy partitions per service.
             *
             * The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.
             * If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.
             * The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.
             * The computation rounds up to tolerate one failure on small numbers of partitions.
             */
            maxPercentUnhealthyPartitionsPerService: pulumi.Input<number>;
            /**
             * The maximum allowed percentage of unhealthy replicas per partition.
             *
             * The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.
             * If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.
             * The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.
             * The computation rounds up to tolerate one failure on small numbers of replicas.
             */
            maxPercentUnhealthyReplicasPerPartition: pulumi.Input<number>;
            /**
             * The maximum allowed percentage of unhealthy services.
             *
             * The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.
             * If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.
             * This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.
             * The computation rounds up to tolerate one failure on small numbers of services.
             */
            maxPercentUnhealthyServices: pulumi.Input<number>;
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
            parameters: pulumi.Input<pulumi.Input<v20230301preview.SettingsParameterDescriptionArgs>[]>;
        }

        /**
         * Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
         */
        export interface SingletonPartitionSchemeArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'Singleton'.
             */
            partitionScheme: pulumi.Input<"Singleton">;
        }

        /**
         * Service Fabric managed cluster Sku definition
         */
        export interface SkuArgs {
            /**
             * Sku Name.
             */
            name: pulumi.Input<string | enums.v20230301preview.SkuName>;
        }

        /**
         * The properties of a stateful service resource.
         */
        export interface StatefulServicePropertiesArgs {
            /**
             * A list that describes the correlation of the service with other services.
             */
            correlationScheme?: pulumi.Input<pulumi.Input<v20230301preview.ServiceCorrelationArgs>[]>;
            /**
             * Specifies the move cost for the service.
             */
            defaultMoveCost?: pulumi.Input<string | enums.v20230301preview.MoveCost>;
            /**
             * A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
             */
            hasPersistedState?: pulumi.Input<boolean>;
            /**
             * The minimum replica set size as a number.
             */
            minReplicaSetSize?: pulumi.Input<number>;
            /**
             * Describes how the service is partitioned.
             */
            partitionDescription: pulumi.Input<v20230301preview.NamedPartitionSchemeArgs | v20230301preview.SingletonPartitionSchemeArgs | v20230301preview.UniformInt64RangePartitionSchemeArgs>;
            /**
             * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
             */
            placementConstraints?: pulumi.Input<string>;
            /**
             * The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss".
             */
            quorumLossWaitDuration?: pulumi.Input<string>;
            /**
             * The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss".
             */
            replicaRestartWaitDuration?: pulumi.Input<string>;
            /**
             * Scaling policies for this service.
             */
            scalingPolicies?: pulumi.Input<pulumi.Input<v20230301preview.ScalingPolicyArgs>[]>;
            /**
             * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
             * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
             * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
             */
            serviceDnsName?: pulumi.Input<string>;
            /**
             * The kind of service (Stateless or Stateful).
             * Expected value is 'Stateful'.
             */
            serviceKind: pulumi.Input<"Stateful">;
            /**
             * The service load metrics is given as an array of ServiceLoadMetric objects.
             */
            serviceLoadMetrics?: pulumi.Input<pulumi.Input<v20230301preview.ServiceLoadMetricArgs>[]>;
            /**
             * The activation Mode of the service package
             */
            servicePackageActivationMode?: pulumi.Input<string | enums.v20230301preview.ServicePackageActivationMode>;
            /**
             * A list that describes the correlation of the service with other services.
             */
            servicePlacementPolicies?: pulumi.Input<pulumi.Input<v20230301preview.ServicePlacementInvalidDomainPolicyArgs | v20230301preview.ServicePlacementNonPartiallyPlaceServicePolicyArgs | v20230301preview.ServicePlacementPreferPrimaryDomainPolicyArgs | v20230301preview.ServicePlacementRequireDomainDistributionPolicyArgs | v20230301preview.ServicePlacementRequiredDomainPolicyArgs>[]>;
            /**
             * The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss".
             */
            servicePlacementTimeLimit?: pulumi.Input<string>;
            /**
             * The name of the service type
             */
            serviceTypeName: pulumi.Input<string>;
            /**
             * The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss".
             */
            standByReplicaKeepDuration?: pulumi.Input<string>;
            /**
             * The target replica set size as a number.
             */
            targetReplicaSetSize?: pulumi.Input<number>;
        }

        /**
         * The properties of a stateless service resource.
         */
        export interface StatelessServicePropertiesArgs {
            /**
             * A list that describes the correlation of the service with other services.
             */
            correlationScheme?: pulumi.Input<pulumi.Input<v20230301preview.ServiceCorrelationArgs>[]>;
            /**
             * Specifies the move cost for the service.
             */
            defaultMoveCost?: pulumi.Input<string | enums.v20230301preview.MoveCost>;
            /**
             * The instance count.
             */
            instanceCount: pulumi.Input<number>;
            /**
             * MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
             */
            minInstanceCount?: pulumi.Input<number>;
            /**
             * MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
             */
            minInstancePercentage?: pulumi.Input<number>;
            /**
             * Describes how the service is partitioned.
             */
            partitionDescription: pulumi.Input<v20230301preview.NamedPartitionSchemeArgs | v20230301preview.SingletonPartitionSchemeArgs | v20230301preview.UniformInt64RangePartitionSchemeArgs>;
            /**
             * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
             */
            placementConstraints?: pulumi.Input<string>;
            /**
             * Scaling policies for this service.
             */
            scalingPolicies?: pulumi.Input<pulumi.Input<v20230301preview.ScalingPolicyArgs>[]>;
            /**
             * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
             * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
             * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
             */
            serviceDnsName?: pulumi.Input<string>;
            /**
             * The kind of service (Stateless or Stateful).
             * Expected value is 'Stateless'.
             */
            serviceKind: pulumi.Input<"Stateless">;
            /**
             * The service load metrics is given as an array of ServiceLoadMetric objects.
             */
            serviceLoadMetrics?: pulumi.Input<pulumi.Input<v20230301preview.ServiceLoadMetricArgs>[]>;
            /**
             * The activation Mode of the service package
             */
            servicePackageActivationMode?: pulumi.Input<string | enums.v20230301preview.ServicePackageActivationMode>;
            /**
             * A list that describes the correlation of the service with other services.
             */
            servicePlacementPolicies?: pulumi.Input<pulumi.Input<v20230301preview.ServicePlacementInvalidDomainPolicyArgs | v20230301preview.ServicePlacementNonPartiallyPlaceServicePolicyArgs | v20230301preview.ServicePlacementPreferPrimaryDomainPolicyArgs | v20230301preview.ServicePlacementRequireDomainDistributionPolicyArgs | v20230301preview.ServicePlacementRequiredDomainPolicyArgs>[]>;
            /**
             * The name of the service type
             */
            serviceTypeName: pulumi.Input<string>;
        }

        /**
         * Azure resource identifier.
         */
        export interface SubResourceArgs {
            /**
             * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
             * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
             * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
             * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * Describes a Subnet.
         */
        export interface SubnetArgs {
            /**
             * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
             */
            enableIpv6?: pulumi.Input<boolean>;
            /**
             * Subnet name.
             */
            name: pulumi.Input<string>;
            /**
             * Full resource id for the network security group.
             */
            networkSecurityGroupId?: pulumi.Input<string>;
            /**
             * Enable or Disable apply network policies on private end point in the subnet.
             */
            privateEndpointNetworkPolicies?: pulumi.Input<string | enums.v20230301preview.PrivateEndpointNetworkPolicies>;
            /**
             * Enable or Disable apply network policies on private link service in the subnet.
             */
            privateLinkServiceNetworkPolicies?: pulumi.Input<string | enums.v20230301preview.PrivateLinkServiceNetworkPolicies>;
        }

        /**
         * Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.
         */
        export interface UniformInt64RangePartitionSchemeArgs {
            /**
             * The number of partitions.
             */
            count: pulumi.Input<number>;
            /**
             * The upper bound of the partition key range that
             * should be split between the partition ‘Count’
             */
            highKey: pulumi.Input<number>;
            /**
             * The lower bound of the partition key range that
             * should be split between the partition ‘Count’
             */
            lowKey: pulumi.Input<number>;
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'UniformInt64Range'.
             */
            partitionScheme: pulumi.Input<"UniformInt64Range">;
        }

        /**
         * Specifies set of extensions that should be installed onto the virtual machines.
         */
        export interface VMSSExtensionArgs {
            /**
             * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
             */
            autoUpgradeMinorVersion?: pulumi.Input<boolean>;
            /**
             * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
             */
            enableAutomaticUpgrade?: pulumi.Input<boolean>;
            /**
             * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
             */
            forceUpdateTag?: pulumi.Input<string>;
            /**
             * The name of the extension.
             */
            name: pulumi.Input<string>;
            /**
             * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
             */
            protectedSettings?: any;
            /**
             * Collection of extension names after which this extension needs to be provisioned.
             */
            provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The name of the extension handler publisher.
             */
            publisher: pulumi.Input<string>;
            /**
             * Json formatted public settings for the extension.
             */
            settings?: any;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion: pulumi.Input<string>;
        }

        /**
         * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
         */
        export interface VaultCertificateArgs {
            /**
             * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
             */
            certificateStore: pulumi.Input<string>;
            /**
             * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
             */
            certificateUrl: pulumi.Input<string>;
        }

        /**
         * Specifies set of certificates that should be installed onto the virtual machines.
         */
        export interface VaultSecretGroupArgs {
            /**
             * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
             */
            sourceVault: pulumi.Input<v20230301preview.SubResourceArgs>;
            /**
             * The list of key vault references in SourceVault which contain certificates.
             */
            vaultCertificates: pulumi.Input<pulumi.Input<v20230301preview.VaultCertificateArgs>[]>;
        }

        /**
         * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save.
         */
        export interface VmImagePlanArgs {
            /**
             * The plan ID.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
             */
            product?: pulumi.Input<string>;
            /**
             * The promotion code.
             */
            promotionCode?: pulumi.Input<string>;
            /**
             * The publisher ID.
             */
            publisher?: pulumi.Input<string>;
        }

        /**
         * Identities for the virtual machine scale set under the node type.
         */
        export interface VmManagedIdentityArgs {
            /**
             * The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Managed data disk description.
         */
        export interface VmssDataDiskArgs {
            /**
             * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
             */
            diskLetter: pulumi.Input<string>;
            /**
             * Disk size for each vm in the node type in GBs.
             */
            diskSizeGB: pulumi.Input<number>;
            /**
             * Managed data disk type. Specifies the storage account type for the managed disk
             */
            diskType: pulumi.Input<string | enums.v20230301preview.DiskType>;
            /**
             * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk.
             */
            lun: pulumi.Input<number>;
        }

    }

    export namespace v20230701preview {
        /**
         * Represents a scaling mechanism for adding or removing named partitions of a stateless service. Partition names are in the format '0','1'...'N-1'.
         */
        export interface AddRemoveIncrementalNamedPartitionScalingMechanismArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AddRemoveIncrementalNamedPartition'.
             */
            kind: pulumi.Input<"AddRemoveIncrementalNamedPartition">;
            /**
             * Maximum number of named partitions of the service.
             */
            maxPartitionCount: pulumi.Input<number>;
            /**
             * Minimum number of named partitions of the service.
             */
            minPartitionCount: pulumi.Input<number>;
            /**
             * The number of instances to add or remove during a scaling operation.
             */
            scaleIncrement: pulumi.Input<number>;
        }

        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        export interface ApplicationHealthPolicyArgs {
            /**
             * Indicates whether warnings are treated with the same severity as errors.
             */
            considerWarningAsError: pulumi.Input<boolean>;
            /**
             * The health policy used by default to evaluate the health of a service type.
             */
            defaultServiceTypeHealthPolicy?: pulumi.Input<v20230701preview.ServiceTypeHealthPolicyArgs>;
            /**
             * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
             * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
             * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
             * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
             */
            maxPercentUnhealthyDeployedApplications: pulumi.Input<number>;
            /**
             * The map with service type health policy per service type name. The map is empty by default.
             */
            serviceTypeHealthPolicyMap?: pulumi.Input<{[key: string]: pulumi.Input<v20230701preview.ServiceTypeHealthPolicyArgs>}>;
        }

        /**
         * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
         */
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
            applicationHealthPolicy?: pulumi.Input<v20230701preview.ApplicationHealthPolicyArgs>;
            /**
             * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
             */
            forceRestart?: pulumi.Input<boolean>;
            /**
             * Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description.
             */
            instanceCloseDelayDuration?: pulumi.Input<number>;
            /**
             * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed.
             */
            recreateApplication?: pulumi.Input<boolean>;
            /**
             * The policy used for monitoring the application upgrade
             */
            rollingUpgradeMonitoringPolicy?: pulumi.Input<v20230701preview.RollingUpgradeMonitoringPolicyArgs>;
            /**
             * The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
             */
            upgradeMode?: pulumi.Input<string | enums.v20230701preview.RollingUpgradeMode>;
            /**
             * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
             */
            upgradeReplicaSetCheckTimeout?: pulumi.Input<number>;
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
         * Represents a scaling trigger related to an average load of a metric/resource of a partition.
         */
        export interface AveragePartitionLoadScalingTriggerArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AveragePartitionLoadTrigger'.
             */
            kind: pulumi.Input<"AveragePartitionLoadTrigger">;
            /**
             * The lower limit of the load below which a scale in operation should be performed.
             */
            lowerLoadThreshold: pulumi.Input<number>;
            /**
             * The name of the metric for which usage should be tracked.
             */
            metricName: pulumi.Input<string>;
            /**
             * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
             */
            scaleInterval: pulumi.Input<string>;
            /**
             * The upper limit of the load beyond which a scale out operation should be performed.
             */
            upperLoadThreshold: pulumi.Input<number>;
        }

        /**
         * Represents a scaling policy related to an average load of a metric/resource of a service.
         */
        export interface AverageServiceLoadScalingTriggerArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AverageServiceLoadTrigger'.
             */
            kind: pulumi.Input<"AverageServiceLoadTrigger">;
            /**
             * The lower limit of the load below which a scale in operation should be performed.
             */
            lowerLoadThreshold: pulumi.Input<number>;
            /**
             * The name of the metric for which usage should be tracked.
             */
            metricName: pulumi.Input<string>;
            /**
             * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
             */
            scaleInterval: pulumi.Input<string>;
            /**
             * The upper limit of the load beyond which a scale out operation should be performed.
             */
            upperLoadThreshold: pulumi.Input<number>;
            /**
             * Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service.
             */
            useOnlyPrimaryLoad: pulumi.Input<boolean>;
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
         * Client certificate definition.
         */
        export interface ClientCertificateArgs {
            /**
             * Certificate common name.
             */
            commonName?: pulumi.Input<string>;
            /**
             * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
             */
            isAdmin: pulumi.Input<boolean>;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: pulumi.Input<string>;
            /**
             * Certificate thumbprint.
             */
            thumbprint?: pulumi.Input<string>;
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
         * Describes the frontend configurations for the node type.
         */
        export interface FrontendConfigurationArgs {
            /**
             * The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/applicationGateways/<applicationGatewayName>/backendAddressPools/<backendAddressPoolName>'.
             */
            applicationGatewayBackendAddressPoolId?: pulumi.Input<string>;
            /**
             * The IP address type of this frontend configuration. If omitted the default value is IPv4.
             */
            ipAddressType?: pulumi.Input<string | enums.v20230701preview.IPAddressType>;
            /**
             * The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/backendAddressPools/<backendAddressPoolName>'.
             */
            loadBalancerBackendAddressPoolId?: pulumi.Input<string>;
            /**
             * The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/inboundNatPools/<inboundNatPoolName>'.
             */
            loadBalancerInboundNatPoolId?: pulumi.Input<string>;
        }

        /**
         * IPTag associated with the object.
         */
        export interface IPTagArgs {
            /**
             * The IP tag type.
             */
            ipTagType: pulumi.Input<string>;
            /**
             * The value of the IP tag.
             */
            tag: pulumi.Input<string>;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleArgs {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: pulumi.Input<number>;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: pulumi.Input<number>;
            /**
             * The load distribution policy for this rule.
             */
            loadDistribution?: pulumi.Input<string>;
            /**
             * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
             */
            probePort?: pulumi.Input<number>;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: pulumi.Input<string | enums.v20230701preview.ProbeProtocol>;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: pulumi.Input<string>;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: pulumi.Input<string | enums.v20230701preview.Protocol>;
        }

        /**
         * Describes the managed identities for an Azure resource.
         */
        export interface ManagedIdentityArgs {
            /**
             * The type of managed identity for the resource.
             */
            type?: pulumi.Input<enums.v20230701preview.ManagedIdentityType>;
            /**
             * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
             * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Describes the named partition scheme of the service.
         */
        export interface NamedPartitionSchemeArgs {
            /**
             * Array for the names of the partitions.
             */
            names: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'Named'.
             */
            partitionScheme: pulumi.Input<"Named">;
        }

        /**
         * Describes a network security rule.
         */
        export interface NetworkSecurityRuleArgs {
            /**
             * The network traffic is allowed or denied.
             */
            access: pulumi.Input<string | enums.v20230701preview.Access>;
            /**
             * Network security rule description.
             */
            description?: pulumi.Input<string>;
            /**
             * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destinationAddressPrefix?: pulumi.Input<string>;
            /**
             * The destination address prefixes. CIDR or destination IP ranges.
             */
            destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            destinationPortRange?: pulumi.Input<string>;
            /**
             * The destination port ranges.
             */
            destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Network security rule direction.
             */
            direction: pulumi.Input<string | enums.v20230701preview.Direction>;
            /**
             * Network security rule name.
             */
            name: pulumi.Input<string>;
            /**
             * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
             */
            priority: pulumi.Input<number>;
            /**
             * Network protocol this rule applies to.
             */
            protocol: pulumi.Input<string | enums.v20230701preview.NsgProtocol>;
            /**
             * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            sourceAddressPrefix?: pulumi.Input<string>;
            /**
             * The CIDR or source IP ranges.
             */
            sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            sourcePortRange?: pulumi.Input<string>;
            /**
             * The source port ranges.
             */
            sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Describes a node type sku.
         */
        export interface NodeTypeSkuArgs {
            /**
             * The number of nodes in the node type.<br /><br />If present in request it will override properties.vmInstanceCount.
             */
            capacity: pulumi.Input<number>;
            /**
             * The sku name. <br /><br />Name is internally generated and is used in auto-scale scenarios.<br /> Property does not allow to be changed to other values than generated.<br /> To avoid deployment errors please omit the property.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the tier of the node type. <br /><br /> Possible Values:<br /> **Standard**
             */
            tier?: pulumi.Input<string>;
        }

        /**
         * Represents a scaling mechanism for adding or removing instances of stateless service partition.
         */
        export interface PartitionInstanceCountScaleMechanismArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'ScalePartitionInstanceCount'.
             */
            kind: pulumi.Input<"ScalePartitionInstanceCount">;
            /**
             * Maximum number of instances of the partition.
             */
            maxInstanceCount: pulumi.Input<number>;
            /**
             * Minimum number of instances of the partition.
             */
            minInstanceCount: pulumi.Input<number>;
            /**
             * The number of instances to add or remove during a scaling operation.
             */
            scaleIncrement: pulumi.Input<number>;
        }

        /**
         * The policy used for monitoring the application upgrade
         */
        export interface RollingUpgradeMonitoringPolicyArgs {
            /**
             * The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
             */
            failureAction: pulumi.Input<string | enums.v20230701preview.FailureAction>;
            /**
             * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckRetryTimeout: pulumi.Input<string>;
            /**
             * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckStableDuration: pulumi.Input<string>;
            /**
             * The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckWaitDuration: pulumi.Input<string>;
            /**
             * The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            upgradeDomainTimeout: pulumi.Input<string>;
            /**
             * The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            upgradeTimeout: pulumi.Input<string>;
        }

        /**
         * Specifies a metric to load balance a service during runtime.
         */
        export interface ScalingPolicyArgs {
            /**
             * Specifies the mechanism associated with this scaling policy
             */
            scalingMechanism: pulumi.Input<v20230701preview.AddRemoveIncrementalNamedPartitionScalingMechanismArgs | v20230701preview.PartitionInstanceCountScaleMechanismArgs>;
            /**
             * Specifies the trigger associated with this scaling policy.
             */
            scalingTrigger: pulumi.Input<v20230701preview.AveragePartitionLoadScalingTriggerArgs | v20230701preview.AverageServiceLoadScalingTriggerArgs>;
        }

        /**
         * Creates a particular correlation between services.
         */
        export interface ServiceCorrelationArgs {
            /**
             * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
             */
            scheme: pulumi.Input<string | enums.v20230701preview.ServiceCorrelationScheme>;
            /**
             * The Arm Resource ID of the service that the correlation relationship is established with.
             */
            serviceName: pulumi.Input<string>;
        }

        /**
         * The service endpoint properties.
         */
        export interface ServiceEndpointArgs {
            /**
             * A list of locations.
             */
            locations?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The type of the endpoint service.
             */
            service: pulumi.Input<string>;
        }

        /**
         * Specifies a metric to load balance a service during runtime.
         */
        export interface ServiceLoadMetricArgs {
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
            weight?: pulumi.Input<string | enums.v20230701preview.ServiceLoadMetricWeight>;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.
         */
        export interface ServicePlacementInvalidDomainPolicyArgs {
            /**
             * The name of the domain that should not be used for placement.
             */
            domainName: pulumi.Input<string>;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'InvalidDomain'.
             */
            type: pulumi.Input<"InvalidDomain">;
        }

        /**
         * The name of the domain that should used for placement as per this policy.
         */
        export interface ServicePlacementNonPartiallyPlaceServicePolicyArgs {
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'NonPartiallyPlaceService'.
             */
            type: pulumi.Input<"NonPartiallyPlaceService">;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where the service's 
         * Primary replicas should optimally be placed in a particular domain.
         *
         * This placement policy is usually used with fault domains in scenarios where the Service Fabric
         * cluster is geographically distributed in order to indicate that a service's primary replica should
         * be located in a particular fault domain, which in geo-distributed scenarios usually aligns with regional
         * or datacenter boundaries. Note that since this is an optimization it is possible that the Primary replica
         * may not end up located in this domain due to failures, capacity limits, or other constraints.
         */
        export interface ServicePlacementPreferPrimaryDomainPolicyArgs {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: pulumi.Input<string>;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'PreferredPrimaryDomain'.
             */
            type: pulumi.Input<"PreferredPrimaryDomain">;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where two replicas
         * from the same partition should never be placed in the same fault or upgrade domain.
         *
         * While this is not common it can expose the service to an increased risk of concurrent failures
         * due to unplanned outages or other cases of subsequent/concurrent failures. As an example, consider
         * a case where replicas are deployed across different data center, with one replica per location.
         * In the event that one of the datacenters goes offline, normally the replica that was placed in that
         * datacenter will be packed into one of the remaining datacenters. If this is not desirable then this
         * policy should be set.
         */
        export interface ServicePlacementRequireDomainDistributionPolicyArgs {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: pulumi.Input<string>;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'RequiredDomainDistribution'.
             */
            type: pulumi.Input<"RequiredDomainDistribution">;
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain.
         */
        export interface ServicePlacementRequiredDomainPolicyArgs {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: pulumi.Input<string>;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'RequiredDomain'.
             */
            type: pulumi.Input<"RequiredDomain">;
        }

        /**
         * Represents the health policy used to evaluate the health of services belonging to a service type.
         */
        export interface ServiceTypeHealthPolicyArgs {
            /**
             * The maximum allowed percentage of unhealthy partitions per service.
             *
             * The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.
             * If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.
             * The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.
             * The computation rounds up to tolerate one failure on small numbers of partitions.
             */
            maxPercentUnhealthyPartitionsPerService: pulumi.Input<number>;
            /**
             * The maximum allowed percentage of unhealthy replicas per partition.
             *
             * The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.
             * If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.
             * The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.
             * The computation rounds up to tolerate one failure on small numbers of replicas.
             */
            maxPercentUnhealthyReplicasPerPartition: pulumi.Input<number>;
            /**
             * The maximum allowed percentage of unhealthy services.
             *
             * The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.
             * If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.
             * This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.
             * The computation rounds up to tolerate one failure on small numbers of services.
             */
            maxPercentUnhealthyServices: pulumi.Input<number>;
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
            parameters: pulumi.Input<pulumi.Input<v20230701preview.SettingsParameterDescriptionArgs>[]>;
        }

        /**
         * Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
         */
        export interface SingletonPartitionSchemeArgs {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'Singleton'.
             */
            partitionScheme: pulumi.Input<"Singleton">;
        }

        /**
         * Service Fabric managed cluster Sku definition
         */
        export interface SkuArgs {
            /**
             * Sku Name.
             */
            name: pulumi.Input<string | enums.v20230701preview.SkuName>;
        }

        /**
         * The properties of a stateful service resource.
         */
        export interface StatefulServicePropertiesArgs {
            /**
             * A list that describes the correlation of the service with other services.
             */
            correlationScheme?: pulumi.Input<pulumi.Input<v20230701preview.ServiceCorrelationArgs>[]>;
            /**
             * Specifies the move cost for the service.
             */
            defaultMoveCost?: pulumi.Input<string | enums.v20230701preview.MoveCost>;
            /**
             * A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
             */
            hasPersistedState?: pulumi.Input<boolean>;
            /**
             * The minimum replica set size as a number.
             */
            minReplicaSetSize?: pulumi.Input<number>;
            /**
             * Describes how the service is partitioned.
             */
            partitionDescription: pulumi.Input<v20230701preview.NamedPartitionSchemeArgs | v20230701preview.SingletonPartitionSchemeArgs | v20230701preview.UniformInt64RangePartitionSchemeArgs>;
            /**
             * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
             */
            placementConstraints?: pulumi.Input<string>;
            /**
             * The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss".
             */
            quorumLossWaitDuration?: pulumi.Input<string>;
            /**
             * The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss".
             */
            replicaRestartWaitDuration?: pulumi.Input<string>;
            /**
             * Scaling policies for this service.
             */
            scalingPolicies?: pulumi.Input<pulumi.Input<v20230701preview.ScalingPolicyArgs>[]>;
            /**
             * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
             * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
             * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
             */
            serviceDnsName?: pulumi.Input<string>;
            /**
             * The kind of service (Stateless or Stateful).
             * Expected value is 'Stateful'.
             */
            serviceKind: pulumi.Input<"Stateful">;
            /**
             * The service load metrics is given as an array of ServiceLoadMetric objects.
             */
            serviceLoadMetrics?: pulumi.Input<pulumi.Input<v20230701preview.ServiceLoadMetricArgs>[]>;
            /**
             * The activation Mode of the service package
             */
            servicePackageActivationMode?: pulumi.Input<string | enums.v20230701preview.ServicePackageActivationMode>;
            /**
             * A list that describes the correlation of the service with other services.
             */
            servicePlacementPolicies?: pulumi.Input<pulumi.Input<v20230701preview.ServicePlacementInvalidDomainPolicyArgs | v20230701preview.ServicePlacementNonPartiallyPlaceServicePolicyArgs | v20230701preview.ServicePlacementPreferPrimaryDomainPolicyArgs | v20230701preview.ServicePlacementRequireDomainDistributionPolicyArgs | v20230701preview.ServicePlacementRequiredDomainPolicyArgs>[]>;
            /**
             * The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss".
             */
            servicePlacementTimeLimit?: pulumi.Input<string>;
            /**
             * The name of the service type
             */
            serviceTypeName: pulumi.Input<string>;
            /**
             * The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss".
             */
            standByReplicaKeepDuration?: pulumi.Input<string>;
            /**
             * The target replica set size as a number.
             */
            targetReplicaSetSize?: pulumi.Input<number>;
        }

        /**
         * The properties of a stateless service resource.
         */
        export interface StatelessServicePropertiesArgs {
            /**
             * A list that describes the correlation of the service with other services.
             */
            correlationScheme?: pulumi.Input<pulumi.Input<v20230701preview.ServiceCorrelationArgs>[]>;
            /**
             * Specifies the move cost for the service.
             */
            defaultMoveCost?: pulumi.Input<string | enums.v20230701preview.MoveCost>;
            /**
             * The instance count.
             */
            instanceCount: pulumi.Input<number>;
            /**
             * MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
             */
            minInstanceCount?: pulumi.Input<number>;
            /**
             * MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
             */
            minInstancePercentage?: pulumi.Input<number>;
            /**
             * Describes how the service is partitioned.
             */
            partitionDescription: pulumi.Input<v20230701preview.NamedPartitionSchemeArgs | v20230701preview.SingletonPartitionSchemeArgs | v20230701preview.UniformInt64RangePartitionSchemeArgs>;
            /**
             * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
             */
            placementConstraints?: pulumi.Input<string>;
            /**
             * Scaling policies for this service.
             */
            scalingPolicies?: pulumi.Input<pulumi.Input<v20230701preview.ScalingPolicyArgs>[]>;
            /**
             * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
             * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
             * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
             */
            serviceDnsName?: pulumi.Input<string>;
            /**
             * The kind of service (Stateless or Stateful).
             * Expected value is 'Stateless'.
             */
            serviceKind: pulumi.Input<"Stateless">;
            /**
             * The service load metrics is given as an array of ServiceLoadMetric objects.
             */
            serviceLoadMetrics?: pulumi.Input<pulumi.Input<v20230701preview.ServiceLoadMetricArgs>[]>;
            /**
             * The activation Mode of the service package
             */
            servicePackageActivationMode?: pulumi.Input<string | enums.v20230701preview.ServicePackageActivationMode>;
            /**
             * A list that describes the correlation of the service with other services.
             */
            servicePlacementPolicies?: pulumi.Input<pulumi.Input<v20230701preview.ServicePlacementInvalidDomainPolicyArgs | v20230701preview.ServicePlacementNonPartiallyPlaceServicePolicyArgs | v20230701preview.ServicePlacementPreferPrimaryDomainPolicyArgs | v20230701preview.ServicePlacementRequireDomainDistributionPolicyArgs | v20230701preview.ServicePlacementRequiredDomainPolicyArgs>[]>;
            /**
             * The name of the service type
             */
            serviceTypeName: pulumi.Input<string>;
        }

        /**
         * Azure resource identifier.
         */
        export interface SubResourceArgs {
            /**
             * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
             * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
             * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
             * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * Describes a Subnet.
         */
        export interface SubnetArgs {
            /**
             * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
             */
            enableIpv6?: pulumi.Input<boolean>;
            /**
             * Subnet name.
             */
            name: pulumi.Input<string>;
            /**
             * Full resource id for the network security group.
             */
            networkSecurityGroupId?: pulumi.Input<string>;
            /**
             * Enable or Disable apply network policies on private end point in the subnet.
             */
            privateEndpointNetworkPolicies?: pulumi.Input<string | enums.v20230701preview.PrivateEndpointNetworkPolicies>;
            /**
             * Enable or Disable apply network policies on private link service in the subnet.
             */
            privateLinkServiceNetworkPolicies?: pulumi.Input<string | enums.v20230701preview.PrivateLinkServiceNetworkPolicies>;
        }

        /**
         * Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions.
         */
        export interface UniformInt64RangePartitionSchemeArgs {
            /**
             * The number of partitions.
             */
            count: pulumi.Input<number>;
            /**
             * The upper bound of the partition key range that
             * should be split between the partition ‘Count’
             */
            highKey: pulumi.Input<number>;
            /**
             * The lower bound of the partition key range that
             * should be split between the partition ‘Count’
             */
            lowKey: pulumi.Input<number>;
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'UniformInt64Range'.
             */
            partitionScheme: pulumi.Input<"UniformInt64Range">;
        }

        /**
         * Specifies set of extensions that should be installed onto the virtual machines.
         */
        export interface VMSSExtensionArgs {
            /**
             * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
             */
            autoUpgradeMinorVersion?: pulumi.Input<boolean>;
            /**
             * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
             */
            enableAutomaticUpgrade?: pulumi.Input<boolean>;
            /**
             * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
             */
            forceUpdateTag?: pulumi.Input<string>;
            /**
             * The name of the extension.
             */
            name: pulumi.Input<string>;
            /**
             * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
             */
            protectedSettings?: any;
            /**
             * Collection of extension names after which this extension needs to be provisioned.
             */
            provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * The name of the extension handler publisher.
             */
            publisher: pulumi.Input<string>;
            /**
             * Json formatted public settings for the extension.
             */
            settings?: any;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type: pulumi.Input<string>;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion: pulumi.Input<string>;
        }

        /**
         * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
         */
        export interface VaultCertificateArgs {
            /**
             * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
             */
            certificateStore: pulumi.Input<string>;
            /**
             * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
             */
            certificateUrl: pulumi.Input<string>;
        }

        /**
         * Specifies set of certificates that should be installed onto the virtual machines.
         */
        export interface VaultSecretGroupArgs {
            /**
             * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
             */
            sourceVault: pulumi.Input<v20230701preview.SubResourceArgs>;
            /**
             * The list of key vault references in SourceVault which contain certificates.
             */
            vaultCertificates: pulumi.Input<pulumi.Input<v20230701preview.VaultCertificateArgs>[]>;
        }

        /**
         * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save.
         */
        export interface VmImagePlanArgs {
            /**
             * The plan ID.
             */
            name?: pulumi.Input<string>;
            /**
             * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
             */
            product?: pulumi.Input<string>;
            /**
             * The promotion code.
             */
            promotionCode?: pulumi.Input<string>;
            /**
             * The publisher ID.
             */
            publisher?: pulumi.Input<string>;
        }

        /**
         * Identities for the virtual machine scale set under the node type.
         */
        export interface VmManagedIdentityArgs {
            /**
             * The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Managed data disk description.
         */
        export interface VmssDataDiskArgs {
            /**
             * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
             */
            diskLetter: pulumi.Input<string>;
            /**
             * Disk size for each vm in the node type in GBs.
             */
            diskSizeGB: pulumi.Input<number>;
            /**
             * Managed data disk type. Specifies the storage account type for the managed disk
             */
            diskType: pulumi.Input<string | enums.v20230701preview.DiskType>;
            /**
             * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk.
             */
            lun: pulumi.Input<number>;
        }

    }
}
