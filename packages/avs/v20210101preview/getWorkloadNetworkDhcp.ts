import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX DHCP
 */
export function getWorkloadNetworkDhcp(args: GetWorkloadNetworkDhcpArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkDhcpResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20210101preview:getWorkloadNetworkDhcp", {
        "dhcpId": args.dhcpId,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkDhcpArgs {
    /**
     * NSX DHCP identifier. Generally the same as the DHCP display name
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
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * NSX DHCP
 */
export function getWorkloadNetworkDhcpOutput(args: GetWorkloadNetworkDhcpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkDhcpResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkDhcp(a, opts))
}

export interface GetWorkloadNetworkDhcpOutputArgs {
    /**
     * NSX DHCP identifier. Generally the same as the DHCP display name
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
