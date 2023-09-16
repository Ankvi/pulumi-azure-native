import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace redhatopenshift {
    /**
     * APIServerProfile represents an API server profile.
     */
    export interface APIServerProfileArgs {
        /**
         * The IP of the cluster API server.
         */
        ip?: pulumi.Input<string>;
        /**
         * The URL to access the cluster API server.
         */
        url?: pulumi.Input<string>;
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
     * ConsoleProfile represents a console profile.
     */
    export interface ConsoleProfileArgs {
        /**
         * The URL to access the cluster console.
         */
        url?: pulumi.Input<string>;
    }

    /**
     * IngressProfile represents an ingress profile.
     */
    export interface IngressProfileArgs {
        /**
         * The IP of the ingress.
         */
        ip?: pulumi.Input<string>;
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
         * The CIDR used for OpenShift/Kubernetes Pods.
         */
        podCidr?: pulumi.Input<string>;
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

    export namespace v20220904 {
        /**
         * APIServerProfile represents an API server profile.
         */
        export interface APIServerProfileArgs {
            /**
             * The IP of the cluster API server.
             */
            ip?: pulumi.Input<string>;
            /**
             * The URL to access the cluster API server.
             */
            url?: pulumi.Input<string>;
            /**
             * API server visibility.
             */
            visibility?: pulumi.Input<string | enums.v20220904.Visibility>;
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
            fipsValidatedModules?: pulumi.Input<string | enums.v20220904.FipsValidatedModules>;
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
         * ConsoleProfile represents a console profile.
         */
        export interface ConsoleProfileArgs {
            /**
             * The URL to access the cluster console.
             */
            url?: pulumi.Input<string>;
        }

        /**
         * IngressProfile represents an ingress profile.
         */
        export interface IngressProfileArgs {
            /**
             * The IP of the ingress.
             */
            ip?: pulumi.Input<string>;
            /**
             * The ingress profile name.
             */
            name?: pulumi.Input<string>;
            /**
             * Ingress visibility.
             */
            visibility?: pulumi.Input<string | enums.v20220904.Visibility>;
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
            encryptionAtHost?: pulumi.Input<string | enums.v20220904.EncryptionAtHost>;
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
             * The CIDR used for OpenShift/Kubernetes Pods.
             */
            podCidr?: pulumi.Input<string>;
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
            encryptionAtHost?: pulumi.Input<string | enums.v20220904.EncryptionAtHost>;
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

    }

    export namespace v20230401 {
        /**
         * APIServerProfile represents an API server profile.
         */
        export interface APIServerProfileArgs {
            /**
             * The IP of the cluster API server.
             */
            ip?: pulumi.Input<string>;
            /**
             * The URL to access the cluster API server.
             */
            url?: pulumi.Input<string>;
            /**
             * API server visibility.
             */
            visibility?: pulumi.Input<string | enums.v20230401.Visibility>;
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
            fipsValidatedModules?: pulumi.Input<string | enums.v20230401.FipsValidatedModules>;
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
         * ConsoleProfile represents a console profile.
         */
        export interface ConsoleProfileArgs {
            /**
             * The URL to access the cluster console.
             */
            url?: pulumi.Input<string>;
        }

        /**
         * IngressProfile represents an ingress profile.
         */
        export interface IngressProfileArgs {
            /**
             * The IP of the ingress.
             */
            ip?: pulumi.Input<string>;
            /**
             * The ingress profile name.
             */
            name?: pulumi.Input<string>;
            /**
             * Ingress visibility.
             */
            visibility?: pulumi.Input<string | enums.v20230401.Visibility>;
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
            encryptionAtHost?: pulumi.Input<string | enums.v20230401.EncryptionAtHost>;
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
             * The OutboundType used for egress traffic.
             */
            outboundType?: pulumi.Input<string | enums.v20230401.OutboundType>;
            /**
             * The CIDR used for OpenShift/Kubernetes Pods.
             */
            podCidr?: pulumi.Input<string>;
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
            encryptionAtHost?: pulumi.Input<string | enums.v20230401.EncryptionAtHost>;
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

    }

    export namespace v20230701preview {
        /**
         * APIServerProfile represents an API server profile.
         */
        export interface APIServerProfileArgs {
            /**
             * The IP of the cluster API server.
             */
            ip?: pulumi.Input<string>;
            /**
             * The URL to access the cluster API server.
             */
            url?: pulumi.Input<string>;
            /**
             * API server visibility.
             */
            visibility?: pulumi.Input<string | enums.v20230701preview.Visibility>;
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
            fipsValidatedModules?: pulumi.Input<string | enums.v20230701preview.FipsValidatedModules>;
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
         * ConsoleProfile represents a console profile.
         */
        export interface ConsoleProfileArgs {
            /**
             * The URL to access the cluster console.
             */
            url?: pulumi.Input<string>;
        }

        /**
         * IngressProfile represents an ingress profile.
         */
        export interface IngressProfileArgs {
            /**
             * The IP of the ingress.
             */
            ip?: pulumi.Input<string>;
            /**
             * The ingress profile name.
             */
            name?: pulumi.Input<string>;
            /**
             * Ingress visibility.
             */
            visibility?: pulumi.Input<string | enums.v20230701preview.Visibility>;
        }

        /**
         * LoadBalancerProfile represents the profile of the cluster public load balancer.
         */
        export interface LoadBalancerProfileArgs {
            /**
             * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 1024.
             */
            allocatedOutboundPorts?: pulumi.Input<number>;
            /**
             * The desired managed outbound IPs for the cluster public load balancer.
             */
            managedOutboundIps?: pulumi.Input<v20230701preview.ManagedOutboundIPsArgs>;
            /**
             * The desired outbound IP Prefix resources for the cluster load balancer.
             */
            outboundIpPrefixes?: pulumi.Input<pulumi.Input<v20230701preview.OutboundIPPrefixArgs>[]>;
            /**
             * The desired outbound IP resources for the cluster load balancer.
             */
            outboundIps?: pulumi.Input<pulumi.Input<v20230701preview.OutboundIPArgs>[]>;
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
            encryptionAtHost?: pulumi.Input<string | enums.v20230701preview.EncryptionAtHost>;
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
            loadBalancerProfile?: pulumi.Input<v20230701preview.LoadBalancerProfileArgs>;
            /**
             * The OutboundType used for egress traffic.
             */
            outboundType?: pulumi.Input<string | enums.v20230701preview.OutboundType>;
            /**
             * The CIDR used for OpenShift/Kubernetes Pods.
             */
            podCidr?: pulumi.Input<string>;
            /**
             * The CIDR used for OpenShift/Kubernetes Services.
             */
            serviceCidr?: pulumi.Input<string>;
        }

        /**
         * OutboundIP represents a desired outbound IP resource for the cluster load balancer.
         */
        export interface OutboundIPArgs {
            /**
             * The fully qualified Azure resource id of the IP address resource.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * OutboundIPPrefix represents a desired outbound IP Prefix resource for the cluster load balancer.
         */
        export interface OutboundIPPrefixArgs {
            /**
             * The fully qualified Azure resource id of an IP Prefix resource.
             */
            id?: pulumi.Input<string>;
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
            encryptionAtHost?: pulumi.Input<string | enums.v20230701preview.EncryptionAtHost>;
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

    }
}
