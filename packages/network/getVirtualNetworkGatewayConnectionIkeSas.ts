import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists IKE Security Associations for the virtual network gateway connection in the specified resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export function getVirtualNetworkGatewayConnectionIkeSas(args: GetVirtualNetworkGatewayConnectionIkeSasArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayConnectionIkeSasResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualNetworkGatewayConnectionIkeSas", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayConnectionName": args.virtualNetworkGatewayConnectionName,
    }, opts);
}

export interface GetVirtualNetworkGatewayConnectionIkeSasArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network gateway Connection.
     */
    virtualNetworkGatewayConnectionName: string;
}

export interface GetVirtualNetworkGatewayConnectionIkeSasResult {
    readonly value?: string;
}
/**
 * Lists IKE Security Associations for the virtual network gateway connection in the specified resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export function getVirtualNetworkGatewayConnectionIkeSasOutput(args: GetVirtualNetworkGatewayConnectionIkeSasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayConnectionIkeSasResult> {
    return pulumi.output(args).apply((a: any) => getVirtualNetworkGatewayConnectionIkeSas(a, opts))
}

export interface GetVirtualNetworkGatewayConnectionIkeSasOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway Connection.
     */
    virtualNetworkGatewayConnectionName: pulumi.Input<string>;
}