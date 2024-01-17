import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Spring Cloud Gateway and its properties.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01.
 */
export function getGateway(args: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getGateway", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGatewayArgs {
    /**
     * The name of Spring Cloud Gateway.
     */
    gatewayName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Spring Cloud Gateway resource
 */
export interface GetGatewayResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Spring Cloud Gateway properties payload
     */
    readonly properties: types.outputs.GatewayPropertiesResponse;
    /**
     * Sku of the Spring Cloud Gateway resource
     */
    readonly sku?: types.outputs.SkuResponse;
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
 * Get the Spring Cloud Gateway and its properties.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01.
 */
export function getGatewayOutput(args: GetGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayResult> {
    return pulumi.output(args).apply((a: any) => getGateway(a, opts))
}

export interface GetGatewayOutputArgs {
    /**
     * The name of Spring Cloud Gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
