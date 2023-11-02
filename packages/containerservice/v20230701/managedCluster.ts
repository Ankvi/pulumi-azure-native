import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Managed cluster.
 */
export class ManagedCluster extends pulumi.CustomResource {
    /**
     * Get an existing ManagedCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedCluster {
        return new ManagedCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice/v20230701:ManagedCluster';

    /**
     * Returns true if the given object is an instance of ManagedCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedCluster.__pulumiType;
    }

    /**
     * The Azure Active Directory configuration.
     */
    public readonly aadProfile!: pulumi.Output<types.outputs.ManagedClusterAADProfileResponse | undefined>;
    /**
     * The profile of managed cluster add-on.
     */
    public readonly addonProfiles!: pulumi.Output<{[key: string]: types.outputs.ManagedClusterAddonProfileResponse} | undefined>;
    /**
     * The agent pool properties.
     */
    public readonly agentPoolProfiles!: pulumi.Output<types.outputs.ManagedClusterAgentPoolProfileResponse[] | undefined>;
    /**
     * The access profile for managed cluster API server.
     */
    public readonly apiServerAccessProfile!: pulumi.Output<types.outputs.ManagedClusterAPIServerAccessProfileResponse | undefined>;
    /**
     * Parameters to be applied to the cluster-autoscaler when enabled
     */
    public readonly autoScalerProfile!: pulumi.Output<types.outputs.ManagedClusterPropertiesResponseAutoScalerProfile | undefined>;
    /**
     * The auto upgrade configuration.
     */
    public readonly autoUpgradeProfile!: pulumi.Output<types.outputs.ManagedClusterAutoUpgradeProfileResponse | undefined>;
    /**
     * Azure Monitor addon profiles for monitoring the managed cluster.
     */
    public readonly azureMonitorProfile!: pulumi.Output<types.outputs.ManagedClusterAzureMonitorProfileResponse | undefined>;
    /**
     * The Azure Portal requires certain Cross-Origin Resource Sharing (CORS) headers to be sent in some responses, which Kubernetes APIServer doesn't handle by default. This special FQDN supports CORS, allowing the Azure Portal to function properly.
     */
    public /*out*/ readonly azurePortalFQDN!: pulumi.Output<string>;
    /**
     * If kubernetesVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If kubernetesVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
     */
    public /*out*/ readonly currentKubernetesVersion!: pulumi.Output<string>;
    /**
     * If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details see [disable local accounts](https://docs.microsoft.com/azure/aks/managed-aad#disable-local-accounts-preview).
     */
    public readonly disableLocalAccounts!: pulumi.Output<boolean | undefined>;
    /**
     * This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}'
     */
    public readonly diskEncryptionSetID!: pulumi.Output<string | undefined>;
    /**
     * This cannot be updated once the Managed Cluster has been created.
     */
    public readonly dnsPrefix!: pulumi.Output<string | undefined>;
    /**
     * (DEPRECATED) Whether to enable Kubernetes pod security policy (preview). PodSecurityPolicy was deprecated in Kubernetes v1.21, and removed from Kubernetes in v1.25. Learn more at https://aka.ms/k8s/psp and https://aka.ms/aks/psp.
     */
    public readonly enablePodSecurityPolicy!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to enable Kubernetes Role-Based Access Control.
     */
    public readonly enableRBAC!: pulumi.Output<boolean | undefined>;
    /**
     * The extended location of the Virtual Machine.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The FQDN of the master pool.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * This cannot be updated once the Managed Cluster has been created.
     */
    public readonly fqdnSubdomain!: pulumi.Output<string | undefined>;
    /**
     * Configurations for provisioning the cluster with HTTP proxy servers.
     */
    public readonly httpProxyConfig!: pulumi.Output<types.outputs.ManagedClusterHTTPProxyConfigResponse | undefined>;
    /**
     * The identity of the managed cluster, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedClusterIdentityResponse | undefined>;
    /**
     * Identities associated with the cluster.
     */
    public readonly identityProfile!: pulumi.Output<{[key: string]: types.outputs.UserAssignedIdentityResponse} | undefined>;
    /**
     * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -> 1.15.x or 1.15.x -> 1.16.x are allowed, however 1.14.x -> 1.16.x is not allowed. See [upgrading an AKS cluster](https://docs.microsoft.com/azure/aks/upgrade-cluster) for more details.
     */
    public readonly kubernetesVersion!: pulumi.Output<string | undefined>;
    /**
     * The profile for Linux VMs in the Managed Cluster.
     */
    public readonly linuxProfile!: pulumi.Output<types.outputs.ContainerServiceLinuxProfileResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The max number of agent pools for the managed cluster.
     */
    public /*out*/ readonly maxAgentPools!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The network configuration profile.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.ContainerServiceNetworkProfileResponse | undefined>;
    /**
     * The name of the resource group containing agent pool nodes.
     */
    public readonly nodeResourceGroup!: pulumi.Output<string | undefined>;
    /**
     * The OIDC issuer profile of the Managed Cluster.
     */
    public readonly oidcIssuerProfile!: pulumi.Output<types.outputs.ManagedClusterOIDCIssuerProfileResponse | undefined>;
    /**
     * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on AAD pod identity integration.
     */
    public readonly podIdentityProfile!: pulumi.Output<types.outputs.ManagedClusterPodIdentityProfileResponse | undefined>;
    /**
     * The Power State of the cluster.
     */
    public /*out*/ readonly powerState!: pulumi.Output<types.outputs.PowerStateResponse>;
    /**
     * The FQDN of private cluster.
     */
    public /*out*/ readonly privateFQDN!: pulumi.Output<string>;
    /**
     * Private link resources associated with the cluster.
     */
    public readonly privateLinkResources!: pulumi.Output<types.outputs.PrivateLinkResourceResponse[] | undefined>;
    /**
     * The current provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Allow or deny public network access for AKS
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Security profile for the managed cluster.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.ManagedClusterSecurityProfileResponse | undefined>;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    public readonly servicePrincipalProfile!: pulumi.Output<types.outputs.ManagedClusterServicePrincipalProfileResponse | undefined>;
    /**
     * The managed cluster SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.ManagedClusterSKUResponse | undefined>;
    /**
     * Storage profile for the managed cluster.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.ManagedClusterStorageProfileResponse | undefined>;
    /**
     * The support plan for the Managed Cluster. If unspecified, the default is 'KubernetesOfficial'.
     */
    public readonly supportPlan!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Settings for upgrading a cluster.
     */
    public readonly upgradeSettings!: pulumi.Output<types.outputs.ClusterUpgradeSettingsResponse | undefined>;
    /**
     * The profile for Windows VMs in the Managed Cluster.
     */
    public readonly windowsProfile!: pulumi.Output<types.outputs.ManagedClusterWindowsProfileResponse | undefined>;
    /**
     * Workload Auto-scaler profile for the managed cluster.
     */
    public readonly workloadAutoScalerProfile!: pulumi.Output<types.outputs.ManagedClusterWorkloadAutoScalerProfileResponse | undefined>;

    /**
     * Create a ManagedCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aadProfile"] = args ? args.aadProfile : undefined;
            resourceInputs["addonProfiles"] = args ? args.addonProfiles : undefined;
            resourceInputs["agentPoolProfiles"] = args ? args.agentPoolProfiles : undefined;
            resourceInputs["apiServerAccessProfile"] = args ? args.apiServerAccessProfile : undefined;
            resourceInputs["autoScalerProfile"] = args ? args.autoScalerProfile : undefined;
            resourceInputs["autoUpgradeProfile"] = args ? args.autoUpgradeProfile : undefined;
            resourceInputs["azureMonitorProfile"] = args ? args.azureMonitorProfile : undefined;
            resourceInputs["disableLocalAccounts"] = args ? args.disableLocalAccounts : undefined;
            resourceInputs["diskEncryptionSetID"] = args ? args.diskEncryptionSetID : undefined;
            resourceInputs["dnsPrefix"] = args ? args.dnsPrefix : undefined;
            resourceInputs["enablePodSecurityPolicy"] = args ? args.enablePodSecurityPolicy : undefined;
            resourceInputs["enableRBAC"] = args ? args.enableRBAC : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["fqdnSubdomain"] = args ? args.fqdnSubdomain : undefined;
            resourceInputs["httpProxyConfig"] = args ? args.httpProxyConfig : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["identityProfile"] = args ? args.identityProfile : undefined;
            resourceInputs["kubernetesVersion"] = args ? args.kubernetesVersion : undefined;
            resourceInputs["linuxProfile"] = args ? args.linuxProfile : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? (args.networkProfile ? pulumi.output(args.networkProfile).apply(types.inputs.containerServiceNetworkProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["nodeResourceGroup"] = args ? args.nodeResourceGroup : undefined;
            resourceInputs["oidcIssuerProfile"] = args ? args.oidcIssuerProfile : undefined;
            resourceInputs["podIdentityProfile"] = args ? args.podIdentityProfile : undefined;
            resourceInputs["privateLinkResources"] = args ? args.privateLinkResources : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["securityProfile"] = args ? (args.securityProfile ? pulumi.output(args.securityProfile).apply(types.inputs.managedClusterSecurityProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["servicePrincipalProfile"] = args ? args.servicePrincipalProfile : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["supportPlan"] = args ? args.supportPlan : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["upgradeSettings"] = args ? args.upgradeSettings : undefined;
            resourceInputs["windowsProfile"] = args ? args.windowsProfile : undefined;
            resourceInputs["workloadAutoScalerProfile"] = args ? (args.workloadAutoScalerProfile ? pulumi.output(args.workloadAutoScalerProfile).apply(types.inputs.managedClusterWorkloadAutoScalerProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["azurePortalFQDN"] = undefined /*out*/;
            resourceInputs["currentKubernetesVersion"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["maxAgentPools"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["privateFQDN"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aadProfile"] = undefined /*out*/;
            resourceInputs["addonProfiles"] = undefined /*out*/;
            resourceInputs["agentPoolProfiles"] = undefined /*out*/;
            resourceInputs["apiServerAccessProfile"] = undefined /*out*/;
            resourceInputs["autoScalerProfile"] = undefined /*out*/;
            resourceInputs["autoUpgradeProfile"] = undefined /*out*/;
            resourceInputs["azureMonitorProfile"] = undefined /*out*/;
            resourceInputs["azurePortalFQDN"] = undefined /*out*/;
            resourceInputs["currentKubernetesVersion"] = undefined /*out*/;
            resourceInputs["disableLocalAccounts"] = undefined /*out*/;
            resourceInputs["diskEncryptionSetID"] = undefined /*out*/;
            resourceInputs["dnsPrefix"] = undefined /*out*/;
            resourceInputs["enablePodSecurityPolicy"] = undefined /*out*/;
            resourceInputs["enableRBAC"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["fqdnSubdomain"] = undefined /*out*/;
            resourceInputs["httpProxyConfig"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["identityProfile"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["linuxProfile"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxAgentPools"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["nodeResourceGroup"] = undefined /*out*/;
            resourceInputs["oidcIssuerProfile"] = undefined /*out*/;
            resourceInputs["podIdentityProfile"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["privateFQDN"] = undefined /*out*/;
            resourceInputs["privateLinkResources"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["servicePrincipalProfile"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["supportPlan"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeSettings"] = undefined /*out*/;
            resourceInputs["windowsProfile"] = undefined /*out*/;
            resourceInputs["workloadAutoScalerProfile"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:ManagedCluster" }, { type: "azure-native:containerservice/v20170831:ManagedCluster" }, { type: "azure-native:containerservice/v20180331:ManagedCluster" }, { type: "azure-native:containerservice/v20180801preview:ManagedCluster" }, { type: "azure-native:containerservice/v20190201:ManagedCluster" }, { type: "azure-native:containerservice/v20190401:ManagedCluster" }, { type: "azure-native:containerservice/v20190601:ManagedCluster" }, { type: "azure-native:containerservice/v20190801:ManagedCluster" }, { type: "azure-native:containerservice/v20191001:ManagedCluster" }, { type: "azure-native:containerservice/v20191101:ManagedCluster" }, { type: "azure-native:containerservice/v20200101:ManagedCluster" }, { type: "azure-native:containerservice/v20200201:ManagedCluster" }, { type: "azure-native:containerservice/v20200301:ManagedCluster" }, { type: "azure-native:containerservice/v20200401:ManagedCluster" }, { type: "azure-native:containerservice/v20200601:ManagedCluster" }, { type: "azure-native:containerservice/v20200701:ManagedCluster" }, { type: "azure-native:containerservice/v20200901:ManagedCluster" }, { type: "azure-native:containerservice/v20201101:ManagedCluster" }, { type: "azure-native:containerservice/v20201201:ManagedCluster" }, { type: "azure-native:containerservice/v20210201:ManagedCluster" }, { type: "azure-native:containerservice/v20210301:ManagedCluster" }, { type: "azure-native:containerservice/v20210501:ManagedCluster" }, { type: "azure-native:containerservice/v20210701:ManagedCluster" }, { type: "azure-native:containerservice/v20210801:ManagedCluster" }, { type: "azure-native:containerservice/v20210901:ManagedCluster" }, { type: "azure-native:containerservice/v20211001:ManagedCluster" }, { type: "azure-native:containerservice/v20211101preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220101:ManagedCluster" }, { type: "azure-native:containerservice/v20220102preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220201:ManagedCluster" }, { type: "azure-native:containerservice/v20220202preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220301:ManagedCluster" }, { type: "azure-native:containerservice/v20220302preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220401:ManagedCluster" }, { type: "azure-native:containerservice/v20220402preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220502preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220601:ManagedCluster" }, { type: "azure-native:containerservice/v20220602preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220701:ManagedCluster" }, { type: "azure-native:containerservice/v20220702preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220802preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220803preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220901:ManagedCluster" }, { type: "azure-native:containerservice/v20220902preview:ManagedCluster" }, { type: "azure-native:containerservice/v20221002preview:ManagedCluster" }, { type: "azure-native:containerservice/v20221101:ManagedCluster" }, { type: "azure-native:containerservice/v20221102preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230101:ManagedCluster" }, { type: "azure-native:containerservice/v20230102preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230201:ManagedCluster" }, { type: "azure-native:containerservice/v20230202preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230301:ManagedCluster" }, { type: "azure-native:containerservice/v20230302preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230401:ManagedCluster" }, { type: "azure-native:containerservice/v20230402preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230501:ManagedCluster" }, { type: "azure-native:containerservice/v20230502preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230601:ManagedCluster" }, { type: "azure-native:containerservice/v20230602preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230702preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230801:ManagedCluster" }, { type: "azure-native:containerservice/v20230802preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230901:ManagedCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedCluster resource.
 */
export interface ManagedClusterArgs {
    /**
     * The Azure Active Directory configuration.
     */
    aadProfile?: pulumi.Input<types.inputs.ManagedClusterAADProfileArgs>;
    /**
     * The profile of managed cluster add-on.
     */
    addonProfiles?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ManagedClusterAddonProfileArgs>}>;
    /**
     * The agent pool properties.
     */
    agentPoolProfiles?: pulumi.Input<pulumi.Input<types.inputs.ManagedClusterAgentPoolProfileArgs>[]>;
    /**
     * The access profile for managed cluster API server.
     */
    apiServerAccessProfile?: pulumi.Input<types.inputs.ManagedClusterAPIServerAccessProfileArgs>;
    /**
     * Parameters to be applied to the cluster-autoscaler when enabled
     */
    autoScalerProfile?: pulumi.Input<types.inputs.ManagedClusterPropertiesAutoScalerProfileArgs>;
    /**
     * The auto upgrade configuration.
     */
    autoUpgradeProfile?: pulumi.Input<types.inputs.ManagedClusterAutoUpgradeProfileArgs>;
    /**
     * Azure Monitor addon profiles for monitoring the managed cluster.
     */
    azureMonitorProfile?: pulumi.Input<types.inputs.ManagedClusterAzureMonitorProfileArgs>;
    /**
     * If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details see [disable local accounts](https://docs.microsoft.com/azure/aks/managed-aad#disable-local-accounts-preview).
     */
    disableLocalAccounts?: pulumi.Input<boolean>;
    /**
     * This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}'
     */
    diskEncryptionSetID?: pulumi.Input<string>;
    /**
     * This cannot be updated once the Managed Cluster has been created.
     */
    dnsPrefix?: pulumi.Input<string>;
    /**
     * (DEPRECATED) Whether to enable Kubernetes pod security policy (preview). PodSecurityPolicy was deprecated in Kubernetes v1.21, and removed from Kubernetes in v1.25. Learn more at https://aka.ms/k8s/psp and https://aka.ms/aks/psp.
     */
    enablePodSecurityPolicy?: pulumi.Input<boolean>;
    /**
     * Whether to enable Kubernetes Role-Based Access Control.
     */
    enableRBAC?: pulumi.Input<boolean>;
    /**
     * The extended location of the Virtual Machine.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * This cannot be updated once the Managed Cluster has been created.
     */
    fqdnSubdomain?: pulumi.Input<string>;
    /**
     * Configurations for provisioning the cluster with HTTP proxy servers.
     */
    httpProxyConfig?: pulumi.Input<types.inputs.ManagedClusterHTTPProxyConfigArgs>;
    /**
     * The identity of the managed cluster, if configured.
     */
    identity?: pulumi.Input<types.inputs.ManagedClusterIdentityArgs>;
    /**
     * Identities associated with the cluster.
     */
    identityProfile?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.UserAssignedIdentityArgs>}>;
    /**
     * Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -> 1.15.x or 1.15.x -> 1.16.x are allowed, however 1.14.x -> 1.16.x is not allowed. See [upgrading an AKS cluster](https://docs.microsoft.com/azure/aks/upgrade-cluster) for more details.
     */
    kubernetesVersion?: pulumi.Input<string>;
    /**
     * The profile for Linux VMs in the Managed Cluster.
     */
    linuxProfile?: pulumi.Input<types.inputs.ContainerServiceLinuxProfileArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The network configuration profile.
     */
    networkProfile?: pulumi.Input<types.inputs.ContainerServiceNetworkProfileArgs>;
    /**
     * The name of the resource group containing agent pool nodes.
     */
    nodeResourceGroup?: pulumi.Input<string>;
    /**
     * The OIDC issuer profile of the Managed Cluster.
     */
    oidcIssuerProfile?: pulumi.Input<types.inputs.ManagedClusterOIDCIssuerProfileArgs>;
    /**
     * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on AAD pod identity integration.
     */
    podIdentityProfile?: pulumi.Input<types.inputs.ManagedClusterPodIdentityProfileArgs>;
    /**
     * Private link resources associated with the cluster.
     */
    privateLinkResources?: pulumi.Input<pulumi.Input<types.inputs.PrivateLinkResourceArgs>[]>;
    /**
     * Allow or deny public network access for AKS
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Security profile for the managed cluster.
     */
    securityProfile?: pulumi.Input<types.inputs.ManagedClusterSecurityProfileArgs>;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    servicePrincipalProfile?: pulumi.Input<types.inputs.ManagedClusterServicePrincipalProfileArgs>;
    /**
     * The managed cluster SKU.
     */
    sku?: pulumi.Input<types.inputs.ManagedClusterSKUArgs>;
    /**
     * Storage profile for the managed cluster.
     */
    storageProfile?: pulumi.Input<types.inputs.ManagedClusterStorageProfileArgs>;
    /**
     * The support plan for the Managed Cluster. If unspecified, the default is 'KubernetesOfficial'.
     */
    supportPlan?: pulumi.Input<string | types.enums.KubernetesSupportPlan>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Settings for upgrading a cluster.
     */
    upgradeSettings?: pulumi.Input<types.inputs.ClusterUpgradeSettingsArgs>;
    /**
     * The profile for Windows VMs in the Managed Cluster.
     */
    windowsProfile?: pulumi.Input<types.inputs.ManagedClusterWindowsProfileArgs>;
    /**
     * Workload Auto-scaler profile for the managed cluster.
     */
    workloadAutoScalerProfile?: pulumi.Input<types.inputs.ManagedClusterWorkloadAutoScalerProfileArgs>;
}
