import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * APIServerProfile represents an API server profile.
 */
export interface APIServerProfileArgs {
    /**
     * API server visibility.
     */
    visibility?: pulumi.Input<string | enums.Visibility>;
}

/**
 * ClusterProfile represents a cluster profile.
 */
export interface ClusterProfileArgs {
    /**
     * The domain for the cluster.
     */
    domain?: pulumi.Input<string>;
    /**
     * If FIPS validated crypto modules are used
     */
    fipsValidatedModules?: pulumi.Input<string | enums.FipsValidatedModules>;
    /**
     * The pull secret for the cluster.
     */
    pullSecret?: pulumi.Input<string>;
    /**
     * The ID of the cluster resource group.
     */
    resourceGroupId?: pulumi.Input<string>;
    /**
     * The version of the cluster.
     */
    version?: pulumi.Input<string>;
}

/**
 * IngressProfile represents an ingress profile.
 */
export interface IngressProfileArgs {
    /**
     * The ingress profile name.
     */
    name?: pulumi.Input<string>;
    /**
     * Ingress visibility.
     */
    visibility?: pulumi.Input<string | enums.Visibility>;
}

/**
 * LoadBalancerProfile represents the profile of the cluster public load balancer.
 */
export interface LoadBalancerProfileArgs {
    /**
     * The desired managed outbound IPs for the cluster public load balancer.
     */
    managedOutboundIps?: pulumi.Input<ManagedOutboundIPsArgs>;
}

/**
 * ManagedOutboundIPs represents the desired managed outbound IPs for the cluster public load balancer.
 */
export interface ManagedOutboundIPsArgs {
    /**
     * Count represents the desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer.  Allowed values are in the range of 1 - 20.  The default value is 1.
     */
    count?: pulumi.Input<number>;
}

/**
 * MasterProfile represents a master profile.
 */
export interface MasterProfileArgs {
    /**
     * The resource ID of an associated DiskEncryptionSet, if applicable.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * Whether master virtual machines are encrypted at host.
     */
    encryptionAtHost?: pulumi.Input<string | enums.EncryptionAtHost>;
    /**
     * The Azure resource ID of the master subnet.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * The size of the master VMs.
     */
    vmSize?: pulumi.Input<string>;
}

/**
 * NetworkProfile represents a network profile.
 */
export interface NetworkProfileArgs {
    /**
     * The cluster load balancer profile.
     */
    loadBalancerProfile?: pulumi.Input<LoadBalancerProfileArgs>;
    /**
     * The OutboundType used for egress traffic.
     */
    outboundType?: pulumi.Input<string | enums.OutboundType>;
    /**
     * The CIDR used for OpenShift/Kubernetes Pods.
     */
    podCidr?: pulumi.Input<string>;
    /**
     * Specifies whether subnets are pre-attached with an NSG
     */
    preconfiguredNSG?: pulumi.Input<string | enums.PreconfiguredNSG>;
    /**
     * The CIDR used for OpenShift/Kubernetes Services.
     */
    serviceCidr?: pulumi.Input<string>;
}

/**
 * ServicePrincipalProfile represents a service principal profile.
 */
export interface ServicePrincipalProfileArgs {
    /**
     * The client ID used for the cluster.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The client secret used for the cluster.
     */
    clientSecret?: pulumi.Input<string>;
}

/**
 * WorkerProfile represents a worker profile.
 */
export interface WorkerProfileArgs {
    /**
     * The number of worker VMs.
     */
    count?: pulumi.Input<number>;
    /**
     * The resource ID of an associated DiskEncryptionSet, if applicable.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The disk size of the worker VMs.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Whether master virtual machines are encrypted at host.
     */
    encryptionAtHost?: pulumi.Input<string | enums.EncryptionAtHost>;
    /**
     * The worker profile name.
     */
    name?: pulumi.Input<string>;
    /**
     * The Azure resource ID of the worker subnet.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * The size of the worker VMs.
     */
    vmSize?: pulumi.Input<string>;
}
