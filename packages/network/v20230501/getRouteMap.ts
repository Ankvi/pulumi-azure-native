import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a RouteMap.
 */
export function getRouteMap(args: GetRouteMapArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteMapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230501:getRouteMap", {
        "resourceGroupName": args.resourceGroupName,
        "routeMapName": args.routeMapName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetRouteMapArgs {
    /**
     * The resource group name of the RouteMap's resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the RouteMap.
     */
    routeMapName: string;
    /**
     * The name of the VirtualHub containing the RouteMap.
     */
    virtualHubName: string;
}

/**
 * The RouteMap child resource of a Virtual hub.
 */
export interface GetRouteMapResult {
    /**
     * List of connections which have this RoutMap associated for inbound traffic.
     */
    readonly associatedInboundConnections?: string[];
    /**
     * List of connections which have this RoutMap associated for outbound traffic.
     */
    readonly associatedOutboundConnections?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the RouteMap resource.
     */
    readonly provisioningState: string;
    /**
     * List of RouteMap rules to be applied.
     */
    readonly rules?: types.outputs.RouteMapRuleResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the details of a RouteMap.
 */
export function getRouteMapOutput(args: GetRouteMapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouteMapResult> {
    return pulumi.output(args).apply((a: any) => getRouteMap(a, opts))
}

export interface GetRouteMapOutputArgs {
    /**
     * The resource group name of the RouteMap's resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the RouteMap.
     */
    routeMapName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub containing the RouteMap.
     */
    virtualHubName: pulumi.Input<string>;
}
