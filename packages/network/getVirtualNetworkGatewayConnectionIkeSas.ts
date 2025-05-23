import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists IKE Security Associations for the virtual network gateway connection in the specified resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualNetworkGatewayConnectionIkeSasOutput(args: GetVirtualNetworkGatewayConnectionIkeSasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualNetworkGatewayConnectionIkeSasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVirtualNetworkGatewayConnectionIkeSas", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayConnectionName": args.virtualNetworkGatewayConnectionName,
    }, opts);
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