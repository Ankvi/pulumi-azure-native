import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists IKE Security Associations for Vpn Site Link Connection in the specified resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getVpnLinkConnectionIkeSas(args: GetVpnLinkConnectionIkeSasArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnLinkConnectionIkeSasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVpnLinkConnectionIkeSas", {
        "connectionName": args.connectionName,
        "gatewayName": args.gatewayName,
        "linkConnectionName": args.linkConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVpnLinkConnectionIkeSasArgs {
    /**
     * The name of the vpn connection.
     */
    connectionName: string;
    /**
     * The name of the gateway.
     */
    gatewayName: string;
    /**
     * The name of the vpn link connection.
     */
    linkConnectionName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

export interface GetVpnLinkConnectionIkeSasResult {
    readonly value?: string;
}
/**
 * Lists IKE Security Associations for Vpn Site Link Connection in the specified resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export function getVpnLinkConnectionIkeSasOutput(args: GetVpnLinkConnectionIkeSasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnLinkConnectionIkeSasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getVpnLinkConnectionIkeSas", {
        "connectionName": args.connectionName,
        "gatewayName": args.gatewayName,
        "linkConnectionName": args.linkConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVpnLinkConnectionIkeSasOutputArgs {
    /**
     * The name of the vpn connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the vpn link connection.
     */
    linkConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}