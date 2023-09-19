import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified route filter.
 */
export function getRouteFilter(args: GetRouteFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteFilterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230201:getRouteFilter", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "routeFilterName": args.routeFilterName,
    }, opts);
}

export interface GetRouteFilterArgs {
    /**
     * Expands referenced express route bgp peering resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the route filter.
     */
    routeFilterName: string;
}

/**
 * Route Filter Resource.
 */
export interface GetRouteFilterResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * A collection of references to express route circuit ipv6 peerings.
     */
    readonly ipv6Peerings: types.outputs.ExpressRouteCircuitPeeringResponse[];
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * A collection of references to express route circuit peerings.
     */
    readonly peerings: types.outputs.ExpressRouteCircuitPeeringResponse[];
    /**
     * The provisioning state of the route filter resource.
     */
    readonly provisioningState: string;
    /**
     * Collection of RouteFilterRules contained within a route filter.
     */
    readonly rules?: types.outputs.RouteFilterRuleResponse[];
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
 * Gets the specified route filter.
 */
export function getRouteFilterOutput(args: GetRouteFilterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouteFilterResult> {
    return pulumi.output(args).apply((a: any) => getRouteFilter(a, opts))
}

export interface GetRouteFilterOutputArgs {
    /**
     * Expands referenced express route bgp peering resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route filter.
     */
    routeFilterName: pulumi.Input<string>;
}
