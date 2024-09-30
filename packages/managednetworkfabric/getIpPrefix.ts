import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements IP Prefix GET method.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getIpPrefix(args: GetIpPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetIpPrefixResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getIpPrefix", {
        "ipPrefixName": args.ipPrefixName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpPrefixArgs {
    /**
     * Name of the IP Prefix
     */
    ipPrefixName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The IPPrefix resource definition.
 */
export interface GetIpPrefixResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * IpPrefix contains the list of IP PrefixRules objects.
     */
    readonly ipPrefixRules: types.outputs.IpPrefixPropertiesResponseIpPrefixRules[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the provisioning state of the resource.
     */
    readonly provisioningState: string;
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
 * Implements IP Prefix GET method.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getIpPrefixOutput(args: GetIpPrefixOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpPrefixResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getIpPrefix", {
        "ipPrefixName": args.ipPrefixName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpPrefixOutputArgs {
    /**
     * Name of the IP Prefix
     */
    ipPrefixName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}