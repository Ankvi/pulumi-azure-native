import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The Get VpnclientIpsecParameters operation retrieves information about the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkGatewayVpnclientIpsecParameters(args: GetVirtualNetworkGatewayVpnclientIpsecParametersArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayVpnclientIpsecParametersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayVpnclientIpsecParameters", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayVpnclientIpsecParametersArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The virtual network gateway name.
     */
    virtualNetworkGatewayName: string;
}

/**
 * An IPSec parameters for a virtual network gateway P2S connection.
 */
export interface GetVirtualNetworkGatewayVpnclientIpsecParametersResult {
    /**
     * The DH Group used in IKE Phase 1 for initial SA.
     */
    readonly dhGroup: string;
    /**
     * The IKE encryption algorithm (IKE phase 2).
     */
    readonly ikeEncryption: string;
    /**
     * The IKE integrity algorithm (IKE phase 2).
     */
    readonly ikeIntegrity: string;
    /**
     * The IPSec encryption algorithm (IKE phase 1).
     */
    readonly ipsecEncryption: string;
    /**
     * The IPSec integrity algorithm (IKE phase 1).
     */
    readonly ipsecIntegrity: string;
    /**
     * The Pfs Group used in IKE Phase 2 for new child SA.
     */
    readonly pfsGroup: string;
    /**
     * The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for P2S client..
     */
    readonly saDataSizeKilobytes: number;
    /**
     * The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for P2S client.
     */
    readonly saLifeTimeSeconds: number;
}
/**
 * The Get VpnclientIpsecParameters operation retrieves information about the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkGatewayVpnclientIpsecParametersOutput(args: GetVirtualNetworkGatewayVpnclientIpsecParametersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkGatewayVpnclientIpsecParametersResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetworkGatewayVpnclientIpsecParameters", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayVpnclientIpsecParametersOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The virtual network gateway name.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}