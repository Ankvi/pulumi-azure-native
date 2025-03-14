import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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





