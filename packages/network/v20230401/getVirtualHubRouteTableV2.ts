import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a VirtualHubRouteTableV2.
 */
export function getVirtualHubRouteTableV2(args: GetVirtualHubRouteTableV2Args, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubRouteTableV2Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getVirtualHubRouteTableV2", {
        "resourceGroupName": args.resourceGroupName,
        "routeTableName": args.routeTableName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetVirtualHubRouteTableV2Args {
    /**
     * The resource group name of the VirtualHubRouteTableV2.
     */
    resourceGroupName: string;
    /**
     * The name of the VirtualHubRouteTableV2.
     */
    routeTableName: string;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: string;
}

/**
 * VirtualHubRouteTableV2 Resource.
 */
export interface GetVirtualHubRouteTableV2Result {
    /**
     * List of all connections attached to this route table v2.
     */
    readonly attachedConnections?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the virtual hub route table v2 resource.
     */
    readonly provisioningState: string;
    /**
     * List of all routes.
     */
    readonly routes?: types.outputs.VirtualHubRouteV2Response[];
}
/**
 * Retrieves the details of a VirtualHubRouteTableV2.
 */
export function getVirtualHubRouteTableV2Output(args: GetVirtualHubRouteTableV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualHubRouteTableV2Result> {
    return pulumi.output(args).apply((a: any) => getVirtualHubRouteTableV2(a, opts))
}

export interface GetVirtualHubRouteTableV2OutputArgs {
    /**
     * The resource group name of the VirtualHubRouteTableV2.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHubRouteTableV2.
     */
    routeTableName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}
