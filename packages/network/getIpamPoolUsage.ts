import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * IpamPool usage information.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function getIpamPoolUsage(args: GetIpamPoolUsageArgs, opts?: pulumi.InvokeOptions): Promise<GetIpamPoolUsageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getIpamPoolUsage", {
        "networkManagerName": args.networkManagerName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpamPoolUsageArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * Pool resource name.
     */
    poolName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * IpamPool usage information.
 */
export interface GetIpamPoolUsageResult {
    /**
     * List of IP address prefixes of the resource.
     */
    readonly addressPrefixes: string[];
    /**
     * List of assigned IP address prefixes.
     */
    readonly allocatedAddressPrefixes: string[];
    /**
     * List of available IP address prefixes.
     */
    readonly availableAddressPrefixes: string[];
    /**
     * List of IpamPool that are children of this IpamPool.
     */
    readonly childPools: types.outputs.ResourceBasicsResponse[];
    /**
     * Total number of assigned IP addresses in the IpamPool.
     */
    readonly numberOfAllocatedIPAddresses: string;
    /**
     * Total number of available IP addresses in the IpamPool.
     */
    readonly numberOfAvailableIPAddresses: string;
    /**
     * Total number of reserved IP addresses in the IpamPool.
     */
    readonly numberOfReservedIPAddresses: string;
    /**
     * List of reserved IP address prefixes. These IP addresses could be reclaimed if not assigned in the given time.
     */
    readonly reservedAddressPrefixes: string[];
    /**
     * Total number of IP addresses managed in the IpamPool.
     */
    readonly totalNumberOfIPAddresses: string;
}
/**
 * IpamPool usage information.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function getIpamPoolUsageOutput(args: GetIpamPoolUsageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIpamPoolUsageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getIpamPoolUsage", {
        "networkManagerName": args.networkManagerName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpamPoolUsageOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * Pool resource name.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}