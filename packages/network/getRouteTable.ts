import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified route table.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getRouteTable(args: GetRouteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteTableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getRouteTable", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "routeTableName": args.routeTableName,
    }, opts);
}

export interface GetRouteTableArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the route table.
     */
    routeTableName: string;
}

/**
 * Route table resource.
 */
export interface GetRouteTableResult {
    /**
     * Whether to disable the routes learned by BGP on that route table. True means disable.
     */
    readonly disableBgpRoutePropagation?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the route table resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the route table.
     */
    readonly resourceGuid: string;
    /**
     * Collection of routes contained within a route table.
     */
    readonly routes?: types.outputs.RouteResponse[];
    /**
     * A collection of references to subnets.
     */
    readonly subnets: types.outputs.SubnetResponse[];
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
 * Gets the specified route table.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getRouteTableOutput(args: GetRouteTableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRouteTableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getRouteTable", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "routeTableName": args.routeTableName,
    }, opts);
}

export interface GetRouteTableOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route table.
     */
    routeTableName: pulumi.Input<string>;
}