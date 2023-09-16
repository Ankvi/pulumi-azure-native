import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the properties of an App Service Environment.
 */
export function getAppServiceEnvironment(args: GetAppServiceEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20190801:getAppServiceEnvironment", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServiceEnvironmentArgs {
    /**
     * Name of the App Service Environment.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * App Service Environment ARM resource.
 */
export interface GetAppServiceEnvironmentResult {
    /**
     * List of comma separated strings describing which VM sizes are allowed for front-ends.
     */
    readonly allowedMultiSizes: string;
    /**
     * List of comma separated strings describing which VM sizes are allowed for workers.
     */
    readonly allowedWorkerSizes: string;
    /**
     * API Management Account associated with the App Service Environment.
     */
    readonly apiManagementAccountId?: string;
    /**
     * Custom settings for changing the behavior of the App Service Environment.
     */
    readonly clusterSettings?: types.outputs.web.v20190801.NameValuePairResponse[];
    /**
     * Edition of the metadata database for the App Service Environment, e.g. "Standard".
     */
    readonly databaseEdition: string;
    /**
     * Service objective of the metadata database for the App Service Environment, e.g. "S0".
     */
    readonly databaseServiceObjective: string;
    /**
     * Default Scale Factor for FrontEnds.
     */
    readonly defaultFrontEndScaleFactor: number;
    /**
     * DNS suffix of the App Service Environment.
     */
    readonly dnsSuffix?: string;
    /**
     * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     * (most likely because NSG blocked the incoming traffic).
     */
    readonly dynamicCacheEnabled?: boolean;
    /**
     * Current total, used, and available worker capacities.
     */
    readonly environmentCapacities: types.outputs.web.v20190801.StampCapacityResponse[];
    /**
     * True/false indicating whether the App Service Environment is healthy.
     */
    readonly environmentIsHealthy: boolean;
    /**
     * Detailed message about with results of the last check of the App Service Environment.
     */
    readonly environmentStatus: string;
    /**
     * Scale factor for front-ends.
     */
    readonly frontEndScaleFactor?: number;
    /**
     * Flag that displays whether an ASE has linux workers or not
     */
    readonly hasLinuxWorkers?: boolean;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
     */
    readonly internalLoadBalancingMode?: string;
    /**
     * Number of IP SSL addresses reserved for the App Service Environment.
     */
    readonly ipsslAddressCount?: number;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Last deployment action on the App Service Environment.
     */
    readonly lastAction: string;
    /**
     * Result of the last deployment action on the App Service Environment.
     */
    readonly lastActionResult: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Maximum number of VMs in the App Service Environment.
     */
    readonly maximumNumberOfMachines: number;
    /**
     * Number of front-end instances.
     */
    readonly multiRoleCount?: number;
    /**
     * Front-end VM size, e.g. "Medium", "Large".
     */
    readonly multiSize?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Access control list for controlling traffic to the App Service Environment.
     */
    readonly networkAccessControlList?: types.outputs.web.v20190801.NetworkAccessControlEntryResponse[];
    /**
     * Provisioning state of the App Service Environment.
     */
    readonly provisioningState: string;
    /**
     * Resource group of the App Service Environment.
     */
    readonly resourceGroup: string;
    /**
     * Key Vault ID for ILB App Service Environment default SSL certificate
     */
    readonly sslCertKeyVaultId?: string;
    /**
     * Key Vault Secret Name for ILB App Service Environment default SSL certificate
     */
    readonly sslCertKeyVaultSecretName?: string;
    /**
     * Current status of the App Service Environment.
     */
    readonly status: string;
    /**
     * Subscription of the App Service Environment.
     */
    readonly subscriptionId: string;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    readonly suspended?: boolean;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Number of upgrade domains of the App Service Environment.
     */
    readonly upgradeDomains: number;
    /**
     * User added list of IP Ranges allowed on ASE db
     */
    readonly userWhitelistedIpRanges?: string[];
    /**
     * Description of IP SSL mapping for the App Service Environment.
     */
    readonly vipMappings: types.outputs.web.v20190801.VirtualIPMappingResponse[];
    /**
     * Description of the Virtual Network.
     */
    readonly virtualNetwork: types.outputs.web.v20190801.VirtualNetworkProfileResponse;
    /**
     * Name of the Virtual Network for the App Service Environment.
     */
    readonly vnetName?: string;
    /**
     * Resource group of the Virtual Network.
     */
    readonly vnetResourceGroupName?: string;
    /**
     * Subnet of the Virtual Network.
     */
    readonly vnetSubnetName?: string;
    /**
     * Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
     */
    readonly workerPools: types.outputs.web.v20190801.WorkerPoolResponse[];
}
/**
 * Get the properties of an App Service Environment.
 */
export function getAppServiceEnvironmentOutput(args: GetAppServiceEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppServiceEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getAppServiceEnvironment(a, opts))
}

export interface GetAppServiceEnvironmentOutputArgs {
    /**
     * Name of the App Service Environment.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
