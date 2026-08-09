import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * APIServerProfile represents an API server profile.
 */
export interface APIServerProfileArgs {
    /**
     * API server visibility.
     */
    visibility?: pulumi.Input<string | enums.Visibility | undefined>;
}

/**
 * ClusterProfile represents a cluster profile.
 */
export interface ClusterProfileArgs {
    /**
     * The domain for the cluster.
     */
    domain?: pulumi.Input<string | undefined>;
    /**
     * If FIPS validated crypto modules are used
     */
    fipsValidatedModules?: pulumi.Input<string | enums.FipsValidatedModules | undefined>;
    /**
     * The pull secret for the cluster.
     */
    pullSecret?: pulumi.Input<string | undefined>;
    /**
     * The ID of the cluster resource group.
     */
    resourceGroupId?: pulumi.Input<string | undefined>;
    /**
     * The version of the cluster.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * IngressProfile represents an ingress profile.
 */
export interface IngressProfileArgs {
    /**
     * The ingress profile name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Ingress visibility.
     */
    visibility?: pulumi.Input<string | enums.Visibility | undefined>;
}

/**
 * LoadBalancerProfile represents the profile of the cluster public load balancer.
 */
export interface LoadBalancerProfileArgs {
    /**
     * The desired managed outbound IPs for the cluster public load balancer.
     */
    managedOutboundIps?: pulumi.Input<ManagedOutboundIPsArgs | undefined>;
}

/**
 * ManagedOutboundIPs represents the desired managed outbound IPs for the cluster public load balancer.
 */
export interface ManagedOutboundIPsArgs {
    /**
     * Count represents the desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer.  Allowed values are in the range of 1 - 20.  The default value is 1.
     */
    count?: pulumi.Input<number | undefined>;
}

/**
 * MasterProfile represents a master profile.
 */
export interface MasterProfileArgs {
    /**
     * The resource ID of an associated DiskEncryptionSet, if applicable.
     */
    diskEncryptionSetId?: pulumi.Input<string | undefined>;
    /**
     * Whether master virtual machines are encrypted at host.
     */
    encryptionAtHost?: pulumi.Input<string | enums.EncryptionAtHost | undefined>;
    /**
     * The Azure resource ID of the master subnet.
     */
    subnetId?: pulumi.Input<string | undefined>;
    /**
     * The size of the master VMs.
     */
    vmSize?: pulumi.Input<string | undefined>;
}

/**
 * NetworkProfile represents a network profile.
 */
export interface NetworkProfileArgs {
    /**
     * The cluster load balancer profile.
     */
    loadBalancerProfile?: pulumi.Input<LoadBalancerProfileArgs | undefined>;
    /**
     * The OutboundType used for egress traffic.
     */
    outboundType?: pulumi.Input<string | enums.OutboundType | undefined>;
    /**
     * The CIDR used for OpenShift/Kubernetes Pods.
     */
    podCidr?: pulumi.Input<string | undefined>;
    /**
     * Specifies whether subnets are pre-attached with an NSG
     */
    preconfiguredNSG?: pulumi.Input<string | enums.PreconfiguredNSG | undefined>;
    /**
     * The CIDR used for OpenShift/Kubernetes Services.
     */
    serviceCidr?: pulumi.Input<string | undefined>;
}

/**
 * ServicePrincipalProfile represents a service principal profile.
 */
export interface ServicePrincipalProfileArgs {
    /**
     * The client ID used for the cluster.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The client secret used for the cluster.
     */
    clientSecret?: pulumi.Input<string | undefined>;
}

/**
 * WorkerProfile represents a worker profile.
 */
export interface WorkerProfileArgs {
    /**
     * The number of worker VMs.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * The resource ID of an associated DiskEncryptionSet, if applicable.
     */
    diskEncryptionSetId?: pulumi.Input<string | undefined>;
    /**
     * The disk size of the worker VMs.
     */
    diskSizeGB?: pulumi.Input<number | undefined>;
    /**
     * Whether master virtual machines are encrypted at host.
     */
    encryptionAtHost?: pulumi.Input<string | enums.EncryptionAtHost | undefined>;
    /**
     * The worker profile name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The Azure resource ID of the worker subnet.
     */
    subnetId?: pulumi.Input<string | undefined>;
    /**
     * The size of the worker VMs.
     */
    vmSize?: pulumi.Input<string | undefined>;
}
