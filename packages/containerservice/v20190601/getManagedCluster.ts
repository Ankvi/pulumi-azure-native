import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the details of the managed cluster with a specified resource group and name.
 */
export function getManagedCluster(args: GetManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20190601:getManagedCluster", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetManagedClusterArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
}

/**
 * Managed cluster.
 */
export interface GetManagedClusterResult {
    /**
     * Profile of Azure Active Directory configuration.
     */
    readonly aadProfile?: types.outputs.containerservice.v20190601.ManagedClusterAADProfileResponse;
    /**
     * Profile of managed cluster add-on.
     */
    readonly addonProfiles?: {[key: string]: types.outputs.containerservice.v20190601.ManagedClusterAddonProfileResponse};
    /**
     * Properties of the agent pool.
     */
    readonly agentPoolProfiles?: types.outputs.containerservice.v20190601.ManagedClusterAgentPoolProfileResponse[];
    /**
     * (PREVIEW) Authorized IP Ranges to kubernetes API server.
     */
    readonly apiServerAuthorizedIPRanges?: string[];
    /**
     * DNS prefix specified when creating the managed cluster.
     */
    readonly dnsPrefix?: string;
    /**
     * (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
     */
    readonly enablePodSecurityPolicy?: boolean;
    /**
     * Whether to enable Kubernetes Role-Based Access Control.
     */
    readonly enableRBAC?: boolean;
    /**
     * FQDN for the master pool.
     */
    readonly fqdn: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The identity of the managed cluster, if configured.
     */
    readonly identity?: types.outputs.containerservice.v20190601.ManagedClusterIdentityResponse;
    /**
     * Version of Kubernetes specified when creating the managed cluster.
     */
    readonly kubernetesVersion?: string;
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    readonly linuxProfile?: types.outputs.containerservice.v20190601.ContainerServiceLinuxProfileResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * The max number of agent pools for the managed cluster.
     */
    readonly maxAgentPools: number;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Profile of network configuration.
     */
    readonly networkProfile?: types.outputs.containerservice.v20190601.ContainerServiceNetworkProfileResponse;
    /**
     * Name of the resource group containing agent pool nodes.
     */
    readonly nodeResourceGroup?: string;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    readonly servicePrincipalProfile?: types.outputs.containerservice.v20190601.ManagedClusterServicePrincipalProfileResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Profile for Windows VMs in the container service cluster.
     */
    readonly windowsProfile?: types.outputs.containerservice.v20190601.ManagedClusterWindowsProfileResponse;
}
/**
 * Gets the details of the managed cluster with a specified resource group and name.
 */
export function getManagedClusterOutput(args: GetManagedClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedClusterResult> {
    return pulumi.output(args).apply((a: any) => getManagedCluster(a, opts))
}

export interface GetManagedClusterOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}
