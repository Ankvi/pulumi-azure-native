import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Fetches the details of a ExpressRoute gateway in a resource group.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2021-03-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getExpressRouteGateway(args: GetExpressRouteGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getExpressRouteGateway", {
        "expressRouteGatewayName": args.expressRouteGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteGatewayArgs {
    /**
     * The name of the ExpressRoute gateway.
     */
    expressRouteGatewayName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * ExpressRoute gateway resource.
 */
export interface GetExpressRouteGatewayResult {
    /**
     * Configures this gateway to accept traffic from non Virtual WAN networks.
     */
    readonly allowNonVirtualWanTraffic?: boolean;
    /**
     * Configuration for auto scaling.
     */
    readonly autoScaleConfiguration?: types.outputs.ExpressRouteGatewayPropertiesResponseAutoScaleConfiguration;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * List of ExpressRoute connections to the ExpressRoute gateway.
     */
    readonly expressRouteConnections?: types.outputs.ExpressRouteConnectionResponse[];
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
     * The provisioning state of the express route gateway resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The Virtual Hub where the ExpressRoute gateway is or will be deployed.
     */
    readonly virtualHub: types.outputs.VirtualHubIdResponse;
}
/**
 * Fetches the details of a ExpressRoute gateway in a resource group.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2021-03-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getExpressRouteGatewayOutput(args: GetExpressRouteGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExpressRouteGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getExpressRouteGateway", {
        "expressRouteGatewayName": args.expressRouteGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteGatewayOutputArgs {
    /**
     * The name of the ExpressRoute gateway.
     */
    expressRouteGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}