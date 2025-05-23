import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the value of the shared key of VpnLink connection specified.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listVpnLinkConnectionDefaultSharedKey(args: ListVpnLinkConnectionDefaultSharedKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListVpnLinkConnectionDefaultSharedKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:listVpnLinkConnectionDefaultSharedKey", {
        "connectionName": args.connectionName,
        "gatewayName": args.gatewayName,
        "linkConnectionName": args.linkConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListVpnLinkConnectionDefaultSharedKeyArgs {
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

/**
 * SharedKey Resource .
 */
export interface ListVpnLinkConnectionDefaultSharedKeyResult {
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Properties of the shared key.
     */
    readonly properties: types.outputs.SharedKeyPropertiesResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the value of the shared key of VpnLink connection specified.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listVpnLinkConnectionDefaultSharedKeyOutput(args: ListVpnLinkConnectionDefaultSharedKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListVpnLinkConnectionDefaultSharedKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:listVpnLinkConnectionDefaultSharedKey", {
        "connectionName": args.connectionName,
        "gatewayName": args.gatewayName,
        "linkConnectionName": args.linkConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListVpnLinkConnectionDefaultSharedKeyOutputArgs {
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