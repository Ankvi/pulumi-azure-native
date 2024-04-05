import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a VirtualWAN.
 */
export function getVirtualWan(args: GetVirtualWanArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualWanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getVirtualWan", {
        "resourceGroupName": args.resourceGroupName,
        "virtualWANName": args.virtualWANName,
    }, opts);
}

export interface GetVirtualWanArgs {
    /**
     * The resource group name of the VirtualWan.
     */
    resourceGroupName: string;
    /**
     * The name of the VirtualWAN being retrieved.
     */
    virtualWANName: string;
}

/**
 * VirtualWAN Resource.
 */
export interface GetVirtualWanResult {
    /**
     * True if branch to branch traffic is allowed.
     */
    readonly allowBranchToBranchTraffic?: boolean;
    /**
     * True if Vnet to Vnet traffic is allowed.
     */
    readonly allowVnetToVnetTraffic?: boolean;
    /**
     * Vpn encryption to be disabled or not.
     */
    readonly disableVpnEncryption?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The office local breakout category.
     */
    readonly office365LocalBreakoutCategory: string;
    /**
     * The provisioning state of the virtual WAN resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * List of VirtualHubs in the VirtualWAN.
     */
    readonly virtualHubs: types.outputs.SubResourceResponse[];
    /**
     * List of VpnSites in the VirtualWAN.
     */
    readonly vpnSites: types.outputs.SubResourceResponse[];
}
/**
 * Retrieves the details of a VirtualWAN.
 */
export function getVirtualWanOutput(args: GetVirtualWanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualWanResult> {
    return pulumi.output(args).apply((a: any) => getVirtualWan(a, opts))
}

export interface GetVirtualWanOutputArgs {
    /**
     * The resource group name of the VirtualWan.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualWAN being retrieved.
     */
    virtualWANName: pulumi.Input<string>;
}