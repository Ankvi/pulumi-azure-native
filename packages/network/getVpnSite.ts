import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a VPN site.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVpnSite(args: GetVpnSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVpnSite", {
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
    readonly addressSpace?: types.outputs.AddressSpaceResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The set of bgp properties.
     */
    readonly bgpProperties?: types.outputs.BgpSettingsResponse;
    /**
     * The device properties.
     */
    readonly deviceProperties?: types.outputs.DevicePropertiesResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
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
     * IsSecuritySite flag.
     */
    readonly isSecuritySite?: boolean;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Office365 Policy.
     */
    readonly o365Policy?: types.outputs.O365PolicyPropertiesResponse;
    /**
     * The provisioning state of the VPN site resource.
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
     * The VirtualWAN to which the vpnSite belongs.
     */
    readonly virtualWan?: types.outputs.SubResourceResponse;
    /**
     * List of all vpn site links.
     */
    readonly vpnSiteLinks?: types.outputs.VpnSiteLinkResponse[];
}
/**
 * Retrieves the details of a VPN site.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVpnSiteOutput(args: GetVpnSiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVpnSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVpnSite", {
        "resourceGroupName": args.resourceGroupName,
        "vpnSiteName": args.vpnSiteName,
    }, opts);
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