import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * APIServerProfile represents an API server profile.
     */
    export interface APIServerProfileResponse {
        /**
         * The IP of the cluster API server.
         */
        ip?: string;
        /**
         * The URL to access the cluster API server.
         */
        url?: string;
        /**
         * API server visibility.
         */
        visibility?: string;
    }

    /**
     * ClusterProfile represents a cluster profile.
     */
    export interface ClusterProfileResponse {
        /**
         * The domain for the cluster.
         */
        domain?: string;
        /**
         * If FIPS validated crypto modules are used
         */
        fipsValidatedModules?: string;
        /**
         * The pull secret for the cluster.
         */
        pullSecret?: string;
        /**
         * The ID of the cluster resource group.
         */
        resourceGroupId?: string;
        /**
         * The version of the cluster.
         */
        version?: string;
    }

    /**
     * ConsoleProfile represents a console profile.
     */
    export interface ConsoleProfileResponse {
        /**
         * The URL to access the cluster console.
         */
        url?: string;
    }

    /**
     * EffectiveOutboundIP represents an effective outbound IP resource of the cluster public load balancer.
     */
    export interface EffectiveOutboundIPResponse {
        /**
         * The fully qualified Azure resource id of an IP address resource.
         */
        id?: string;
    }

    /**
     * IngressProfile represents an ingress profile.
     */
    export interface IngressProfileResponse {
        /**
         * The IP of the ingress.
         */
        ip?: string;
        /**
         * The ingress profile name.
         */
        name?: string;
        /**
         * Ingress visibility.
         */
        visibility?: string;
    }

    /**
     * LoadBalancerProfile represents the profile of the cluster public load balancer.
     */
    export interface LoadBalancerProfileResponse {
        /**
         * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 1024.
         */
        allocatedOutboundPorts?: number;
        /**
         * The list of effective outbound IP addresses of the public load balancer.
         */
        effectiveOutboundIps: EffectiveOutboundIPResponse[];
        /**
         * The desired managed outbound IPs for the cluster public load balancer.
         */
        managedOutboundIps?: ManagedOutboundIPsResponse;
        /**
         * The desired outbound IP Prefix resources for the cluster load balancer.
         */
        outboundIpPrefixes?: OutboundIPPrefixResponse[];
        /**
         * The desired outbound IP resources for the cluster load balancer.
         */
        outboundIps?: OutboundIPResponse[];
    }

    /**
     * ManagedOutboundIPs represents the desired managed outbound IPs for the cluster public load balancer.
     */
    export interface ManagedOutboundIPsResponse {
        /**
         * Count represents the desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer.  Allowed values are in the range of 1 - 20.  The default value is 1.
         */
        count?: number;
    }

    /**
     * MasterProfile represents a master profile.
     */
    export interface MasterProfileResponse {
        /**
         * The resource ID of an associated DiskEncryptionSet, if applicable.
         */
        diskEncryptionSetId?: string;
        /**
         * Whether master virtual machines are encrypted at host.
         */
        encryptionAtHost?: string;
        /**
         * The Azure resource ID of the master subnet.
         */
        subnetId?: string;
        /**
         * The size of the master VMs.
         */
        vmSize?: string;
    }

    /**
     * NetworkProfile represents a network profile.
     */
    export interface NetworkProfileResponse {
        /**
         * The cluster load balancer profile.
         */
        loadBalancerProfile?: LoadBalancerProfileResponse;
        /**
         * The OutboundType used for egress traffic.
         */
        outboundType?: string;
        /**
         * The CIDR used for OpenShift/Kubernetes Pods.
         */
        podCidr?: string;
        /**
         * The CIDR used for OpenShift/Kubernetes Services.
         */
        serviceCidr?: string;
    }

    /**
     * OutboundIPPrefix represents a desired outbound IP Prefix resource for the cluster load balancer.
     */
    export interface OutboundIPPrefixResponse {
        /**
         * The fully qualified Azure resource id of an IP Prefix resource.
         */
        id?: string;
    }

    /**
     * OutboundIP represents a desired outbound IP resource for the cluster load balancer.
     */
    export interface OutboundIPResponse {
        /**
         * The fully qualified Azure resource id of the IP address resource.
         */
        id?: string;
    }

    /**
     * ServicePrincipalProfile represents a service principal profile.
     */
    export interface ServicePrincipalProfileResponse {
        /**
         * The client ID used for the cluster.
         */
        clientId?: string;
        /**
         * The client secret used for the cluster.
         */
        clientSecret?: string;
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
     * WorkerProfile represents a worker profile.
     */
    export interface WorkerProfileResponse {
        /**
         * The number of worker VMs.
         */
        count?: number;
        /**
         * The resource ID of an associated DiskEncryptionSet, if applicable.
         */
        diskEncryptionSetId?: string;
        /**
         * The disk size of the worker VMs.
         */
        diskSizeGB?: number;
        /**
         * Whether master virtual machines are encrypted at host.
         */
        encryptionAtHost?: string;
        /**
         * The worker profile name.
         */
        name?: string;
        /**
         * The Azure resource ID of the worker subnet.
         */
        subnetId?: string;
        /**
         * The size of the worker VMs.
         */
        vmSize?: string;
    }
