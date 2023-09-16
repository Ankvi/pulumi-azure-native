import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace servicefabric {
    /**
     * Represents a scaling mechanism for adding or removing named partitions of a stateless service. Partition names are in the format '0','1'...'N-1'.
     */
    export interface AddRemoveIncrementalNamedPartitionScalingMechanismResponse {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'AddRemoveIncrementalNamedPartition'.
         */
        kind: "AddRemoveIncrementalNamedPartition";
        /**
         * Maximum number of named partitions of the service.
         */
        maxPartitionCount: number;
        /**
         * Minimum number of named partitions of the service.
         */
        minPartitionCount: number;
        /**
         * The number of instances to add or remove during a scaling operation.
         */
        scaleIncrement: number;
    }

    /**
     * Defines a health policy used to evaluate the health of an application or one of its children entities.
     */
    export interface ApplicationHealthPolicyResponse {
        /**
         * Indicates whether warnings are treated with the same severity as errors.
         */
        considerWarningAsError: boolean;
        /**
         * The health policy used by default to evaluate the health of a service type.
         */
        defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicyResponse;
        /**
         * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
         * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
         * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
         * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
         */
        maxPercentUnhealthyDeployedApplications: number;
        /**
         * The map with service type health policy per service type name. The map is empty by default.
         */
        serviceTypeHealthPolicyMap?: {[key: string]: ServiceTypeHealthPolicyResponse};
    }

    /**
     * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
     */
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
        applicationHealthPolicy?: ApplicationHealthPolicyResponse;
        /**
         * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
         */
        forceRestart?: boolean;
        /**
         * Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description.
         */
        instanceCloseDelayDuration?: number;
        /**
         * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed.
         */
        recreateApplication?: boolean;
        /**
         * The policy used for monitoring the application upgrade
         */
        rollingUpgradeMonitoringPolicy?: RollingUpgradeMonitoringPolicyResponse;
        /**
         * The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
         */
        upgradeMode?: string;
        /**
         * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
         */
        upgradeReplicaSetCheckTimeout?: number;
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
     * Represents a scaling trigger related to an average load of a metric/resource of a partition.
     */
    export interface AveragePartitionLoadScalingTriggerResponse {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'AveragePartitionLoadTrigger'.
         */
        kind: "AveragePartitionLoadTrigger";
        /**
         * The lower limit of the load below which a scale in operation should be performed.
         */
        lowerLoadThreshold: number;
        /**
         * The name of the metric for which usage should be tracked.
         */
        metricName: string;
        /**
         * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
         */
        scaleInterval: string;
        /**
         * The upper limit of the load beyond which a scale out operation should be performed.
         */
        upperLoadThreshold: number;
    }

    /**
     * Represents a scaling policy related to an average load of a metric/resource of a service.
     */
    export interface AverageServiceLoadScalingTriggerResponse {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'AverageServiceLoadTrigger'.
         */
        kind: "AverageServiceLoadTrigger";
        /**
         * The lower limit of the load below which a scale in operation should be performed.
         */
        lowerLoadThreshold: number;
        /**
         * The name of the metric for which usage should be tracked.
         */
        metricName: string;
        /**
         * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
         */
        scaleInterval: string;
        /**
         * The upper limit of the load beyond which a scale out operation should be performed.
         */
        upperLoadThreshold: number;
        /**
         * Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service.
         */
        useOnlyPrimaryLoad: boolean;
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
     * Client certificate definition.
     */
    export interface ClientCertificateResponse {
        /**
         * Certificate common name.
         */
        commonName?: string;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: boolean;
        /**
         * Issuer thumbprint for the certificate. Only used together with CommonName.
         */
        issuerThumbprint?: string;
        /**
         * Certificate thumbprint.
         */
        thumbprint?: string;
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
     * Describes the frontend configurations for the node type.
     */
    export interface FrontendConfigurationResponse {
        /**
         * The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/applicationGateways/<applicationGatewayName>/backendAddressPools/<backendAddressPoolName>'.
         */
        applicationGatewayBackendAddressPoolId?: string;
        /**
         * The IP address type of this frontend configuration. If omitted the default value is IPv4.
         */
        ipAddressType?: string;
        /**
         * The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/backendAddressPools/<backendAddressPoolName>'.
         */
        loadBalancerBackendAddressPoolId?: string;
        /**
         * The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/inboundNatPools/<inboundNatPoolName>'.
         */
        loadBalancerInboundNatPoolId?: string;
    }

    /**
     * IPTag associated with the object.
     */
    export interface IPTagResponse {
        /**
         * The IP tag type.
         */
        ipTagType: string;
        /**
         * The value of the IP tag.
         */
        tag: string;
    }

    /**
     * Describes a load balancing rule.
     */
    export interface LoadBalancingRuleResponse {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: number;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
         */
        frontendPort: number;
        /**
         * The load distribution policy for this rule.
         */
        loadDistribution?: string;
        /**
         * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
         */
        probePort?: number;
        /**
         * the reference to the load balancer probe used by the load balancing rule.
         */
        probeProtocol: string;
        /**
         * The probe request path. Only supported for HTTP/HTTPS probes.
         */
        probeRequestPath?: string;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol: string;
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
    export interface NamedPartitionSchemeResponse {
        /**
         * Array for the names of the partitions.
         */
        names: string[];
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'Named'.
         */
        partitionScheme: "Named";
    }

    /**
     * Describes a network security rule.
     */
    export interface NetworkSecurityRuleResponse {
        /**
         * The network traffic is allowed or denied.
         */
        access: string;
        /**
         * Network security rule description.
         */
        description?: string;
        /**
         * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
         */
        destinationAddressPrefix?: string;
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinationAddressPrefixes?: string[];
        /**
         * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        destinationPortRange?: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: string[];
        /**
         * Network security rule direction.
         */
        direction: string;
        /**
         * Network security rule name.
         */
        name: string;
        /**
         * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority: number;
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
         */
        sourceAddressPrefix?: string;
        /**
         * The CIDR or source IP ranges.
         */
        sourceAddressPrefixes?: string[];
        /**
         * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        sourcePortRange?: string;
        /**
         * The source port ranges.
         */
        sourcePortRanges?: string[];
    }

    /**
     * Describes a node type sku.
     */
    export interface NodeTypeSkuResponse {
        /**
         * The number of nodes in the node type.<br /><br />If present in request it will override properties.vmInstanceCount.
         */
        capacity: number;
        /**
         * The sku name. <br /><br />Name is internally generated and is used in auto-scale scenarios.<br /> Property does not allow to be changed to other values than generated.<br /> To avoid deployment errors please omit the property.
         */
        name?: string;
        /**
         * Specifies the tier of the node type. <br /><br /> Possible Values:<br /> **Standard**
         */
        tier?: string;
    }

    /**
     * Represents a scaling mechanism for adding or removing instances of stateless service partition.
     */
    export interface PartitionInstanceCountScaleMechanismResponse {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'ScalePartitionInstanceCount'.
         */
        kind: "ScalePartitionInstanceCount";
        /**
         * Maximum number of instances of the partition.
         */
        maxInstanceCount: number;
        /**
         * Minimum number of instances of the partition.
         */
        minInstanceCount: number;
        /**
         * The number of instances to add or remove during a scaling operation.
         */
        scaleIncrement: number;
    }

    /**
     * Describes Az Resiliency status of Base resources
     */
    export interface ResourceAzStatusResponse {
        /**
         * VM Size name.
         */
        isZoneResilient: boolean;
        /**
         * VM Size properties.
         */
        resourceName: string;
        /**
         * VM Size id.
         */
        resourceType: string;
    }

    /**
     * The policy used for monitoring the application upgrade
     */
    export interface RollingUpgradeMonitoringPolicyResponse {
        /**
         * The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
         */
        failureAction: string;
        /**
         * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        healthCheckRetryTimeout: string;
        /**
         * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        healthCheckStableDuration: string;
        /**
         * The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        healthCheckWaitDuration: string;
        /**
         * The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        upgradeDomainTimeout: string;
        /**
         * The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
         */
        upgradeTimeout: string;
    }

    /**
     * Specifies a metric to load balance a service during runtime.
     */
    export interface ScalingPolicyResponse {
        /**
         * Specifies the mechanism associated with this scaling policy
         */
        scalingMechanism: AddRemoveIncrementalNamedPartitionScalingMechanismResponse | PartitionInstanceCountScaleMechanismResponse;
        /**
         * Specifies the trigger associated with this scaling policy.
         */
        scalingTrigger: AveragePartitionLoadScalingTriggerResponse | AverageServiceLoadScalingTriggerResponse;
    }

    /**
     * Creates a particular correlation between services.
     */
    export interface ServiceCorrelationResponse {
        /**
         * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
         */
        scheme: string;
        /**
         * The Arm Resource ID of the service that the correlation relationship is established with.
         */
        serviceName: string;
    }

    /**
     * The service endpoint properties.
     */
    export interface ServiceEndpointResponse {
        /**
         * A list of locations.
         */
        locations?: string[];
        /**
         * The type of the endpoint service.
         */
        service: string;
    }

    /**
     * Specifies a metric to load balance a service during runtime.
     */
    export interface ServiceLoadMetricResponse {
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
     * Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.
     */
    export interface ServicePlacementInvalidDomainPolicyResponse {
        /**
         * The name of the domain that should not be used for placement.
         */
        domainName: string;
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'InvalidDomain'.
         */
        type: "InvalidDomain";
    }

    /**
     * The name of the domain that should used for placement as per this policy.
     */
    export interface ServicePlacementNonPartiallyPlaceServicePolicyResponse {
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'NonPartiallyPlaceService'.
         */
        type: "NonPartiallyPlaceService";
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
    export interface ServicePlacementPreferPrimaryDomainPolicyResponse {
        /**
         * The name of the domain that should used for placement as per this policy.
         */
        domainName: string;
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'PreferredPrimaryDomain'.
         */
        type: "PreferredPrimaryDomain";
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
    export interface ServicePlacementRequireDomainDistributionPolicyResponse {
        /**
         * The name of the domain that should used for placement as per this policy.
         */
        domainName: string;
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'RequiredDomainDistribution'.
         */
        type: "RequiredDomainDistribution";
    }

    /**
     * Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain.
     */
    export interface ServicePlacementRequiredDomainPolicyResponse {
        /**
         * The name of the domain that should used for placement as per this policy.
         */
        domainName: string;
        /**
         * The type of placement policy for a service fabric service. Following are the possible values.
         * Expected value is 'RequiredDomain'.
         */
        type: "RequiredDomain";
    }

    /**
     * Represents the health policy used to evaluate the health of services belonging to a service type.
     */
    export interface ServiceTypeHealthPolicyResponse {
        /**
         * The maximum allowed percentage of unhealthy partitions per service.
         *
         * The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.
         * If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.
         * The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.
         * The computation rounds up to tolerate one failure on small numbers of partitions.
         */
        maxPercentUnhealthyPartitionsPerService: number;
        /**
         * The maximum allowed percentage of unhealthy replicas per partition.
         *
         * The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.
         * If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.
         * The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.
         * The computation rounds up to tolerate one failure on small numbers of replicas.
         */
        maxPercentUnhealthyReplicasPerPartition: number;
        /**
         * The maximum allowed percentage of unhealthy services.
         *
         * The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.
         * If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.
         * This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.
         * The computation rounds up to tolerate one failure on small numbers of services.
         */
        maxPercentUnhealthyServices: number;
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
    export interface SingletonPartitionSchemeResponse {
        /**
         * Enumerates the ways that a service can be partitioned.
         * Expected value is 'Singleton'.
         */
        partitionScheme: "Singleton";
    }

    /**
     * Service Fabric managed cluster Sku definition
     */
    export interface SkuResponse {
        /**
         * Sku Name.
         */
        name: string;
    }

    /**
     * The properties of a stateful service resource.
     */
    export interface StatefulServicePropertiesResponse {
        /**
         * A list that describes the correlation of the service with other services.
         */
        correlationScheme?: ServiceCorrelationResponse[];
        /**
         * Specifies the move cost for the service.
         */
        defaultMoveCost?: string;
        /**
         * A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
         */
        hasPersistedState?: boolean;
        /**
         * The minimum replica set size as a number.
         */
        minReplicaSetSize?: number;
        /**
         * Describes how the service is partitioned.
         */
        partitionDescription: NamedPartitionSchemeResponse | SingletonPartitionSchemeResponse | UniformInt64RangePartitionSchemeResponse;
        /**
         * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
         */
        placementConstraints?: string;
        /**
         * The current deployment or provisioning state, which only appears in the response
         */
        provisioningState: string;
        /**
         * The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss".
         */
        quorumLossWaitDuration?: string;
        /**
         * The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss".
         */
        replicaRestartWaitDuration?: string;
        /**
         * Scaling policies for this service.
         */
        scalingPolicies?: ScalingPolicyResponse[];
        /**
         * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
         * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
         * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
         */
        serviceDnsName?: string;
        /**
         * The kind of service (Stateless or Stateful).
         * Expected value is 'Stateful'.
         */
        serviceKind: "Stateful";
        /**
         * The service load metrics is given as an array of ServiceLoadMetric objects.
         */
        serviceLoadMetrics?: ServiceLoadMetricResponse[];
        /**
         * The activation Mode of the service package
         */
        servicePackageActivationMode?: string;
        /**
         * A list that describes the correlation of the service with other services.
         */
        servicePlacementPolicies?: (ServicePlacementInvalidDomainPolicyResponse | ServicePlacementNonPartiallyPlaceServicePolicyResponse | ServicePlacementPreferPrimaryDomainPolicyResponse | ServicePlacementRequireDomainDistributionPolicyResponse | ServicePlacementRequiredDomainPolicyResponse)[];
        /**
         * The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss".
         */
        servicePlacementTimeLimit?: string;
        /**
         * The name of the service type
         */
        serviceTypeName: string;
        /**
         * The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss".
         */
        standByReplicaKeepDuration?: string;
        /**
         * The target replica set size as a number.
         */
        targetReplicaSetSize?: number;
    }

    /**
     * The properties of a stateless service resource.
     */
    export interface StatelessServicePropertiesResponse {
        /**
         * A list that describes the correlation of the service with other services.
         */
        correlationScheme?: ServiceCorrelationResponse[];
        /**
         * Specifies the move cost for the service.
         */
        defaultMoveCost?: string;
        /**
         * The instance count.
         */
        instanceCount: number;
        /**
         * MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
         */
        minInstanceCount?: number;
        /**
         * MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
         */
        minInstancePercentage?: number;
        /**
         * Describes how the service is partitioned.
         */
        partitionDescription: NamedPartitionSchemeResponse | SingletonPartitionSchemeResponse | UniformInt64RangePartitionSchemeResponse;
        /**
         * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
         */
        placementConstraints?: string;
        /**
         * The current deployment or provisioning state, which only appears in the response
         */
        provisioningState: string;
        /**
         * Scaling policies for this service.
         */
        scalingPolicies?: ScalingPolicyResponse[];
        /**
         * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
         * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
         * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
         */
        serviceDnsName?: string;
        /**
         * The kind of service (Stateless or Stateful).
         * Expected value is 'Stateless'.
         */
        serviceKind: "Stateless";
        /**
         * The service load metrics is given as an array of ServiceLoadMetric objects.
         */
        serviceLoadMetrics?: ServiceLoadMetricResponse[];
        /**
         * The activation Mode of the service package
         */
        servicePackageActivationMode?: string;
        /**
         * A list that describes the correlation of the service with other services.
         */
        servicePlacementPolicies?: (ServicePlacementInvalidDomainPolicyResponse | ServicePlacementNonPartiallyPlaceServicePolicyResponse | ServicePlacementPreferPrimaryDomainPolicyResponse | ServicePlacementRequireDomainDistributionPolicyResponse | ServicePlacementRequiredDomainPolicyResponse)[];
        /**
         * The name of the service type
         */
        serviceTypeName: string;
    }

    /**
     * Azure resource identifier.
     */
    export interface SubResourceResponse {
        /**
         * Azure resource identifier.
         */
        id?: string;
    }

    /**
     * Describes a Subnet.
     */
    export interface SubnetResponse {
        /**
         * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
         */
        enableIpv6?: boolean;
        /**
         * Subnet name.
         */
        name: string;
        /**
         * Full resource id for the network security group.
         */
        networkSecurityGroupId?: string;
        /**
         * Enable or Disable apply network policies on private end point in the subnet.
         */
        privateEndpointNetworkPolicies?: string;
        /**
         * Enable or Disable apply network policies on private link service in the subnet.
         */
        privateLinkServiceNetworkPolicies?: string;
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
    export interface UniformInt64RangePartitionSchemeResponse {
        /**
         * The number of partitions.
         */
        count: number;
        /**
         * The upper bound of the partition key range that
         * should be split between the partition ‘Count’
         */
        highKey: number;
        /**
         * The lower bound of the partition key range that
         * should be split between the partition ‘Count’
         */
        lowKey: number;
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

    /**
     * Specifies set of extensions that should be installed onto the virtual machines.
     */
    export interface VMSSExtensionResponse {
        /**
         * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
         */
        autoUpgradeMinorVersion?: boolean;
        /**
         * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
         */
        enableAutomaticUpgrade?: boolean;
        /**
         * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
         */
        forceUpdateTag?: string;
        /**
         * The name of the extension.
         */
        name: string;
        /**
         * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
         */
        protectedSettings?: any;
        /**
         * Collection of extension names after which this extension needs to be provisioned.
         */
        provisionAfterExtensions?: string[];
        /**
         * The provisioning state, which only appears in the response.
         */
        provisioningState: string;
        /**
         * The name of the extension handler publisher.
         */
        publisher: string;
        /**
         * Json formatted public settings for the extension.
         */
        settings?: any;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type: string;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion: string;
    }

    /**
     * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
     */
    export interface VaultCertificateResponse {
        /**
         * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
         */
        certificateStore: string;
        /**
         * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
         */
        certificateUrl: string;
    }

    /**
     * Specifies set of certificates that should be installed onto the virtual machines.
     */
    export interface VaultSecretGroupResponse {
        /**
         * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
         */
        sourceVault: SubResourceResponse;
        /**
         * The list of key vault references in SourceVault which contain certificates.
         */
        vaultCertificates: VaultCertificateResponse[];
    }

    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save.
     */
    export interface VmImagePlanResponse {
        /**
         * The plan ID.
         */
        name?: string;
        /**
         * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
         */
        product?: string;
        /**
         * The promotion code.
         */
        promotionCode?: string;
        /**
         * The publisher ID.
         */
        publisher?: string;
    }

    /**
     * Identities for the virtual machine scale set under the node type.
     */
    export interface VmManagedIdentityResponse {
        /**
         * The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: string[];
    }

    /**
     * Managed data disk description.
     */
    export interface VmssDataDiskResponse {
        /**
         * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
         */
        diskLetter: string;
        /**
         * Disk size for each vm in the node type in GBs.
         */
        diskSizeGB: number;
        /**
         * Managed data disk type. Specifies the storage account type for the managed disk
         */
        diskType: string;
        /**
         * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk.
         */
        lun: number;
    }

    export namespace v20200101preview {
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
         * Client Certificate definition.
         */
        export interface ClientCertificateResponse {
            /**
             * Certificate Common name.
             */
            commonName?: string;
            /**
             * Whether the certificate is admin or not.
             */
            isAdmin: boolean;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: string;
            /**
             * Certificate Thumbprint.
             */
            thumbprint?: string;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleResponse {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: number;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: number;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: string;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: string;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: string;
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
            parameters: v20200101preview.SettingsParameterDescriptionResponse[];
        }

        /**
         * Sku definition
         */
        export interface SkuResponse {
            /**
             * Sku Name.
             */
            name: string;
        }

    }

    export namespace v20201201preview {
        /**
         * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
         */
        export interface ApplicationDeltaHealthPolicyResponse {
            /**
             * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
             */
            defaultServiceTypeDeltaHealthPolicy?: v20201201preview.ServiceTypeDeltaHealthPolicyResponse;
            /**
             * The map with service type delta health policy per service type name. The map is empty by default.
             */
            serviceTypeDeltaHealthPolicies?: {[key: string]: v20201201preview.ServiceTypeDeltaHealthPolicyResponse};
        }
        /**
         * applicationDeltaHealthPolicyResponseProvideDefaults sets the appropriate defaults for ApplicationDeltaHealthPolicyResponse
         */
        export function applicationDeltaHealthPolicyResponseProvideDefaults(val: ApplicationDeltaHealthPolicyResponse): ApplicationDeltaHealthPolicyResponse {
            return {
                ...val,
                defaultServiceTypeDeltaHealthPolicy: (val.defaultServiceTypeDeltaHealthPolicy ? v20201201preview.serviceTypeDeltaHealthPolicyResponseProvideDefaults(val.defaultServiceTypeDeltaHealthPolicy) : undefined),
            };
        }

        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        export interface ApplicationHealthPolicyResponse {
            /**
             * The health policy used by default to evaluate the health of a service type.
             */
            defaultServiceTypeHealthPolicy?: v20201201preview.ServiceTypeHealthPolicyResponse;
            /**
             * The map with service type health policy per service type name. The map is empty by default.
             */
            serviceTypeHealthPolicies?: {[key: string]: v20201201preview.ServiceTypeHealthPolicyResponse};
        }
        /**
         * applicationHealthPolicyResponseProvideDefaults sets the appropriate defaults for ApplicationHealthPolicyResponse
         */
        export function applicationHealthPolicyResponseProvideDefaults(val: ApplicationHealthPolicyResponse): ApplicationHealthPolicyResponse {
            return {
                ...val,
                defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? v20201201preview.serviceTypeHealthPolicyResponseProvideDefaults(val.defaultServiceTypeHealthPolicy) : undefined),
            };
        }

        export interface ApplicationTypeVersionsCleanupPolicyResponse {
            /**
             * Number of unused versions per application type to keep.
             */
            maxUnusedVersionsToKeep: number;
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
            applicationHealthPolicies?: {[key: string]: v20201201preview.ApplicationHealthPolicyResponse};
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
            applicationDeltaHealthPolicies?: {[key: string]: v20201201preview.ApplicationDeltaHealthPolicyResponse};
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
            deltaHealthPolicy?: v20201201preview.ClusterUpgradeDeltaHealthPolicyResponse;
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
            healthPolicy: v20201201preview.ClusterHealthPolicyResponse;
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
                healthPolicy: v20201201preview.clusterHealthPolicyResponseProvideDefaults(val.healthPolicy),
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
         * Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
         */
        export interface NodeTypeDescriptionResponse {
            /**
             * The range of ports from which cluster assigned port to Service Fabric applications.
             */
            applicationPorts?: v20201201preview.EndpointRangeDescriptionResponse;
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
            ephemeralPorts?: v20201201preview.EndpointRangeDescriptionResponse;
            /**
             * The HTTP cluster management endpoint port.
             */
            httpGatewayEndpointPort: number;
            /**
             * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
             */
            isPrimary: boolean;
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
             * The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.
             */
            vmInstanceCount: number;
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
            commonNames?: v20201201preview.ServerCertificateCommonNameResponse[];
            /**
             * The local certificate store location.
             */
            x509StoreName?: string;
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
            parameters: v20201201preview.SettingsParameterDescriptionResponse[];
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
             * The type of identity that last modified the resource.
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

    }

    export namespace v20210601 {
        /**
         * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
         */
        export interface ApplicationDeltaHealthPolicyResponse {
            /**
             * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
             */
            defaultServiceTypeDeltaHealthPolicy?: v20210601.ServiceTypeDeltaHealthPolicyResponse;
            /**
             * The map with service type delta health policy per service type name. The map is empty by default.
             */
            serviceTypeDeltaHealthPolicies?: {[key: string]: v20210601.ServiceTypeDeltaHealthPolicyResponse};
        }
        /**
         * applicationDeltaHealthPolicyResponseProvideDefaults sets the appropriate defaults for ApplicationDeltaHealthPolicyResponse
         */
        export function applicationDeltaHealthPolicyResponseProvideDefaults(val: ApplicationDeltaHealthPolicyResponse): ApplicationDeltaHealthPolicyResponse {
            return {
                ...val,
                defaultServiceTypeDeltaHealthPolicy: (val.defaultServiceTypeDeltaHealthPolicy ? v20210601.serviceTypeDeltaHealthPolicyResponseProvideDefaults(val.defaultServiceTypeDeltaHealthPolicy) : undefined),
            };
        }

        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        export interface ApplicationHealthPolicyResponse {
            /**
             * The health policy used by default to evaluate the health of a service type.
             */
            defaultServiceTypeHealthPolicy?: v20210601.ServiceTypeHealthPolicyResponse;
            /**
             * The map with service type health policy per service type name. The map is empty by default.
             */
            serviceTypeHealthPolicies?: {[key: string]: v20210601.ServiceTypeHealthPolicyResponse};
        }
        /**
         * applicationHealthPolicyResponseProvideDefaults sets the appropriate defaults for ApplicationHealthPolicyResponse
         */
        export function applicationHealthPolicyResponseProvideDefaults(val: ApplicationHealthPolicyResponse): ApplicationHealthPolicyResponse {
            return {
                ...val,
                defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? v20210601.serviceTypeHealthPolicyResponseProvideDefaults(val.defaultServiceTypeHealthPolicy) : undefined),
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
            applicationHealthPolicy?: v20210601.ArmApplicationHealthPolicyResponse;
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
            rollingUpgradeMonitoringPolicy?: v20210601.ArmRollingUpgradeMonitoringPolicyResponse;
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
                applicationHealthPolicy: (val.applicationHealthPolicy ? v20210601.armApplicationHealthPolicyResponseProvideDefaults(val.applicationHealthPolicy) : undefined),
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
            defaultServiceTypeHealthPolicy?: v20210601.ArmServiceTypeHealthPolicyResponse;
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
            serviceTypeHealthPolicyMap?: {[key: string]: v20210601.ArmServiceTypeHealthPolicyResponse};
        }
        /**
         * armApplicationHealthPolicyResponseProvideDefaults sets the appropriate defaults for ArmApplicationHealthPolicyResponse
         */
        export function armApplicationHealthPolicyResponseProvideDefaults(val: ArmApplicationHealthPolicyResponse): ArmApplicationHealthPolicyResponse {
            return {
                ...val,
                considerWarningAsError: (val.considerWarningAsError) ?? false,
                defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? v20210601.armServiceTypeHealthPolicyResponseProvideDefaults(val.defaultServiceTypeHealthPolicy) : undefined),
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
            applicationHealthPolicies?: {[key: string]: v20210601.ApplicationHealthPolicyResponse};
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
            applicationDeltaHealthPolicies?: {[key: string]: v20210601.ApplicationDeltaHealthPolicyResponse};
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
            deltaHealthPolicy?: v20210601.ClusterUpgradeDeltaHealthPolicyResponse;
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
            healthPolicy: v20210601.ClusterHealthPolicyResponse;
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
                healthPolicy: v20210601.clusterHealthPolicyResponseProvideDefaults(val.healthPolicy),
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
            userAssignedIdentities?: {[key: string]: v20210601.UserAssignedIdentityResponse};
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
            applicationPorts?: v20210601.EndpointRangeDescriptionResponse;
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
            ephemeralPorts?: v20210601.EndpointRangeDescriptionResponse;
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
            notificationTargets: v20210601.NotificationTargetResponse[];
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
            commonNames?: v20210601.ServerCertificateCommonNameResponse[];
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
            parameters: v20210601.SettingsParameterDescriptionResponse[];
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

    }

    export namespace v20220101 {
        /**
         * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
         */
        export interface ApplicationTypeVersionsCleanupPolicyResponse {
            /**
             * Number of unused versions per application type to keep.
             */
            maxUnusedVersionsToKeep: number;
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
         * Client certificate definition.
         */
        export interface ClientCertificateResponse {
            /**
             * Certificate common name.
             */
            commonName?: string;
            /**
             * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
             */
            isAdmin: boolean;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: string;
            /**
             * Certificate thumbprint.
             */
            thumbprint?: string;
        }

        /**
         * IPTag associated with the object.
         */
        export interface IPTagResponse {
            /**
             * The IP tag type.
             */
            ipTagType: string;
            /**
             * The value of the IP tag.
             */
            tag: string;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleResponse {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: number;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: number;
            /**
             * The load distribution policy for this rule.
             */
            loadDistribution?: string;
            /**
             * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
             */
            probePort?: number;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: string;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: string;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: string;
        }

        /**
         * Describes a network security rule.
         */
        export interface NetworkSecurityRuleResponse {
            /**
             * The network traffic is allowed or denied.
             */
            access: string;
            /**
             * Network security rule description.
             */
            description?: string;
            /**
             * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destinationAddressPrefix?: string;
            /**
             * The destination address prefixes. CIDR or destination IP ranges.
             */
            destinationAddressPrefixes?: string[];
            /**
             * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            destinationPortRange?: string;
            /**
             * The destination port ranges.
             */
            destinationPortRanges?: string[];
            /**
             * Network security rule direction.
             */
            direction: string;
            /**
             * Network security rule name.
             */
            name: string;
            /**
             * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
             */
            priority: number;
            /**
             * Network protocol this rule applies to.
             */
            protocol: string;
            /**
             * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            sourceAddressPrefix?: string;
            /**
             * The CIDR or source IP ranges.
             */
            sourceAddressPrefixes?: string[];
            /**
             * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            sourcePortRange?: string;
            /**
             * The source port ranges.
             */
            sourcePortRanges?: string[];
        }

        /**
         * The service endpoint properties.
         */
        export interface ServiceEndpointResponse {
            /**
             * A list of locations.
             */
            locations?: string[];
            /**
             * The type of the endpoint service.
             */
            service: string;
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
            parameters: v20220101.SettingsParameterDescriptionResponse[];
        }

        /**
         * Service Fabric managed cluster Sku definition
         */
        export interface SkuResponse {
            /**
             * Sku Name.
             */
            name: string;
        }

        /**
         * Describes a Subnet.
         */
        export interface SubnetResponse {
            /**
             * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
             */
            enableIpv6?: boolean;
            /**
             * Subnet name.
             */
            name: string;
            /**
             * Full resource id for the network security group.
             */
            networkSecurityGroupId?: string;
            /**
             * Enable or Disable apply network policies on private end point in the subnet.
             */
            privateEndpointNetworkPolicies?: string;
            /**
             * Enable or Disable apply network policies on private link service in the subnet.
             */
            privateLinkServiceNetworkPolicies?: string;
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

    }

    export namespace v20221001preview {
        /**
         * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
         */
        export interface ApplicationTypeVersionsCleanupPolicyResponse {
            /**
             * Number of unused versions per application type to keep.
             */
            maxUnusedVersionsToKeep: number;
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
         * Client certificate definition.
         */
        export interface ClientCertificateResponse {
            /**
             * Certificate common name.
             */
            commonName?: string;
            /**
             * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
             */
            isAdmin: boolean;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: string;
            /**
             * Certificate thumbprint.
             */
            thumbprint?: string;
        }

        /**
         * IPTag associated with the object.
         */
        export interface IPTagResponse {
            /**
             * The IP tag type.
             */
            ipTagType: string;
            /**
             * The value of the IP tag.
             */
            tag: string;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleResponse {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: number;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: number;
            /**
             * The load distribution policy for this rule.
             */
            loadDistribution?: string;
            /**
             * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
             */
            probePort?: number;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: string;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: string;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: string;
        }

        /**
         * Describes a network security rule.
         */
        export interface NetworkSecurityRuleResponse {
            /**
             * The network traffic is allowed or denied.
             */
            access: string;
            /**
             * Network security rule description.
             */
            description?: string;
            /**
             * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destinationAddressPrefix?: string;
            /**
             * The destination address prefixes. CIDR or destination IP ranges.
             */
            destinationAddressPrefixes?: string[];
            /**
             * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            destinationPortRange?: string;
            /**
             * The destination port ranges.
             */
            destinationPortRanges?: string[];
            /**
             * Network security rule direction.
             */
            direction: string;
            /**
             * Network security rule name.
             */
            name: string;
            /**
             * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
             */
            priority: number;
            /**
             * Network protocol this rule applies to.
             */
            protocol: string;
            /**
             * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            sourceAddressPrefix?: string;
            /**
             * The CIDR or source IP ranges.
             */
            sourceAddressPrefixes?: string[];
            /**
             * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            sourcePortRange?: string;
            /**
             * The source port ranges.
             */
            sourcePortRanges?: string[];
        }

        /**
         * Describes Az Resiliency status of Base resources
         */
        export interface ResourceAzStatusResponse {
            /**
             * VM Size name.
             */
            isZoneResilient: boolean;
            /**
             * VM Size properties.
             */
            resourceName: string;
            /**
             * VM Size id.
             */
            resourceType: string;
        }

        /**
         * The service endpoint properties.
         */
        export interface ServiceEndpointResponse {
            /**
             * A list of locations.
             */
            locations?: string[];
            /**
             * The type of the endpoint service.
             */
            service: string;
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
            parameters: v20221001preview.SettingsParameterDescriptionResponse[];
        }

        /**
         * Service Fabric managed cluster Sku definition
         */
        export interface SkuResponse {
            /**
             * Sku Name.
             */
            name: string;
        }

        /**
         * Describes a Subnet.
         */
        export interface SubnetResponse {
            /**
             * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
             */
            enableIpv6?: boolean;
            /**
             * Subnet name.
             */
            name: string;
            /**
             * Full resource id for the network security group.
             */
            networkSecurityGroupId?: string;
            /**
             * Enable or Disable apply network policies on private end point in the subnet.
             */
            privateEndpointNetworkPolicies?: string;
            /**
             * Enable or Disable apply network policies on private link service in the subnet.
             */
            privateLinkServiceNetworkPolicies?: string;
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

    }

    export namespace v20230301preview {
        /**
         * Represents a scaling mechanism for adding or removing named partitions of a stateless service. Partition names are in the format '0','1'...'N-1'.
         */
        export interface AddRemoveIncrementalNamedPartitionScalingMechanismResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AddRemoveIncrementalNamedPartition'.
             */
            kind: "AddRemoveIncrementalNamedPartition";
            /**
             * Maximum number of named partitions of the service.
             */
            maxPartitionCount: number;
            /**
             * Minimum number of named partitions of the service.
             */
            minPartitionCount: number;
            /**
             * The number of instances to add or remove during a scaling operation.
             */
            scaleIncrement: number;
        }

        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        export interface ApplicationHealthPolicyResponse {
            /**
             * Indicates whether warnings are treated with the same severity as errors.
             */
            considerWarningAsError: boolean;
            /**
             * The health policy used by default to evaluate the health of a service type.
             */
            defaultServiceTypeHealthPolicy?: v20230301preview.ServiceTypeHealthPolicyResponse;
            /**
             * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
             * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
             * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
             * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
             */
            maxPercentUnhealthyDeployedApplications: number;
            /**
             * The map with service type health policy per service type name. The map is empty by default.
             */
            serviceTypeHealthPolicyMap?: {[key: string]: v20230301preview.ServiceTypeHealthPolicyResponse};
        }

        /**
         * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
         */
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
            applicationHealthPolicy?: v20230301preview.ApplicationHealthPolicyResponse;
            /**
             * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
             */
            forceRestart?: boolean;
            /**
             * Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description.
             */
            instanceCloseDelayDuration?: number;
            /**
             * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed.
             */
            recreateApplication?: boolean;
            /**
             * The policy used for monitoring the application upgrade
             */
            rollingUpgradeMonitoringPolicy?: v20230301preview.RollingUpgradeMonitoringPolicyResponse;
            /**
             * The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
             */
            upgradeMode?: string;
            /**
             * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
             */
            upgradeReplicaSetCheckTimeout?: number;
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
         * Represents a scaling trigger related to an average load of a metric/resource of a partition.
         */
        export interface AveragePartitionLoadScalingTriggerResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AveragePartitionLoadTrigger'.
             */
            kind: "AveragePartitionLoadTrigger";
            /**
             * The lower limit of the load below which a scale in operation should be performed.
             */
            lowerLoadThreshold: number;
            /**
             * The name of the metric for which usage should be tracked.
             */
            metricName: string;
            /**
             * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
             */
            scaleInterval: string;
            /**
             * The upper limit of the load beyond which a scale out operation should be performed.
             */
            upperLoadThreshold: number;
        }

        /**
         * Represents a scaling policy related to an average load of a metric/resource of a service.
         */
        export interface AverageServiceLoadScalingTriggerResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AverageServiceLoadTrigger'.
             */
            kind: "AverageServiceLoadTrigger";
            /**
             * The lower limit of the load below which a scale in operation should be performed.
             */
            lowerLoadThreshold: number;
            /**
             * The name of the metric for which usage should be tracked.
             */
            metricName: string;
            /**
             * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
             */
            scaleInterval: string;
            /**
             * The upper limit of the load beyond which a scale out operation should be performed.
             */
            upperLoadThreshold: number;
            /**
             * Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service.
             */
            useOnlyPrimaryLoad: boolean;
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
         * Client certificate definition.
         */
        export interface ClientCertificateResponse {
            /**
             * Certificate common name.
             */
            commonName?: string;
            /**
             * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
             */
            isAdmin: boolean;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: string;
            /**
             * Certificate thumbprint.
             */
            thumbprint?: string;
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
         * Describes the frontend configurations for the node type.
         */
        export interface FrontendConfigurationResponse {
            /**
             * The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/applicationGateways/<applicationGatewayName>/backendAddressPools/<backendAddressPoolName>'.
             */
            applicationGatewayBackendAddressPoolId?: string;
            /**
             * The IP address type of this frontend configuration. If omitted the default value is IPv4.
             */
            ipAddressType?: string;
            /**
             * The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/backendAddressPools/<backendAddressPoolName>'.
             */
            loadBalancerBackendAddressPoolId?: string;
            /**
             * The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/inboundNatPools/<inboundNatPoolName>'.
             */
            loadBalancerInboundNatPoolId?: string;
        }

        /**
         * IPTag associated with the object.
         */
        export interface IPTagResponse {
            /**
             * The IP tag type.
             */
            ipTagType: string;
            /**
             * The value of the IP tag.
             */
            tag: string;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleResponse {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: number;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: number;
            /**
             * The load distribution policy for this rule.
             */
            loadDistribution?: string;
            /**
             * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
             */
            probePort?: number;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: string;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: string;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: string;
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
            userAssignedIdentities?: {[key: string]: v20230301preview.UserAssignedIdentityResponse};
        }

        /**
         * Describes the named partition scheme of the service.
         */
        export interface NamedPartitionSchemeResponse {
            /**
             * Array for the names of the partitions.
             */
            names: string[];
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'Named'.
             */
            partitionScheme: "Named";
        }

        /**
         * Describes a network security rule.
         */
        export interface NetworkSecurityRuleResponse {
            /**
             * The network traffic is allowed or denied.
             */
            access: string;
            /**
             * Network security rule description.
             */
            description?: string;
            /**
             * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destinationAddressPrefix?: string;
            /**
             * The destination address prefixes. CIDR or destination IP ranges.
             */
            destinationAddressPrefixes?: string[];
            /**
             * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            destinationPortRange?: string;
            /**
             * The destination port ranges.
             */
            destinationPortRanges?: string[];
            /**
             * Network security rule direction.
             */
            direction: string;
            /**
             * Network security rule name.
             */
            name: string;
            /**
             * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
             */
            priority: number;
            /**
             * Network protocol this rule applies to.
             */
            protocol: string;
            /**
             * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            sourceAddressPrefix?: string;
            /**
             * The CIDR or source IP ranges.
             */
            sourceAddressPrefixes?: string[];
            /**
             * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            sourcePortRange?: string;
            /**
             * The source port ranges.
             */
            sourcePortRanges?: string[];
        }

        /**
         * Describes a node type sku.
         */
        export interface NodeTypeSkuResponse {
            /**
             * The number of nodes in the node type.<br /><br />If present in request it will override properties.vmInstanceCount.
             */
            capacity: number;
            /**
             * The sku name. <br /><br />Name is internally generated and is used in auto-scale scenarios.<br /> Property does not allow to be changed to other values than generated.<br /> To avoid deployment errors please omit the property.
             */
            name?: string;
            /**
             * Specifies the tier of the node type. <br /><br /> Possible Values:<br /> **Standard**
             */
            tier?: string;
        }

        /**
         * Represents a scaling mechanism for adding or removing instances of stateless service partition.
         */
        export interface PartitionInstanceCountScaleMechanismResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'ScalePartitionInstanceCount'.
             */
            kind: "ScalePartitionInstanceCount";
            /**
             * Maximum number of instances of the partition.
             */
            maxInstanceCount: number;
            /**
             * Minimum number of instances of the partition.
             */
            minInstanceCount: number;
            /**
             * The number of instances to add or remove during a scaling operation.
             */
            scaleIncrement: number;
        }

        /**
         * Describes Az Resiliency status of Base resources
         */
        export interface ResourceAzStatusResponse {
            /**
             * VM Size name.
             */
            isZoneResilient: boolean;
            /**
             * VM Size properties.
             */
            resourceName: string;
            /**
             * VM Size id.
             */
            resourceType: string;
        }

        /**
         * The policy used for monitoring the application upgrade
         */
        export interface RollingUpgradeMonitoringPolicyResponse {
            /**
             * The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
             */
            failureAction: string;
            /**
             * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckRetryTimeout: string;
            /**
             * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckStableDuration: string;
            /**
             * The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckWaitDuration: string;
            /**
             * The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            upgradeDomainTimeout: string;
            /**
             * The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            upgradeTimeout: string;
        }

        /**
         * Specifies a metric to load balance a service during runtime.
         */
        export interface ScalingPolicyResponse {
            /**
             * Specifies the mechanism associated with this scaling policy
             */
            scalingMechanism: v20230301preview.AddRemoveIncrementalNamedPartitionScalingMechanismResponse | v20230301preview.PartitionInstanceCountScaleMechanismResponse;
            /**
             * Specifies the trigger associated with this scaling policy.
             */
            scalingTrigger: v20230301preview.AveragePartitionLoadScalingTriggerResponse | v20230301preview.AverageServiceLoadScalingTriggerResponse;
        }

        /**
         * Creates a particular correlation between services.
         */
        export interface ServiceCorrelationResponse {
            /**
             * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
             */
            scheme: string;
            /**
             * The Arm Resource ID of the service that the correlation relationship is established with.
             */
            serviceName: string;
        }

        /**
         * The service endpoint properties.
         */
        export interface ServiceEndpointResponse {
            /**
             * A list of locations.
             */
            locations?: string[];
            /**
             * The type of the endpoint service.
             */
            service: string;
        }

        /**
         * Specifies a metric to load balance a service during runtime.
         */
        export interface ServiceLoadMetricResponse {
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
         * Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.
         */
        export interface ServicePlacementInvalidDomainPolicyResponse {
            /**
             * The name of the domain that should not be used for placement.
             */
            domainName: string;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'InvalidDomain'.
             */
            type: "InvalidDomain";
        }

        /**
         * The name of the domain that should used for placement as per this policy.
         */
        export interface ServicePlacementNonPartiallyPlaceServicePolicyResponse {
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'NonPartiallyPlaceService'.
             */
            type: "NonPartiallyPlaceService";
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
        export interface ServicePlacementPreferPrimaryDomainPolicyResponse {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: string;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'PreferredPrimaryDomain'.
             */
            type: "PreferredPrimaryDomain";
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
        export interface ServicePlacementRequireDomainDistributionPolicyResponse {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: string;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'RequiredDomainDistribution'.
             */
            type: "RequiredDomainDistribution";
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain.
         */
        export interface ServicePlacementRequiredDomainPolicyResponse {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: string;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'RequiredDomain'.
             */
            type: "RequiredDomain";
        }

        /**
         * Represents the health policy used to evaluate the health of services belonging to a service type.
         */
        export interface ServiceTypeHealthPolicyResponse {
            /**
             * The maximum allowed percentage of unhealthy partitions per service.
             *
             * The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.
             * If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.
             * The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.
             * The computation rounds up to tolerate one failure on small numbers of partitions.
             */
            maxPercentUnhealthyPartitionsPerService: number;
            /**
             * The maximum allowed percentage of unhealthy replicas per partition.
             *
             * The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.
             * If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.
             * The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.
             * The computation rounds up to tolerate one failure on small numbers of replicas.
             */
            maxPercentUnhealthyReplicasPerPartition: number;
            /**
             * The maximum allowed percentage of unhealthy services.
             *
             * The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.
             * If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.
             * This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.
             * The computation rounds up to tolerate one failure on small numbers of services.
             */
            maxPercentUnhealthyServices: number;
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
            parameters: v20230301preview.SettingsParameterDescriptionResponse[];
        }

        /**
         * Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
         */
        export interface SingletonPartitionSchemeResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'Singleton'.
             */
            partitionScheme: "Singleton";
        }

        /**
         * Service Fabric managed cluster Sku definition
         */
        export interface SkuResponse {
            /**
             * Sku Name.
             */
            name: string;
        }

        /**
         * The properties of a stateful service resource.
         */
        export interface StatefulServicePropertiesResponse {
            /**
             * A list that describes the correlation of the service with other services.
             */
            correlationScheme?: v20230301preview.ServiceCorrelationResponse[];
            /**
             * Specifies the move cost for the service.
             */
            defaultMoveCost?: string;
            /**
             * A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
             */
            hasPersistedState?: boolean;
            /**
             * The minimum replica set size as a number.
             */
            minReplicaSetSize?: number;
            /**
             * Describes how the service is partitioned.
             */
            partitionDescription: v20230301preview.NamedPartitionSchemeResponse | v20230301preview.SingletonPartitionSchemeResponse | v20230301preview.UniformInt64RangePartitionSchemeResponse;
            /**
             * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
             */
            placementConstraints?: string;
            /**
             * The current deployment or provisioning state, which only appears in the response
             */
            provisioningState: string;
            /**
             * The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss".
             */
            quorumLossWaitDuration?: string;
            /**
             * The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss".
             */
            replicaRestartWaitDuration?: string;
            /**
             * Scaling policies for this service.
             */
            scalingPolicies?: v20230301preview.ScalingPolicyResponse[];
            /**
             * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
             * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
             * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
             */
            serviceDnsName?: string;
            /**
             * The kind of service (Stateless or Stateful).
             * Expected value is 'Stateful'.
             */
            serviceKind: "Stateful";
            /**
             * The service load metrics is given as an array of ServiceLoadMetric objects.
             */
            serviceLoadMetrics?: v20230301preview.ServiceLoadMetricResponse[];
            /**
             * The activation Mode of the service package
             */
            servicePackageActivationMode?: string;
            /**
             * A list that describes the correlation of the service with other services.
             */
            servicePlacementPolicies?: (v20230301preview.ServicePlacementInvalidDomainPolicyResponse | v20230301preview.ServicePlacementNonPartiallyPlaceServicePolicyResponse | v20230301preview.ServicePlacementPreferPrimaryDomainPolicyResponse | v20230301preview.ServicePlacementRequireDomainDistributionPolicyResponse | v20230301preview.ServicePlacementRequiredDomainPolicyResponse)[];
            /**
             * The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss".
             */
            servicePlacementTimeLimit?: string;
            /**
             * The name of the service type
             */
            serviceTypeName: string;
            /**
             * The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss".
             */
            standByReplicaKeepDuration?: string;
            /**
             * The target replica set size as a number.
             */
            targetReplicaSetSize?: number;
        }

        /**
         * The properties of a stateless service resource.
         */
        export interface StatelessServicePropertiesResponse {
            /**
             * A list that describes the correlation of the service with other services.
             */
            correlationScheme?: v20230301preview.ServiceCorrelationResponse[];
            /**
             * Specifies the move cost for the service.
             */
            defaultMoveCost?: string;
            /**
             * The instance count.
             */
            instanceCount: number;
            /**
             * MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
             */
            minInstanceCount?: number;
            /**
             * MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
             */
            minInstancePercentage?: number;
            /**
             * Describes how the service is partitioned.
             */
            partitionDescription: v20230301preview.NamedPartitionSchemeResponse | v20230301preview.SingletonPartitionSchemeResponse | v20230301preview.UniformInt64RangePartitionSchemeResponse;
            /**
             * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
             */
            placementConstraints?: string;
            /**
             * The current deployment or provisioning state, which only appears in the response
             */
            provisioningState: string;
            /**
             * Scaling policies for this service.
             */
            scalingPolicies?: v20230301preview.ScalingPolicyResponse[];
            /**
             * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
             * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
             * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
             */
            serviceDnsName?: string;
            /**
             * The kind of service (Stateless or Stateful).
             * Expected value is 'Stateless'.
             */
            serviceKind: "Stateless";
            /**
             * The service load metrics is given as an array of ServiceLoadMetric objects.
             */
            serviceLoadMetrics?: v20230301preview.ServiceLoadMetricResponse[];
            /**
             * The activation Mode of the service package
             */
            servicePackageActivationMode?: string;
            /**
             * A list that describes the correlation of the service with other services.
             */
            servicePlacementPolicies?: (v20230301preview.ServicePlacementInvalidDomainPolicyResponse | v20230301preview.ServicePlacementNonPartiallyPlaceServicePolicyResponse | v20230301preview.ServicePlacementPreferPrimaryDomainPolicyResponse | v20230301preview.ServicePlacementRequireDomainDistributionPolicyResponse | v20230301preview.ServicePlacementRequiredDomainPolicyResponse)[];
            /**
             * The name of the service type
             */
            serviceTypeName: string;
        }

        /**
         * Azure resource identifier.
         */
        export interface SubResourceResponse {
            /**
             * Azure resource identifier.
             */
            id?: string;
        }

        /**
         * Describes a Subnet.
         */
        export interface SubnetResponse {
            /**
             * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
             */
            enableIpv6?: boolean;
            /**
             * Subnet name.
             */
            name: string;
            /**
             * Full resource id for the network security group.
             */
            networkSecurityGroupId?: string;
            /**
             * Enable or Disable apply network policies on private end point in the subnet.
             */
            privateEndpointNetworkPolicies?: string;
            /**
             * Enable or Disable apply network policies on private link service in the subnet.
             */
            privateLinkServiceNetworkPolicies?: string;
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
        export interface UniformInt64RangePartitionSchemeResponse {
            /**
             * The number of partitions.
             */
            count: number;
            /**
             * The upper bound of the partition key range that
             * should be split between the partition ‘Count’
             */
            highKey: number;
            /**
             * The lower bound of the partition key range that
             * should be split between the partition ‘Count’
             */
            lowKey: number;
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

        /**
         * Specifies set of extensions that should be installed onto the virtual machines.
         */
        export interface VMSSExtensionResponse {
            /**
             * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
             */
            autoUpgradeMinorVersion?: boolean;
            /**
             * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
             */
            enableAutomaticUpgrade?: boolean;
            /**
             * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
             */
            forceUpdateTag?: string;
            /**
             * The name of the extension.
             */
            name: string;
            /**
             * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
             */
            protectedSettings?: any;
            /**
             * Collection of extension names after which this extension needs to be provisioned.
             */
            provisionAfterExtensions?: string[];
            /**
             * The provisioning state, which only appears in the response.
             */
            provisioningState: string;
            /**
             * The name of the extension handler publisher.
             */
            publisher: string;
            /**
             * Json formatted public settings for the extension.
             */
            settings?: any;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type: string;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion: string;
        }

        /**
         * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
         */
        export interface VaultCertificateResponse {
            /**
             * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
             */
            certificateStore: string;
            /**
             * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
             */
            certificateUrl: string;
        }

        /**
         * Specifies set of certificates that should be installed onto the virtual machines.
         */
        export interface VaultSecretGroupResponse {
            /**
             * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
             */
            sourceVault: v20230301preview.SubResourceResponse;
            /**
             * The list of key vault references in SourceVault which contain certificates.
             */
            vaultCertificates: v20230301preview.VaultCertificateResponse[];
        }

        /**
         * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save.
         */
        export interface VmImagePlanResponse {
            /**
             * The plan ID.
             */
            name?: string;
            /**
             * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
             */
            product?: string;
            /**
             * The promotion code.
             */
            promotionCode?: string;
            /**
             * The publisher ID.
             */
            publisher?: string;
        }

        /**
         * Identities for the virtual machine scale set under the node type.
         */
        export interface VmManagedIdentityResponse {
            /**
             * The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: string[];
        }

        /**
         * Managed data disk description.
         */
        export interface VmssDataDiskResponse {
            /**
             * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
             */
            diskLetter: string;
            /**
             * Disk size for each vm in the node type in GBs.
             */
            diskSizeGB: number;
            /**
             * Managed data disk type. Specifies the storage account type for the managed disk
             */
            diskType: string;
            /**
             * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk.
             */
            lun: number;
        }

    }

    export namespace v20230701preview {
        /**
         * Represents a scaling mechanism for adding or removing named partitions of a stateless service. Partition names are in the format '0','1'...'N-1'.
         */
        export interface AddRemoveIncrementalNamedPartitionScalingMechanismResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AddRemoveIncrementalNamedPartition'.
             */
            kind: "AddRemoveIncrementalNamedPartition";
            /**
             * Maximum number of named partitions of the service.
             */
            maxPartitionCount: number;
            /**
             * Minimum number of named partitions of the service.
             */
            minPartitionCount: number;
            /**
             * The number of instances to add or remove during a scaling operation.
             */
            scaleIncrement: number;
        }

        /**
         * Defines a health policy used to evaluate the health of an application or one of its children entities.
         */
        export interface ApplicationHealthPolicyResponse {
            /**
             * Indicates whether warnings are treated with the same severity as errors.
             */
            considerWarningAsError: boolean;
            /**
             * The health policy used by default to evaluate the health of a service type.
             */
            defaultServiceTypeHealthPolicy?: v20230701preview.ServiceTypeHealthPolicyResponse;
            /**
             * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
             * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
             * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
             * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
             */
            maxPercentUnhealthyDeployedApplications: number;
            /**
             * The map with service type health policy per service type name. The map is empty by default.
             */
            serviceTypeHealthPolicyMap?: {[key: string]: v20230701preview.ServiceTypeHealthPolicyResponse};
        }

        /**
         * The policy used to clean up unused versions. When the policy is not specified explicitly, the default unused application versions to keep will be 3.
         */
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
            applicationHealthPolicy?: v20230701preview.ApplicationHealthPolicyResponse;
            /**
             * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
             */
            forceRestart?: boolean;
            /**
             * Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description.
             */
            instanceCloseDelayDuration?: number;
            /**
             * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed.
             */
            recreateApplication?: boolean;
            /**
             * The policy used for monitoring the application upgrade
             */
            rollingUpgradeMonitoringPolicy?: v20230701preview.RollingUpgradeMonitoringPolicyResponse;
            /**
             * The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
             */
            upgradeMode?: string;
            /**
             * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
             */
            upgradeReplicaSetCheckTimeout?: number;
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
         * Represents a scaling trigger related to an average load of a metric/resource of a partition.
         */
        export interface AveragePartitionLoadScalingTriggerResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AveragePartitionLoadTrigger'.
             */
            kind: "AveragePartitionLoadTrigger";
            /**
             * The lower limit of the load below which a scale in operation should be performed.
             */
            lowerLoadThreshold: number;
            /**
             * The name of the metric for which usage should be tracked.
             */
            metricName: string;
            /**
             * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
             */
            scaleInterval: string;
            /**
             * The upper limit of the load beyond which a scale out operation should be performed.
             */
            upperLoadThreshold: number;
        }

        /**
         * Represents a scaling policy related to an average load of a metric/resource of a service.
         */
        export interface AverageServiceLoadScalingTriggerResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'AverageServiceLoadTrigger'.
             */
            kind: "AverageServiceLoadTrigger";
            /**
             * The lower limit of the load below which a scale in operation should be performed.
             */
            lowerLoadThreshold: number;
            /**
             * The name of the metric for which usage should be tracked.
             */
            metricName: string;
            /**
             * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
             */
            scaleInterval: string;
            /**
             * The upper limit of the load beyond which a scale out operation should be performed.
             */
            upperLoadThreshold: number;
            /**
             * Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service.
             */
            useOnlyPrimaryLoad: boolean;
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
         * Client certificate definition.
         */
        export interface ClientCertificateResponse {
            /**
             * Certificate common name.
             */
            commonName?: string;
            /**
             * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
             */
            isAdmin: boolean;
            /**
             * Issuer thumbprint for the certificate. Only used together with CommonName.
             */
            issuerThumbprint?: string;
            /**
             * Certificate thumbprint.
             */
            thumbprint?: string;
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
         * Describes the frontend configurations for the node type.
         */
        export interface FrontendConfigurationResponse {
            /**
             * The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/applicationGateways/<applicationGatewayName>/backendAddressPools/<backendAddressPoolName>'.
             */
            applicationGatewayBackendAddressPoolId?: string;
            /**
             * The IP address type of this frontend configuration. If omitted the default value is IPv4.
             */
            ipAddressType?: string;
            /**
             * The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/backendAddressPools/<backendAddressPoolName>'.
             */
            loadBalancerBackendAddressPoolId?: string;
            /**
             * The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/loadBalancers/<loadBalancerName>/inboundNatPools/<inboundNatPoolName>'.
             */
            loadBalancerInboundNatPoolId?: string;
        }

        /**
         * IPTag associated with the object.
         */
        export interface IPTagResponse {
            /**
             * The IP tag type.
             */
            ipTagType: string;
            /**
             * The value of the IP tag.
             */
            tag: string;
        }

        /**
         * Describes a load balancing rule.
         */
        export interface LoadBalancingRuleResponse {
            /**
             * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
             */
            backendPort: number;
            /**
             * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
             */
            frontendPort: number;
            /**
             * The load distribution policy for this rule.
             */
            loadDistribution?: string;
            /**
             * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
             */
            probePort?: number;
            /**
             * the reference to the load balancer probe used by the load balancing rule.
             */
            probeProtocol: string;
            /**
             * The probe request path. Only supported for HTTP/HTTPS probes.
             */
            probeRequestPath?: string;
            /**
             * The reference to the transport protocol used by the load balancing rule.
             */
            protocol: string;
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
            userAssignedIdentities?: {[key: string]: v20230701preview.UserAssignedIdentityResponse};
        }

        /**
         * Describes the named partition scheme of the service.
         */
        export interface NamedPartitionSchemeResponse {
            /**
             * Array for the names of the partitions.
             */
            names: string[];
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'Named'.
             */
            partitionScheme: "Named";
        }

        /**
         * Describes a network security rule.
         */
        export interface NetworkSecurityRuleResponse {
            /**
             * The network traffic is allowed or denied.
             */
            access: string;
            /**
             * Network security rule description.
             */
            description?: string;
            /**
             * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destinationAddressPrefix?: string;
            /**
             * The destination address prefixes. CIDR or destination IP ranges.
             */
            destinationAddressPrefixes?: string[];
            /**
             * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            destinationPortRange?: string;
            /**
             * The destination port ranges.
             */
            destinationPortRanges?: string[];
            /**
             * Network security rule direction.
             */
            direction: string;
            /**
             * Network security rule name.
             */
            name: string;
            /**
             * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
             */
            priority: number;
            /**
             * Network protocol this rule applies to.
             */
            protocol: string;
            /**
             * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            sourceAddressPrefix?: string;
            /**
             * The CIDR or source IP ranges.
             */
            sourceAddressPrefixes?: string[];
            /**
             * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
             */
            sourcePortRange?: string;
            /**
             * The source port ranges.
             */
            sourcePortRanges?: string[];
        }

        /**
         * Describes a node type sku.
         */
        export interface NodeTypeSkuResponse {
            /**
             * The number of nodes in the node type.<br /><br />If present in request it will override properties.vmInstanceCount.
             */
            capacity: number;
            /**
             * The sku name. <br /><br />Name is internally generated and is used in auto-scale scenarios.<br /> Property does not allow to be changed to other values than generated.<br /> To avoid deployment errors please omit the property.
             */
            name?: string;
            /**
             * Specifies the tier of the node type. <br /><br /> Possible Values:<br /> **Standard**
             */
            tier?: string;
        }

        /**
         * Represents a scaling mechanism for adding or removing instances of stateless service partition.
         */
        export interface PartitionInstanceCountScaleMechanismResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'ScalePartitionInstanceCount'.
             */
            kind: "ScalePartitionInstanceCount";
            /**
             * Maximum number of instances of the partition.
             */
            maxInstanceCount: number;
            /**
             * Minimum number of instances of the partition.
             */
            minInstanceCount: number;
            /**
             * The number of instances to add or remove during a scaling operation.
             */
            scaleIncrement: number;
        }

        /**
         * Describes Az Resiliency status of Base resources
         */
        export interface ResourceAzStatusResponse {
            /**
             * VM Size name.
             */
            isZoneResilient: boolean;
            /**
             * VM Size properties.
             */
            resourceName: string;
            /**
             * VM Size id.
             */
            resourceType: string;
        }

        /**
         * The policy used for monitoring the application upgrade
         */
        export interface RollingUpgradeMonitoringPolicyResponse {
            /**
             * The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
             */
            failureAction: string;
            /**
             * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckRetryTimeout: string;
            /**
             * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckStableDuration: string;
            /**
             * The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            healthCheckWaitDuration: string;
            /**
             * The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            upgradeDomainTimeout: string;
            /**
             * The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
             */
            upgradeTimeout: string;
        }

        /**
         * Specifies a metric to load balance a service during runtime.
         */
        export interface ScalingPolicyResponse {
            /**
             * Specifies the mechanism associated with this scaling policy
             */
            scalingMechanism: v20230701preview.AddRemoveIncrementalNamedPartitionScalingMechanismResponse | v20230701preview.PartitionInstanceCountScaleMechanismResponse;
            /**
             * Specifies the trigger associated with this scaling policy.
             */
            scalingTrigger: v20230701preview.AveragePartitionLoadScalingTriggerResponse | v20230701preview.AverageServiceLoadScalingTriggerResponse;
        }

        /**
         * Creates a particular correlation between services.
         */
        export interface ServiceCorrelationResponse {
            /**
             * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
             */
            scheme: string;
            /**
             * The Arm Resource ID of the service that the correlation relationship is established with.
             */
            serviceName: string;
        }

        /**
         * The service endpoint properties.
         */
        export interface ServiceEndpointResponse {
            /**
             * A list of locations.
             */
            locations?: string[];
            /**
             * The type of the endpoint service.
             */
            service: string;
        }

        /**
         * Specifies a metric to load balance a service during runtime.
         */
        export interface ServiceLoadMetricResponse {
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
         * Describes the policy to be used for placement of a Service Fabric service where a particular fault or upgrade domain should not be used for placement of the instances or replicas of that service.
         */
        export interface ServicePlacementInvalidDomainPolicyResponse {
            /**
             * The name of the domain that should not be used for placement.
             */
            domainName: string;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'InvalidDomain'.
             */
            type: "InvalidDomain";
        }

        /**
         * The name of the domain that should used for placement as per this policy.
         */
        export interface ServicePlacementNonPartiallyPlaceServicePolicyResponse {
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'NonPartiallyPlaceService'.
             */
            type: "NonPartiallyPlaceService";
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
        export interface ServicePlacementPreferPrimaryDomainPolicyResponse {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: string;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'PreferredPrimaryDomain'.
             */
            type: "PreferredPrimaryDomain";
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
        export interface ServicePlacementRequireDomainDistributionPolicyResponse {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: string;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'RequiredDomainDistribution'.
             */
            type: "RequiredDomainDistribution";
        }

        /**
         * Describes the policy to be used for placement of a Service Fabric service where the instances or replicas of that service must be placed in a particular domain.
         */
        export interface ServicePlacementRequiredDomainPolicyResponse {
            /**
             * The name of the domain that should used for placement as per this policy.
             */
            domainName: string;
            /**
             * The type of placement policy for a service fabric service. Following are the possible values.
             * Expected value is 'RequiredDomain'.
             */
            type: "RequiredDomain";
        }

        /**
         * Represents the health policy used to evaluate the health of services belonging to a service type.
         */
        export interface ServiceTypeHealthPolicyResponse {
            /**
             * The maximum allowed percentage of unhealthy partitions per service.
             *
             * The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.
             * If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.
             * The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.
             * The computation rounds up to tolerate one failure on small numbers of partitions.
             */
            maxPercentUnhealthyPartitionsPerService: number;
            /**
             * The maximum allowed percentage of unhealthy replicas per partition.
             *
             * The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.
             * If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.
             * The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.
             * The computation rounds up to tolerate one failure on small numbers of replicas.
             */
            maxPercentUnhealthyReplicasPerPartition: number;
            /**
             * The maximum allowed percentage of unhealthy services.
             *
             * The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.
             * If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.
             * This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.
             * The computation rounds up to tolerate one failure on small numbers of services.
             */
            maxPercentUnhealthyServices: number;
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
            parameters: v20230701preview.SettingsParameterDescriptionResponse[];
        }

        /**
         * Describes the partition scheme of a singleton-partitioned, or non-partitioned service.
         */
        export interface SingletonPartitionSchemeResponse {
            /**
             * Enumerates the ways that a service can be partitioned.
             * Expected value is 'Singleton'.
             */
            partitionScheme: "Singleton";
        }

        /**
         * Service Fabric managed cluster Sku definition
         */
        export interface SkuResponse {
            /**
             * Sku Name.
             */
            name: string;
        }

        /**
         * The properties of a stateful service resource.
         */
        export interface StatefulServicePropertiesResponse {
            /**
             * A list that describes the correlation of the service with other services.
             */
            correlationScheme?: v20230701preview.ServiceCorrelationResponse[];
            /**
             * Specifies the move cost for the service.
             */
            defaultMoveCost?: string;
            /**
             * A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
             */
            hasPersistedState?: boolean;
            /**
             * The minimum replica set size as a number.
             */
            minReplicaSetSize?: number;
            /**
             * Describes how the service is partitioned.
             */
            partitionDescription: v20230701preview.NamedPartitionSchemeResponse | v20230701preview.SingletonPartitionSchemeResponse | v20230701preview.UniformInt64RangePartitionSchemeResponse;
            /**
             * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
             */
            placementConstraints?: string;
            /**
             * The current deployment or provisioning state, which only appears in the response
             */
            provisioningState: string;
            /**
             * The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss".
             */
            quorumLossWaitDuration?: string;
            /**
             * The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss".
             */
            replicaRestartWaitDuration?: string;
            /**
             * Scaling policies for this service.
             */
            scalingPolicies?: v20230701preview.ScalingPolicyResponse[];
            /**
             * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
             * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
             * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
             */
            serviceDnsName?: string;
            /**
             * The kind of service (Stateless or Stateful).
             * Expected value is 'Stateful'.
             */
            serviceKind: "Stateful";
            /**
             * The service load metrics is given as an array of ServiceLoadMetric objects.
             */
            serviceLoadMetrics?: v20230701preview.ServiceLoadMetricResponse[];
            /**
             * The activation Mode of the service package
             */
            servicePackageActivationMode?: string;
            /**
             * A list that describes the correlation of the service with other services.
             */
            servicePlacementPolicies?: (v20230701preview.ServicePlacementInvalidDomainPolicyResponse | v20230701preview.ServicePlacementNonPartiallyPlaceServicePolicyResponse | v20230701preview.ServicePlacementPreferPrimaryDomainPolicyResponse | v20230701preview.ServicePlacementRequireDomainDistributionPolicyResponse | v20230701preview.ServicePlacementRequiredDomainPolicyResponse)[];
            /**
             * The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss".
             */
            servicePlacementTimeLimit?: string;
            /**
             * The name of the service type
             */
            serviceTypeName: string;
            /**
             * The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss".
             */
            standByReplicaKeepDuration?: string;
            /**
             * The target replica set size as a number.
             */
            targetReplicaSetSize?: number;
        }

        /**
         * The properties of a stateless service resource.
         */
        export interface StatelessServicePropertiesResponse {
            /**
             * A list that describes the correlation of the service with other services.
             */
            correlationScheme?: v20230701preview.ServiceCorrelationResponse[];
            /**
             * Specifies the move cost for the service.
             */
            defaultMoveCost?: string;
            /**
             * The instance count.
             */
            instanceCount: number;
            /**
             * MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
             */
            minInstanceCount?: number;
            /**
             * MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
             */
            minInstancePercentage?: number;
            /**
             * Describes how the service is partitioned.
             */
            partitionDescription: v20230701preview.NamedPartitionSchemeResponse | v20230701preview.SingletonPartitionSchemeResponse | v20230701preview.UniformInt64RangePartitionSchemeResponse;
            /**
             * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
             */
            placementConstraints?: string;
            /**
             * The current deployment or provisioning state, which only appears in the response
             */
            provisioningState: string;
            /**
             * Scaling policies for this service.
             */
            scalingPolicies?: v20230701preview.ScalingPolicyResponse[];
            /**
             * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).
             * When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.
             * When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
             */
            serviceDnsName?: string;
            /**
             * The kind of service (Stateless or Stateful).
             * Expected value is 'Stateless'.
             */
            serviceKind: "Stateless";
            /**
             * The service load metrics is given as an array of ServiceLoadMetric objects.
             */
            serviceLoadMetrics?: v20230701preview.ServiceLoadMetricResponse[];
            /**
             * The activation Mode of the service package
             */
            servicePackageActivationMode?: string;
            /**
             * A list that describes the correlation of the service with other services.
             */
            servicePlacementPolicies?: (v20230701preview.ServicePlacementInvalidDomainPolicyResponse | v20230701preview.ServicePlacementNonPartiallyPlaceServicePolicyResponse | v20230701preview.ServicePlacementPreferPrimaryDomainPolicyResponse | v20230701preview.ServicePlacementRequireDomainDistributionPolicyResponse | v20230701preview.ServicePlacementRequiredDomainPolicyResponse)[];
            /**
             * The name of the service type
             */
            serviceTypeName: string;
        }

        /**
         * Azure resource identifier.
         */
        export interface SubResourceResponse {
            /**
             * Azure resource identifier.
             */
            id?: string;
        }

        /**
         * Describes a Subnet.
         */
        export interface SubnetResponse {
            /**
             * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
             */
            enableIpv6?: boolean;
            /**
             * Subnet name.
             */
            name: string;
            /**
             * Full resource id for the network security group.
             */
            networkSecurityGroupId?: string;
            /**
             * Enable or Disable apply network policies on private end point in the subnet.
             */
            privateEndpointNetworkPolicies?: string;
            /**
             * Enable or Disable apply network policies on private link service in the subnet.
             */
            privateLinkServiceNetworkPolicies?: string;
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
        export interface UniformInt64RangePartitionSchemeResponse {
            /**
             * The number of partitions.
             */
            count: number;
            /**
             * The upper bound of the partition key range that
             * should be split between the partition ‘Count’
             */
            highKey: number;
            /**
             * The lower bound of the partition key range that
             * should be split between the partition ‘Count’
             */
            lowKey: number;
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

        /**
         * Specifies set of extensions that should be installed onto the virtual machines.
         */
        export interface VMSSExtensionResponse {
            /**
             * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
             */
            autoUpgradeMinorVersion?: boolean;
            /**
             * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
             */
            enableAutomaticUpgrade?: boolean;
            /**
             * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
             */
            forceUpdateTag?: string;
            /**
             * The name of the extension.
             */
            name: string;
            /**
             * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
             */
            protectedSettings?: any;
            /**
             * Collection of extension names after which this extension needs to be provisioned.
             */
            provisionAfterExtensions?: string[];
            /**
             * The provisioning state, which only appears in the response.
             */
            provisioningState: string;
            /**
             * The name of the extension handler publisher.
             */
            publisher: string;
            /**
             * Json formatted public settings for the extension.
             */
            settings?: any;
            /**
             * Specifies the type of the extension; an example is "CustomScriptExtension".
             */
            type: string;
            /**
             * Specifies the version of the script handler.
             */
            typeHandlerVersion: string;
        }

        /**
         * Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.
         */
        export interface VaultCertificateResponse {
            /**
             * For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name <UppercaseThumbprint>.crt for the X509 certificate file and <UppercaseThumbprint>.prv for private key. Both of these files are .pem formatted.
             */
            certificateStore: string;
            /**
             * This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
             */
            certificateUrl: string;
        }

        /**
         * Specifies set of certificates that should be installed onto the virtual machines.
         */
        export interface VaultSecretGroupResponse {
            /**
             * The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
             */
            sourceVault: v20230701preview.SubResourceResponse;
            /**
             * The list of key vault references in SourceVault which contain certificates.
             */
            vaultCertificates: v20230701preview.VaultCertificateResponse[];
        }

        /**
         * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save.
         */
        export interface VmImagePlanResponse {
            /**
             * The plan ID.
             */
            name?: string;
            /**
             * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
             */
            product?: string;
            /**
             * The promotion code.
             */
            promotionCode?: string;
            /**
             * The publisher ID.
             */
            publisher?: string;
        }

        /**
         * Identities for the virtual machine scale set under the node type.
         */
        export interface VmManagedIdentityResponse {
            /**
             * The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
             */
            userAssignedIdentities?: string[];
        }

        /**
         * Managed data disk description.
         */
        export interface VmssDataDiskResponse {
            /**
             * Managed data disk letter. It can not use the reserved letter C or D and it can not change after created.
             */
            diskLetter: string;
            /**
             * Disk size for each vm in the node type in GBs.
             */
            diskSizeGB: number;
            /**
             * Managed data disk type. Specifies the storage account type for the managed disk
             */
            diskType: string;
            /**
             * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk.
             */
            lun: number;
        }

    }
}
