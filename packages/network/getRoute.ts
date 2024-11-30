import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified route from a route table.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2019-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getRoute(args: GetRouteArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getRoute", {
        "resourceGroupName": args.resourceGroupName,
        "routeName": args.routeName,
        "routeTableName": args.routeTableName,
    }, opts);
}

export interface GetRouteArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the route.
     */
    routeName: string;
    /**
     * The name of the route table.
     */
    routeTableName: string;
}

/**
 * Route resource.
 */
export interface GetRouteResult {
    /**
     * The destination CIDR to which the route applies.
     */
    readonly addressPrefix?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
     */
    readonly hasBgpOverride: boolean;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    readonly nextHopIpAddress?: string;
    /**
     * The type of Azure hop the packet should be sent to.
     */
    readonly nextHopType: string;
    /**
     * The provisioning state of the route resource.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource.
     */
    readonly type?: string;
}
/**
 * Gets the specified route from a route table.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2019-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getRouteOutput(args: GetRouteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getRoute", {
        "resourceGroupName": args.resourceGroupName,
        "routeName": args.routeName,
        "routeTableName": args.routeTableName,
    }, opts);
}

export interface GetRouteOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route.
     */
    routeName: pulumi.Input<string>;
    /**
     * The name of the route table.
     */
    routeTableName: pulumi.Input<string>;
}