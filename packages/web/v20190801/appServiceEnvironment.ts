import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * App Service Environment ARM resource.
 */
export class AppServiceEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing AppServiceEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServiceEnvironment {
        return new AppServiceEnvironment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20190801:AppServiceEnvironment';

    /**
     * Returns true if the given object is an instance of AppServiceEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppServiceEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppServiceEnvironment.__pulumiType;
    }

    /**
     * List of comma separated strings describing which VM sizes are allowed for front-ends.
     */
    public /*out*/ readonly allowedMultiSizes!: pulumi.Output<string>;
    /**
     * List of comma separated strings describing which VM sizes are allowed for workers.
     */
    public /*out*/ readonly allowedWorkerSizes!: pulumi.Output<string>;
    /**
     * API Management Account associated with the App Service Environment.
     */
    public readonly apiManagementAccountId!: pulumi.Output<string | undefined>;
    /**
     * Custom settings for changing the behavior of the App Service Environment.
     */
    public readonly clusterSettings!: pulumi.Output<types.outputs.NameValuePairResponse[] | undefined>;
    /**
     * Edition of the metadata database for the App Service Environment, e.g. "Standard".
     */
    public /*out*/ readonly databaseEdition!: pulumi.Output<string>;
    /**
     * Service objective of the metadata database for the App Service Environment, e.g. "S0".
     */
    public /*out*/ readonly databaseServiceObjective!: pulumi.Output<string>;
    /**
     * Default Scale Factor for FrontEnds.
     */
    public /*out*/ readonly defaultFrontEndScaleFactor!: pulumi.Output<number>;
    /**
     * DNS suffix of the App Service Environment.
     */
    public readonly dnsSuffix!: pulumi.Output<string | undefined>;
    /**
     * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     * (most likely because NSG blocked the incoming traffic).
     */
    public readonly dynamicCacheEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Current total, used, and available worker capacities.
     */
    public /*out*/ readonly environmentCapacities!: pulumi.Output<types.outputs.StampCapacityResponse[]>;
    /**
     * True/false indicating whether the App Service Environment is healthy.
     */
    public /*out*/ readonly environmentIsHealthy!: pulumi.Output<boolean>;
    /**
     * Detailed message about with results of the last check of the App Service Environment.
     */
    public /*out*/ readonly environmentStatus!: pulumi.Output<string>;
    /**
     * Scale factor for front-ends.
     */
    public readonly frontEndScaleFactor!: pulumi.Output<number | undefined>;
    /**
     * Flag that displays whether an ASE has linux workers or not
     */
    public readonly hasLinuxWorkers!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
     */
    public readonly internalLoadBalancingMode!: pulumi.Output<string | undefined>;
    /**
     * Number of IP SSL addresses reserved for the App Service Environment.
     */
    public readonly ipsslAddressCount!: pulumi.Output<number | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Last deployment action on the App Service Environment.
     */
    public /*out*/ readonly lastAction!: pulumi.Output<string>;
    /**
     * Result of the last deployment action on the App Service Environment.
     */
    public /*out*/ readonly lastActionResult!: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maximum number of VMs in the App Service Environment.
     */
    public /*out*/ readonly maximumNumberOfMachines!: pulumi.Output<number>;
    /**
     * Number of front-end instances.
     */
    public readonly multiRoleCount!: pulumi.Output<number | undefined>;
    /**
     * Front-end VM size, e.g. "Medium", "Large".
     */
    public readonly multiSize!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Access control list for controlling traffic to the App Service Environment.
     */
    public readonly networkAccessControlList!: pulumi.Output<types.outputs.NetworkAccessControlEntryResponse[] | undefined>;
    /**
     * Provisioning state of the App Service Environment.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource group of the App Service Environment.
     */
    public /*out*/ readonly resourceGroup!: pulumi.Output<string>;
    /**
     * Key Vault ID for ILB App Service Environment default SSL certificate
     */
    public readonly sslCertKeyVaultId!: pulumi.Output<string | undefined>;
    /**
     * Key Vault Secret Name for ILB App Service Environment default SSL certificate
     */
    public readonly sslCertKeyVaultSecretName!: pulumi.Output<string | undefined>;
    /**
     * Current status of the App Service Environment.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Subscription of the App Service Environment.
     */
    public /*out*/ readonly subscriptionId!: pulumi.Output<string>;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    public readonly suspended!: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Number of upgrade domains of the App Service Environment.
     */
    public /*out*/ readonly upgradeDomains!: pulumi.Output<number>;
    /**
     * User added list of IP Ranges allowed on ASE db
     */
    public readonly userWhitelistedIpRanges!: pulumi.Output<string[] | undefined>;
    /**
     * Description of IP SSL mapping for the App Service Environment.
     */
    public /*out*/ readonly vipMappings!: pulumi.Output<types.outputs.VirtualIPMappingResponse[]>;
    /**
     * Description of the Virtual Network.
     */
    public readonly virtualNetwork!: pulumi.Output<types.outputs.VirtualNetworkProfileResponse>;
    /**
     * Name of the Virtual Network for the App Service Environment.
     */
    public readonly vnetName!: pulumi.Output<string | undefined>;
    /**
     * Resource group of the Virtual Network.
     */
    public readonly vnetResourceGroupName!: pulumi.Output<string | undefined>;
    /**
     * Subnet of the Virtual Network.
     */
    public readonly vnetSubnetName!: pulumi.Output<string | undefined>;
    /**
     * Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
     */
    public readonly workerPools!: pulumi.Output<types.outputs.WorkerPoolResponse[]>;

    /**
     * Create a AppServiceEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceEnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetwork === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetwork'");
            }
            if ((!args || args.workerPools === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workerPools'");
            }
            resourceInputs["apiManagementAccountId"] = args ? args.apiManagementAccountId : undefined;
            resourceInputs["clusterSettings"] = args ? args.clusterSettings : undefined;
            resourceInputs["dnsSuffix"] = args ? args.dnsSuffix : undefined;
            resourceInputs["dynamicCacheEnabled"] = args ? args.dynamicCacheEnabled : undefined;
            resourceInputs["frontEndScaleFactor"] = args ? args.frontEndScaleFactor : undefined;
            resourceInputs["hasLinuxWorkers"] = args ? args.hasLinuxWorkers : undefined;
            resourceInputs["internalLoadBalancingMode"] = args ? args.internalLoadBalancingMode : undefined;
            resourceInputs["ipsslAddressCount"] = args ? args.ipsslAddressCount : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["multiRoleCount"] = args ? args.multiRoleCount : undefined;
            resourceInputs["multiSize"] = args ? args.multiSize : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkAccessControlList"] = args ? args.networkAccessControlList : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sslCertKeyVaultId"] = args ? args.sslCertKeyVaultId : undefined;
            resourceInputs["sslCertKeyVaultSecretName"] = args ? args.sslCertKeyVaultSecretName : undefined;
            resourceInputs["suspended"] = args ? args.suspended : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userWhitelistedIpRanges"] = args ? args.userWhitelistedIpRanges : undefined;
            resourceInputs["virtualNetwork"] = args ? args.virtualNetwork : undefined;
            resourceInputs["vnetName"] = args ? args.vnetName : undefined;
            resourceInputs["vnetResourceGroupName"] = args ? args.vnetResourceGroupName : undefined;
            resourceInputs["vnetSubnetName"] = args ? args.vnetSubnetName : undefined;
            resourceInputs["workerPools"] = args ? args.workerPools : undefined;
            resourceInputs["allowedMultiSizes"] = undefined /*out*/;
            resourceInputs["allowedWorkerSizes"] = undefined /*out*/;
            resourceInputs["databaseEdition"] = undefined /*out*/;
            resourceInputs["databaseServiceObjective"] = undefined /*out*/;
            resourceInputs["defaultFrontEndScaleFactor"] = undefined /*out*/;
            resourceInputs["environmentCapacities"] = undefined /*out*/;
            resourceInputs["environmentIsHealthy"] = undefined /*out*/;
            resourceInputs["environmentStatus"] = undefined /*out*/;
            resourceInputs["lastAction"] = undefined /*out*/;
            resourceInputs["lastActionResult"] = undefined /*out*/;
            resourceInputs["maximumNumberOfMachines"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeDomains"] = undefined /*out*/;
            resourceInputs["vipMappings"] = undefined /*out*/;
        } else {
            resourceInputs["allowedMultiSizes"] = undefined /*out*/;
            resourceInputs["allowedWorkerSizes"] = undefined /*out*/;
            resourceInputs["apiManagementAccountId"] = undefined /*out*/;
            resourceInputs["clusterSettings"] = undefined /*out*/;
            resourceInputs["databaseEdition"] = undefined /*out*/;
            resourceInputs["databaseServiceObjective"] = undefined /*out*/;
            resourceInputs["defaultFrontEndScaleFactor"] = undefined /*out*/;
            resourceInputs["dnsSuffix"] = undefined /*out*/;
            resourceInputs["dynamicCacheEnabled"] = undefined /*out*/;
            resourceInputs["environmentCapacities"] = undefined /*out*/;
            resourceInputs["environmentIsHealthy"] = undefined /*out*/;
            resourceInputs["environmentStatus"] = undefined /*out*/;
            resourceInputs["frontEndScaleFactor"] = undefined /*out*/;
            resourceInputs["hasLinuxWorkers"] = undefined /*out*/;
            resourceInputs["internalLoadBalancingMode"] = undefined /*out*/;
            resourceInputs["ipsslAddressCount"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastAction"] = undefined /*out*/;
            resourceInputs["lastActionResult"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maximumNumberOfMachines"] = undefined /*out*/;
            resourceInputs["multiRoleCount"] = undefined /*out*/;
            resourceInputs["multiSize"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAccessControlList"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["sslCertKeyVaultId"] = undefined /*out*/;
            resourceInputs["sslCertKeyVaultSecretName"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["suspended"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradeDomains"] = undefined /*out*/;
            resourceInputs["userWhitelistedIpRanges"] = undefined /*out*/;
            resourceInputs["vipMappings"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
            resourceInputs["vnetName"] = undefined /*out*/;
            resourceInputs["vnetResourceGroupName"] = undefined /*out*/;
            resourceInputs["vnetSubnetName"] = undefined /*out*/;
            resourceInputs["workerPools"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:AppServiceEnvironment" }, { type: "azure-native:web/v20150801:AppServiceEnvironment" }, { type: "azure-native:web/v20160901:AppServiceEnvironment" }, { type: "azure-native:web/v20180201:AppServiceEnvironment" }, { type: "azure-native:web/v20200601:AppServiceEnvironment" }, { type: "azure-native:web/v20200901:AppServiceEnvironment" }, { type: "azure-native:web/v20201001:AppServiceEnvironment" }, { type: "azure-native:web/v20201201:AppServiceEnvironment" }, { type: "azure-native:web/v20210101:AppServiceEnvironment" }, { type: "azure-native:web/v20210115:AppServiceEnvironment" }, { type: "azure-native:web/v20210201:AppServiceEnvironment" }, { type: "azure-native:web/v20210301:AppServiceEnvironment" }, { type: "azure-native:web/v20220301:AppServiceEnvironment" }, { type: "azure-native:web/v20220901:AppServiceEnvironment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AppServiceEnvironment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AppServiceEnvironment resource.
 */
export interface AppServiceEnvironmentArgs {
    /**
     * API Management Account associated with the App Service Environment.
     */
    apiManagementAccountId?: pulumi.Input<string>;
    /**
     * Custom settings for changing the behavior of the App Service Environment.
     */
    clusterSettings?: pulumi.Input<pulumi.Input<types.inputs.NameValuePairArgs>[]>;
    /**
     * DNS suffix of the App Service Environment.
     */
    dnsSuffix?: pulumi.Input<string>;
    /**
     * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     * (most likely because NSG blocked the incoming traffic).
     */
    dynamicCacheEnabled?: pulumi.Input<boolean>;
    /**
     * Scale factor for front-ends.
     */
    frontEndScaleFactor?: pulumi.Input<number>;
    /**
     * Flag that displays whether an ASE has linux workers or not
     */
    hasLinuxWorkers?: pulumi.Input<boolean>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
     */
    internalLoadBalancingMode?: pulumi.Input<types.enums.InternalLoadBalancingMode>;
    /**
     * Number of IP SSL addresses reserved for the App Service Environment.
     */
    ipsslAddressCount?: pulumi.Input<number>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Number of front-end instances.
     */
    multiRoleCount?: pulumi.Input<number>;
    /**
     * Front-end VM size, e.g. "Medium", "Large".
     */
    multiSize?: pulumi.Input<string>;
    /**
     * Name of the App Service Environment.
     */
    name?: pulumi.Input<string>;
    /**
     * Access control list for controlling traffic to the App Service Environment.
     */
    networkAccessControlList?: pulumi.Input<pulumi.Input<types.inputs.NetworkAccessControlEntryArgs>[]>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Key Vault ID for ILB App Service Environment default SSL certificate
     */
    sslCertKeyVaultId?: pulumi.Input<string>;
    /**
     * Key Vault Secret Name for ILB App Service Environment default SSL certificate
     */
    sslCertKeyVaultSecretName?: pulumi.Input<string>;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    suspended?: pulumi.Input<boolean>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * User added list of IP Ranges allowed on ASE db
     */
    userWhitelistedIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of the Virtual Network.
     */
    virtualNetwork: pulumi.Input<types.inputs.VirtualNetworkProfileArgs>;
    /**
     * Name of the Virtual Network for the App Service Environment.
     */
    vnetName?: pulumi.Input<string>;
    /**
     * Resource group of the Virtual Network.
     */
    vnetResourceGroupName?: pulumi.Input<string>;
    /**
     * Subnet of the Virtual Network.
     */
    vnetSubnetName?: pulumi.Input<string>;
    /**
     * Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
     */
    workerPools: pulumi.Input<pulumi.Input<types.inputs.WorkerPoolArgs>[]>;
}
