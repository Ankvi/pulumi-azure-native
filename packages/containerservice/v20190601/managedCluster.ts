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
    public static readonly __pulumiType = 'azure-native:containerservice/v20190601:ManagedCluster';

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
     * Profile of Azure Active Directory configuration.
     */
    public readonly aadProfile!: pulumi.Output<types.outputs.ManagedClusterAADProfileResponse | undefined>;
    /**
     * Profile of managed cluster add-on.
     */
    public readonly addonProfiles!: pulumi.Output<{[key: string]: types.outputs.ManagedClusterAddonProfileResponse} | undefined>;
    /**
     * Properties of the agent pool.
     */
    public readonly agentPoolProfiles!: pulumi.Output<types.outputs.ManagedClusterAgentPoolProfileResponse[] | undefined>;
    /**
     * (PREVIEW) Authorized IP Ranges to kubernetes API server.
     */
    public readonly apiServerAuthorizedIPRanges!: pulumi.Output<string[] | undefined>;
    /**
     * DNS prefix specified when creating the managed cluster.
     */
    public readonly dnsPrefix!: pulumi.Output<string | undefined>;
    /**
     * (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
     */
    public readonly enablePodSecurityPolicy!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to enable Kubernetes Role-Based Access Control.
     */
    public readonly enableRBAC!: pulumi.Output<boolean | undefined>;
    /**
     * FQDN for the master pool.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * The identity of the managed cluster, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedClusterIdentityResponse | undefined>;
    /**
     * Version of Kubernetes specified when creating the managed cluster.
     */
    public readonly kubernetesVersion!: pulumi.Output<string | undefined>;
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    public readonly linuxProfile!: pulumi.Output<types.outputs.ContainerServiceLinuxProfileResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The max number of agent pools for the managed cluster.
     */
    public /*out*/ readonly maxAgentPools!: pulumi.Output<number>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Profile of network configuration.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.ContainerServiceNetworkProfileResponse | undefined>;
    /**
     * Name of the resource group containing agent pool nodes.
     */
    public readonly nodeResourceGroup!: pulumi.Output<string | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    public readonly servicePrincipalProfile!: pulumi.Output<types.outputs.ManagedClusterServicePrincipalProfileResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Profile for Windows VMs in the container service cluster.
     */
    public readonly windowsProfile!: pulumi.Output<types.outputs.ManagedClusterWindowsProfileResponse | undefined>;

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
            resourceInputs["apiServerAuthorizedIPRanges"] = args ? args.apiServerAuthorizedIPRanges : undefined;
            resourceInputs["dnsPrefix"] = args ? args.dnsPrefix : undefined;
            resourceInputs["enablePodSecurityPolicy"] = args ? args.enablePodSecurityPolicy : undefined;
            resourceInputs["enableRBAC"] = args ? args.enableRBAC : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kubernetesVersion"] = args ? args.kubernetesVersion : undefined;
            resourceInputs["linuxProfile"] = args ? args.linuxProfile : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? (args.networkProfile ? pulumi.output(args.networkProfile).apply(types.inputs.containerServiceNetworkProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["nodeResourceGroup"] = args ? args.nodeResourceGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["servicePrincipalProfile"] = args ? args.servicePrincipalProfile : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["windowsProfile"] = args ? args.windowsProfile : undefined;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["maxAgentPools"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aadProfile"] = undefined /*out*/;
            resourceInputs["addonProfiles"] = undefined /*out*/;
            resourceInputs["agentPoolProfiles"] = undefined /*out*/;
            resourceInputs["apiServerAuthorizedIPRanges"] = undefined /*out*/;
            resourceInputs["dnsPrefix"] = undefined /*out*/;
            resourceInputs["enablePodSecurityPolicy"] = undefined /*out*/;
            resourceInputs["enableRBAC"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kubernetesVersion"] = undefined /*out*/;
            resourceInputs["linuxProfile"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxAgentPools"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["nodeResourceGroup"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["servicePrincipalProfile"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["windowsProfile"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:ManagedCluster" }, { type: "azure-native:containerservice/v20170831:ManagedCluster" }, { type: "azure-native:containerservice/v20180331:ManagedCluster" }, { type: "azure-native:containerservice/v20180801preview:ManagedCluster" }, { type: "azure-native:containerservice/v20190201:ManagedCluster" }, { type: "azure-native:containerservice/v20190401:ManagedCluster" }, { type: "azure-native:containerservice/v20190801:ManagedCluster" }, { type: "azure-native:containerservice/v20191001:ManagedCluster" }, { type: "azure-native:containerservice/v20191101:ManagedCluster" }, { type: "azure-native:containerservice/v20200101:ManagedCluster" }, { type: "azure-native:containerservice/v20200201:ManagedCluster" }, { type: "azure-native:containerservice/v20200301:ManagedCluster" }, { type: "azure-native:containerservice/v20200401:ManagedCluster" }, { type: "azure-native:containerservice/v20200601:ManagedCluster" }, { type: "azure-native:containerservice/v20200701:ManagedCluster" }, { type: "azure-native:containerservice/v20200901:ManagedCluster" }, { type: "azure-native:containerservice/v20201101:ManagedCluster" }, { type: "azure-native:containerservice/v20201201:ManagedCluster" }, { type: "azure-native:containerservice/v20210201:ManagedCluster" }, { type: "azure-native:containerservice/v20210301:ManagedCluster" }, { type: "azure-native:containerservice/v20210501:ManagedCluster" }, { type: "azure-native:containerservice/v20210701:ManagedCluster" }, { type: "azure-native:containerservice/v20210801:ManagedCluster" }, { type: "azure-native:containerservice/v20210901:ManagedCluster" }, { type: "azure-native:containerservice/v20211001:ManagedCluster" }, { type: "azure-native:containerservice/v20211101preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220101:ManagedCluster" }, { type: "azure-native:containerservice/v20220102preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220201:ManagedCluster" }, { type: "azure-native:containerservice/v20220202preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220301:ManagedCluster" }, { type: "azure-native:containerservice/v20220302preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220401:ManagedCluster" }, { type: "azure-native:containerservice/v20220402preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220502preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220601:ManagedCluster" }, { type: "azure-native:containerservice/v20220602preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220701:ManagedCluster" }, { type: "azure-native:containerservice/v20220702preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220802preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220803preview:ManagedCluster" }, { type: "azure-native:containerservice/v20220901:ManagedCluster" }, { type: "azure-native:containerservice/v20220902preview:ManagedCluster" }, { type: "azure-native:containerservice/v20221002preview:ManagedCluster" }, { type: "azure-native:containerservice/v20221101:ManagedCluster" }, { type: "azure-native:containerservice/v20221102preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230101:ManagedCluster" }, { type: "azure-native:containerservice/v20230102preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230201:ManagedCluster" }, { type: "azure-native:containerservice/v20230202preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230301:ManagedCluster" }, { type: "azure-native:containerservice/v20230302preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230401:ManagedCluster" }, { type: "azure-native:containerservice/v20230402preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230501:ManagedCluster" }, { type: "azure-native:containerservice/v20230502preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230601:ManagedCluster" }, { type: "azure-native:containerservice/v20230602preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230701:ManagedCluster" }, { type: "azure-native:containerservice/v20230702preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230801:ManagedCluster" }, { type: "azure-native:containerservice/v20230802preview:ManagedCluster" }, { type: "azure-native:containerservice/v20230901:ManagedCluster" }, { type: "azure-native:containerservice/v20230902preview:ManagedCluster" }, { type: "azure-native:containerservice/v20231001:ManagedCluster" }, { type: "azure-native:containerservice/v20231002preview:ManagedCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedCluster resource.
 */
export interface ManagedClusterArgs {
    /**
     * Profile of Azure Active Directory configuration.
     */
    aadProfile?: pulumi.Input<types.inputs.ManagedClusterAADProfileArgs>;
    /**
     * Profile of managed cluster add-on.
     */
    addonProfiles?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ManagedClusterAddonProfileArgs>}>;
    /**
     * Properties of the agent pool.
     */
    agentPoolProfiles?: pulumi.Input<pulumi.Input<types.inputs.ManagedClusterAgentPoolProfileArgs>[]>;
    /**
     * (PREVIEW) Authorized IP Ranges to kubernetes API server.
     */
    apiServerAuthorizedIPRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * DNS prefix specified when creating the managed cluster.
     */
    dnsPrefix?: pulumi.Input<string>;
    /**
     * (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
     */
    enablePodSecurityPolicy?: pulumi.Input<boolean>;
    /**
     * Whether to enable Kubernetes Role-Based Access Control.
     */
    enableRBAC?: pulumi.Input<boolean>;
    /**
     * The identity of the managed cluster, if configured.
     */
    identity?: pulumi.Input<types.inputs.ManagedClusterIdentityArgs>;
    /**
     * Version of Kubernetes specified when creating the managed cluster.
     */
    kubernetesVersion?: pulumi.Input<string>;
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    linuxProfile?: pulumi.Input<types.inputs.ContainerServiceLinuxProfileArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Profile of network configuration.
     */
    networkProfile?: pulumi.Input<types.inputs.ContainerServiceNetworkProfileArgs>;
    /**
     * Name of the resource group containing agent pool nodes.
     */
    nodeResourceGroup?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    servicePrincipalProfile?: pulumi.Input<types.inputs.ManagedClusterServicePrincipalProfileArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Profile for Windows VMs in the container service cluster.
     */
    windowsProfile?: pulumi.Input<types.inputs.ManagedClusterWindowsProfileArgs>;
}
