import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Instance of Pool resource.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function getIpamPool(args: GetIpamPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetIpamPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getIpamPool", {
        "networkManagerName": args.networkManagerName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpamPoolArgs {
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
 * Instance of Pool resource.
 */
export interface GetIpamPoolResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of IpamPool resource properties which are specific to the Pool resource.
     */
    readonly properties: types.outputs.IpamPoolPropertiesResponse;
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
}
/**
 * Instance of Pool resource.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function getIpamPoolOutput(args: GetIpamPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIpamPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getIpamPool", {
        "networkManagerName": args.networkManagerName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpamPoolOutputArgs {
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