import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Fetches the details of a ExpressRoute gateway in a resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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