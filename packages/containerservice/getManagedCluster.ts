import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Managed cluster.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2017-08-31, 2019-02-01, 2019-06-01, 2021-05-01, 2023-05-02-preview, 2023-06-01, 2023-06-02-preview, 2023-07-01, 2023-07-02-preview, 2023-08-01, 2023-08-02-preview, 2023-09-01, 2023-09-02-preview, 2023-10-01, 2023-10-02-preview, 2023-11-01, 2023-11-02-preview, 2024-01-01, 2024-01-02-preview.
 */
export function getManagedCluster(args: GetManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:getManagedCluster", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetManagedClusterArgs {
    /**
     * The name of the resource group. The name is case insensitive.
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
     * Azure Monitor addon profiles for monitoring the managed cluster.
     */
    readonly azureMonitorProfile?: types.outputs.ManagedClusterAzureMonitorProfileResponse;
    /**
     * The Azure Portal requires certain Cross-Origin Resource Sharing (CORS) headers to be sent in some responses, which Kubernetes APIServer doesn't handle by default. This special FQDN supports CORS, allowing the Azure Portal to function properly.
     */
    readonly azurePortalFQDN: string;
    /**
     * If kubernetesVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If kubernetesVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
     */
    readonly currentKubernetesVersion: string;
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
     * (DEPRECATED) Whether to enable Kubernetes pod security policy (preview). PodSecurityPolicy was deprecated in Kubernetes v1.21, and removed from Kubernetes in v1.25. Learn more at https://aka.ms/k8s/psp and https://aka.ms/aks/psp.
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the managed cluster, if configured.
     */
    readonly identity?: types.outputs.ManagedClusterIdentityResponse;
    /**
     * Identities associated with the cluster.
     */
    readonly identityProfile?: {[key: string]: types.outputs.UserAssignedIdentityResponse};
    /**
     * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -> 1.15.x or 1.15.x -> 1.16.x are allowed, however 1.14.x -> 1.16.x is not allowed. See [upgrading an AKS cluster](https://docs.microsoft.com/azure/aks/upgrade-cluster) for more details.
     */
    readonly kubernetesVersion?: string;
    /**
     * The profile for Linux VMs in the Managed Cluster.
     */
    readonly linuxProfile?: types.outputs.ContainerServiceLinuxProfileResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The max number of agent pools for the managed cluster.
     */
    readonly maxAgentPools: number;
    /**
     * The name of the resource
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
     * The OIDC issuer profile of the Managed Cluster.
     */
    readonly oidcIssuerProfile?: types.outputs.ManagedClusterOIDCIssuerProfileResponse;
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
     * Allow or deny public network access for AKS
     */
    readonly publicNetworkAccess?: string;
    /**
     * Security profile for the managed cluster.
     */
    readonly securityProfile?: types.outputs.ManagedClusterSecurityProfileResponse;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    readonly servicePrincipalProfile?: types.outputs.ManagedClusterServicePrincipalProfileResponse;
    /**
     * The managed cluster SKU.
     */
    readonly sku?: types.outputs.ManagedClusterSKUResponse;
    /**
     * Storage profile for the managed cluster.
     */
    readonly storageProfile?: types.outputs.ManagedClusterStorageProfileResponse;
    /**
     * The support plan for the Managed Cluster. If unspecified, the default is 'KubernetesOfficial'.
     */
    readonly supportPlan?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The profile for Windows VMs in the Managed Cluster.
     */
    readonly windowsProfile?: types.outputs.ManagedClusterWindowsProfileResponse;
    /**
     * Workload Auto-scaler profile for the managed cluster.
     */
    readonly workloadAutoScalerProfile?: types.outputs.ManagedClusterWorkloadAutoScalerProfileResponse;
}
/**
 * Managed cluster.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2017-08-31, 2019-02-01, 2019-06-01, 2021-05-01, 2023-05-02-preview, 2023-06-01, 2023-06-02-preview, 2023-07-01, 2023-07-02-preview, 2023-08-01, 2023-08-02-preview, 2023-09-01, 2023-09-02-preview, 2023-10-01, 2023-10-02-preview, 2023-11-01, 2023-11-02-preview, 2024-01-01, 2024-01-02-preview.
 */
export function getManagedClusterOutput(args: GetManagedClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedClusterResult> {
    return pulumi.output(args).apply((a: any) => getManagedCluster(a, opts))
}

export interface GetManagedClusterOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}