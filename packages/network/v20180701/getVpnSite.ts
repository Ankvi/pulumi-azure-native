import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves the details of a VPN site.
 */
export function getVpnSite(args: GetVpnSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnSiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20180701:getVpnSite", {
        "resourceGroupName": args.resourceGroupName,
        "vpnSiteName": args.vpnSiteName,
    }, opts);
}

export interface GetVpnSiteArgs {
    /**
     * The resource group name of the VpnSite.
     */
    resourceGroupName: string;
    /**
     * The name of the VpnSite being retrieved.
     */
    vpnSiteName: string;
}

/**
 * VpnSite Resource.
 */
export interface GetVpnSiteResult {
    /**
     * The AddressSpace that contains an array of IP address ranges.
     */
    readonly addressSpace?: types.outputs.network.v20180701.AddressSpaceResponse;
    /**
     * The set of bgp properties.
     */
    readonly bgpProperties?: types.outputs.network.v20180701.BgpSettingsResponse;
    /**
     * The device properties
     */
    readonly deviceProperties?: types.outputs.network.v20180701.DevicePropertiesResponse;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The ip-address for the vpn-site.
     */
    readonly ipAddress?: string;
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
     * The key for vpn-site that can be used for connections.
     */
    readonly siteKey?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The VirtualWAN to which the vpnSite belongs
     */
    readonly virtualWAN?: types.outputs.network.v20180701.SubResourceResponse;
}
/**
 * Retrieves the details of a VPN site.
 */
export function getVpnSiteOutput(args: GetVpnSiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnSiteResult> {
    return pulumi.output(args).apply((a: any) => getVpnSite(a, opts))
}

export interface GetVpnSiteOutputArgs {
    /**
     * The resource group name of the VpnSite.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VpnSite being retrieved.
     */
    vpnSiteName: pulumi.Input<string>;
}
