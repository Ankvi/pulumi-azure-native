import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Spring Cloud Gateway route configs.
 */
export function getGatewayRouteConfig(args: GetGatewayRouteConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayRouteConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230501preview:getGatewayRouteConfig", {
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
 */
export function getGatewayRouteConfigOutput(args: GetGatewayRouteConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayRouteConfigResult> {
    return pulumi.output(args).apply((a: any) => getGatewayRouteConfig(a, opts))
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
