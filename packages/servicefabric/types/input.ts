import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * Specifies the settings for a network interface to attach to the node type.
 */
export interface AdditionalNetworkInterfaceConfigurationArgs {
    /**
     * Specifies the DSCP configuration to apply to the network interface.
     */
    dscpConfiguration?: pulumi.Input<SubResourceArgs>;
    /**
     * Specifies whether the network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Specifies the IP configurations of the network interface.
     */
    ipConfigurations: pulumi.Input<pulumi.Input<IpConfigurationArgs>[]>;
    /**
     * Name of the network interface.
     */
    name: pulumi.Input<string>;
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
 * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
 */
export interface ClusterHealthPolicyArgs {
    /**
     * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
     *
     * The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
     * If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
     * This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
     * The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
     */
    maxPercentUnhealthyApplications: pulumi.Input<number>;
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
    maxPercentUnhealthyNodes: pulumi.Input<number>;
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
 * Describes the monitoring policies for the cluster upgrade.
 */
export interface ClusterMonitoringPolicyArgs {
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
     * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
     */
    upgradeDomainTimeout: pulumi.Input<string>;
    /**
     * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
     */
    upgradeTimeout: pulumi.Input<string>;
}

/**
 * Describes the delta health policies for the cluster upgrade.
 */
export interface ClusterUpgradeDeltaHealthPolicyArgs {
    /**
     * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
     * The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
     * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
     * NOTE: This value will overwrite the value specified in properties.UpgradeDescription.HealthPolicy.MaxPercentUnhealthyApplications
     */
    maxPercentDeltaUnhealthyApplications?: pulumi.Input<number>;
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
    maxPercentUpgradeDomainDeltaUnhealthyNodes?: pulumi.Input<number>;
}

/**
 * Describes the policy used when upgrading the cluster.
 */
export interface ClusterUpgradePolicyArgs {
    /**
     * The cluster delta health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade.
     */
    deltaHealthPolicy?: pulumi.Input<ClusterUpgradeDeltaHealthPolicyArgs>;
    /**
     * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
     */
    forceRestart?: pulumi.Input<boolean>;
    /**
     * The cluster health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade.
     */
    healthPolicy?: pulumi.Input<ClusterHealthPolicyArgs>;
    /**
     * The cluster monitoring policy describes the parameters for monitoring an upgrade in Monitored mode.
     */
    monitoringPolicy?: pulumi.Input<ClusterMonitoringPolicyArgs>;
    /**
     * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues.
     * When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues.
     * The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
     * This value must be between 00:00:00 and 49710.06:28:15 (unsigned 32 bit integer for seconds)
     */
    upgradeReplicaSetCheckTimeout?: pulumi.Input<string>;
}
/**
 * clusterUpgradePolicyArgsProvideDefaults sets the appropriate defaults for ClusterUpgradePolicyArgs
 */
export function clusterUpgradePolicyArgsProvideDefaults(val: ClusterUpgradePolicyArgs): ClusterUpgradePolicyArgs {
    return {
        ...val,
        healthPolicy: (val.healthPolicy ? pulumi.output(val.healthPolicy).apply(clusterHealthPolicyArgsProvideDefaults) : undefined),
    };
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
 * Specifies an IP configuration of the network interface.
 */
export interface IpConfigurationArgs {
    /**
     * Specifies an array of references to backend address pools of application gateways. A node type can reference backend address pools of multiple application gateways. Multiple node types cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to backend address pools of load balancers. A node type can reference backend address pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer.	
     */
    loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Specifies an array of references to inbound Nat pools of the load balancers. A node type can reference inbound nat pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer.
     */
    loadBalancerInboundNatPools?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
    /**
     * Name of the network interface.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies whether the IP configuration's private IP is IPv4 or IPv6. Default is IPv4.
     */
    privateIPAddressVersion?: pulumi.Input<string | enums.PrivateIPAddressVersion>;
    /**
     * The public IP address configuration of the network interface.
     */
    publicIPAddressConfiguration?: pulumi.Input<IpConfigurationPublicIPAddressConfigurationArgs>;
    /**
     * Specifies the subnet of the network interface.
     */
    subnet?: pulumi.Input<SubResourceArgs>;
}
/**
 * ipConfigurationArgsProvideDefaults sets the appropriate defaults for IpConfigurationArgs
 */
export function ipConfigurationArgsProvideDefaults(val: IpConfigurationArgs): IpConfigurationArgs {
    return {
        ...val,
        privateIPAddressVersion: (val.privateIPAddressVersion) ?? "IPv4",
        publicIPAddressConfiguration: (val.publicIPAddressConfiguration ? pulumi.output(val.publicIPAddressConfiguration).apply(ipConfigurationPublicIPAddressConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * The public IP address configuration of the network interface.
 */
export interface IpConfigurationPublicIPAddressConfigurationArgs {
    /**
     * Specifies the list of IP tags associated with the public IP address.
     */
    ipTags?: pulumi.Input<pulumi.Input<IpTagArgs>[]>;
    /**
     * Name of the network interface.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies whether the IP configuration's public IP is IPv4 or IPv6. Default is IPv4.
     */
    publicIPAddressVersion?: pulumi.Input<string | enums.PublicIPAddressVersion>;
}
/**
 * ipConfigurationPublicIPAddressConfigurationArgsProvideDefaults sets the appropriate defaults for IpConfigurationPublicIPAddressConfigurationArgs
 */
export function ipConfigurationPublicIPAddressConfigurationArgsProvideDefaults(val: IpConfigurationPublicIPAddressConfigurationArgs): IpConfigurationPublicIPAddressConfigurationArgs {
    return {
        ...val,
        publicIPAddressVersion: (val.publicIPAddressVersion) ?? "IPv4",
    };
}

/**
 * The IP tag associated with the public IP address.
 */
export interface IpTagArgs {
    /**
     * IP tag type. Example: FirstPartyUsage.
     */
    ipTagType: pulumi.Input<string>;
    /**
     * IP tag associated with the public IP. Example: SQL, Storage etc.
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
 * Provides information about NAT configuration on the default public Load Balancer for the node type.
 */
export interface NodeTypeNatConfigArgs {
    /**
     * The internal port for the NAT configuration.
     */
    backendPort?: pulumi.Input<number>;
    /**
     * The port range end for the external endpoint.
     */
    frontendPortRangeEnd?: pulumi.Input<number>;
    /**
     * The port range start for the external endpoint.
     */
    frontendPortRangeStart?: pulumi.Input<number>;
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
 * The type of placement policy for a service fabric service. Following are the possible values.
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
     * Indicates the setup order for the extension.
     */
    setupOrder?: pulumi.Input<pulumi.Input<string | enums.VmssExtensionSetupOrder>[]>;
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
