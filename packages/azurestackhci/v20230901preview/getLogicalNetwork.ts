import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The logical network resource definition.
 */
export function getLogicalNetwork(args: GetLogicalNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetLogicalNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20230901preview:getLogicalNetwork", {
        "logicalNetworkName": args.logicalNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLogicalNetworkArgs {
    /**
     * Name of the logical network
     */
    logicalNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The logical network resource definition.
 */
export interface GetLogicalNetworkResult {
    /**
     * DhcpOptions contains an array of DNS servers available to VMs deployed in the logical network. Standard DHCP option for a subnet overrides logical network DHCP options.
     */
    readonly dhcpOptions?: types.outputs.LogicalNetworkPropertiesResponseDhcpOptions;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Provisioning state of the logical network.
     */
    readonly provisioningState: string;
    /**
     * The observed state of logical networks
     */
    readonly status: types.outputs.LogicalNetworkStatusResponse;
    /**
     * Subnet - list of subnets under the logical network
     */
    readonly subnets?: types.outputs.SubnetResponse[];
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
     * name of the network switch to be used for VMs
     */
    readonly vmSwitchName?: string;
}
/**
 * The logical network resource definition.
 */
export function getLogicalNetworkOutput(args: GetLogicalNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogicalNetworkResult> {
    return pulumi.output(args).apply((a: any) => getLogicalNetwork(a, opts))
}

export interface GetLogicalNetworkOutputArgs {
    /**
     * Name of the logical network
     */
    logicalNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}