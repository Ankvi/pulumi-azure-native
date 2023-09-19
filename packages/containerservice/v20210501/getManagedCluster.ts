import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Managed cluster.
 */
export function getManagedCluster(args: GetManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20210501:getManagedCluster", {
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
     * The Azure Active Directory configuration.
     */
    readonly aadProfile?: types.outputs.ManagedClusterAADProfileResponse;
    /**
     * The profile of managed cluster add-on.
     */
    readonly addonProfiles?: {[key: string]: types.outputs.ManagedClusterAddonProfileResponse};
    /**
     * The agent pool properties.
     */
    readonly agentPoolProfiles?: types.outputs.ManagedClusterAgentPoolProfileResponse[];
    /**
     * The access profile for managed cluster API server.
     */
    readonly apiServerAccessProfile?: types.outputs.ManagedClusterAPIServerAccessProfileResponse;
    /**
     * Parameters to be applied to the cluster-autoscaler when enabled
     */
    readonly autoScalerProfile?: types.outputs.ManagedClusterPropertiesResponseAutoScalerProfile;
    /**
     * The auto upgrade configuration.
     */
    readonly autoUpgradeProfile?: types.outputs.ManagedClusterAutoUpgradeProfileResponse;
    /**
     * The Azure Portal requires certain Cross-Origin Resource Sharing (CORS) headers to be sent in some responses, which Kubernetes APIServer doesn't handle by default. This special FQDN supports CORS, allowing the Azure Portal to function properly.
     */
    readonly azurePortalFQDN: string;
    /**
     * If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details see [disable local accounts](https://docs.microsoft.com/azure/aks/managed-aad#disable-local-accounts-preview).
     */
    readonly disableLocalAccounts?: boolean;
    /**
     * This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}'
     */
    readonly diskEncryptionSetID?: string;
    /**
     * This cannot be updated once the Managed Cluster has been created.
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
     * The extended location of the Virtual Machine.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The FQDN of the master pool.
     */
    readonly fqdn: string;
    /**
     * This cannot be updated once the Managed Cluster has been created.
     */
    readonly fqdnSubdomain?: string;
    /**
     * Configurations for provisioning the cluster with HTTP proxy servers.
     */
    readonly httpProxyConfig?: types.outputs.ManagedClusterHTTPProxyConfigResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The identity of the managed cluster, if configured.
     */
    readonly identity?: types.outputs.ManagedClusterIdentityResponse;
    /**
     * Identities associated with the cluster.
     */
    readonly identityProfile?: {[key: string]: types.outputs.ManagedClusterPropertiesResponseIdentityProfile};
    /**
     * When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -> 1.15.x or 1.15.x -> 1.16.x are allowed, however 1.14.x -> 1.16.x is not allowed. See [upgrading an AKS cluster](https://docs.microsoft.com/azure/aks/upgrade-cluster) for more details.
     */
    readonly kubernetesVersion?: string;
    /**
     * The profile for Linux VMs in the Managed Cluster.
     */
    readonly linuxProfile?: types.outputs.ContainerServiceLinuxProfileResponse;
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
     * The network configuration profile.
     */
    readonly networkProfile?: types.outputs.ContainerServiceNetworkProfileResponse;
    /**
     * The name of the resource group containing agent pool nodes.
     */
    readonly nodeResourceGroup?: string;
    /**
     * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on AAD pod identity integration.
     */
    readonly podIdentityProfile?: types.outputs.ManagedClusterPodIdentityProfileResponse;
    /**
     * The Power State of the cluster.
     */
    readonly powerState: types.outputs.PowerStateResponse;
    /**
     * The FQDN of private cluster.
     */
    readonly privateFQDN: string;
    /**
     * Private link resources associated with the cluster.
     */
    readonly privateLinkResources?: types.outputs.PrivateLinkResourceResponse[];
    /**
     * The current provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    readonly servicePrincipalProfile?: types.outputs.ManagedClusterServicePrincipalProfileResponse;
    /**
     * The managed cluster SKU.
     */
    readonly sku?: types.outputs.ManagedClusterSKUResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The profile for Windows VMs in the Managed Cluster.
     */
    readonly windowsProfile?: types.outputs.ManagedClusterWindowsProfileResponse;
}
/**
 * Managed cluster.
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
