import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the requested ExpressRoutePort resource.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getExpressRoutePort(args: GetExpressRoutePortArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRoutePortResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getExpressRoutePort", {
        "expressRoutePortName": args.expressRoutePortName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRoutePortArgs {
    /**
     * The name of ExpressRoutePort.
     */
    expressRoutePortName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * ExpressRoutePort resource definition.
 */
export interface GetExpressRoutePortResult {
    /**
     * Date of the physical port allocation to be used in Letter of Authorization.
     */
    readonly allocationDate: string;
    /**
     * Bandwidth of procured ports in Gbps.
     */
    readonly bandwidthInGbps?: number;
    /**
     * The billing type of the ExpressRoutePort resource.
     */
    readonly billingType?: string;
    /**
     * Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
     */
    readonly circuits: types.outputs.SubResourceResponse[];
    /**
     * Encapsulation method on physical ports.
     */
    readonly encapsulation?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Ether type of the physical port.
     */
    readonly etherType: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The identity of ExpressRoutePort, if configured.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The set of physical links of the ExpressRoutePort resource.
     */
    readonly links?: types.outputs.ExpressRouteLinkResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Maximum transmission unit of the physical port pair(s).
     */
    readonly mtu: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name of the peering location that the ExpressRoutePort is mapped to physically.
     */
    readonly peeringLocation?: string;
    /**
     * Aggregate Gbps of associated circuit bandwidths.
     */
    readonly provisionedBandwidthInGbps: number;
    /**
     * The provisioning state of the express route port resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the express route port resource.
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
 * Retrieves the requested ExpressRoutePort resource.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getExpressRoutePortOutput(args: GetExpressRoutePortOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExpressRoutePortResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getExpressRoutePort", {
        "expressRoutePortName": args.expressRoutePortName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRoutePortOutputArgs {
    /**
     * The name of ExpressRoutePort.
     */
    expressRoutePortName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}