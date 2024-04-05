import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.
 */
export function getP2sVpnGatewayP2sVpnConnectionHealthDetailed(args: GetP2sVpnGatewayP2sVpnConnectionHealthDetailedArgs, opts?: pulumi.InvokeOptions): Promise<GetP2sVpnGatewayP2sVpnConnectionHealthDetailedResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230901:getP2sVpnGatewayP2sVpnConnectionHealthDetailed", {
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
 */
export function getP2sVpnGatewayP2sVpnConnectionHealthDetailedOutput(args: GetP2sVpnGatewayP2sVpnConnectionHealthDetailedOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetP2sVpnGatewayP2sVpnConnectionHealthDetailedResult> {
    return pulumi.output(args).apply((a: any) => getP2sVpnGatewayP2sVpnConnectionHealthDetailed(a, opts))
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