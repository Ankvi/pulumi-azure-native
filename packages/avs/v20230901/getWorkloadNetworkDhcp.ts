import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadNetworkDhcp
 */
export function getWorkloadNetworkDhcp(args: GetWorkloadNetworkDhcpArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkDhcpResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getWorkloadNetworkDhcp", {
        "dhcpId": args.dhcpId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkDhcpArgs {
    /**
     * The ID of the DHCP configuration
     */
    dhcpId: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * NSX DHCP
 */
export interface GetWorkloadNetworkDhcpResult {
    /**
     * Type of DHCP: SERVER or RELAY.
     */
    readonly dhcpType: string;
    /**
     * Display name of the DHCP entity.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * NSX revision number.
     */
    readonly revision?: number;
    /**
     * NSX Segments consuming DHCP.
     */
    readonly segments: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a WorkloadNetworkDhcp
 */
export function getWorkloadNetworkDhcpOutput(args: GetWorkloadNetworkDhcpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkDhcpResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkDhcp(a, opts))
}

export interface GetWorkloadNetworkDhcpOutputArgs {
    /**
     * The ID of the DHCP configuration
     */
    dhcpId: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}