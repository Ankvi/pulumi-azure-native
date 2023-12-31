import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a VirtualWAN.
 */
export function getVirtualWAN(args: GetVirtualWANArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualWANResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20180701:getVirtualWAN", {
        "resourceGroupName": args.resourceGroupName,
        "virtualWANName": args.virtualWANName,
    }, opts);
}

export interface GetVirtualWANArgs {
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
export interface GetVirtualWANResult {
    /**
     * Vpn encryption to be disabled or not.
     */
    readonly disableVpnEncryption?: boolean;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
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
     * The provisioning state of the resource.
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
    readonly vpnSites: types.outputs.SubResourceResponse[];
}
/**
 * Retrieves the details of a VirtualWAN.
 */
export function getVirtualWANOutput(args: GetVirtualWANOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualWANResult> {
    return pulumi.output(args).apply((a: any) => getVirtualWAN(a, opts))
}

export interface GetVirtualWANOutputArgs {
    /**
     * The resource group name of the VirtualWan.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualWAN being retrieved.
     */
    virtualWANName: pulumi.Input<string>;
}
