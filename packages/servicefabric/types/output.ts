import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * Specifies the settings for a network interface to attach to the node type.
 */
export interface AdditionalNetworkInterfaceConfigurationResponse {
    /**
     * Specifies the DSCP configuration to apply to the network interface.
     */
    dscpConfiguration?: SubResourceResponse;
    /**
     * Specifies whether the network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking?: boolean;
    /**
     * Specifies the IP configurations of the network interface.
     */
    ipConfigurations: IpConfigurationResponse[];
    /**
     * Name of the network interface.
     */
    name: string;
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
 * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
 */
export interface ClusterHealthPolicyResponse {
    /**
     * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
     *
     * The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
     * If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
     * This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
     * The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
     */
    maxPercentUnhealthyApplications: number;
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
    maxPercentUnhealthyNodes: number;
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
 * Describes the monitoring policies for the cluster upgrade.
 */
export interface ClusterMonitoringPolicyResponse {
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
     * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
     */
    upgradeDomainTimeout: string;
    /**
     * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
     */
    upgradeTimeout: string;
}

/**
 * Describes the delta health policies for the cluster upgrade.
 */
export interface ClusterUpgradeDeltaHealthPolicyResponse {
    /**
     * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
     * The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
     * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
     * NOTE: This value will overwrite the value specified in properties.UpgradeDescription.HealthPolicy.MaxPercentUnhealthyApplications
     */
    maxPercentDeltaUnhealthyApplications?: number;
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
    maxPercentUpgradeDomainDeltaUnhealthyNodes?: number;
}

/**
 * Describes the policy used when upgrading the cluster.
 */
export interface ClusterUpgradePolicyResponse {
    /**
     * The cluster delta health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade.
     */
    deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicyResponse;
    /**
     * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
     */
    forceRestart?: boolean;
    /**
     * The cluster health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade.
     */
    healthPolicy?: ClusterHealthPolicyResponse;
    /**
     * The cluster monitoring policy describes the parameters for monitoring an upgrade in Monitored mode.
     */
    monitoringPolicy?: ClusterMonitoringPolicyResponse;
    /**
     * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues.
     * When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues.
     * The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
     * This value must be between 00:00:00 and 49710.06:28:15 (unsigned 32 bit integer for seconds)
     */
    upgradeReplicaSetCheckTimeout?: string;
}
/**
 * clusterUpgradePolicyResponseProvideDefaults sets the appropriate defaults for ClusterUpgradePolicyResponse
 */
export function clusterUpgradePolicyResponseProvideDefaults(val: ClusterUpgradePolicyResponse): ClusterUpgradePolicyResponse {
    return {
        ...val,
        healthPolicy: (val.healthPolicy ? clusterHealthPolicyResponseProvideDefaults(val.healthPolicy) : undefined),
    };
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
 * Constraints for Fault Simulation action.
 */
export interface FaultSimulationConstraintsResponse {
    /**
     * The absolute expiration timestamp (UTC) after which this fault simulation should be stopped if it's still active.
     */
    expirationTime?: string;
}

/**
 * Details for Fault Simulation.
 */
export interface FaultSimulationDetailsResponse {
    /**
     * unique identifier for the cluster resource.
     */
    clusterId?: string;
    /**
     * List of node type simulations associated with the cluster fault simulation.
     */
    nodeTypeFaultSimulation?: NodeTypeFaultSimulationResponse[];
    /**
     * unique identifier for the operation associated with the fault simulation.
     */
    operationId?: string;
    /**
     * Fault simulation parameters.
     */
    parameters?: ZoneFaultSimulationContentResponse;
}

/**
 * Fault simulation object with status.
 */
export interface FaultSimulationResponse {
    /**
     * Fault simulation details
     */
    details?: FaultSimulationDetailsResponse;
    /**
     * The end time of the fault simulation.
     */
    endTime?: string;
    /**
     * unique identifier for the fault simulation.
     */
    simulationId?: string;
    /**
     * The start time of the fault simulation.
     */
    startTime?: string;
    /**
     * Fault simulation status
     */
    status?: string;
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
 * Specifies an IP configuration of the network interface.
 */
export interface IpConfigurationResponse {
    /**
     * Specifies an array of references to backend address pools of application gateways. A node type can reference backend address pools of multiple application gateways. Multiple node types cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools?: SubResourceResponse[];
    /**
     * Specifies an array of references to backend address pools of load balancers. A node type can reference backend address pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer.	
     */
    loadBalancerBackendAddressPools?: SubResourceResponse[];
    /**
     * Specifies an array of references to inbound Nat pools of the load balancers. A node type can reference inbound nat pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer.
     */
    loadBalancerInboundNatPools?: SubResourceResponse[];
    /**
     * Name of the network interface.
     */
    name: string;
    /**
     * Specifies whether the IP configuration's private IP is IPv4 or IPv6. Default is IPv4.
     */
    privateIPAddressVersion?: string;
    /**
     * The public IP address configuration of the network interface.
     */
    publicIPAddressConfiguration?: IpConfigurationResponsePublicIPAddressConfiguration;
    /**
     * Specifies the subnet of the network interface.
     */
    subnet?: SubResourceResponse;
}
/**
 * ipConfigurationResponseProvideDefaults sets the appropriate defaults for IpConfigurationResponse
 */
export function ipConfigurationResponseProvideDefaults(val: IpConfigurationResponse): IpConfigurationResponse {
    return {
        ...val,
        privateIPAddressVersion: (val.privateIPAddressVersion) ?? "IPv4",
        publicIPAddressConfiguration: (val.publicIPAddressConfiguration ? ipConfigurationResponsePublicIPAddressConfigurationProvideDefaults(val.publicIPAddressConfiguration) : undefined),
    };
}

/**
 * The public IP address configuration of the network interface.
 */
export interface IpConfigurationResponsePublicIPAddressConfiguration {
    /**
     * Specifies the list of IP tags associated with the public IP address.
     */
    ipTags?: IpTagResponse[];
    /**
     * Name of the network interface.
     */
    name: string;
    /**
     * Specifies whether the IP configuration's public IP is IPv4 or IPv6. Default is IPv4.
     */
    publicIPAddressVersion?: string;
}
/**
 * ipConfigurationResponsePublicIPAddressConfigurationProvideDefaults sets the appropriate defaults for IpConfigurationResponsePublicIPAddressConfiguration
 */
export function ipConfigurationResponsePublicIPAddressConfigurationProvideDefaults(val: IpConfigurationResponsePublicIPAddressConfiguration): IpConfigurationResponsePublicIPAddressConfiguration {
    return {
        ...val,
        publicIPAddressVersion: (val.publicIPAddressVersion) ?? "IPv4",
    };
}

/**
 * The IP tag associated with the public IP address.
 */
export interface IpTagResponse {
    /**
     * IP tag type. Example: FirstPartyUsage.
     */
    ipTagType: string;
    /**
     * IP tag associated with the public IP. Example: SQL, Storage etc.
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
 * Node type fault simulation object with status.
 */
export interface NodeTypeFaultSimulationResponse {
    /**
     * Node type name.
     */
    nodeTypeName?: string;
    /**
     * Current or latest asynchronous operation identifier on the node type.
     */
    operationId?: string;
    /**
     * Current or latest asynchronous operation status on the node type
     */
    operationStatus: string;
    /**
     * Fault simulation status
     */
    status?: string;
}

/**
 * Provides information about NAT configuration on the default public Load Balancer for the node type.
 */
export interface NodeTypeNatConfigResponse {
    /**
     * The internal port for the NAT configuration.
     */
    backendPort?: number;
    /**
     * The port range end for the external endpoint.
     */
    frontendPortRangeEnd?: number;
    /**
     * The port range start for the external endpoint.
     */
    frontendPortRangeStart?: number;
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
     * Zone resiliency status details for the resource.
     */
    details: string;
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
 * The type of placement policy for a service fabric service. Following are the possible values.
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
     * Indicates the setup order for the extension.
     */
    setupOrder?: string[];
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

/**
 * Parameters for Zone Fault Simulation action.
 */
export interface ZoneFaultSimulationContentResponse {
    /**
     * Constraints for Fault Simulation action.
     */
    constraints?: FaultSimulationConstraintsResponse;
    /**
     * The kind of fault simulation.
     * Expected value is 'Zone'.
     */
    faultKind: "Zone";
    /**
     * Force the action to go through without any check on the cluster.
     */
    force?: boolean;
    /**
     * Indicates the zones of the fault simulation.
     */
    zones?: string[];
}
