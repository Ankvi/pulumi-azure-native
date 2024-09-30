import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Spring Cloud Gateway route configs.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview, 2024-05-01-preview.
 */
export function getGatewayRouteConfig(args: GetGatewayRouteConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayRouteConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getGatewayRouteConfig", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
        "routeConfigName": args.routeConfigName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGatewayRouteConfigArgs {
    /**
     * The name of Spring Cloud Gateway.
     */
    gatewayName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Spring Cloud Gateway route config.
     */
    routeConfigName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Spring Cloud Gateway route config resource
 */
export interface GetGatewayRouteConfigResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * API route config of the Spring Cloud Gateway
     */
    readonly properties: types.outputs.GatewayRouteConfigPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the Spring Cloud Gateway route configs.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview, 2024-05-01-preview.
 */
export function getGatewayRouteConfigOutput(args: GetGatewayRouteConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayRouteConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appplatform:getGatewayRouteConfig", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
        "routeConfigName": args.routeConfigName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGatewayRouteConfigOutputArgs {
    /**
     * The name of Spring Cloud Gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Spring Cloud Gateway route config.
     */
    routeConfigName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}