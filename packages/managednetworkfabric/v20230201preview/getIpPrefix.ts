import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Implements IP Prefix GET method.
 */
export function getIpPrefix(args: GetIpPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetIpPrefixResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230201preview:getIpPrefix", {
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
    readonly ipPrefixRules: types.outputs.managednetworkfabric.v20230201preview.IpPrefixPropertiesResponseIpPrefixRules[];
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
    readonly systemData: types.outputs.managednetworkfabric.v20230201preview.SystemDataResponse;
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
 */
export function getIpPrefixOutput(args: GetIpPrefixOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpPrefixResult> {
    return pulumi.output(args).apply((a: any) => getIpPrefix(a, opts))
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
