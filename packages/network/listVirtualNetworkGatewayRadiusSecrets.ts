import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all Radius servers with respective radius secrets from virtual network gateway VpnClientConfiguration.
 *
 * Uses Azure REST API version 2024-10-01.
 */
export function listVirtualNetworkGatewayRadiusSecrets(args: ListVirtualNetworkGatewayRadiusSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListVirtualNetworkGatewayRadiusSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listVirtualNetworkGatewayRadiusSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface ListVirtualNetworkGatewayRadiusSecretsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: string;
}

/**
 * List of Radius servers with respective radius secrets.
 */
export interface ListVirtualNetworkGatewayRadiusSecretsResult {
    /**
     * URL to get the next set of operation list results if there are any.
     */
    readonly nextLink?: string;
    /**
     * List of Radius servers with respective radius secrets.
     */
    readonly value?: types.outputs.RadiusAuthServerResponse[];
}
/**
 * List all Radius servers with respective radius secrets from virtual network gateway VpnClientConfiguration.
 *
 * Uses Azure REST API version 2024-10-01.
 */
export function listVirtualNetworkGatewayRadiusSecretsOutput(args: ListVirtualNetworkGatewayRadiusSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListVirtualNetworkGatewayRadiusSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listVirtualNetworkGatewayRadiusSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface ListVirtualNetworkGatewayRadiusSecretsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}