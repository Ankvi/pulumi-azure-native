import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getP2sVpnGatewayP2sVpnConnectionHealthDetailed(args: GetP2sVpnGatewayP2sVpnConnectionHealthDetailedArgs, opts?: pulumi.InvokeOptions): Promise<GetP2sVpnGatewayP2sVpnConnectionHealthDetailedResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getP2sVpnGatewayP2sVpnConnectionHealthDetailed", {
        "gatewayName": args.gatewayName,
        "outputBlobSasUrl": args.outputBlobSasUrl,
        "resourceGroupName": args.resourceGroupName,
        "vpnUserNamesFilter": args.vpnUserNamesFilter,
    }, opts);
}

export interface GetP2sVpnGatewayP2sVpnConnectionHealthDetailedArgs {
    /**
     * The name of the P2SVpnGateway.
     */
    gatewayName: string;
    /**
     * The sas-url to download the P2S Vpn connection health detail.
     */
    outputBlobSasUrl?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The list of p2s vpn user names whose p2s vpn connection detailed health to retrieve for.
     */
    vpnUserNamesFilter?: string[];
}

/**
 * P2S Vpn connection detailed health written to sas url.
 */
export interface GetP2sVpnGatewayP2sVpnConnectionHealthDetailedResult {
    /**
     * Returned sas url of the blob to which the p2s vpn connection detailed health will be written.
     */
    readonly sasUrl?: string;
}
/**
 * Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getP2sVpnGatewayP2sVpnConnectionHealthDetailedOutput(args: GetP2sVpnGatewayP2sVpnConnectionHealthDetailedOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetP2sVpnGatewayP2sVpnConnectionHealthDetailedResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getP2sVpnGatewayP2sVpnConnectionHealthDetailed", {
        "gatewayName": args.gatewayName,
        "outputBlobSasUrl": args.outputBlobSasUrl,
        "resourceGroupName": args.resourceGroupName,
        "vpnUserNamesFilter": args.vpnUserNamesFilter,
    }, opts);
}

export interface GetP2sVpnGatewayP2sVpnConnectionHealthDetailedOutputArgs {
    /**
     * The name of the P2SVpnGateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The sas-url to download the P2S Vpn connection health detail.
     */
    outputBlobSasUrl?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The list of p2s vpn user names whose p2s vpn connection detailed health to retrieve for.
     */
    vpnUserNamesFilter?: pulumi.Input<pulumi.Input<string>[]>;
}