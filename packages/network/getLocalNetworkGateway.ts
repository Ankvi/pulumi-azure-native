import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified local network gateway in a resource group.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getLocalNetworkGateway(args: GetLocalNetworkGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalNetworkGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getLocalNetworkGateway", {
        "localNetworkGatewayName": args.localNetworkGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalNetworkGatewayArgs {
    /**
     * The name of the local network gateway.
     */
    localNetworkGatewayName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A common class for general resource information.
 */
export interface GetLocalNetworkGatewayResult {
    /**
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: types.outputs.BgpSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * FQDN of local network gateway.
     */
    readonly fqdn?: string;
    /**
     * IP address of local network gateway.
     */
    readonly gatewayIpAddress?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Local network site address space.
     */
    readonly localNetworkAddressSpace?: types.outputs.AddressSpaceResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the local network gateway resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the local network gateway resource.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified local network gateway in a resource group.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getLocalNetworkGatewayOutput(args: GetLocalNetworkGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLocalNetworkGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getLocalNetworkGateway", {
        "localNetworkGatewayName": args.localNetworkGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLocalNetworkGatewayOutputArgs {
    /**
     * The name of the local network gateway.
     */
    localNetworkGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}