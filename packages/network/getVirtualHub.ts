import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a VirtualHub.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2018-07-01, 2020-04-01, 2020-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export function getVirtualHub(args: GetVirtualHubArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getVirtualHub", {
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetVirtualHubArgs {
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: string;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: string;
}

/**
 * VirtualHub Resource.
 */
export interface GetVirtualHubResult {
    /**
     * Address-prefix for this VirtualHub.
     */
    readonly addressPrefix?: string;
    /**
     * Flag to control transit for VirtualRouter hub.
     */
    readonly allowBranchToBranchTraffic?: boolean;
    /**
     * The azureFirewall associated with this VirtualHub.
     */
    readonly azureFirewall?: types.outputs.SubResourceResponse;
    /**
     * List of references to Bgp Connections.
     */
    readonly bgpConnections: types.outputs.SubResourceResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The expressRouteGateway associated with this VirtualHub.
     */
    readonly expressRouteGateway?: types.outputs.SubResourceResponse;
    /**
     * The hubRoutingPreference of this VirtualHub.
     */
    readonly hubRoutingPreference?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * List of references to IpConfigurations.
     */
    readonly ipConfigurations: types.outputs.SubResourceResponse[];
    /**
     * Kind of service virtual hub. This is metadata used for the Azure portal experience for Route Server.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The P2SVpnGateway associated with this VirtualHub.
     */
    readonly p2SVpnGateway?: types.outputs.SubResourceResponse;
    /**
     * The preferred gateway to route on-prem traffic
     */
    readonly preferredRoutingGateway?: string;
    /**
     * The provisioning state of the virtual hub resource.
     */
    readonly provisioningState: string;
    /**
     * List of references to RouteMaps.
     */
    readonly routeMaps: types.outputs.SubResourceResponse[];
    /**
     * The routeTable associated with this virtual hub.
     */
    readonly routeTable?: types.outputs.VirtualHubRouteTableResponse;
    /**
     * The routing state.
     */
    readonly routingState: string;
    /**
     * The securityPartnerProvider associated with this VirtualHub.
     */
    readonly securityPartnerProvider?: types.outputs.SubResourceResponse;
    /**
     * The Security Provider name.
     */
    readonly securityProviderName?: string;
    /**
     * The sku of this VirtualHub.
     */
    readonly sku?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * List of all virtual hub route table v2s associated with this VirtualHub.
     */
    readonly virtualHubRouteTableV2s?: types.outputs.VirtualHubRouteTableV2Response[];
    /**
     * VirtualRouter ASN.
     */
    readonly virtualRouterAsn?: number;
    /**
     * The VirtualHub Router autoscale configuration.
     */
    readonly virtualRouterAutoScaleConfiguration?: types.outputs.VirtualRouterAutoScaleConfigurationResponse;
    /**
     * VirtualRouter IPs.
     */
    readonly virtualRouterIps?: string[];
    /**
     * The VirtualWAN to which the VirtualHub belongs.
     */
    readonly virtualWan?: types.outputs.SubResourceResponse;
    /**
     * The VpnGateway associated with this VirtualHub.
     */
    readonly vpnGateway?: types.outputs.SubResourceResponse;
}
/**
 * Retrieves the details of a VirtualHub.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2018-07-01, 2020-04-01, 2020-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export function getVirtualHubOutput(args: GetVirtualHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualHubResult> {
    return pulumi.output(args).apply((a: any) => getVirtualHub(a, opts))
}

export interface GetVirtualHubOutputArgs {
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}